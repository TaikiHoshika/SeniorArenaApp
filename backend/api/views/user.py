from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import hashlib
import logging

from .auth import authUser
from ..models import Users, Shops

logger = logging.getLogger(__name__)

@csrf_exempt
def createUser(request):
    if request.method == "POST":
        params = json.loads(request.body)

        #todo
        #バリデーションの実装

        try:
            user = Users(
                name = params["name"],
                age = params["age"],
                email = params["email"],
                shop = Shops.objects.get(id=params["shopId"]),
                password = hashlib.sha256(params["password"].encode()).hexdigest()
            )
            user.save()

            return JsonResponse({"isCreate": "True"}, status=200)

        except Exception as e:
            logger.debug(e)
            return JsonResponse({"isCreate": "False"}, status=200)

    return HttpResponse("", status=200)


@csrf_exempt
def indexUser(request):
    if request.method == "GET":
        params = json.loads(request.body)
        #if authUser(params["token"]):
        user = Users.objects.get(id=params["userId"])
        balance = Balances.object.get(user=user)
        return JsonResponse(
            {
                "userId": user.id,
                "username": user.name,
                "email": user.email,
                "balance": balance.balance
            },
            status=200
        )
        #else:
        #    return JsonResponse({"isAuthenticated": False}, status=200)
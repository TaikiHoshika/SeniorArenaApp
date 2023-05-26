from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import hashlib
import logging

from ..models import Users

logger = logging.getLogger(__name__)

@csrf_exempt
def login(request):    
    if request.method == "POST":
        params = json.loads(request.body)
        try:
            user = Users.objects.get(email=params["email"])
            if(user.email == params["email"]) and (user.password == hashlib.sha256(params["password"].encode()).hexdigest()):
                return JsonResponse({"isAuthenticated": True}, status=200)
            else:
                return JsonResponse({"isAuthenticated": False}, status=200)
        except Exception as e:
            logger.debug(e)
            return JsonResponse({"isAuthenticated": False}, status=200)

    return HttpResponse("", status=200)
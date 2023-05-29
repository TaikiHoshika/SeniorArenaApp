from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import hashlib
import logging
import random
import string

from ..models import Users, Sessions

logger = logging.getLogger(__name__)

@csrf_exempt
def login(request):    
    if request.method == "POST":
        params = json.loads(request.body)
        try:
            user = Users.objects.get(email=params["email"])
            if(user.password == hashlib.sha256(params["password"].encode()).hexdigest()):
                randString = getRandomString(20)
                token = hashlib.sha256(randString.encode()).hexdigest()

                Sessions.objects.update_or_create(
                    user = Users.objects.get(id=user.id),
                    defaults = {
                        "session": token
                    }
                )

                return JsonResponse({"isAuthenticated": True, "token": token}, status=200)
            else:
                return JsonResponse({"isAuthenticated": False}, status=200)
        except Exception as e:
            logger.debug(e)
            return JsonResponse({"isAuthenticated": False}, status=200)

    return HttpResponse("", status=200)

@csrf_exempt
def authToken(request):
    if request.method == "POST":
        params = json.loads(request.body)
        try:
            session = Sessions.objects.get(session=params["token"])
            return JsonResponse({"isAuthenticated": True, "userId": session.user.id}, status=200)

        except Exception as e:
            logger.debug(e)
            return JsonResponse({"isAuthenticated": False}, status=200)

    return HttpResponse("", status=200)

def authUser(token):
    try:
        Sessions.objects.get(session=token)
        return True

    except Exception as e:
        logger.debug(e)
        return False

def getRandomString(length):
    return ''.join(random.choice(string.ascii_letters) for i in range(length))
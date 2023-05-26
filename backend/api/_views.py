from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import hashlib
import logging

from .models import Users, Shops

logger = logging.getLogger(__name__)

def index(request):
    return JsonResponse(
        {"Hello World": True},
        status=200
    )

@csrf_exempt
def login(request):    
    if request.method == "POST":
        params = json.loads(request.body)

        userId = params["userId"]
        password = params["password"]
        if(userId == "root") and (password == "P@ssw0rd"):
            return JsonResponse({"isAuthenticated": True}, status=200)
        else:
            return JsonResponse({"isAuthenticated": False}, status=200)

    return HttpResponse("", status=200)
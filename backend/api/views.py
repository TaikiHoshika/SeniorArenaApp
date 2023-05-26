from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
#from django.shortcuts import redirect

import json

def index(request):
    return JsonResponse(
        {"Hello World": True},
        status=200,
        headers={
            "Access-Control-Allow-Origin": "http://localhost:3030",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, x-access-token, x-user-id,Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
        }
    )

@csrf_exempt
def login(request):    
    if request.method == "POST":
        params = json.loads(request.body)

        userId = params["userId"]
        password = params["password"]
        if(userId == "root") and (password == "P@ssw0rd"):
            return JsonResponse(
                {"isAuthenticated": True},
                status=200,
                headers={
                    "Access-Control-Allow-Origin": "http://localhost:3030",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, x-access-token, x-user-id,Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                }
            )
        else:
            return JsonResponse(
                {"isAuthenticated": False},
                status=401,
                headers={
                    "Access-Control-Allow-Origin": "http://localhost:3030",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, x-access-token, x-user-id,Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                }
            )

    #return redirect("/")
    return HttpResponse("<h1>Hello World</h1>")
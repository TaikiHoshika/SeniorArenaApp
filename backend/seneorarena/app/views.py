from django.shortcuts import render

import json
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import View

@method_decorator(csrf_exempt, name='dispatch')
class LoginAPI(View):
    def post(self, request):
        params = json.loads(request.body)
        username = params['username']
        password = params['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'is_authenticated': True})

        return JsonResponse({'is_authenticated': False}, status=403)
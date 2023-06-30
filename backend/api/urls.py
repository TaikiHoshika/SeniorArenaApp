from django.urls import path
from .views import *

urlpatterns = [
    path('auth/login/', auth.login, name="auth.login"),
    path('auth/token/', auth.authToken, name="auth.authToken"),

    path('user/create/', user.createUser, name="user.create"),
    path('user/index/', user.indexUser, name="user.index"),

    path('qr/scan/', exercise.scanQR, name="qr.scan"),

    path('user/history/', exercise.getHistory, name="user.history"),
]
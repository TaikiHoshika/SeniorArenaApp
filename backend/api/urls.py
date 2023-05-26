from django.urls import path
from .views import *

urlpatterns = [
    path('login/', auth.login, name="auth.login"),

    path('user/create/', user.createUser, name="user.create"),
]
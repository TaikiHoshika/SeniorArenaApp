from django.db import models

class Shops(models.Model):
    class Meta:
        db_table = "shops"
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255, blank=True, null=True, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Users(models.Model):
    class Meta:
        db_table = "users"
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    email = models.CharField(max_length=255, unique=True)
    shop = models.ForeignKey(Shops, to_field="id", on_delete=models.CASCADE)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Balances(models.Model):
    class Meta:
        db_table = "balances"
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Users, to_field="id", on_delete=models.CASCADE)
    balance = models.BigIntegerField(default=0, blank=True, null=True)

class Sessions(models.Model):
    class Meta:
        db_table = "sessions"
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Users, to_field="id", on_delete=models.CASCADE)
    session = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
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
    user = models.ForeignKey(Users, to_field="id", on_delete=models.CASCADE)
    balance = models.BigIntegerField(default=0, blank=True, null=True)

class Sessions(models.Model):
    class Meta:
        db_table = "sessions"
    user = models.ForeignKey(Users, to_field="id", on_delete=models.CASCADE)
    session = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class MachineTypes(models.Model):
    class Meta:
        db_table = "machine_types"
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

class Machines(models.Model):
    class Meta:
        db_table = "machines"
    id = models.AutoField(primary_key=True)
    machine_type = models.ForeignKey(MachineTypes, to_field="id", on_delete=models.CASCADE)

class UsingMachines(models.Model):
    class Meta:
        db_table = "using_machines"
    machine = models.ForeignKey(Machines, to_field="id", on_delete=models.CASCADE)
    user = models.ForeignKey(Users, to_field="id", on_delete=models.CASCADE)
    started_at = models.DateTimeField(auto_now_add=True)

class ExerciseHistory(models.Model):
    class Meta:
        db_table = "exercise_history"
    user = models.ForeignKey(Users, to_field="id", on_delete=models.CASCADE)
    machine_type = models.ForeignKey(MachineTypes, to_field="id", on_delete=models.CASCADE)
    time = models.CharField(max_length=255, blank=False, null=False)
    point = models.IntegerField(blank=False, null=False, default=0)
    exercised_at = models.DateTimeField(auto_now_add=True)
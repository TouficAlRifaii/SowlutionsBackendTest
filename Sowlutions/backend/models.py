from django.db import models
from django.contrib.auth.models import AbstractUser


class User(models.Model):
    nickName = models.CharField(max_length=50, unique=True)
    REQUIRED_FIELDS = ('nickName',)


class Room(models.Model):
    title = models.CharField(max_length=50)
    users = models.ManyToManyField("User" , blank=True)


class Message(models.Model):
    sender_id = models.ForeignKey("User", on_delete=models.CASCADE)
    room_id = models.ForeignKey("Room", on_delete=models.CASCADE)
    content = models.CharField(max_length=255)

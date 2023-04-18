from rest_framework import serializers
from .models import User, Room , Message

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields  = ['id' , 'nickName']

class RoomSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=True, read_only= True)
    class Meta: 
        model = Room
        fields = ['id' , 'title','users']

class MessageSerializer(serializers.ModelSerializer):
    class Meta: 
        model= Message
        fields = ['id' , 'content' , 'sender_id' , 'room_id']

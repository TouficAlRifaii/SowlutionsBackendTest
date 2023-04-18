from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User, Room, Message
from .serializers import UserSerializer, RoomSerializer, MessageSerializer
# Create your views here.


class Login(APIView):
    def post(self, request):
        user = User.objects.filter(nickName=request.data['nickName']).first()
        if user:
            return Response({
                "message": "success",
                "data": UserSerializer(user).data
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                "message": "User does not exist"
            }, status=status.HTTP_401_UNAUTHORIZED)


class Register(APIView):
    def post(self, request):
        nickName = request.data['nickName']
        user = User.objects.filter(nickName=nickName).first()
        if user:
            return Response({
                "message": "User Already exist",

            }, status=status.HTTP_409_CONFLICT)
        else:
            user = UserSerializer(data=request.data)
            return postSerializer(user)


class UserApis(APIView):
    def get(self, request):
        users = User.objects.all()
        users = UserSerializer(users, many=True)
        return Response({
            "message": "success",
            "users": users.data
        })


class RoomApis(APIView):
    def get(self, request):
        rooms = Room.objects.all()
        roomsSerializer = RoomSerializer(rooms, many=True)
        return Response({
            "message": "success",
            "rooms": roomsSerializer.data
        })

    def post(self, request):
        room = RoomSerializer(data=request.data)
        return postSerializer(room)


class MessageApis(APIView):
    def get(self, request):
        # takes "room_id"(optional) from the request body

        # if the room_id is sent then retrieve all the messages belonging to this room
        if request.data['room_id']:
            messages = Message.objects.filter(room_id=request.data['room_id'])
            messages = MessageSerializer(messages, many=True)
            return Response(messages.data)

        # else retrive all the messages from the database
        else:
            messages = Message.objects.all()
            messages = MessageSerializer(messages, many=True)
            return Response(messages.data)

    def post(self, request):
        # take the "content" , "sender_id" and "room_id" from the request body
        # check if the data is valid and then save
        message = MessageSerializer(data=request.data)
        return postSerializer(message)


class RoomJoining(APIView):
    # it takes the user_id and room_id from the request body
    def joinRoom(request):
        user_id = request.data['user_id']
        room_id = request.data["room_id"]
        # if both requirements exists then let the user join the room
        if user_id and room_id:
            user = User.objects.filter(id=user_id).first()
            room = Room.objects.filter(id=room_id).first()
            room.users.add(user)
            room.save()
            return Response({
                "message": "success"
            })
        elif not user_id:
            return Response({
                "message": "Login using your nickname before joining"
            }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({
                "message": "Wrong Room number"
            }, status=status.HTTP_400_BAD_REQUEST)


def postSerializer(serializer):
    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "success",
            "data": serializer.data
        })
    else:
        return Response({
            "errors": serializer.errors
        })

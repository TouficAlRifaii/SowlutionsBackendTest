from django.urls import path
from .views import Login, Register, RoomApis , MessageApis, UserApis
urlpatterns = [
    path("login" , Login.as_view()),
    path("register" , Register.as_view()),
    path("room" , RoomApis.as_view()),
    path("message" , MessageApis.as_view()),
    path("users" , UserApis.as_view()),
]

from django.contrib.auth.models import User
from users.serializer import UserSerializer
from rest_framework import generics


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

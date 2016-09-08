from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response


from users.serializer import UserSerializer
from users.models import MyUser


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = User.objects.create_user(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password']
        )
        MyUser.objects.create(user=user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        content = {
            'error': 'Such user already exists'
        }
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def signin(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user:
        content = {
            'user': unicode(user.username),
            'token': unicode(user.auth_token),
        }

    else:
        content = {
            'error': 'Your login and/or password are incorrect'
        }
    return Response(content)

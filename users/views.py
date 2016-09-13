from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from users.serializer import UserSerializer
from users.serializer import MyUserSerializer
from cards.serializer import CardSerializer
from users.models import MyUser
from cards.models import Card


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
        content = {
            'user': unicode(user.username),
            'token': unicode(user.auth_token),
        }
        return Response(content, status=status.HTTP_201_CREATED)
    else:
        content = {
            'error': 'Such user already exists'
        }
        return Response(content)


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


class UsersProfileCardsListView(generics.ListAPIView):
    serializer_class = CardSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        myuser = self.request.user.myuser
        cards = Card.objects.filter(myuser=myuser)
        return cards


class ProfileChangeUser(generics.UpdateAPIView):
    serializer_class = MyUserSerializer
    permission_classes = (IsAuthenticated, )
    # queryset = MyUser.objects.all()

    # instead field queryset
    def get_object(self):
        return self.request.user.myuser

    # def perform_update(self, serializer):
    #     image = self.request.data.get('file')
    #     serializer.save(image=image)



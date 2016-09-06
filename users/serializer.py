from rest_framework import serializers

from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    is_librarian = serializers.BooleanField(source='myuser.is_librarian', )
    image = serializers.ImageField(source='myuser.image', required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'is_librarian', 'image')
        # fields = ('id', 'username', 'first_name', 'last_name',)

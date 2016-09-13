from django.contrib.auth.models import User

from rest_framework import serializers

from .models import MyUser


class UserSerializer(serializers.ModelSerializer):
    is_librarian = serializers.BooleanField(source='myuser.is_librarian', required=False)
    image = serializers.ImageField(source='myuser.image', required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'is_librarian', 'image')
        # fields = ('id', 'username', 'first_name', 'last_name',)


class MyUserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(max_length=50, required=False, source='user.first_name')
    last_name = serializers.CharField(max_length=50, required=False, source='user.last_name')
    # image = serializers.ImageField(required=False)

    class Meta:
        model = MyUser
        fields = ('id', 'is_librarian', 'image', 'first_name', 'last_name')

    def update(self, instance, validated_data):
        instance.user.first_name = validated_data.get('first_name', instance.user.first_name)
        instance.user.last_name = validated_data.get('last_name', instance.user.last_name)
        instance.user.save()
        instance.image = validated_data.get('image')
        instance.save()
        return instance


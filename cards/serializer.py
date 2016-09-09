from rest_framework import  serializers

from .models import Card
from users.serializer import UserSerializer
from books.serializer import BookSerializer


class CardSerializer(serializers.ModelSerializer):
    # myuser = UserSerializer(read_only=True)
    books = BookSerializer(read_only=True)
    when_giving = serializers.DateField(required=False)
    when_return = serializers.DateField(required=False)

    class Meta:
        model = Card
        fields = ('pk', 'books', 'when_giving', 'when_return',
                    # 'myuser',
                  )


from rest_framework import serializers

from .models import Author
# from books.serializer import BookSerializer


# class AuthorSerializer(serializers.HyperlinkedModelSerializer):
#     book = serializers.HyperlinkedRelatedField(many=True, view_name='book-detail', read_only=True)
class AuthorSerializer(serializers.ModelSerializer):
    # book = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # book = BookSerializer(many=True, read_only=True)

    class Meta:
        model = Author
        fields = ('pk', 'url', 'first_name', 'last_name', 'book', )

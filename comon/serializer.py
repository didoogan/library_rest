from authors.models import Author
from books.models import Book

from rest_framework import serializers


class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(many=True, read_only=True)

    class Meta:
        model = Book
        fields = ('pk', 'url', 'title', 'is_taken', 'author', )


class AuthorSerializer(serializers.ModelSerializer):
    # book = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    book = BookSerializer(many=True, read_only=True)

    class Meta:
        model = Author
        fields = ('pk', 'url', 'first_name', 'last_name', 'book', )

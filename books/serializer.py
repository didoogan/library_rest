from rest_framework import serializers

from .models import Book


class BookSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.HyperlinkedRelatedField(many=True, view_name='author-detail', read_only=True)

    class Meta:
        model = Book
        fields = ('pk', 'url', 'title', 'is_taken', 'author',)

from rest_framework import serializers

from .models import Book


class BookSerializer(serializers.HyperlinkedModelSerializer):
    authors = serializers.HyperlinkedRelatedField(many=True, view_name='author-detail', read_only=True)

    class Meta:
        model = Book
        fields = ('pk', 'title', 'authors', 'is_taken', )

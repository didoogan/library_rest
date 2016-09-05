from django.db.models import Q

from rest_framework import serializers

from .models import Book
from authors.serializer import AuthorSerializer

from authors.models import Author

# class BookSerializer(serializers.HyperlinkedModelSerializer):
#     author = serializers.HyperlinkedRelatedField(many=True, view_name='author-detail', read_only=True)


class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(many=True, read_only=True)

    class Meta:
        model = Book
        fields = ('pk', 'url', 'title', 'is_taken', 'author', )

    def create(self, validated_data):
        authors = Author.objects.filter(pk__in=validated_data['authors'])
        book = Book(title=validated_data['title'])
        book.save()
        book.author.add(*authors)
        return book

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.save()
        authors = Author.objects.filter(pk__in=validated_data['authors'])
        instance.author = authors
        return instance

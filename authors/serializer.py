from rest_framework import serializers

from .models import Author


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    # books = serializers.HyperlinkedRelatedField(many=True, view_name=book-detail, read_only=True)

    class Meta:
        model = Author
        fields = ('pk', 'url', 'first_name', 'last_name', )

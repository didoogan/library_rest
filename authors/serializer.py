from rest_framework import serializers

from .models import Author
# from books.serializer import BookSerializer


# class AuthorSerializer(serializers.HyperlinkedModelSerializer):
#     book = serializers.HyperlinkedRelatedField(many=True, view_name='book-detail', read_only=True)
class AuthorSerializer(serializers.ModelSerializer):
    book = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    # book = BookSerializer(many=True, read_only=True)
    full_name = serializers.SerializerMethodField()
    # book = serializers.ListField(child=serializers.IntegerField(), read_only=True)

    class Meta:
        model = Author
        fields = ('pk', 'url', 'first_name', 'last_name', 'book', 'full_name',)

    def get_full_name(self, obj):
        return ('%s %s') % (obj.first_name, obj.last_name)


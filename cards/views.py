import datetime

from rest_framework import generics
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from cards.models import Card
from books.models import Book
from cards.serializer import CardSerializer


class CardListView(generics.ListAPIView):
    serializer_class = CardSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        user = self.request.user
        cards = Card.objects.filter(myuser__user=user, when_return__isnull=True)
        return cards


class CardCreateView(generics.CreateAPIView):
    serializer_class = CardSerializer
    permission_classes = (IsAuthenticated, )

    def perform_create(self, serializer):
        books = self.request.data.get('books', False)
        if books:
            now = datetime.datetime.now()
            user = self.request.user
            myuser = user.myuser
            for index in books:
                book = Book.objects.get(id=index)
                book.is_taken = True
                book.save()
                Card.objects.create(books=book, when_giving=now, myuser=myuser)


class CardUpdateView(APIView):
    serializer_class = CardSerializer
    # permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = self.request.user
        myuser = user.myuser
        cards = Card.objects.filter(myuser=myuser, when_return__isnull=True)
        serializer = self.serializer_class(cards, context={'request': request},many=True)
        return Response(serializer.data)

    def post(self, request):
        books = self.request.data.get('books', False)
        if books:
            now = datetime.datetime.now().date()
            user = self.request.user
            myuser = user.myuser
            Book.objects.filter(pk__in=books).update(is_taken=False)
            Card.objects.filter(books__pk__in=books, myuser=myuser, when_return__isnull=True).update(when_return=now)
            return Response(status=status.HTTP_200_OK)

from cards.models import Card
from cards.serializer import CardSerializer

from rest_framework import  generics
from rest_framework.permissions import IsAuthenticated


class CardListView(generics.ListAPIView):
    # queryset = Card.objects.all()
    serializer_class = CardSerializer
    # permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        user = self.request.user
        # cards = Card.objects.all()
        cards = Card.objects.filter(myuser__user=user)
        return cards



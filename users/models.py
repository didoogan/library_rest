from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver

from rest_framework.authtoken.models import Token


class MyUser(models.Model):
    user = models.OneToOneField(User, related_name='myuser')
    is_librarian = models.BooleanField(default=False)
    image = models.ImageField(blank=True, null=True)

    def __unicode__(self):
        return self.user.get_username()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

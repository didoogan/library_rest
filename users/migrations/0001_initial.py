# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-06 11:44
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MyUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_librarian', models.BooleanField(default=False)),
                ('image', models.ImageField(blank=True, null=True, upload_to=b'')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='myuser', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

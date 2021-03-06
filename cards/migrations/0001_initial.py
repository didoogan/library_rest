# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-09 07:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('books', '0002_auto_20160906_0556'),
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('when_giving', models.DateField()),
                ('when_return', models.DateField(blank=True, null=True)),
                ('books', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='card', to='books.Book')),
                ('myuser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='card', to='users.MyUser')),
            ],
        ),
    ]

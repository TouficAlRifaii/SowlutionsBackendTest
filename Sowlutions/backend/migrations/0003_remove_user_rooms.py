# Generated by Django 4.1.7 on 2023-04-18 09:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_user_rooms'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='rooms',
        ),
    ]

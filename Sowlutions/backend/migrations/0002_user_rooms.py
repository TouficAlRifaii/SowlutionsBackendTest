# Generated by Django 4.1.7 on 2023-04-18 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='rooms',
            field=models.ManyToManyField(to='backend.room'),
        ),
    ]

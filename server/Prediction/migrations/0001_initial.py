# Generated by Django 3.2.5 on 2023-04-04 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomePrice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=300)),
                ('sqft', models.FloatField()),
                ('bath', models.FloatField()),
                ('bhk', models.IntegerField()),
                ('price', models.FloatField()),
            ],
        ),
    ]

# Generated by Django 5.0.4 on 2025-01-17 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("social", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="page_path",
            field=models.CharField(max_length=200),
        ),
    ]

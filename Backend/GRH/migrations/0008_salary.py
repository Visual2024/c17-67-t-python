# Generated by Django 4.2.11 on 2024-04-22 03:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('GRH', '0007_alter_role_team_members'),
    ]

    operations = [
        migrations.CreateModel(
            name='Salary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('period', models.CharField(max_length=255)),
                ('worked_days', models.IntegerField()),
                ('salary', models.IntegerField()),
                ('discount', models.IntegerField()),
                ('employee', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'salario',
                'verbose_name_plural': 'salarios',
                'ordering': ['salary'],
            },
        ),
    ]

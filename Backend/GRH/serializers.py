from rest_framework import serializers
from django.contrib.auth import get_user_model
from GRH.models import Postulant

# Instantiate the CustomUser
User = get_user_model()


# Create your serializers here.
class CreatePostulantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postulant
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

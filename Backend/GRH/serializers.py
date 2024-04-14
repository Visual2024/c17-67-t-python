from rest_framework import serializers, permissions, status
from django.contrib.auth import get_user_model
from django.core import exceptions
from django.contrib.auth.password_validation import validate_password
from GRH.models import Postulant

# Instantiate the CustomUser
User = get_user_model()


# Create your serializers here.
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, data):
        user = User(**data)
        password = data.get("password")

        try:
            validate_password(password, user)

        except exceptions.ValidationError as e:
            serializer_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError(
                {"password": serializer_errors["non_field_errors"]}
            )

        return data


class CreatePostulantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postulant
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

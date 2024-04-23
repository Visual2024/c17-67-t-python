from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.core import exceptions
from django.contrib.auth.password_validation import validate_password
from .models import Postulant, Salary, SelectionProcess, Stage, Vacancy, Role
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Instantiate the CustomUser
User = get_user_model()


# Create your serializers here.


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["first_name"] = user.first_name
        token["is_staff"] = user.is_staff
        token["is_superuser"] = user.is_superuser
        token["is_active"] = user.is_active

        return token


class SalarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Salary
        fields = "__all__"


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = "__all__"


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = "__all__"


class SelectionProcessSerializer(serializers.ModelSerializer):
    Stages = StageSerializer(many=True, read_only=True)

    class Meta:
        model = SelectionProcess
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    monthly_salaries = SalarySerializer(many=True, read_only=True)
    positions = RoleSerializer(many=True, read_only=True)

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


class PostulantSerializer(serializers.ModelSerializer):
    selected = StageSerializer(many=True, read_only=True)

    class Meta:
        model = Postulant
        fields = "__all__"


class VacancySerializer(serializers.ModelSerializer):
    openings = RoleSerializer(many=True, read_only=True)

    class Meta:
        model = Vacancy
        fields = "__all__"

from rest_framework import APIViews, permissions, status
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from Backend.GRH.models import Postulant
from GRH.serializers import CreatePostulantSerializer, CreateUserSerializer

User = get_user_model()


# Create your views here.
class RegisterPostulantView(APIViews):
    # permission_classes = permissions.AllowAny

    def post(self, request):
        data = request.data
        first_name = data["first_name"]
        last_name = data["last_name"]
        email = data["email"]
        phone_number = data["phone_number"]
        secondary_phone_number = data["secondary_phone_number"]
        address = data["address"]
        city = data["city"]
        state = data["state"]
        country = data["country"]
        postulation = data["postulation"]

        user = Postulant.objects.create_user(
            first_name,
            last_name,
            email,
            phone_number,
            secondary_phone_number,
            address,
            city,
            state,
            country,
            postulation,
        )
        user = CreatePostulantSerializer(user)

        return Response(user.data, status=status.HTTP_201_CREATED)


class RegisterEmployeeView(APIViews):
    permission_classes = permissions.IsAuthenticated

    def post(self, request):
        return Response(status=status.HTTP_201_CREATED)


class RegisterUserView(APIViews):
    # permission_classes = permissions.AllowAny

    def post(self, request):
        data = request.data
        first_name = data["first_name"]
        last_name = data["last_name"]
        email = data["email"]
        phone_number = data["phone_number"]
        secondary_phone_number = data["secondary_phone_number"]
        address = data["address"]
        city = data["city"]
        state = data["state"]
        country = data["country"]
        postulation = data["postulation"]

        user = User.objects.create_user(
            first_name,
            last_name,
            email,
            phone_number,
            secondary_phone_number,
            address,
            city,
            state,
            country,
            postulation,
        )
        user = CreateUserSerializer(user)

        return Response(user.data, status=status.HTTP_201_CREATED)

from rest_framework import permissions, status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from GRH.serializers import CreatePostulantSerializer


# Instantiate the CustomUser
User = get_user_model()


# Create the API views here.
class RegisterPostulantView(ModelViewSet):
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

        postulant = User.objects.create_user(
            email=email,
            first_name=first_name,
            last_name=last_name,
            phone_number=phone_number,
            secondary_phone_number=secondary_phone_number,
            address=address,
            city=city,
            state=state,
            country=country,
        )
        postulant = CreatePostulantSerializer(postulant)

        return Response(postulant.data, status=status.HTTP_201_CREATED)


class RegisterEmployeeView(ModelViewSet):
    permission_classes = permissions.IsAuthenticated

    def post(self, request):
        pass


class RetrievePostulantView(ModelViewSet):
    permission_classes = permissions.IsAuthenticated

    def get(self, request):
        pass


class RetrieveEmployeeView(ModelViewSet):
    permission_classes = permissions.IsAuthenticated

    def get(self, request):
        pass

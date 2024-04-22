from rest_framework import permissions, status, viewsets
from GRH.serializers import CreatePostulantSerializer, CreateUserSerializer


# Create your API views here.
class RegisterPostulantViewSet(viewsets.ModelViewSet):
    serializer_class = CreatePostulantSerializer
    queryset = CreatePostulantSerializer.Meta.model.objects.all()


class RegisterEmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = CreateUserSerializer
    queryset = CreateUserSerializer.Meta.model.objects.all()


class RetrievePostulantViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = CreatePostulantSerializer
    queryset = CreatePostulantSerializer.Meta.model.objects.all()

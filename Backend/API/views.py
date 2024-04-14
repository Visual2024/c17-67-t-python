from rest_framework import permissions, status, viewsets
from GRH.serializers import CreatePostulantSerializer


# Create your API views here.
class RegisterPostulantViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]

    serializer_class = CreatePostulantSerializer
    queryset = CreatePostulantSerializer.Meta.model.objects.all()

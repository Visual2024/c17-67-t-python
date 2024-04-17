from rest_framework import mixins, generics

# Imports for the models and serializers
from django.contrib.auth import get_user_model
from .models import Postulant, Stage, Vacancy, Role
from .serializers import (
    UserSerializer,
    PostulantSerializer,
    VacancySerializer,
    StageSerializer,
    RoleSerializer,
)

# Instantiate the CustomUser
User = get_user_model()


# Create the API views here.
class UserList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class PostulantList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Postulant.objects.all()
    serializer_class = PostulantSerializer


class PostulantDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Postulant.objects.all()
    serializer_class = PostulantSerializer


class VacancyList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacancyDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class StageList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer


class StageDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer


class RoleList(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer


class RoleDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

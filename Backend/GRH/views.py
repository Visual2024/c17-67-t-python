from rest_framework import mixins, generics, filters
from django.contrib.auth.hashers import make_password

# Imports for the models and serializers
from django.contrib.auth import get_user_model
from .models import Postulant, Stage, Vacancy, Role, Salary
from .serializers import (
    UserSerializer,
    PostulantSerializer,
    VacancySerializer,
    StageSerializer,
    RoleSerializer,
    SalarySerializer,
)

# Instantiate the CustomUser
User = get_user_model()


# Create the API views here.
class UserList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["first_name", "last_name", "email"]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def get_queryset(self):
        queryset = User.objects.all()
        param = self.request.query_params.get("is_active")

        if param == "true":
            queryset = queryset.filter(is_active=True)
        elif param == "false":
            queryset = queryset.filter(is_active=False)
        return queryset

    def post(self, request, *args, **kwargs):
        hashed_password = make_password(request.data["password"])
        request.data["password"] = hashed_password
        return self.create(request, *args, **kwargs)


class UserDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class PostulantList(
    mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView
):
    queryset = Postulant.objects.all()
    serializer_class = PostulantSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def get_queryset(self):
        queryset = Postulant.objects.all()
        param = self.request.query_params.get("is_active")

        if param == "true":
            queryset = queryset.filter(is_active=True)
        elif param == "false":
            queryset = queryset.filter(is_active=False)
        return queryset

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class PostulantDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Postulant.objects.all()
    serializer_class = PostulantSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class VacancyList(
    mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView
):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def get_queryset(self):
        queryset = User.objects.all()
        param = self.request.query_params.get("is_active")

        if param == "true":
            queryset = queryset.filter(is_active=True)
        elif param == "false":
            queryset = queryset.filter(is_active=False)
        return queryset

    def post(self, request, *args, **kwargs):

        return self.create(request, *args, **kwargs)


class VacancyDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class StageList(
    mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView
):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def get_queryset(self):
        queryset = Stage.objects.all()
        param = self.request.query_params.get("is_active")

        if param == "true":
            queryset = queryset.filter(is_active=True)
        elif param == "false":
            queryset = queryset.filter(is_active=False)
        return queryset

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class StageDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class RoleList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def get_queryset(self):
        queryset = User.objects.all()
        param = self.request.query_params.get("is_active")

        if param == "true":
            queryset = queryset.filter(is_active=True)
        elif param == "false":
            queryset = queryset.filter(is_active=False)
        return queryset

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class RoleDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)


class SalaryList(
    mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView
):
    queryset = Salary.objects.all()
    serializer_class = SalarySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def get_queryset(self):
        queryset = User.objects.all()
        param = self.request.query_params.get("is_active")

        if param == "true":
            queryset = queryset.filter(is_active=True)
        elif param == "false":
            queryset = queryset.filter(is_active=False)
        return queryset

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SalaryDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Salary.objects.all()
    serializer_class = SalarySerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterPostulantViewSet, RegisterEmployeeViewSet

# Instantiate the router
router = DefaultRouter()

# API Versioning
router.register(r"postulants", RegisterPostulantViewSet, "Postulantes")
router.register(r"employees", RegisterEmployeeViewSet, "Empleados")

urlpatterns = [
    path("v1/", include(router.urls)),
]

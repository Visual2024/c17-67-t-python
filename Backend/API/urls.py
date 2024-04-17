from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterPostulantView, RegisterEmployeeView

# Instantiate the router
router = DefaultRouter()

# API Versioning
router.register(r"postulants", RegisterPostulantView, "Postulantes")
router.register(r"employees", RegisterEmployeeView, "Empleados")

urlpatterns = [
    path("v1/", include(router.urls)),
]

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from GRH.views import *


urlpatterns = [
    path("v1/employees", UserList.as_view()),
    path(
        "v1/employees/<int:pk>",
        UserDetail.as_view(),
    ),
    path("v1/postulants", PostulantList.as_view()),
    path(
        "v1/postulants/<int:pk>",
        PostulantDetail.as_view(),
    ),
    path("v1/vacancies", VacancyList.as_view()),
    path(
        "v1/vacancies/<int:pk>",
        VacancyDetail.as_view(),
    ),
    path("v1/stages", StageList.as_view()),
    path("v1/stages/<int:pk>", StageDetail.as_view()),
    path("v1/roles", RoleList.as_view()),
    path("v1/roles/<int:pk>", RoleDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

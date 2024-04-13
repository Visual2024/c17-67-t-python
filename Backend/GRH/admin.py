from django.contrib import admin
from .models import CustomUser as User, Vacancy, Role, Team, Postulant

# Register your models here.
admin.site.register(User)
admin.site.register(Vacancy)
admin.site.register(Role)
admin.site.register(Team)
admin.site.register(Postulant)

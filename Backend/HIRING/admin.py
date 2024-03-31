from django.contrib import admin
from .models import Stage, Candidate, Candidate_Stage


# Register your models here.
admin.site.register(Stage)
admin.site.register(Candidate)
admin.site.register(Candidate_Stage)

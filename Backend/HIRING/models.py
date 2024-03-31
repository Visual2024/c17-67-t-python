import datetime
from django.db import models


# Create your models here.
class Stage(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.name


class Candidate(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    postulation_date = models.DateField(default=datetime.date.today)
    dni = models.CharField(max_length=20)
    stages = models.ManyToManyField(Stage, through="Candidate_Stage")

    def __str__(self):
        return self.first_name + " " + self.last_name


# Through model for Candidate and Stage models


class Candidate_Stage(models.Model):
    candidate = models.ForeignKey(
        Candidate, on_delete=models.CASCADE, related_name="actual_stages"
    )
    stage = models.ForeignKey(
        Stage, on_delete=models.CASCADE, related_name="actual_candidates"
    )
    start_date = models.DateField(default=datetime.date.today)
    end_date = models.DateField(null=True, blank=True)
    status = models.CharField(max_length=200)

    def __str__(self):
        return (
            self.stage.name
            + " "
            + self.candidate.first_name
            + " "
            + self.candidate.last_name
        )

from django.db import models

from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)


# Create your models here.
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("Debe proporcionar un email")

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(email=email)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password: None):
        user = self.create_user(email, password=password)

        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)

        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    dni = models.IntegerField(unique=True, null=True, blank=True)
    phone_number = models.CharField(max_length=20, unique=True)
    secondary_phone_number = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = "empleado"
        verbose_name_plural = "empleados"
        ordering = ["email"]

    def __str__(self):
        return self.email


class Vacancy(models.Model):
    tittle = models.CharField(max_length=255)
    description = models.CharField(max_length=400)
    process_start_date = models.DateField(auto_now_add=True)
    process_ending_date = models.DateField(blank=True, null=True)

    class Meta:
        verbose_name = "vacante"
        verbose_name_plural = "vacantes"
        ordering = ["process_start_date"]

    def __str__(self) -> str:
        return self.name_vacancy


class Role(models.Model):
    tittle = models.CharField(max_length=255)
    description = models.CharField(max_length=255, null=True, blank=True)

    job_opening = models.ForeignKey(
        "Vacancy", on_delete=models.CASCADE, related_name="opening"
    )
    team_members = models.ManyToManyField(CustomUser, blank=True, through="Team")

    class Meta:
        verbose_name = "cargo"
        verbose_name_plural = "cargos"
        ordering = ["tittle"]

    def __str__(self):
        return self.name


class Team(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    date_joined = models.DateField(auto_now_add=True)
    end_date = models.DateField(blank=True, null=True)

    class Meta:
        verbose_name = "equipo"
        verbose_name_plural = "equipos"
        ordering = ["role"]

    def __str__(self):
        return self.name


class Postulant(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.CharField(max_length=20, unique=True)
    secondary_phone_number = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    postulation = models.ManyToManyField(
        Vacancy, blank=True, related_name="postulation"
    )

    class Meta:
        verbose_name = "postulante"
        verbose_name_plural = "postulantes"
        ordering = ["email"]

    def __str__(self):
        return self.email

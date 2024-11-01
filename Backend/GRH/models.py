from django.db import models

from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)


# Create your models here.
class CustomUserManager(BaseUserManager):
    def create_user(
        self,
        email,
        monthly_salaries=None,
        positions=None,
        first_name=None,
        last_name=None,
        password=None,
        dni=None,
        phone_number=None,
        secondary_phone_number=None,
        address=None,
        city=None,
        state=None,
        country=None,
    ):
        if not email:
            raise ValueError("Debe proporcionar un email")

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            monthly_salaries=monthly_salaries,
            positions=positions,
            first_name=first_name,
            last_name=last_name,
            email=email,
            dni=dni,
            phone_number=phone_number,
            secondary_phone_number=secondary_phone_number,
            address=address,
            city=city,
            state=state,
            country=country,
        )

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
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    dni = models.IntegerField(unique=True, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    secondary_phone_number = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["password"]

    class Meta:
        verbose_name = "empleado"
        verbose_name_plural = "empleados"
        ordering = ["email"]

    def __str__(self):
        return self.email


class Vacancy(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=400, null=True, blank=True)
    process_start_date = models.DateField(auto_now_add=True)
    process_ending_date = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    selection_process = models.ForeignKey(
        "SelectionProcess",
        related_name="job_openings",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = "vacante"
        verbose_name_plural = "vacantes"
        ordering = ["process_start_date"]

    def __str__(self) -> str:
        return self.title


class SelectionProcess(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "proceso de selección"
        verbose_name_plural = "procesos de selección"
        ordering = ["title"]

    def __str__(self) -> str:
        return self.title


class Postulant(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.CharField(max_length=20, unique=True)
    secondary_phone_number = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    city = models.CharField(max_length=255, null=True, blank=True)
    state = models.CharField(max_length=255, null=True, blank=True)
    country = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "postulante"
        verbose_name_plural = "postulantes"
        ordering = ["email"]

    def __str__(self):
        return self.email


class Stage(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)

    contest_for = models.ForeignKey(
        "SelectionProcess",
        related_name="stages",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    participants = models.ManyToManyField(
        Postulant, related_name="selected", blank=True
    )

    class Meta:
        verbose_name = "etapa"
        verbose_name_plural = "etapas"
        ordering = ["title"]

    def __str__(self):
        return self.title


class Role(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255, null=True, blank=True)
    is_active = models.BooleanField(default=True)

    job_opening = models.ForeignKey(
        "Vacancy",
        related_name="openings",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    team_members = models.ManyToManyField(
        CustomUser,
        related_name="positions",
        blank=True,
        through="Team",
    )

    class Meta:
        verbose_name = "cargo"
        verbose_name_plural = "cargos"
        ordering = ["title"]

    def __str__(self):
        return self.title


class Team(models.Model):
    postulant_id = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, null=True, blank=True
    )
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE, null=True, blank=True)
    date_joined = models.DateField(auto_now_add=True)
    end_date = models.DateField(blank=True, null=True)

    class Meta:
        verbose_name = "equipo"
        verbose_name_plural = "equipos"
        ordering = ["role_id"]

    def __str__(self):
        return f"{self.role}-{self.user}"


class Salary(models.Model):
    period = models.CharField(max_length=255, blank=True, null=True)
    worked_days = models.IntegerField(blank=True, null=True)
    gross_salary = models.IntegerField(blank=True, null=True)
    net_salary = models.IntegerField(blank=True, null=True)
    deductions = models.IntegerField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    employee = models.ForeignKey(
        CustomUser,
        related_name="monthly_salaries",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    class Meta:
        verbose_name = "salario"
        verbose_name_plural = "salarios"
        ordering = ["period"]

    def __str__(self):
        return f"{self.period}"

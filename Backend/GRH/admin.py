from django.contrib import admin
from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.core.exceptions import ValidationError

from .models import (
    CustomUser,
    Salary,
    SelectionProcess,
    Stage,
    Vacancy,
    Postulant,
    Role,
)


# Register your models here.
class UserCreationForm(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password."""

    password1 = forms.CharField(label="Password", widget=forms.PasswordInput)
    password2 = forms.CharField(
        label="Password confirmation", widget=forms.PasswordInput
    )

    class Meta:
        model = CustomUser
        fields = [
            "email",
            "first_name",
            "last_name",
            "dni",
            "phone_number",
            "secondary_phone_number",
            "address",
            "city",
            "state",
            "country",
            "is_staff",
            "is_superuser",
            "is_active",
        ]

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    disabled password hash display field.
    """

    password = ReadOnlyPasswordHashField()

    class Meta:
        model = CustomUser
        fields = "__all__"


class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserChangeForm
    add_form = UserCreationForm

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.
    list_display = [
        "email",
        "first_name",
        "last_name",
        "phone_number",
        "address",
        "city",
        "state",
        "country",
        "is_active",
        "is_superuser",
        "positions",
    ]
    list_filter = ["is_active", "is_staff", "is_superuser"]
    fieldsets = [
        (None, {"fields": ["email", "password"]}),
        (
            "Información Personal",
            {
                "fields": [
                    "first_name",
                    "last_name",
                    "dni",
                    "phone_number",
                    "address",
                    "city",
                    "state",
                    "country",
                ]
            },
        ),
        (
            "Configuración y gestión de accesos",
            {"fields": ["is_active", "is_staff", "is_superuser"]},
        ),
    ]
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": "__all__",
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["email"]
    filter_horizontal = []


admin.site.site_header = "HRNexo - Sistema de Gestión de Recursos Humanos"
admin.site.register(CustomUser, UserAdmin)
admin.site.register(Salary)
admin.site.register(Postulant)
admin.site.register(Role)
admin.site.register(Vacancy)
admin.site.register(SelectionProcess)
admin.site.register(Stage)
admin.site.unregister(Group)

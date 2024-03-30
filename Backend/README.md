# C17-67-T-Python

# Sistema de Gestión de Recursos Humanos en la Nube

## Backend

### Contenido

1. Introducción
2. Requerimientos
3. Configuración inicial de entorno virtual
4. Dependencias
5. Hacer las migraciones
6. Servidor de desarrollo
7. Pruebas
8. Despliegue
9. Conclusión

---

#### 1 - Introducción

Este es un proyecto realizado en Python usando el framework Django y Django Rest Framework.

#### 2 - Requerimientos

El único requerimiento que tenemos es tener instalado Python 3.10 o superior en su computadora.

Recomendamos instalar la última versión desde el sitio oficial de descargas de Python [aquí](https://www.python.org/downloads/).

#### 3 - Configuración inicial de entorno virtual

Luego de clonar el repositorio recomendamos crear un entorno virtual donde instalar las dependencias requeridas para el Backend de nuestro proyecto y asi mantenerlo aislado del resto de tu sistema.

Crear el entorno virtual y activarlo usando el siguiente comando:

```
# Windows
py -m venv env
.\env\Scripts\activate
```

```
# Linux o MacOS
python -m venv env
source env/bin/activate
```

#### 4 - Dependencias

Ingresar a la carpeta del Backend del proyecto e instalar las dependencias usando el siguiente comando:

```
cd Backend
pip install -r requirements.txt
```

#### 5 - Hacer las migraciones

Deben realizarse las migraciones para crear las tablas en la base de datos usando el siguiente comando:

```
# Windows
py manage.py makemigrations
py manage.py migrate
```

```
# Linux o MacOS
python manage.py makemigrations
python manage.py migrate
```

#### 6 - Servidor de desarrollo

Levantar el servidor de desarrollo usando el siguiente comando:

```
python manage.py runserver
```

#### 7 - Pruebas

#### 8 - Despliegue

#### 9 - Conclusión

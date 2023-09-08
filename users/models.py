# from django.db import models
# from django.contrib.auth import models as auth_models
# from django.template.defaultfilters import slugify
# from django_countries.fields import CountryField
# from PIL import Image


# class UserManager(auth_models.BaseUserManager):
#     def create_user(
#         self,
#         display_name: str,
#         email: str,
#         password: str = None,
#         is_staff=False,
#         is_superuser=False,
#     ) -> "User":
#         if not email:
#             raise ValueError("User must have an email")
#         if not display_name:
#             raise ValueError("User must set a display name")
 

#         user = self.model(email=self.normalize_email(email))
#         user.display_name = display_name
        
#         user.set_password(password)
#         user.is_active = True
#         user.is_staff = is_staff
#         user.is_superuser = is_superuser
#         user.save()

#         return user

#     def create_superuser(
#         self, display_name: str, email: str, password: str
#     ) -> "User":
#         user = self.create_user(
        
#             display_name=display_name,
#             email=email,
#             password=password,
#             is_staff=True,
#             is_superuser=True,
#         )
#         user.save()

#         return user


# class User(auth_models.AbstractUser):
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     email = models.EmailField( max_length=255, unique=True)
#     password = models.CharField(max_length=255)
#     username = None
#     display_name = models.CharField(max_length=255, unique=True)
#     avatar = models.ImageField(default='avatar.jpg', upload_to='profile_avatars')
#     cover_img = models.ImageField(upload_to='cover_images', null=True, blank=True)
#     country = CountryField( null=True, blank=True) 
#     bio = models.TextField(null=True, blank=True)
#     slug = models.SlugField()

#     follows = models.ManyToManyField(
#         "self",
#         related_name="followed_by",
#         symmetrical="false",
#         blank=True
#     )

#     def __str__(self):
#         return f"{self.display_name}'s Profile"
    
    
#     def save(self, *args, **kwargs):

#         if not self.slug:
#             self.slug = slugify(self.display_name)
#         #save profile first
#         super().save(*args, **kwargs)

#         #resize image
#         img = Image.open(self.avatar.path)
#         if img.height or img.width > 300:
#             output_size = (300, 300)
#             img.thumbnail(output_size)
#             img.save(self.avatar.path)

#     objects = UserManager()

#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = ["display_name"]




from django.contrib.auth.models import AbstractUser

from django_countries.fields import CountryField

from django.db import models
from PIL import Image


class CustomUser(AbstractUser):
  
    first_name = models.CharField(null=True, blank=True, max_length=255)
    last_name = models.CharField(null=True, blank=True, max_length=255)
    avatar = models.ImageField(default='avatar.jpg', upload_to='profile_avatars')
    cover_img = models.ImageField(upload_to='cover_images', null=True, blank=True)
    country = CountryField( null=True, blank=True) 
    bio = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.username}'s Profile"
    

    def save(self, *args, **kwargs):

        #save profile first
        super().save(*args, **kwargs)

        #resize image
        img = Image.open(self.avatar.path)
        if img.height or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.avatar.path)
    
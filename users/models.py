from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField
from PIL import Image
from django.utils.translation import gettext_lazy as _

class CustomUser(AbstractUser):
    email = models.EmailField(_('email address'), unique=True)

class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    avatar = models.ImageField(default='avatar.jpg', upload_to='profile_avatars')
    country = CountryField( null=True, blank=True)
    Bio = models.TextField(null=True, blank=True)
    follows = models.ManyToManyField(
        "self",
        related_name="followed_by",
        symmetrical="false",
        blank=True
    )

    def __str__(self):
        return f"{self.user.username}'s Profile"
    
    
    def save(self, *args, **kwargs):
        #save profile first
        super().save(*args, **kwargs)

        #resize image
        img = Image.open(self.avatar.path)
        if img.height or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.avatar.path)




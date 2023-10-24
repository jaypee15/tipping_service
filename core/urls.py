from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import (
SpectacularAPIView,
SpectacularRedocView,
SpectacularSwaggerView, # new
)

from users.views import GoogleLogin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/', include('transactions.urls')),
    path('api/', include('users.urls')),
    path("api-auth/", include("rest_framework.urls")),
    path("api/dj-rest-auth/", include("dj_rest_auth.urls")),
    path('api/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/schema/redoc/", SpectacularRedocView.as_view(
        url_name="schema"), name="redoc",),
    path("api/schema/swagger-ui/", SpectacularSwaggerView.as_view(
        url_name="schema"), name="swagger-ui"),
    

    path("api/auth/google/", GoogleLogin.as_view(), name="google_login"),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
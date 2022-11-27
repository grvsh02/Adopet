from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from strawberry.django.views import GraphQLView
from Shvaan.graphql.schema import schema
from strawberry_jwt_auth.views import strawberry_auth_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', strawberry_auth_view(GraphQLView.as_view(schema=schema))),
    path('tinymce/', include('tinymce.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns = [
    path('api/', include(urlpatterns))
]
"""
WSGI config for Shvaan project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
settings_module = 'Shvaan.deployment' if 'WEBSITE_HOSTNAME' in os.environ else 'Shvaan.settings'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Shvaan.settings')

application = get_wsgi_application()
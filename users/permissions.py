from rest_framework import permissions

class IsRequestedUser(permissions.BasePermission):
    """
    Custom permission to allow access only to the requested user's details.
    """

    def has_object_permission(self, request, view, obj):
        # Check if the user making the request is the same as the requested user.
        return obj == request.user
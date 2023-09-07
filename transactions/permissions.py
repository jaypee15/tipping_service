from rest_framework import permissions

class IsOwnerOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to view or edit it.
    """

    def has_permission(self, request, view):
        #check if user is authenticated
        if request.user.is_authenticated:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        # Check if the user making the request is the owner of the object.
        return obj.creator == request.user
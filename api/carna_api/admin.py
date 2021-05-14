from import_export.admin import ImportExportModelAdmin
from django.contrib import admin
from django.contrib.auth.models import User, Group
# from django.contrib.auth.admin import UserAdmin
from .models import Course #, Questions, CarnaUser


# Site Admins can manage Users, Courses, and Groups.
class UserAdmin(ImportExportModelAdmin):
    pass

class GroupAdmin(ImportExportModelAdmin):
    pass

# Users have first_name, last_name, bio
# class UserAdmin(admin.ModelAdmin):
#     list_display = ('first_name','last_name','bio', 'is_teacher', 'is_student')

class CourseAdmin(ImportExportModelAdmin):
    # Display Courses
    list_display = ('id', 'creator_id', 'title', 'release_date', 'description', 'stars', 'topic')

# admin.site.register(CarnaUser, UserAdmin)
admin.site.register(Course, CourseAdmin)
# Need to unreqister then register for built-in models, User and Groups.
admin.site.unregister(User)
admin.site.unregister(Group)
admin.site.register(User, UserAdmin)
admin.site.register(Group, GroupAdmin)

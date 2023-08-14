# from django.shortcuts import render, redirect
# from django.contrib.auth.views import LoginView
# from django.views.generic.edit import FormView
# from django.urls import reverse_lazy
# from django.contrib import messages
# from django.contrib.auth import login
# from django.views import View

# from django.contrib.auth.mixins import LoginRequiredMixin
# from .forms import RegisterForm, ProfileUpdateForm, UserUpdateForm



# class MyLoginView(LoginView):
#     redirect_authenticated_user = True
#     template_name = 'users/login.html'

#     def get_success_url(self):
#         return reverse_lazy('profile')
    
#     def form_invalid(self, form):
#         messages.error(self.request, 'invalid username or password')
#         return self.render_to_response(self.get_context_data(form=form))
    
# class RegisterView(FormView):
#     template_name = 'users/register.html'
#     form_class = RegisterForm
#     redirect_authenticated_user = True
#     success_url = reverse_lazy('profile')

#     def form_valid(self, form):
#         user = form.save()
#         if user:
#             login(self.request, user)
        
#         return super(RegisterView, self).form_valid(form)


# class MyProfile(LoginRequiredMixin, View):
#     def get(self, request):
#         user_form = UserUpdateForm(instance=request.user)
#         profile_form = ProfileUpdateForm(instance=request.user.profile)

#         context ={
#             'user_form': user_form,
#             'profile_form': profile_form
#         }

#         return render(request, 'users/profile.html', context)
    
#     def post(self, request):
#         user_form = UserUpdateForm(
#             request.POST,
#             instance=request.user
#         )
#         profile_form = ProfileUpdateForm(
#             request.POST,
#             request.FILES,
#             instance=request.user.profile
#         )

#         if user_form.is_valid() and profile_form.is_valid():
#             user_form.save()
#             profile_form.save()

#             messages.success(request, 'Your profile has been updated successfully')

#             return redirect('profile')
#         else: 
#             context = {
#                 'user_form' : user_form,
#                 'profile_form' : profile_form
#             }

#             messages.error(request, 'Error updating your profile')

#             return render(request, 'users/profile.html', context)
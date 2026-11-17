// js/auth.js — Модуль управления авторизацией, ролями и быстрой подстановкой учетных данных
window.AuthModule = {
  getRoleHomeScreen(user) {
    if (!user) return 'login';
    if (user.mustChangePassword) return 'setup-account';
    return user.role === 'admin' ? 'admin' : 'profile';
  }
};

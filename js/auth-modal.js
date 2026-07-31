// Catena App Authentication & Onboarding Modal
export function initAuthModal() {
  const overlay = document.getElementById('auth-modal');
  const closeBtn = document.getElementById('auth-close');
  const triggers = document.querySelectorAll('[data-open-auth]');
  const form = document.getElementById('auth-form');
  const toast = document.getElementById('toast-alert');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  function openModal(e) {
    if (e) e.preventDefault();
    if (overlay) overlay.classList.add('is-open');
  }

  function closeModal() {
    if (overlay) overlay.classList.remove('is-open');
  }

  triggers.forEach((btn) => btn.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-email')?.value || 'user';
      closeModal();
      showToast(`Welcome to Catena! Login link sent to ${email}`);
      form.reset();
    });
  }
}

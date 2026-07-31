// Interactive AI Agent Policy Simulator
export function initPolicySimulator() {
  const amountInput = document.getElementById('sim-amount-input');
  const amountDisplay = document.getElementById('sim-amount-val');
  const statusPill = document.getElementById('sim-status-pill');
  const toast = document.getElementById('toast-alert');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  if (amountInput && amountDisplay && statusPill) {
    amountInput.addEventListener('input', () => {
      const val = parseFloat(amountInput.value) || 0;
      amountDisplay.textContent = `$${val.toLocaleString()}`;

      // Policy Rule: Agent daily limit is $5,000 max per transaction
      if (val <= 5000) {
        statusPill.textContent = 'Approved by Policy';
        statusPill.className = 'status_pill approved';
      } else {
        statusPill.textContent = 'Blocked by Policy Limit ($5,000 max)';
        statusPill.className = 'status_pill blocked';
      }
    });
  }

  const runSimBtn = document.getElementById('run-sim-btn');
  if (runSimBtn) {
    runSimBtn.addEventListener('click', () => {
      const val = parseFloat(amountInput?.value || 0);
      if (val <= 5000) {
        showToast(`Transaction of $${val.toLocaleString()} executed successfully under agent policy limit.`);
      } else {
        showToast(`Transaction of $${val.toLocaleString()} blocked! Exceeds agent daily limit threshold.`);
      }
    });
  }
}

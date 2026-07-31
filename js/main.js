import { initTileGrid } from './tile-grid.js';
import { initPolicySimulator } from './policy-simulator.js';
import { initAuthModal } from './auth-modal.js';

document.addEventListener('DOMContentLoaded', () => {
  initTileGrid();
  initPolicySimulator();
  initAuthModal();
});

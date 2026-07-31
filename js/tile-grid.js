// Animated Grid Tile Wave Canvas Script for Catena Hero Visual
export function initTileGrid() {
  const canvas = document.getElementById('tile-wave-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const tileSize = 32;
  let frame = 0;

  function drawGrid() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;

    const cols = Math.ceil(width / tileSize);
    const rows = Math.ceil(height / tileSize);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * tileSize;
        const y = j * tileSize;

        // Wave opacity calculation
        const wave = Math.sin(i * 0.15 + frame * 0.03) + Math.cos(j * 0.15 + frame * 0.03);
        if (wave > 1.2) {
          ctx.fillStyle = `rgba(163, 230, 53, ${Math.min(0.2, (wave - 1.2) * 0.15)})`;
          ctx.fillRect(x, y, tileSize, tileSize);
        }

        ctx.strokeRect(x, y, tileSize, tileSize);
      }
    }

    frame++;
    requestAnimationFrame(drawGrid);
  }

  drawGrid();
}

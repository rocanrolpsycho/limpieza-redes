// Exportar suscripciones de YouTube
// Úsalo en: https://www.youtube.com/feed/channels
// Pega todo este código en la consola (F12 → Consola) y presiona Enter.
// Descarga un archivo "suscripciones.txt" con: Nombre del canal | Link

(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // 1. Baja la página hasta que ya no carguen más canales
  let prev = -1, n = 0;
  while (n !== prev) {
    prev = n;
    window.scrollTo(0, document.documentElement.scrollHeight);
    await sleep(2000);
    n = document.querySelectorAll('ytd-channel-renderer').length;
    console.log('cargando…', n);
  }

  // 2. Junta nombre y link de cada canal
  const canales = [...document.querySelectorAll('ytd-channel-renderer')].map((c) => {
    const a = c.querySelector('a#main-link') || c.querySelector('a');
    const nombre = c.querySelector('#channel-title #text, #text')?.textContent.trim();
    return `${nombre} | ${a?.href || ''}`;
  });

  // 3. Descarga el archivo
  const blob = new Blob([canales.join('\n')], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'suscripciones.txt';
  link.click();

  console.log(canales.join('\n'));
  console.log(canales.length + ' canales descargados');
})();

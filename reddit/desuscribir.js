// Desuscribirte de varios subreddits de golpe — Reddit
// Úsalo en: https://old.reddit.com (tiene que ser la versión "old")
//
// 1. Escribe abajo, en QUITAR, los subreddits que ya no quieres (sin el "r/").
// 2. Pega todo en la consola (F12 → Consola) y presiona Enter.
//
// Esto SÍ cambia tu cuenta. Revisa bien la lista antes de correrlo.
// Si Reddit pide una pausa, el script se detiene solo: espera ~15 min y vuelve a correrlo.

const QUITAR = [
  'subreddit_de_ejemplo',
  'otro_subreddit',
  // 'u_usuario'  ← así se escriben los perfiles de usuario que sigues
];

(async () => {
  const uh = (await fetch('/api/me.json').then((r) => r.json())).data?.modhash;
  if (!uh) {
    console.log('Inicia sesión y usa https://old.reddit.com');
    return;
  }
  const fallaron = [];
  for (const [i, s] of QUITAR.entries()) {
    const r = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `action=unsub&sr_name=${encodeURIComponent(s)}&uh=${uh}`,
    });
    if (r.status === 429) {
      console.log(`Reddit pidió pausa en ${s}. Espera ~15 min y vuelve a correrlo.`);
      return;
    }
    console.log(r.ok ? 'OK   ' : 'ERROR', `${i + 1}/${QUITAR.length}`, s);
    if (!r.ok) fallaron.push(s);
    await new Promise((t) => setTimeout(t, 3000));
  }
  console.log('Terminado. Fallaron:', fallaron.length ? fallaron.join(', ') : 'ninguno');
})();

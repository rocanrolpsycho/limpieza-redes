// ¿Quién no me sigue de vuelta? — Instagram
// Úsalo en: https://www.instagram.com (con tu sesión iniciada, en computadora)
// Pega todo este código en la consola (F12 → Consola) y presiona Enter.
// Descarga "instagram.csv" con: Usuario, Nombre, Estado, Link
// Estado = "Mutuo" | "No te sigue" | "Tú no lo sigues"
//
// Solo LEE tus listas: no sigue ni deja de seguir a nadie.
// Va despacio a propósito para no saturar a Instagram.

(async () => {
  const id = document.cookie.match(/ds_user_id=(\d+)/)?.[1];
  if (!id) {
    console.log('Inicia sesión en instagram.com primero');
    return;
  }

  const H = { 'X-IG-App-ID': '936619743392459' };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // Trae una lista completa ("followers" o "following"), página por página
  async function traer(tipo) {
    let out = [], max = '';
    while (true) {
      const r = await fetch(
        `/api/v1/friendships/${id}/${tipo}/?count=50${max ? '&max_id=' + max : ''}`,
        { headers: H, credentials: 'include' }
      );
      if (!r.ok) {
        console.log('Instagram pidió pausa (' + r.status + '), esperando 1 min…');
        await sleep(60000);
        continue;
      }
      const j = await r.json();
      out.push(...j.users.map((u) => ({ user: u.username, nombre: u.full_name || '' })));
      console.log(tipo === 'followers' ? 'seguidores:' : 'seguidos:', out.length);
      if (!j.next_max_id) break;
      max = j.next_max_id;
      await sleep(1500 + Math.random() * 1500);
    }
    return out;
  }

  const seguidores = await traer('followers');
  const seguidos = await traer('following');

  const sA = new Set(seguidores.map((u) => u.user));
  const gA = new Set(seguidos.map((u) => u.user));
  const todos = new Map();
  [...seguidos, ...seguidores].forEach((u) => todos.set(u.user, u));

  // Arma el CSV (con BOM para que Excel respete acentos)
  const q = (s) => '"' + String(s).replace(/"/g, '""') + '"';
  const filas = [...todos.values()].map((u) => {
    const est = gA.has(u.user) && sA.has(u.user) ? 'Mutuo'
      : gA.has(u.user) ? 'No te sigue'
      : 'Tú no lo sigues';
    return [u.user, u.nombre, est, 'https://www.instagram.com/' + u.user + '/'].map(q).join(',');
  });
  const csv = '﻿' + ['Usuario,Nombre,Estado,Link', ...filas].join('\n');

  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = 'instagram.csv';
  a.click();

  const noTeSiguen = filas.filter((f) => f.includes('"No te sigue"')).length;
  console.log(`Listo: ${seguidores.length} seguidores, ${seguidos.length} seguidos, ${noTeSiguen} no te siguen de vuelta`);
})();

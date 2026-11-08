// 👽 Exportar tus subreddits — Reddit
// Úsalo en: https://old.reddit.com (con tu sesión iniciada)
// Pega todo este código en la consola (F12 → Consola) y presiona Enter.
// Descarga "subreddits.csv" con: Subreddit, Miembros, Link
// Solo LEE tu lista: no cambia nada de tu cuenta.

(async () => {
  const subs = [];
  let after = '';
  do {
    const r = await fetch(`/subreddits/mine/subscriber.json?limit=100&after=${after}`).then((r) => r.json());
    r.data.children.forEach((c) => subs.push(c.data));
    after = r.data.after;
    console.log('cargando…', subs.length);
  } while (after);

  subs.sort((a, b) => a.display_name.localeCompare(b.display_name, undefined, { sensitivity: 'base' }));

  const q = (s) => '"' + String(s).replace(/"/g, '""') + '"';
  const filas = subs.map((s) =>
    [s.display_name_prefixed, s.subscribers ?? '', 'https://www.reddit.com/' + s.display_name_prefixed + '/'].map(q).join(',')
  );
  const csv = '﻿' + ['Subreddit,Miembros,Link', ...filas].join('\n');

  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  a.download = 'subreddits.csv';
  a.click();

  console.log(subs.map((s) => s.display_name_prefixed).join('\n'));
  console.log(`✅ ${subs.length} subreddits descargados`);
})();

<div align="center">

# Limpieza de Redes

**Scripts sencillos para poner orden en tus redes sociales — directo desde el navegador.**

Sin instalar nada · Sin apps sospechosas · Sin dar tu contraseña a nadie

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)
![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)

</div>

---

## ¿Qué hay aquí?

| Script | ¿Qué hace? | Te descarga |
|---|---|---|
| [`youtube/exportar-suscripciones.js`](youtube/exportar-suscripciones.js) | Saca la lista completa de canales a los que estás suscrito | `suscripciones.txt` |
| [`instagram/seguidores.js`](instagram/seguidores.js) | Compara a quién sigues vs. quién te sigue | `instagram.csv` |
| [`reddit/exportar-subreddits.js`](reddit/exportar-subreddits.js) | Saca la lista de subreddits a los que estás suscrito | `subreddits.csv` |
| [`reddit/desuscribir.js`](reddit/desuscribir.js) | Te desuscribe de varios subreddits de golpe (tú eliges cuáles) | — |

---

## Cómo se usan

Todos funcionan igual: **copias, pegas en la consola y listo.**

### YouTube — tus suscripciones

1. Entra a **https://www.youtube.com/feed/channels** con tu sesión iniciada.
2. Presiona **`F12`** y ve a la pestaña **Consola**.
3. Copia todo el contenido de [`exportar-suscripciones.js`](youtube/exportar-suscripciones.js), pégalo y presiona **Enter**.
4. La página baja sola cargando todos tus canales
5. Al terminar se descarga **`suscripciones.txt`**:

```
Nombre del canal | https://www.youtube.com/@canal
Otro canal       | https://www.youtube.com/@otrocanal
```

### Instagram — ¿quién no te sigue de vuelta?

1. Entra a **https://www.instagram.com** desde la computadora, con tu sesión iniciada.
2. Presiona **`F12`** y ve a la pestaña **Consola**.
3. Copia todo el contenido de [`seguidores.js`](instagram/seguidores.js), pégalo y presiona **Enter**.
4. Verás cómo van subiendo los contadores de seguidores y seguidos
5. Al terminar se descarga **`instagram.csv`** (ábrelo en Excel o LibreOffice):

| Usuario | Nombre | Estado | Link |
|---|---|---|---|
| amigo123 | Mi Amigo | Mutuo | instagram.com/amigo123 |
| famoso | Persona Famosa | No te sigue | instagram.com/famoso |
| fan99 | Un Fan | Tú no lo sigues | instagram.com/fan99 |

### Reddit — tus subreddits

**Ver la lista:**
1. Entra a **https://old.reddit.com** con tu sesión iniciada (la versión *old* es importante).
2. **`F12`** → **Consola**, pega [`exportar-subreddits.js`](reddit/exportar-subreddits.js) y presiona **Enter**.
3. Se descarga **`subreddits.csv`** con el nombre, cuántos miembros tiene y su link.

**Desuscribirte de varios de golpe:**
1. Abre [`desuscribir.js`](reddit/desuscribir.js) y escribe en `QUITAR` los subreddits que ya no quieres (sin el `r/`):
   ```js
   const QUITAR = [
     'memes',
     'Ubuntu',
     'u_algunUsuario',   // perfiles de usuario van con "u_"
   ];
   ```
2. En **https://old.reddit.com**, **`F12`** → **Consola**, pega todo y presiona **Enter**.
3. Verás un "OK" por cada uno. Si Reddit pide pausa, el script se detiene solo: espera ~15 min y vuelve a correrlo.

---

## Tips

- **Chrome dice "no pegues código"?** Escribe `allow pasting` (o `permitir pegar`), Enter, y vuelve a pegar.
- **Ordénalo en Excel:** abre el archivo, agrega una columna `¿Borrar?` y ve marcando con una **X**. Así llevas el control.
- **Revísalos uno a uno a pantalla dividida:** el Excel de un lado y el navegador del otro (en [Zen Browser](https://zen-browser.app/) usa *clic derecho → Abrir enlace en vista dividida*).

---

## ¿Es seguro?

- **Corren solo en tu navegador.** Nada se manda a ningún servidor externo.
- **Los de exportar solo leen.** No siguen, no dejan de seguir y no se desuscriben de nada.
- **El único que cambia algo es `reddit/desuscribir.js`**, y solo quita los subreddits que tú escribas en la lista.
- **No piden tu contraseña.** Usan la sesión que ya tienes abierta.
- El de Instagram va **despacio a propósito** (pausas entre peticiones) y, si Instagram pide calma, espera solito un minuto.

> [!WARNING]
> Usa estos scripts **solo con tu propia cuenta** y bajo tu propio riesgo. Instagram, YouTube y Reddit pueden cambiar su página en cualquier momento y hacer que dejen de funcionar. Si tienes muchísimos seguidores, mejor no lo corras varias veces seguidas.

> [!TIP]
> ¿Prefieres la vía 100% oficial para Instagram? Ve a **Centro de cuentas → Descargar tu información → Seguidores y seguidos (JSON)**. Tarda más, pero es la opción sin riesgo alguno.

---

<div align="center">

Hecho con ganas de limpiar el feed · Si te sirvió, regálale una estrella

</div>

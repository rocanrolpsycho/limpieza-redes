<div align="center">

# 🧹 Limpieza de Redes

**Scripts sencillos para poner orden en tus redes sociales — directo desde el navegador.**

Sin instalar nada · Sin apps sospechosas · Sin dar tu contraseña a nadie

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)

</div>

---

## ✨ ¿Qué hay aquí?

| Script | ¿Qué hace? | Te descarga |
|---|---|---|
| 📺 [`youtube/exportar-suscripciones.js`](youtube/exportar-suscripciones.js) | Saca la lista completa de canales a los que estás suscrito | `suscripciones.txt` |
| 📸 [`instagram/seguidores.js`](instagram/seguidores.js) | Compara a quién sigues vs. quién te sigue | `instagram.csv` |

---

## 🚀 Cómo se usan

Los dos funcionan igual: **copias, pegas en la consola y listo.**

### 📺 YouTube — tus suscripciones

1. Entra a **https://www.youtube.com/feed/channels** con tu sesión iniciada.
2. Presiona **`F12`** y ve a la pestaña **Consola**.
3. Copia todo el contenido de [`exportar-suscripciones.js`](youtube/exportar-suscripciones.js), pégalo y presiona **Enter**.
4. La página baja sola cargando todos tus canales ⏳
5. Al terminar se descarga **`suscripciones.txt`**:

```
Nombre del canal | https://www.youtube.com/@canal
Otro canal       | https://www.youtube.com/@otrocanal
```

### 📸 Instagram — ¿quién no te sigue de vuelta?

1. Entra a **https://www.instagram.com** desde la computadora, con tu sesión iniciada.
2. Presiona **`F12`** y ve a la pestaña **Consola**.
3. Copia todo el contenido de [`seguidores.js`](instagram/seguidores.js), pégalo y presiona **Enter**.
4. Verás cómo van subiendo los contadores de seguidores y seguidos ⏳
5. Al terminar se descarga **`instagram.csv`** (ábrelo en Excel o LibreOffice):

| Usuario | Nombre | Estado | Link |
|---|---|---|---|
| amigo123 | Mi Amigo | 🟢 Mutuo | instagram.com/amigo123 |
| famoso | Persona Famosa | 🔴 No te sigue | instagram.com/famoso |
| fan99 | Un Fan | 🔵 Tú no lo sigues | instagram.com/fan99 |

---

## 💡 Tips

- 🧩 **Chrome dice "no pegues código"?** Escribe `allow pasting` (o `permitir pegar`), Enter, y vuelve a pegar.
- 📊 **Ordénalo en Excel:** abre el archivo, agrega una columna `¿Borrar?` y ve marcando con una **X**. Así llevas el control.
- 🪟 **Revísalos uno a uno a pantalla dividida:** el Excel de un lado y el navegador del otro (en [Zen Browser](https://zen-browser.app/) usa *clic derecho → Abrir enlace en vista dividida*).

---

## 🔒 ¿Es seguro?

- ✅ **Corren solo en tu navegador.** Nada se manda a ningún servidor externo.
- ✅ **Solo leen.** No siguen, no dejan de seguir y no se desuscriben de nada — eso lo decides tú, a mano.
- ✅ **No piden tu contraseña.** Usan la sesión que ya tienes abierta.
- 🐢 El de Instagram va **despacio a propósito** (pausas entre peticiones) y, si Instagram pide calma, espera solito un minuto.

> [!WARNING]
> Usa estos scripts **solo con tu propia cuenta** y bajo tu propio riesgo. Instagram y YouTube pueden cambiar su página en cualquier momento y hacer que dejen de funcionar. Si tienes muchísimos seguidores, mejor no lo corras varias veces seguidas.

> [!TIP]
> ¿Prefieres la vía 100% oficial para Instagram? Ve a **Centro de cuentas → Descargar tu información → Seguidores y seguidos (JSON)**. Tarda más, pero es la opción sin riesgo alguno.

---

<div align="center">

Hecho con ☕ y ganas de limpiar el feed · ⭐ Si te sirvió, regálale una estrella

</div>

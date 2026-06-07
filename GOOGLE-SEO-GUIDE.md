# Guía: poner el sitio en línea y que aparezca en Google

Sitio: **APM Security Services** · Dominio: **apmsecurityservices.com**
Repo: `Aletziz/APM-security-services`

Sigue los bloques en orden. Tiempo total ~45 min de trabajo (Google tarda días en indexar).

---

## 1) Desplegar en Vercel

1. Entra a **https://vercel.com** y crea cuenta (botón *Continue with GitHub* — usa tu cuenta `Aletziz`).
2. Clic en **Add New… → Project**.
3. En la lista de repos, busca **APM-security-services** y pulsa **Import**.
4. Vercel detecta Astro automáticamente. No cambies nada:
   - Framework Preset: **Astro**
   - Build Command: `astro build`
   - Output Directory: `dist`
5. Pulsa **Deploy** y espera ~1 minuto.
6. Te dará una URL temporal tipo `apm-security-services.vercel.app`. Ábrela para confirmar que se ve bien.

> A partir de aquí, **cada vez que se haga `git push` a `main`, Vercel republica solo.**

---

## 2) Conectar el dominio apmsecurityservices.com

Primero necesitas **ser dueño del dominio**. Si aún no lo compraste, hazlo en un registrador
(Namecheap, GoDaddy, Google Domains/Squarespace, Cloudflare, etc.).

En Vercel:

1. Abre tu proyecto → **Settings → Domains**.
2. Escribe `apmsecurityservices.com` y pulsa **Add**.
3. Añade también `www.apmsecurityservices.com` (Vercel lo redirige al principal).
4. Vercel te mostrará los **registros DNS** que debes poner en tu registrador. Normalmente:

   | Tipo  | Nombre | Valor |
   |-------|--------|-------|
   | `A`     | `@`    | `76.76.21.21` |
   | `CNAME` | `www`  | `cname.vercel-dns.com` |

   > **Usa siempre los valores exactos que muestre TU panel de Vercel** (pueden variar).
   > Si tu DNS está en **Cloudflare**, pon los registros en modo **DNS only** (nube gris), no proxy.

5. Guarda en el registrador. La propagación DNS tarda de minutos a 24–48 h.
6. Cuando Vercel muestre **"Valid Configuration"** y el candado 🔒 (HTTPS) esté activo, listo.
7. Verifica que `https://apmsecurityservices.com` abre el sitio con candado.

---

## 3) Google Search Console (para que Google indexe el sitio)

Esto le dice a Google "este sitio existe, indéxalo".

1. Entra a **https://search.google.com/search-console** con tu cuenta de Google.
2. Pulsa **Agregar propiedad** → elige el tipo **Dominio** (recomendado).
3. Escribe `apmsecurityservices.com` y pulsa **Continuar**.
4. Google te da un registro **TXT** para verificar. Cópialo y créalo en el DNS de tu registrador:

   | Tipo  | Nombre | Valor |
   |-------|--------|-------|
   | `TXT`   | `@`    | `google-site-verification=........` (el que te dé Google) |

5. Espera unos minutos y pulsa **Verificar**.
6. Ya verificado, ve a **Sitemaps** (menú izquierdo) e ingresa:
   ```
   sitemap-index.xml
   ```
   pulsa **Enviar**. (URL completa: `https://apmsecurityservices.com/sitemap-index.xml`)
7. Ve a **Inspección de URLs**, pega `https://apmsecurityservices.com/` y pulsa
   **Solicitar indexación**. Esto acelera la primera aparición.

> Google puede tardar de **2 días a 2 semanas** en mostrar el sitio en resultados. Es normal.

---

## 4) Perfil de Empresa de Google — ⭐ LO MÁS IMPORTANTE para las ubicaciones

Para que aparezcas cuando alguien busque *"security guard West Palm Beach"*,
*"seguridad Miami"*, etc., y salgas en **Google Maps**, necesitas un **Perfil de Empresa
de Google** (antes "Google My Business"). Es gratis.

1. Entra a **https://business.google.com** → **Administrar ahora**.
2. Nombre del negocio: **APM Security Services**.
3. Categoría principal: **Security guard service** (Servicio de guardias de seguridad).
   Categorías secundarias: *Security service*, *Protection service*.
4. ¿Tienes oficina física que los clientes visitan?
   - **No (vas donde el cliente):** elige **"Presto servicios a domicilio"** y NO muestres
     dirección. Luego define **áreas de servicio**:
     **West Palm Beach, Broward (Fort Lauderdale), Miami, Orlando** (y ciudades cercanas).
   - **Sí:** ingresa la dirección real.
5. Teléfono: **+1 561 808-5917** · Sitio web: **https://apmsecurityservices.com**
6. **Verificación:** Google pedirá verificar (por teléfono, video o postal). Complétalo —
   sin verificar no apareces en Maps.
7. Una vez verificado, completa el perfil al 100 %:
   - Descripción (usa palabras clave: *licensed security guards, vehicle patrol, custom
     protection officers, West Palm Beach, Broward, Miami, Orlando*).
   - Horario: **Abierto 24 horas**.
   - Sube **fotos** (logo, los oficiales, los vehículos — puedes usar las del sitio).
   - Activa **mensajes** y **llamadas**.
8. **Pide reseñas** a tus primeros clientes: las reseñas son el factor #1 para posicionar
   localmente. Comparte el enlace "Escribir reseña" que te da tu perfil.

---

## 5) (Opcional pero recomendado)

- **Bing Webmaster Tools** (https://www.bing.com/webmasters): importa directo desde Search
  Console y envía el mismo sitemap. Cubre Bing + asistentes que usan Bing.
- **Directorios locales** con datos idénticos (mismo nombre, teléfono, web): Yelp, Yellow
  Pages, Apple Maps (Business Connect). La **consistencia** del nombre/teléfono ayuda al SEO local.
- **Redes sociales:** crea Facebook/Instagram con el mismo nombre y enlaza al sitio.
  (Si me pasas los enlaces, los agrego al sitio y a los datos estructurados.)

---

## 6) Comprobaciones rápidas

- Vista previa al compartir el link (WhatsApp/Facebook): pega `https://apmsecurityservices.com`
  en https://www.opengraph.xyz para ver la imagen y el texto.
- Datos estructurados: prueba en https://search.google.com/test/rich-results.
- Velocidad/SEO técnico: https://pagespeed.web.dev.

---

## ¿Qué palabras clave ya cubre el sitio?

El sitio está optimizado para buscar por **nombre** (APM Security Services) y por
**servicio + ubicación**, por ejemplo:

- security guard / security company **Florida**
- security guards **West Palm Beach / Broward / Miami / Orlando**
- vehicle patrol security · custom protection officers · executive protection
- event security · 24/7 security services · licensed security guards · private security

Estas están en el título, la descripción, las palabras clave, los textos y los datos
estructurados del negocio (JSON-LD), tanto en inglés como en español.

---

### Resumen del orden a seguir
1. Vercel: importar repo y desplegar.
2. Añadir el dominio en Vercel + poner los DNS en el registrador.
3. Search Console: verificar (TXT) + enviar `sitemap-index.xml` + solicitar indexación.
4. **Perfil de Empresa de Google** verificado con áreas de servicio (lo más importante para lo local).
5. Reseñas + directorios + redes.

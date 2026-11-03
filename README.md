# Scrubie-Hub.pk storefront (React + Vite)

A source-code rebuild of https://scrubiehub.vercel.app/ that renders pixel-identical to the live site.

## Run it

```bash
npm install
npm run dev      # development server on http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Project layout

```
index.html              Page shell, title, meta, Google Fonts
public/assets/          Logo, product photos, before/after images (served as-is)
src/main.jsx            Entry point: mounts the app inside the cart and wishlist providers
src/App.jsx             Full storefront: header, hero, shop, product quick view, cart,
                        wishlist, checkout, search, About/Contact pages, admin panel
src/index.css           Compiled stylesheet from the original build (Tailwind output)
```

## Verification

Compared against the live site with headless Chromium:

- Full-page screenshots at 1440px and 390px wide: zero differing pixels.
- Quick View modal opened from the first product card: zero differing pixels.
- No console or page errors.

## Notes

1. **Missing product images.** The original build references four files that were not in the upload and that also return 404 on the live site:
   - `products/body-scrubs/moroccan-nila-collage.jpeg`
   - `products/body-scrubs/rosey-rose-collage.jpeg`
   - `products/body-scrubs/turmeric-scrub-collage.jpeg`
   - `products/body-scrubs/turmeric-scrub-satin.jpeg`

   The code still points to these paths, so the same broken images appear as on the live site. Drop the files into `public/assets/products/body-scrubs/` to fill them in.

2. **Styling.** `src/index.css` is the compiled stylesheet from your original build. The classes in `App.jsx` (including custom colours such as `brand-600`) depend on the original Tailwind config, which wasn't in the upload. Edit classes freely, but any new Tailwind utility will need a Tailwind config (`brand-*` palette, `shadow-soft`, `animate-soft-float`, `animate-bounce-slow`, `marquee-track`) to be generated.

3. **Names.** The build had minified identifiers, so most component names are short (for example `Wx`, `Kx`). Behaviour is unchanged. Renaming them is a safe, optional cleanup.

4. **Admin panel.** The admin screen from the original build is included and opens at `/admin` or `#admin`. Anything checked in the browser can be read from the shipped JavaScript, so keep sensitive logic (such as the admin PIN) on a server before going live.

5. **Stored data.** Cart, wishlist, product catalog, and categories are saved in the browser's localStorage, as in the original.

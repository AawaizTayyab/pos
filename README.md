# ShopPOS – Shop Management & POS Prototype
Open `index.html` in a browser. No server, build step or dependencies. Data lives in localStorage (Settings → Reset Demo Data to restore).

**Demo logins:** admin@demo.com/admin123 · manager@demo.com/manager123 · cashier@demo.com/cashier123 · viewer@demo.com/viewer123

**Printing:** Products/Low Stock/POS/Sales → Print. Choose document, Thermal 58mm / 80mm / A4, and the A4 background toggle. Thermal and A4 are separate layouts (`js/print.js`, `css/print.css`). In the browser print dialog, set margins to "None/Default" and enable "Background graphics" for A4 backgrounds.

**Access control:** `js/permissions.js` defines module × view/create/edit/delete presets. Buttons and pages are hidden per user; restricted pages show "Access Restricted".

## Deploy on GitHub Pages
Push this folder to a GitHub repo → Settings → Pages → Branch: `main` / root → Save. The live link will be `https://<username>.github.io/<repo>/`.

# NEXORA

```
index.html                 beranda
pages/                     halaman publik
  harga-hosting.html
  faq.html
  kontak.html              Hubungi kami (isi diatur dari dashboard admin > Kontak)
  terms.html
  privacy.html
akun/                      area customer
  masuk.html               login dan daftar
  dashboard.html           dashboard customer
admin/                     area admin
  nexora-admin-access.html login admin
  nexora-admin.html        dashboard admin
assets/
  css/  style.css, dash.css
  js/   script.js, dash.js
  img/  logo.png, qr-discord.png, plugin/, paket/
```

Semua link antar-file memakai path relatif, jadi folder ini bisa dibuka dari mana saja
(file langsung, live server, atau hosting). Kalau menambah halaman baru di `pages/`,
pakai pola yang sama dengan `pages/faq.html`: `../assets/...` untuk css/js/gambar dan
`../index.html` untuk link ke beranda.

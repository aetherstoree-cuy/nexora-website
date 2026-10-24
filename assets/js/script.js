/* Lokasi folder: file ini ada di assets/js/. ASSET_BASE = folder assets/, ROOT = folder utama situs.
   Dipakai agar path gambar dan link akun benar dari halaman di folder mana pun. */
const ASSET_BASE = (function () { var s = document.currentScript || document.querySelector('script[src*="script.js"]'); return s ? s.src.replace(/js\/[^\/]*$/, "") : "assets/"; })();
const ROOT = ASSET_BASE.replace(/assets\/$/, "");

/* NEXORA – script.js */

/* ===== 1. KONFIGURASI KONTAK (isi dengan milikmu) ===== */
const KONTAK = {
  discord: "",   // contoh: "https://discord.gg/kodeinvite"
  whatsapp: ""   // contoh: "6281234567890" (pakai 62, tanpa + dan tanpa 0 di depan)
};

/* ===== Kontak yang bisa diedit dari dashboard admin (demo: tersimpan di browser) ===== */
const KONTAK_TIPE = {
  email: ["Email", "envelope", "Kirim email"], whatsapp: ["WhatsApp", "whatsapp", "Chat WhatsApp"], discord: ["Discord", "discord", "Gabung Discord"],
  instagram: ["Instagram", "instagram", "Buka Instagram"], telegram: ["Telegram", "telegram", "Buka Telegram"], youtube: ["YouTube", "youtube", "Buka YouTube"], lainnya: ["Link", "link-45deg", "Buka link"]
};
function kontakBawaan() {
  return [
    { id: "k1", tipe: "discord", label: "Discord", nilai: KONTAK.discord || "https://discord.gg/7bFYCRheRm", ket: "Konsultasi dan order lewat server Discord NEXORA.", aktif: true },
    { id: "k2", tipe: "whatsapp", label: "WhatsApp", nilai: KONTAK.whatsapp || "6281234567890", ket: "Chat langsung dengan tim NEXORA.", aktif: true },
    { id: "k3", tipe: "email", label: "Email", nilai: "halo@nexora.id", ket: "Untuk pertanyaan dan kerja sama.", aktif: true }
  ];
}
function kontakData() {
  try { const v = localStorage.getItem("nx-kontak"); if (v) { const a = JSON.parse(v); if (Array.isArray(a)) return a; } } catch (x) {}
  return kontakBawaan();
}
(function () {
  const a = kontakData().filter(function (k) { return k.aktif !== false; });
  const d = a.filter(function (k) { return k.tipe === "discord"; })[0], w = a.filter(function (k) { return k.tipe === "whatsapp"; })[0];
  if (d) KONTAK.discord = d.nilai;
  if (w) KONTAK.whatsapp = String(w.nilai).replace(/\D/g, "");
})();

/* ===== 2. DATA HARGA (semua angka hanya contoh, silakan ganti) =====
   Tiap paket: nama, kat (kategori), harga (angka), ringkas, fitur[], populer (opsional).
   Tambah paket baru = tambah satu baris di array "paket". */
const HARGA = {
  minecraft: {
    nama: "Setup server Minecraft", satuan: "paket",
    kategori: ["Vanilla", "Plugin", "Mod", "Komunitas"],
    paket: [
      { nama: "Vanilla Starter", kat: "JAVA VERSION", harga: 40000, ringkas: "Server dasar untuk main bareng teman.", fitur: ["Server vanilla Java", "Whitelist & operator", "Pengaturan dasar"] },
    ]
  },
  discord: {
    nama: "Setup server Discord", satuan: "paket",
    kategori: ["Dasar", "Bot", "Komunitas", "Bisnis"],
    paket: [
      { nama: "Rapi Dasar", kat: "Dasar", harga: 20000, ringkas: "Channel dan role dasar.", fitur: ["Channel & kategori", "Role dasar", "Aturan server"] },
      { nama: "Server Gaming", kat: "Dasar", harga: 35000, ringkas: "Struktur khusus komunitas game.", fitur: ["Channel suara & teks", "Role per game", "Aturan server"] },
      { nama: "Welcome & Verifikasi", kat: "Bot", harga: 40000, ringkas: "Sambutan dan verifikasi member baru.", fitur: ["Pesan sambutan", "Verifikasi member", "Role otomatis"] },

    ]
  },
  hosting: {
    nama: "Hosting", satuan: "bulan", tanpaSemua: true,
    deskripsi: "Pilih paket hosting yang sesuai dengan kebutuhan server game Anda. Dari pemula hingga profesional, kami punya solusinya!",
    kategori: ["Basic", "Premium"],
    info: {
      Basic: { judul: "🚀 Basic", fitur: ["Perlindungan DDoS", "Upgrade kapan saja"], teks: "Sempurna untuk server kecil hingga menengah. Cocok untuk pemula yang ingin memulai server gaming dengan budget terjangkau." },
      Premium: { judul: "🏆 Premium", fitur: ["Sumber Daya Prioritas", "Perlindungan Terdepan"], teks: "Untuk server gaming serius yang membutuhkan performa stabil. Memberikan prioritas resource dan reliability yang lebih tinggi." }
    },
    paket: [
      { nama: "Pulse", kat: "Basic", harga: 19000, ringkas: "Untuk mulai dengan resource ringan.", fitur: ["CPU 100%", "RAM 1 GB", "Storage 8 GB", "1 MySQL Database", "1 Automatic Backup"] },
      { nama: "Orbit", kat: "Basic", harga: 36000, ringkas: "Pilihan pas untuk server kecil.", populer: true, fitur: ["CPU 100%", "RAM 2 GB", "Storage 8 GB", "1 MySQL Database", "1 Automatic Backup"] },
      { nama: "Nova", kat: "Basic", harga: 70000, ringkas: "Ruang lebih untuk komunitas kecil.", fitur: ["CPU 150%", "RAM 4 GB", "Storage 20 GB", "1 MySQL Database", "1 Automatic Backup"] },
      { nama: "Quasar", kat: "Basic", harga: 104000, ringkas: "Untuk yang mulai ramai.", fitur: ["CPU 200%", "RAM 6 GB", "Storage 24 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Nebula", kat: "Basic", harga: 138000, ringkas: "Resource lega untuk komunitas aktif.", fitur: ["CPU 250%", "RAM 8 GB", "Storage 32 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Astra", kat: "Basic", harga: 172000, ringkas: "Untuk komunitas yang terus tumbuh.", fitur: ["CPU 300%", "RAM 10 GB", "Storage 32 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Zenith", kat: "Basic", harga: 207000, ringkas: "Ruang besar untuk komunitas ramai.", fitur: ["CPU 350%", "RAM 12 GB", "Storage 40 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Cosmos", kat: "Basic", harga: 275000, ringkas: "Untuk kebutuhan skala besar.", fitur: ["CPU 400%", "RAM 16 GB", "Storage 64 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Eclipse", kat: "Basic", harga: 412000, ringkas: "Resource besar untuk server ramai.", fitur: ["CPU 450%", "RAM 24 GB", "Storage 80 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Infinity", kat: "Basic", harga: 549000, ringkas: "Resource tertinggi di Basic.", fitur: ["CPU 500%", "RAM 32 GB", "Storage 96 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Aurora", kat: "Premium", harga: 24999, ringkas: "Awal yang nyaman di Premium.", fitur: ["CPU 150%", "RAM 1 GB", "Storage 10 GB", "1 MySQL Database", "1 Automatic Backup"] },
      { nama: "Vega", kat: "Premium", harga: 48000, ringkas: "CPU lebih tinggi untuk server kecil.", fitur: ["CPU 200%", "RAM 2 GB", "Storage 10 GB", "1 MySQL Database", "1 Automatic Backup"] },
      { nama: "Sirius", kat: "Premium", harga: 94000, ringkas: "Seimbang dengan backup lebih banyak.", fitur: ["CPU 250%", "RAM 4 GB", "Storage 24 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Polaris", kat: "Premium", harga: 140000, ringkas: "Untuk komunitas yang mulai ramai.", populer: true, fitur: ["CPU 300%", "RAM 6 GB", "Storage 28 GB", "1 MySQL Database", "2 Automatic Backups"] },
      { nama: "Arcturus", kat: "Premium", harga: 186000, ringkas: "Ruang lega dengan 3 backup.", fitur: ["CPU 350%", "RAM 8 GB", "Storage 36 GB", "1 MySQL Database", "3 Automatic Backups"] },
      { nama: "Draco", kat: "Premium", harga: 233000, ringkas: "Untuk komunitas yang terus tumbuh.", fitur: ["CPU 400%", "RAM 10 GB", "Storage 40 GB", "1 MySQL Database", "3 Automatic Backups"] },
      { nama: "Andromeda", kat: "Premium", harga: 279000, ringkas: "Ruang besar untuk komunitas ramai.", fitur: ["CPU 450%", "RAM 12 GB", "Storage 48 GB", "1 MySQL Database", "3 Automatic Backups"] },
      { nama: "Celestia", kat: "Premium", harga: 372000, ringkas: "Untuk kebutuhan skala besar.", fitur: ["CPU 500%", "RAM 16 GB", "Storage 72 GB", "1 MySQL Database", "3 Automatic Backups"] },
      { nama: "Stellaris", kat: "Premium", harga: 558000, ringkas: "Resource besar untuk skala besar.", fitur: ["CPU 600%", "RAM 24 GB", "Storage 96 GB", "1 MySQL Database", "3 Automatic Backups"] },
      { nama: "Empyrean", kat: "Premium", harga: 744000, ringkas: "Resource tertinggi di Premium.", fitur: ["CPU 700%", "RAM 32 GB", "Storage 112 GB", "1 MySQL Database", "3 Automatic Backups"] }
    ]
  }
};

/* ===== 3. TEKS UMUM ===== */
const TXT = { semua: "Semua", n_paket: "paket", pesan: "Pesan paket ini", populer: "Populer", kosong: "Belum ada paket di kategori ini.",
  u_bulan: "bulan", u_paket: "paket", wa_tanya: "Halo NEXORA, saya mau tanya layanan.",
  sh_awal: "Urutan bawaan", sh_murah: "Harga terendah dulu", sh_mahal: "Harga tertinggi dulu" };
const IK_KAT = { Basic: "bi-rocket-takeoff", Premium: "bi-trophy" };
const IK_FITUR = { "Perlindungan DDoS": "bi-shield-check", "Upgrade kapan saja": "bi-arrow-up-circle", "Sumber Daya Prioritas": "bi-lightning-charge", "Perlindungan Terdepan": "bi-shield-lock" };
function t(k) { return TXT[k] || k; }
function rupiah(n) { return "Rp\u00a0" + n.toLocaleString("id-ID"); }
function hargaHTML(n, satuan) { return rupiah(n) + '<span class="per">/' + t("u_" + satuan) + "</span>"; }

/* ===== 4. KONTAK ===== */
function linkPesan(pesan) {
  if (KONTAK.discord) return KONTAK.discord;
  if (KONTAK.whatsapp) return "https://wa.me/" + KONTAK.whatsapp + "?text=" + encodeURIComponent(pesan);
  return "#";
}

function pasangKontak() {
  document.querySelectorAll(".k-dc").forEach(function (dc) {
    dc.href = KONTAK.discord || "#";
    if (KONTAK.discord) { dc.target = "_blank"; dc.rel = "noopener"; }
  });
  document.querySelectorAll(".k-wa").forEach(function (wa) {
    wa.href = KONTAK.whatsapp ? "https://wa.me/" + KONTAK.whatsapp + "?text=" + encodeURIComponent(t("wa_tanya")) : "#";
    if (KONTAK.whatsapp) { wa.target = "_blank"; wa.rel = "noopener"; }
  });
}

function isiMulai() {
  const semua = HARGA.minecraft.paket.concat(HARGA.discord.paket).map(function (p) { return p.harga; });
  const min = Math.min.apply(null, semua);
  document.querySelectorAll("[data-mulai]").forEach(function (el) { el.innerHTML = hargaHTML(min, "paket"); });
}

/* ===== 5. TEMA, MENU, NAVBAR, ANIMASI ===== */
function temaSaatIni() {
  return document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function gantiTema(baru) {
  const d = document.documentElement;
  function terapkan() {
    d.dataset.theme = baru;
    try { localStorage.setItem("nexora-theme", baru); } catch (e) {}
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = baru === "dark" ? "#14111f" : "#7c5cff";
  }
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return terapkan();
  if (document.startViewTransition) {
    d.classList.add("theme-vt");
    const bersih = function () { d.classList.remove("theme-vt"); };
    try { document.startViewTransition(terapkan).finished.then(bersih, bersih); } catch (e) { terapkan(); bersih(); }
  } else {
    d.classList.add("theme-fade"); terapkan();
    setTimeout(function () { d.classList.remove("theme-fade"); }, 450);
  }
}

function pasangTema() {
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () { gantiTema(temaSaatIni() === "dark" ? "light" : "dark"); });
  });
}

function pasangMenu() {
  document.querySelectorAll(".topbar").forEach(function (bar) {
    const btn = bar.querySelector(".menu-btn");
    if (!btn) return;
    function atur(buka) {
      bar.classList.toggle("open", buka);
      btn.setAttribute("aria-expanded", String(buka));
      btn.setAttribute("aria-label", buka ? "Tutup menu" : "Buka menu");
    }
    btn.addEventListener("click", function () { atur(!bar.classList.contains("open")); });
    bar.querySelectorAll("nav a").forEach(function (a) { a.addEventListener("click", function () { atur(false); }); });
    document.addEventListener("click", function (e) { if (!bar.contains(e.target)) atur(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") atur(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 820) atur(false); });
  });
}

function pasangNavbar() {
  const bars = document.querySelectorAll(".topbar");
  function cek() {
    const y = window.scrollY > 8;
    bars.forEach(function (b) { b.classList.toggle("scrolled", y); });
  }
  window.addEventListener("scroll", cek, { passive: true });
  cek();
}

const ELEMEN_ANIMASI = ".eyebrow,.hero-copy h1,.hero-copy p,.hero-copy .actions,.hero-chips,.hero-visual,.page-head h1,.page-head p,.stats,.tabs,.toolbar,.tab-desc,section>.wrap>h2,section>.wrap>.lead,.plug,.flow-tabs,.flow,.svc,.faq,.cta-card,.note,.site-footer";

/* Jeda bertahap supaya elemen muncul satu per satu */
function siapkanAnimasi(akar) {
  (akar || document).querySelectorAll(ELEMEN_ANIMASI).forEach(function (el, i) {
    el.style.setProperty("--i", Math.min(i + 1, 14));
  });
}

/* Angka naik di panel hero */
function siapkanHero() {
  const kurang = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-count]").forEach(function (el) {
    const target = Number(el.dataset.count);
    const akhir = el.dataset.suffix || "";
    const jeda = Number(el.dataset.delay || 2900);
    const durasi = Number(el.dataset.dur || 1200);
    if (kurang) { el.textContent = target + akhir; return; }
    el.textContent = "0" + akhir;
    setTimeout(function () {
      const mulai = performance.now();
      (function langkah(now) {
        const p = Math.min((now - mulai) / durasi, 1);
        const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        el.textContent = Math.round(target * e) + akhir;
        if (p < 1) requestAnimationFrame(langkah);
      })(mulai);
    }, jeda);
  });
}

/* Efek hover mengikuti kursor (panel server = cekung, kartu CTA = titik-titik + garis tepi) */
function pasangSpot() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".spot").forEach(function (el) {
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, aktif = false;
    function loop() {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      el.style.setProperty("--mx", x + "px");
      el.style.setProperty("--my", y + "px");
      if (el.dataset.tilt) {
        el.style.setProperty("--rx", ((0.5 - y / el.offsetHeight) * 6) + "deg");
        el.style.setProperty("--ry", ((x / el.offsetWidth - 0.5) * 6) + "deg");
      }
      raf = (aktif || Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) ? requestAnimationFrame(loop) : 0;
    }
    el.addEventListener("pointermove", function (e) {
      if (e.pointerType === "touch") return;
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!aktif) { aktif = true; x = tx; y = ty; }
      if (!raf) raf = requestAnimationFrame(loop);
    });
    el.addEventListener("pointerleave", function () {
      aktif = false;
      tx = el.offsetWidth / 2; ty = el.offsetHeight / 2;
      if (!raf) raf = requestAnimationFrame(loop);
    });
  });
}

/* ===== 5b. CARA KERJA, MARQUEE, DROPDOWN URUTKAN ===== */
const ALUR = {
  tahu: [
    { j: "Masuk atau buat akun", d: "Klik Masuk di pojok kanan atas. Belum punya akun? Daftar gratis, cukup nama dan email.",
      v: "login" },
    { j: "Buka ticket di dashboard", d: "Di dashboard customer, klik Buka ticket lalu pilih jenis ticket: Order baru, Bantuan, atau Lainnya.",
      v: "form", x: { f: 1 } },
    { j: "Pilih layanan dan paket", d: "Pilih layanan (Setup Minecraft, Setup Discord, atau Hosting), lalu pilih paket dari daftar harga.",
      v: "form", x: { f: 2 } },
    { j: "Ceritakan kebutuhanmu", d: "Tulis subjek dan pesan: versi, jumlah pemain, plugin atau fitur yang diinginkan. Lalu klik Kirim ticket.",
      v: "form", x: { f: 3 } },
    { j: "Admin membalas ticket kamu", d: "Admin membalas langsung di ticket dan status berubah jadi Terhubung dengan admin. Kalau masih bingung, tanya aja di sini.",
      v: "chat", x: { cap: "T-1044 \u00b7 Terhubung dengan admin", m: [
        ["me", "Aku mau pasang plugin untuk server survival, sekitar 20 pemain."],
        ["us", "Hallo kak, pesananmu sudah kami terima. Kami cek detailnya dulu yaa."]
      ] } },
    { j: "Terima tagihan dan bayar", d: "Admin mengirim tagihan dengan harga akhir. Transfer sesuai petunjuk, lalu kirim bukti bayarnya di ticket.",
      v: "chat", x: { cap: "T-1044 \u00b7 Menunggu pembayaran", m: [
        ["us", "Tagihan Plugin Minecraft Rp 10.000 sudah kami kirim yaa. Silakan transfer lalu kirim buktinya di sini."],
        ["me", "Sudah aku transfer, ini bukti transfernya."],
        ["us", "Terima kasih, pembayaran sudah kami konfirmasi."]
      ] } },
    { j: "Pesanan diproses", d: "Setelah pembayaran dikonfirmasi, admin mengerjakan pesananmu. Perkembangannya bisa kamu pantau dari ticket.",
      v: "progres", x: { cap: "T-1044 \u00b7 Pesanan diproses" } },
    { j: "Pesanan selesai", d: "Pesananmu selesai dan diserahkan lewat ticket. Kalau ada yang kurang, kamu masih bisa chat admin.",
      v: "selesai", x: { ok: "Orderan selesai", t: ["Pesanan selesai disiapkan", "Pesanan dikirim lewat ticket", "Kamu menerima pesananmu"] } },
    { j: "Ticket ditutup", d: "Kalau semua sudah beres, admin menutup ticket. Riwayatnya tetap bisa kamu lihat di dashboard.",
      v: "selesai", x: { ok: "Ticket ditutup", closed: true, t: ["Pesananmu sudah beres", "Admin menutup ticket", "Terima kasih sudah order di NEXORA"] } }
  ]
};
ALUR.bingung = ALUR.tahu;

function panelAlur(s) {
  function k(i) { return ' style="--k:' + i + '"'; }
  function tugas(daftar, selesai) {
    return daftar.map(function (u, i) {
      return '<div class="fb-task ' + (i < selesai ? "done" : "now") + '"' + k(i + 2) + "><i></i>" + u + "</div>";
    }).join("");
  }
  if (s.v === "login") {
    return '<div class="fb-cap"' + k(0) + ">Akun NEXORA</div>" +
      '<div class="fm-tabs"' + k(1) + '><span class="on">Masuk</span><span>Daftar</span></div>' +
      '<div class="fm-fld"' + k(2) + "><small>Email</small><div>kamu@email.com</div></div>" +
      '<div class="fm-fld"' + k(3) + "><small>Password</small><div>\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022</div></div>" +
      '<div class="fb-cta"' + k(4) + ">Masuk</div>";
  }
  if (s.v === "form") {
    const f = s.x.f;
    const dots = [1, 2, 3].map(function (n) { return '<i class="' + (n === f ? "on" : n < f ? "done" : "") + '">' + n + "</i>"; }).join("<u></u>");
    const judul = ["Pilih jenis", "Pilih layanan dan paket", "Ceritakan kebutuhanmu"][f - 1];
    let isi = "";
    if (f === 1) {
      isi = [["Order baru", "Pesan setup atau hosting"], ["Bantuan", "Tanya atau lapor kendala"], ["Lainnya", "Keperluan lain"]].map(function (o, i) {
        return '<div class="fb-opt' + (i === 0 ? " sel" : "") + '"' + k(i + 2) + "><i></i><div><b>" + o[0] + "</b><small>" + o[1] + "</small></div></div>";
      }).join("");
    } else if (f === 2) {
      isi = '<div class="fm-seg"' + k(2) + ">" + ["Setup Minecraft", "Setup Discord", "Hosting"].map(function (n, i) { return "<span" + (i === 0 ? ' class="on"' : "") + ">" + n + "</span>"; }).join("") + "</div>" +
        '<div class="fm-fld"' + k(3) + "><small>Paket</small><div class=\"fm-dd\"><span><b>Plugin Minecraft</b><em>Rp 10.000</em></span><i>\u25BE</i></div></div>";
    } else {
      isi = '<div class="fm-fld"' + k(2) + "><small>Subjek</small><div>Order Plugin Minecraft</div></div>" +
        '<div class="fm-fld"' + k(3) + "><small>Pesan</small><div class=\"fm-ta\">Aku mau pasang plugin untuk server survival, sekitar 20 pemain. Versi Java 1.21.</div></div>" +
        '<div class="fb-cta"' + k(4) + ">Kirim ticket</div>";
    }
    return '<div class="fm-head"' + k(0) + '><b>Buka ticket</b><span class="fm-st">' + dots + "</span></div>" +
      '<div class="fb-cap"' + k(1) + "><b>" + f + ". " + judul + "</b></div>" + isi;
  }
  if (s.v === "opsi") {
    return '<div class="fb-cap"' + k(0) + ">" + s.x.cap + "</div>" + s.x.o.map(function (o, i) {
      return '<div class="fb-opt' + (i === s.x.sel ? " sel" : "") + '"' + k(i + 1) + "><i></i><div><b>" + o[0] + "</b><small>" + o[1] + "</small></div></div>";
    }).join("");
  }
  if (s.v === "rating") {
    const bintang = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>';
    let b = "";
    for (let i = 0; i < 5; i++) b += '<span style="--k:' + (i + 1) + '">' + bintang + "</span>";
    return '<div class="fb-cap"' + k(0) + ">" + s.x.cap + '</div><div class="fb-stars">' + b + '</div><div class="fb-cta"' + k(6) + ">" + s.x.cta + "</div>";
  }
  if (s.v === "pilih") {
    const m = HARGA.minecraft.paket;
    return '<div class="fb-cap"' + k(0) + ">" + s.x.cap + "</div>" + [m[0], m[3], m[4]].map(function (p, i) {
      return '<div class="fb-plan' + (i === 1 ? " sel" : "") + '"' + k(i + 1) + "><div><b>" + p.nama + "</b><small>" + p.ringkas + '</small></div><span class="pr">' + rupiah(p.harga) + "</span></div>";
    }).join("") + '<div class="fb-cta"' + k(4) + ">" + s.x.cta + "</div>";
  }
  if (s.v === "chat") {
    return (s.x.cap ? '<div class="fb-cap"' + k(0) + ">" + s.x.cap + "</div>" : "") + s.x.m.map(function (m, i) { return '<div class="fb-msg ' + m[0] + '"' + k(i + 1) + ">" + m[1] + "</div>"; }).join("");
  }
  if (s.v === "progres") {
    return '<div class="fb-cap"' + k(0) + ">" + (s.x && s.x.cap ? s.x.cap : "Progres setup") + "<b>75%</b></div>" +
      '<div class="fb-bar"' + k(1) + "><span></span></div>" +
      tugas([
        "Server dibuat",
        "Plugin & konfigurasi dipasang",
        "Whitelist & izin diatur",
        "Performa dioptimasi"
      ], 3);
  }
  const x = s.x || {};
  return '<div class="fb-ok' + (x.closed ? " closed" : "") + '"' + k(0) + "><i></i>" + (x.ok || "Server online") + "</div>" +
    tugas(x.t || [
      "Server berjalan sesuai pesanan",
      "Akses admin diserahkan",
      "Panduan singkat diterima"
    ], 3);
}

function initAlur() {
  const box = document.getElementById("alur");
  if (!box) return;
  const list = box.querySelector(".flow-steps");
  const body = box.querySelector(".flow-body");
  const lbl = box.querySelector(".fc-step");
  const tabs = document.querySelectorAll(".flow-tab");
  let mode = "tahu", idx = 0;

  function nomor(i) { return (i + 1 < 10 ? "0" : "") + (i + 1); }

  function tampil() {
    const steps = ALUR[mode];
    Array.prototype.forEach.call(list.children, function (li, i) {
      li.classList.toggle("on", i === idx);
      li.classList.toggle("done", i < idx);
      const b = li.firstChild;
      b.setAttribute("aria-current", i === idx ? "step" : "false");
      const lama = b.querySelector(".fs-bar");
      if (lama) lama.remove();
      if (i === idx) { const bar = document.createElement("i"); bar.className = "fs-bar"; b.appendChild(bar); }
    });
    body.innerHTML = panelAlur(steps[idx]);
    lbl.textContent = "Langkah " + (idx + 1) + " dari " + steps.length;
  }
  function buat() {
    list.innerHTML = ALUR[mode].map(function (s, i) {
      return '<li class="fs"><button type="button" data-i="' + i + '"><span class="fs-n">' + nomor(i) + '</span><span class="fs-t"><b>' + s.j + "</b><small>" + s.d + '</small></span></button></li>';
    }).join("");
    tampil();
  }
  list.addEventListener("click", function (e) {
    const b = e.target.closest("button");
    if (!b) return;
    idx = Number(b.dataset.i);
    tampil();
  });
  /* Jalan otomatis: bar di langkah aktif penuh, lalu pindah ke langkah berikutnya */
  list.addEventListener("animationend", function (e) {
    if (e.animationName !== "flowbar") return;
    idx = (idx + 1) % ALUR[mode].length;
    tampil();
  });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { box.classList.toggle("off", !es[0].isIntersecting); }, { threshold: 0.2 }).observe(box);
  }
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      mode = tab.dataset.mode;
      idx = 0;
      tabs.forEach(function (x) { x.setAttribute("aria-selected", String(x === tab)); });
      buat();
    });
  });
  buat();
}

const PLUG = {
  a: ["Paper", "Spigot", "Fabric", "Forge", "EssentialsX", "LuckPerms", "Geyser", "Floodgate", "Simple Voice Chat", "ViaVersion", "WorldEdit"],
};

/* Gambar plugin: taruh file di folder assets/img/plugin/ dengan nama huruf kecil, spasi jadi "-".
   Contoh: Paper -> assets/img/plugin/paper.png, Simple Voice Chat -> assets/img/plugin/simple-voice-chat.png
   Format yang dicoba berurutan: png, webp, svg, jpg. Kalau file tidak ada, huruf pertama dipakai. */
const PLUG_IMG = { folder: ASSET_BASE + "img/plugin/", ext: ["png", "webp", "svg", "jpg"] };
/* Kecepatan marquee: detik per item. Makin kecil makin cepat (bawaan 5) */
const PLUG_DETIK = { cta: 3 };

function slugPlugin(n) { return n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
function cariGambar(folder, exts, slug, selesai) {
  let i = 0;
  (function coba() {
    if (i >= exts.length) { selesai(null); return; }
    const url = folder + slug + "." + exts[i];
    const im = new Image();
    im.onload = function () { selesai(url); };
    im.onerror = function () { i++; coba(); };
    im.src = url;
  })();
}

function pasangMarquee() {
  document.querySelectorAll("[data-marq]").forEach(function (m) {
    const items = PLUG[m.dataset.marq] || [];
    const ikon = m.dataset.marq !== "cta";
    const kartu = items.map(function (n, i) {
      return '<span class="pl">' + (ikon ? '<i style="--c:' + (22 + (i * 17) % 50) + '%" data-s="' + slugPlugin(n) + '">' + n.charAt(0) + "</i>" : "") + n + "</span>";
    }).join("");
    const set = '<div class="marq-set">' + kartu + kartu + "</div>";
    m.innerHTML = '<div class="marq-track">' + set + set.replace('class="marq-set"', 'class="marq-set" aria-hidden="true"') + "</div>";
    m.style.setProperty("--dur", (items.length * (PLUG_DETIK[m.dataset.marq] || 5)) + "s");
    if (!ikon) return;
    items.forEach(function (n) {
      const s = slugPlugin(n);
      cariGambar(PLUG_IMG.folder, PLUG_IMG.ext, s, function (url) {
        if (!url) return;
        m.querySelectorAll('i[data-s="' + s + '"]').forEach(function (el) {
          const im = document.createElement("img");
          im.src = url; im.alt = ""; im.decoding = "async";
          el.appendChild(im);
        });
      });
    });
  });
}

/* Dropdown "Urutkan" yang lebih rapi, menggantikan <select> bawaan browser */
function pasangSort(sort) {
  const IK = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const dd = document.createElement("div");
  dd.className = "dd";
  dd.innerHTML = '<button class="dd-btn" type="button" aria-haspopup="listbox" aria-expanded="false"><svg viewBox="0 0 24 24" ' + IK + '><path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3"/></svg><span class="dd-val"></span><svg class="chev" viewBox="0 0 24 24" ' + IK + '><path d="m6 9 6 6 6-6"/></svg></button><div class="dd-menu" role="listbox" hidden></div>';
  sort.style.display = "none";
  sort.insertAdjacentElement("afterend", dd);
  const btn = dd.querySelector(".dd-btn");
  const menu = dd.querySelector(".dd-menu");
  const val = dd.querySelector(".dd-val");

  function segar() {
    val.textContent = sort.options[sort.selectedIndex].textContent;
    menu.innerHTML = Array.prototype.map.call(sort.options, function (o) {
      return '<button class="dd-opt" type="button" role="option" data-v="' + o.value + '" aria-selected="' + (o.value === sort.value) + '"><span class="tx"><b>' + o.textContent + "</b><small>" + t("sh_" + o.value) + '</small></span><svg class="ck" viewBox="0 0 24 24" ' + IK + '><path d="m5 12 5 5 9-10"/></svg></button>';
    }).join("");
  }
  function buka(b) {
    menu.hidden = !b; if (b) posisiMenu(menu);
    btn.setAttribute("aria-expanded", String(b));
    if (b) { const s = menu.querySelector('[aria-selected="true"]'); if (s) s.focus(); }
  }
  btn.addEventListener("click", function () { buka(menu.hidden); });
  menu.addEventListener("click", function (e) {
    const o = e.target.closest(".dd-opt");
    if (!o) return;
    sort.value = o.dataset.v;
    sort.dispatchEvent(new Event("change"));
    segar();
    buka(false);
    btn.focus();
  });
  dd.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { buka(false); btn.focus(); }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (menu.hidden) { buka(true); return; }
      const o = Array.prototype.slice.call(menu.querySelectorAll(".dd-opt"));
      const i = o.indexOf(document.activeElement);
      o[(i + (e.key === "ArrowDown" ? 1 : o.length - 1)) % o.length].focus();
    }
  });
  document.addEventListener("click", function (e) { if (!dd.contains(e.target)) buka(false); });
  segar();
  return segar;
}

/* ===== Kartu harga =====
   Foto kartu jasa: taruh di assets/img/paket/ dengan nama paket huruf kecil, spasi/simbol jadi "-".
   Contoh: "Vanilla Starter" -> assets/img/paket/vanilla-starter.jpg (disarankan 16:9, mis. 1280x720).
   Format yang dicoba berurutan: jpg, webp, png. Kalau belum ada, tampil ikon pengganti. */
const FOTO_PAKET = { folder: ASSET_BASE + "img/paket/", ext: ["jpg", "webp", "png"] };
const FOTO_CACHE = {};
const IKON_PLATFORM = {
  minecraft: '<path d="M12 3 20 7.5v9L12 21 4 16.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
  discord: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11h7M8.5 14h4"/>'
};

function isiFoto(daftar) {
  daftar.forEach(function (p) {
    const slug = slugPlugin(p.nama);
    if (FOTO_CACHE[slug] !== undefined) return;
    FOTO_CACHE[slug] = null;
    cariGambar(FOTO_PAKET.folder, FOTO_PAKET.ext, slug, function (url) {
      FOTO_CACHE[slug] = url || false;
      if (!url) return;
      document.querySelectorAll('.pc-img[data-s="' + slug + '"]').forEach(function (box) {
        if (box.querySelector("img")) return;
        const im = document.createElement("img");
        im.src = url; im.alt = p.nama; im.decoding = "async";
        box.appendChild(im);
      });
    });
  });
}

function kartuJasa(p, i, jeda, pesan, data, kunci) {
  const slug = slugPlugin(p.nama);
  const foto = FOTO_CACHE[slug];
  return '<article class="pcard jasa' + (p.populer ? " featured" : "") + '" style="--i:' + (Math.min(i, 12) + jeda) + '">' +
    '<div class="pc-img" data-s="' + slug + '"><svg class="ph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IKON_PLATFORM[kunci] + "</svg>" +
    (typeof foto === "string" ? '<img src="' + foto + '" alt="' + p.nama + '" decoding="async">' : "") +
    (p.populer ? '<span class="pc-pop">' + t("populer") + "</span>" : "") + "</div>" +
    '<div class="pc-body"><span class="pc-tag">' + p.kat + "</span>" +
    "<h3>" + p.nama + "</h3>" +
    '<p class="pc-desc">' + p.ringkas + "</p>" +
    "<ul>" + p.fitur.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>" +
    '<div class="pc-price"><b>' + hargaHTML(p.harga, data.satuan) + "</b></div>" +
    '<a class="btn' + (p.populer ? "" : " ghost") + '" href="' + linkPesan(pesan) + '" target="_blank" rel="noopener">' + t("pesan") + "</a></div></article>";
}

const IKON_SPEK = {
  CPU: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
  RAM: '<rect x="2.5" y="7" width="19" height="8" rx="1.5"/><path d="M6 15v3M10 15v3M14 15v3M18 15v3M6 10.5h2M11 10.5h2M16 10.5h2"/>',
  Storage: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>'
};

function kartuHosting(p, i, jeda, pesan, data) {
  function cari(re) { for (let n = 0; n < p.fitur.length; n++) { const m = re.exec(p.fitur[n]); if (m) return m[1]; } return null; }
  const cpu = cari(/^CPU (.+)$/), ram = cari(/^RAM (.+)$/), ssd = cari(/^Storage (.+)$/);
  const spek = [];
  if (cpu) spek.push(["CPU", cpu]);
  if (ram) spek.push(["RAM", ram]);
  if (ssd) spek.push(["Storage", ssd]);
  const sisa = p.fitur.filter(function (f) { return !/^(CPU|RAM|Storage) /.test(f); });
  return '<article class="pcard host' + (p.populer ? " featured" : "") + '" style="--i:' + (Math.min(i, 12) + jeda) + '">' +
    '<div class="hs-name"><h3>' + p.nama + '</h3><span class="hs-tags">' + (p.populer ? '<span class="pc-pop">' + t("populer") + "</span>" : "") + '<span class="pc-tag">' + p.kat + "</span></span></div>" +
    '<p class="pc-desc">' + p.ringkas + "</p>" +
    '<div class="pc-price">' + "<b>" + hargaHTML(p.harga, data.satuan) + "</b></div>" +
    '<div class="specs" style="grid-template-columns:repeat(' + spek.length + ',1fr)">' + spek.map(function (x) { return '<div class="spec"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IKON_SPEK[x[0]] + "</svg><small>" + x[0] + "</small><b>" + x[1] + "</b></div>"; }).join("") + "</div>" +
    (sisa.length ? "<ul>" + sisa.map(function (f) { return "<li>" + f + "</li>"; }).join("") + "</ul>" : "") +
    '<a class="btn' + (p.populer ? "" : " ghost") + '" href="' + linkPesan(pesan) + '" target="_blank" rel="noopener">' + t("pesan") + "</a></article>";
}

/* ===== FAQ =====
   kat = kelompok di halaman faq.html. utama: true = tampil juga di beranda. Tambah pertanyaan = tambah satu baris. */
const FAQ = [
  { kat: "Memesan", utama: true, q: "Bagaimana cara pesannya?", a: "Pilih paket di daftar harga lalu tekan Pesan paket ini, atau langsung chat kami di Discord. Pemesanan dan pembayaran kami proses lewat Discord. WhatsApp tetap bisa kalau Discord tidak memungkinkan." },
  { kat: "Memesan", q: "Bagaimana kalau belum yakin pesan paket apa?", a: "Ceritakan kebutuhanmu lewat Discord, misalnya jenis server, jumlah pemain, dan fitur yang kamu mau. Kami bantu pilihkan paket yang pas beserta estimasi harganya." },
  { kat: "Memesan", utama: true, q: "Apakah harga di daftar sudah final?", a: "Harga di daftar adalah harga mulai dari. Harga akhir bisa menyesuaikan kebutuhan dan kerumitan server, dan kami konfirmasi dulu sebelum pengerjaan." },
  { kat: "Memesan", utama: true, q: "Berapa lama pengerjaannya?", a: "Tergantung paket dan tingkat kerumitannya. Kami kabari estimasi waktunya sebelum mulai dikerjakan, lalu kirim update progres selama pengerjaan." },
  { kat: "Memesan", utama: true, q: "Bisa setup di server atau hosting yang sudah ada?", a: "Bisa ditanyakan lewat chat. Ceritakan server dan hosting yang kamu pakai, lalu kami cek apakah bisa dikerjakan." },
  { kat: "Memesan", utama: true, q: "Apa bedanya Java dan Bedrock, dan bisa main bersama?", a: "Java dan Bedrock adalah dua edisi Minecraft yang berbeda. Lewat paket Bedrock Crossplay, pemain dari kedua edisi bisa masuk ke server yang sama." },
  { kat: "Pembayaran", q: "Bayar pakai apa saja?", a: "Metode pembayaran kami sampaikan lewat Discord saat harga akhir disepakati." },
  { kat: "Pembayaran", q: "Kapan pengerjaan dimulai?", a: "Setelah harga akhir disepakati dan pembayaran kami terima, pengerjaan dimulai dan progresnya kami kabari lewat Discord." },
  { kat: "Pengerjaan", q: "Bagaimana saya tahu progres pengerjaannya?", a: "Kami kirim update progres lewat Discord selama pengerjaan. Setelah selesai, kamu cek hasilnya dan server diserahkan lengkap dengan panduan singkat." },
  { kat: "Hosting", utama: true, q: "Hostingnya bisa di-upgrade nanti?", a: "Bisa. Kamu bisa mulai dari paket kecil lalu naik ke resource yang lebih besar saat server makin ramai." }
];

function itemFaq(f, buka) {
  return '<details name="faq"' + (buka ? " open" : "") + "><summary><span>" + f.q + '</span></summary><p class="ans">' + f.a + "</p></details>";
}

function pasangFaq() {
  document.querySelectorAll("[data-faq]").forEach(function (el) {
    if (el.dataset.faq === "home") {
      el.innerHTML = FAQ.filter(function (f) { return f.utama; }).map(function (f, i) { return itemFaq(f, i === 0); }).join("");
      return;
    }
    const grup = [];
    FAQ.forEach(function (f) { if (grup.indexOf(f.kat) < 0) grup.push(f.kat); });
    el.innerHTML = grup.map(function (k, gi) {
      return '<div class="faq-grup"><h2>' + k + '</h2><div class="faq">' + FAQ.filter(function (f) { return f.kat === k; }).map(function (f, i) { return itemFaq(f, gi === 0 && i === 0); }).join("") + "</div></div>";
    }).join("");
  });
}

/* ===== 6. DAFTAR HARGA ===== */
const HARGA_AKTIF = [];

function initHarga(root) {
  const plans = root.querySelector("#plans");
  if (!plans) return;
  const chips = root.querySelector("#chips");
  const sort = root.querySelector("#sort");
  const count = root.querySelector("#count");
  const desc = root.querySelector("#tab-desc");
  const sTotal = root.querySelector("#stat-total");
  const sMin = root.querySelector("#stat-min");
  const tabs = root.querySelectorAll(".tab");
  const segarSort = pasangSort(sort);
  const st = { layanan: plans.dataset.default, kat: "Semua", urut: "awal", pertama: true };

  function buatChip() {
    const data = HARGA[st.layanan];
    chips.classList.toggle("seg", !!data.tanpaSemua);
    chips.innerHTML = (data.tanpaSemua ? data.kategori : ["Semua"].concat(data.kategori)).map(function (k) {
      return '<button class="chip" data-kat="' + k + '" aria-pressed="' + (k === st.kat) + '">' + (data.tanpaSemua && IK_KAT[k] ? '<i class="bi ' + IK_KAT[k] + '"></i>' : "") + (k === "Semua" ? t("semua") : k) + (data.tanpaSemua ? '<span class="n">' + data.paket.filter(function (p) { return p.kat === k; }).length + "</span>" : "") + "</button>";
    }).join("");
  }

  function renderDaftar() {
    const data = HARGA[st.layanan];
    const daftar = data.paket.filter(function (p) { return st.kat === "Semua" || p.kat === st.kat; });
    if (st.urut === "murah") daftar.sort(function (a, b) { return a.harga - b.harga; });
    if (st.urut === "mahal") daftar.sort(function (a, b) { return b.harga - a.harga; });

    count.textContent = daftar.length + " " + t("n_paket");
    const info = data.info && data.info[st.kat];
    desc.classList.toggle("intro", !!info);
    if (info) desc.innerHTML = "<b>" + info.judul + "</b>" + info.teks + (info.fitur ? '<span class="ichips">' + info.fitur.map(function (f) { return "<span><i class=\"bi " + (IK_FITUR[f] || "bi-check2") + "\"></i>" + f + "</span>"; }).join("") + "</span>" : "");
    else desc.textContent = data.deskripsi;
    if (sTotal) sTotal.textContent = data.paket.length + " " + t("n_paket");
    if (sMin) sMin.innerHTML = hargaHTML(Math.min.apply(null, data.paket.map(function (p) { return p.harga; })), data.satuan);

    const jeda = st.pertama ? 6 : 0;
    st.pertama = false;
    const hosting = !!data.tanpaSemua;
    plans.innerHTML = daftar.length ? daftar.map(function (p, i) {
      const pesan = "Halo NEXORA, saya mau pesan paket " + p.nama + " untuk " + data.nama + ".";
      return hosting ? kartuHosting(p, i, jeda, pesan, data) : kartuJasa(p, i, jeda, pesan, data, st.layanan);
    }).join("") : '<p class="empty">' + t("kosong") + "</p>";
    if (!hosting) isiFoto(daftar);
  }

  function render() { buatChip(); renderDaftar(); segarSort(); }

  function tampilkan(kunci) {
    if (!HARGA[kunci]) return;
    st.layanan = kunci;
    st.kat = HARGA[kunci].tanpaSemua ? HARGA[kunci].kategori[0] : "Semua";
    tabs.forEach(function (tab) { tab.setAttribute("aria-selected", tab.dataset.layanan === kunci ? "true" : "false"); });
    render();
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () { tampilkan(tab.dataset.layanan); });
  });
  chips.addEventListener("click", function (e) {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    st.kat = chip.dataset.kat;
    render();
  });
  sort.addEventListener("change", function (e) { st.urut = e.target.value; renderDaftar(); });

  root.tampilkan = tampilkan;
  HARGA_AKTIF.push({ root: root, tampilkan: tampilkan, render: render });
  tampilkan(plans.dataset.default);
}

/* Tautan "Lihat harga ..." di bagian layanan membuka tab yang sesuai */
function pasangKeTab() {
  document.querySelectorAll("[data-ke-tab]").forEach(function (a) {
    a.addEventListener("click", function () {
      const k = a.dataset.keTab;
      HARGA_AKTIF.forEach(function (h) {
        if (h.root.querySelector('.tab[data-layanan="' + k + '"]')) h.tampilkan(k);
      });
    });
  });
}

function gulirKe(id, tab) {
  if (tab) HARGA_AKTIF.forEach(function (h) { if (h.root.querySelector('.tab[data-layanan="' + tab + '"]')) h.tampilkan(tab); });
  const t = document.getElementById(id); if (!t) return false;
  const tb = document.querySelector(".topbar");
  window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - (tb ? tb.offsetHeight : 0) + 1, behavior: "smooth" });
  return true;
}
function pasangAnchor() {
  const kini = location.pathname.replace(/\/index\.html$/, "/");
  function urai(a) {
    let u; try { u = new URL(a.getAttribute("href"), location.href); } catch (x) { return null; }
    if (!u.hash || u.origin !== location.origin || u.pathname.replace(/\/index\.html$/, "/") !== kini) return null;
    const h = u.hash.slice(1), m = h.match(/^harga-(minecraft|discord)$/);
    return m ? { id: "harga", tab: m[1], h: u.hash } : { id: h, tab: null, h: u.hash };
  }
  document.addEventListener("click", function (ev) {
    const a = ev.target.closest && ev.target.closest("a[href]"); if (!a || a.target === "_blank" || ev.defaultPrevented || ev.metaKey || ev.ctrlKey || ev.shiftKey) return;
    const r = urai(a); if (!r || !document.getElementById(r.id)) return;
    ev.preventDefault();
    const tb = document.querySelector(".topbar"); if (tb && tb.classList.contains("open")) { const mb = tb.querySelector(".menu-btn"); if (mb) mb.click(); }
    gulirKe(r.id, r.tab); history.pushState(null, "", r.h);
  });
  const m = location.hash.match(/^#harga-(minecraft|discord)$/);
  if (m) setTimeout(function () { gulirKe("harga", m[1]); }, 60);
}

document.addEventListener("DOMContentLoaded", function () {
  pasangAnchor();
  pasangFaq();
  siapkanAnimasi(document);
  siapkanHero();
  pasangTema();
  pasangMenu();
  pasangNavbar();
  const views = document.querySelectorAll("[data-view]");
  (views.length ? Array.from(views) : [document]).forEach(initHarga);
  pasangKeTab();
  initAlur();
  pasangMarquee();
  pasangSpot();
  pasangKontak();
  pasangKontakPage();
  pasangToc();
  pasangReveal();
  pasangAkun();
  isiMulai();
  pasangQr();
});

function posisiMenu(m) {
  const vw = document.documentElement.clientWidth;
  m.style.translate = ""; m.style.maxWidth = (vw - 24) + "px";
  const r = m.getBoundingClientRect(); let dx = 0;
  if (r.left < 12) dx = 12 - r.left; else if (r.right > vw - 12) dx = vw - 12 - r.right;
  if (dx) m.style.translate = dx + "px 0";
}

function pasangAkun() {
  const b = document.querySelector(".login-btn"); if (!b || b.id === "nav-logout") return;
  let role = "", name = "";
  try { const w = window.__nxS || {}; role = w["nx-role"] || sessionStorage.getItem("nx-role") || ""; name = w["nx-name"] || sessionStorage.getItem("nx-name") || ""; } catch (x) {}
  if (!role) return;
  b.href = ROOT + (role === "admin" ? "admin/nexora-admin.html" : "akun/dashboard.html");
  b.classList.add("on"); b.setAttribute("aria-label", "Akun: " + (name || "Dashboard"));
  const s = b.querySelector("span"); if (s) s.textContent = (name || "Akun").split(" ")[0].slice(0, 12);
}

/* QR Code dari dashboard admin (demo: disimpan di browser yang sama) */
function pasangQr() {
  let q = "";
  try { q = localStorage.getItem("nx-qr") || ""; } catch (x) {}
  if (q.indexOf("data:image/") !== 0) return;
  document.querySelectorAll(".qr-box").forEach(function (box) {
    let im = box.querySelector("img");
    if (!im) { im = document.createElement("img"); im.alt = "QR Discord NEXORA"; box.insertBefore(im, box.firstChild); }
    im.removeAttribute("onerror"); im.onerror = null;
    im.src = q;
    box.classList.remove("empty");
  });
}


/* ===== Halaman Hubungi kami ===== */
function escK(x) { return String(x).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
function pasangKontakPage() {
  const box = document.getElementById("kontak-list"); if (!box) return;
  const a = kontakData().filter(function (k) { return k.aktif !== false; });
  box.innerHTML = a.length ? a.map(function (k) {
    const t = KONTAK_TIPE[k.tipe] || KONTAK_TIPE.lainnya, v = String(k.nilai || "");
    let href = v, tampil = v.replace(/^https?:\/\//i, "").replace(/\/$/, "");
    if (k.tipe === "email") href = "mailto:" + v;
    else if (k.tipe === "whatsapp") { const d = v.replace(/\D/g, ""); href = "https://wa.me/" + d; tampil = "+" + d; }
    else if (!/^https?:\/\//i.test(href)) href = "https://" + href;
    const blank = k.tipe === "email" ? "" : ' target="_blank" rel="noopener"';
    return '<article class="kc" data-t="' + escK(k.tipe) + '"><span class="kc-i"><i class="bi bi-' + t[1] + '"></i></span><div class="kc-t"><small>' + escK(k.label || t[0]) + "</small><b>" + escK(tampil) + "</b>" + (k.ket ? "<p>" + escK(k.ket) + "</p>" : "") +
      '</div><div class="kc-a"><a class="btn" href="' + escK(href) + '"' + blank + ">" + t[2] + '</a><button class="kc-cp" type="button" data-cp="' + escK(k.tipe === "whatsapp" ? tampil : v) + '" aria-label="Salin ' + escK(k.label || t[0]) + '"><i class="bi bi-copy"></i></button></div></article>';
  }).join("") : '<p class="note">Belum ada kontak yang ditampilkan.</p>';
  box.addEventListener("click", function (ev) {
    const b = ev.target.closest("[data-cp]"); if (!b) return;
    const v = b.dataset.cp, ok = function () { const i = b.querySelector("i"); i.className = "bi bi-check2"; setTimeout(function () { i.className = "bi bi-copy"; }, 1500); };
    if (navigator.clipboard) navigator.clipboard.writeText(v).then(ok, function () {}); else { const x = document.createElement("textarea"); x.value = v; document.body.appendChild(x); x.select(); try { document.execCommand("copy"); ok(); } catch (e) {} x.remove(); }
  });
}

/* ===== Daftar isi halaman legal: tandai bagian yang sedang dibaca ===== */
function pasangProgress() {
  const bar = document.querySelector(".legal-page"), tb = document.querySelector(".topbar"); if (!bar || !tb) return;
  const p = document.createElement("div"); p.className = "lg-prog"; tb.appendChild(p);
  function ukur() {
    tb.parentNode.style.setProperty("--tbh", tb.offsetHeight + "px"); document.documentElement.style.setProperty("--tbh", tb.offsetHeight + "px");
    const r = bar.getBoundingClientRect(), tot = r.height - window.innerHeight, done = Math.min(Math.max(-r.top, 0), Math.max(tot, 1));
    p.style.width = (tot > 0 ? done / tot * 100 : 100) + "%";
  }
  window.addEventListener("scroll", ukur, { passive: true }); window.addEventListener("resize", ukur); ukur();
}
function pasangReveal() {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const els = [].slice.call(document.querySelectorAll(".eyebrow,.hero-copy h1,.hero-copy p,.hero-copy .actions,.hero-chips,.hero-visual,.page-head h1,.page-head p,.stats,.tabs,.toolbar,.tab-desc,section>.wrap>h2,section>.wrap>.lead,.plug,.flow-tabs,.flow,.svc,.faq,.cta-card,.note,.site-footer")), vh = window.innerHeight; let n = 0;
  const io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("rv-in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  els.forEach(function (el) {
    if (el.getBoundingClientRect().top < vh * 0.92) return;
    el.style.setProperty("--rd", String(n++ % 3)); el.classList.add("rv-wait"); io.observe(el);
  });
  let tick = false;
  function lewat() {
    tick = false;
    [].slice.call(document.querySelectorAll(".rv-wait:not(.rv-in)")).forEach(function (el) { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) { el.classList.add("rv-in"); io.unobserve(el); } });
  }
  window.addEventListener("scroll", function () { if (!tick) { tick = true; requestAnimationFrame(lewat); } }, { passive: true });
}
function pasangToc() {
  pasangProgress();
  const links = [].slice.call(document.querySelectorAll(".legal-toc a")); if (!links.length) return;
  const toc = document.querySelector(".legal-toc"), ol = toc.querySelector("ol"), secs = links.map(function (l) { return document.getElementById(l.getAttribute("href").slice(1)); }).filter(Boolean);
  function aktif(id) {
    links.forEach(function (l) { const on = l.getAttribute("href") === "#" + id; l.setAttribute("aria-current", String(on)); if (on && ol.scrollWidth > ol.clientWidth) { const x = l.offsetLeft - (ol.clientWidth - l.offsetWidth) / 2; ol.scrollTo({ left: Math.max(0, x), behavior: "smooth" }); } });
  }
  function spy() {
    const tb = document.querySelector(".topbar"), off = (tb ? tb.offsetHeight : 0) + (toc.offsetHeight < 120 ? toc.offsetHeight : 0) + 24; let cur = secs[0];
    secs.forEach(function (s) { if (s.getBoundingClientRect().top - off <= 0) cur = s; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = secs[secs.length - 1];
    if (cur && cur.id !== spy.last) { spy.last = cur.id; aktif(cur.id); }
  }
  function ukurToc() {
    const tb = document.querySelector(".topbar"); if (!tb) return;
    document.documentElement.style.setProperty("--tbh", tb.offsetHeight + "px");
    document.documentElement.style.setProperty("--toch", (toc.offsetHeight < 120 ? toc.offsetHeight : 0) + "px");
  }
  window.addEventListener("scroll", spy, { passive: true }); window.addEventListener("resize", function () { ukurToc(); spy(); });
  links.forEach(function (l) { l.addEventListener("click", function (ev) {
    const t = document.getElementById(l.getAttribute("href").slice(1)); if (!t) return; ev.preventDefault();
    const tb = document.querySelector(".topbar"), off = (tb ? tb.offsetHeight : 0) + (toc.offsetHeight < 120 ? toc.offsetHeight : 0) + 12;
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - off, behavior: "smooth" }); history.replaceState(null, "", l.getAttribute("href"));
  }); });
  ukurToc(); spy();
}

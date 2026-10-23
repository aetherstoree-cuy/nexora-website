/* NEXORA dashboard (DEMO: data di browser, belum terhubung ke Supabase) */
(function () {
  var D = {"jasa":{"minecraft":[{"nama":"Vanilla Starter","kat":"JAVA VERSION","harga":40000,"ringkas":"Server dasar untuk main bareng teman.","fitur":["Server vanilla Java","Whitelist & operator","Pengaturan dasar"]}],"discord":[{"nama":"Rapi Dasar","kat":"Dasar","harga":20000,"ringkas":"Channel dan role dasar.","fitur":["Channel & kategori","Role dasar","Aturan server"]},{"nama":"Server Gaming","kat":"Dasar","harga":35000,"ringkas":"Struktur khusus komunitas game.","fitur":["Channel suara & teks","Role per game","Aturan server"]},{"nama":"Welcome & Verifikasi","kat":"Bot","harga":40000,"ringkas":"Sambutan dan verifikasi member baru.","fitur":["Pesan sambutan","Verifikasi member","Role otomatis"]}]},"hosting":[{"nama":"Pulse","kat":"Basic","harga":19000,"ringkas":"Untuk mulai dengan resource ringan.","fitur":["CPU 100%","RAM 1 GB","Storage 8 GB","1 MySQL Database","1 Automatic Backup"]},{"nama":"Orbit","kat":"Basic","harga":36000,"ringkas":"Pilihan pas untuk server kecil.","fitur":["CPU 100%","RAM 2 GB","Storage 8 GB","1 MySQL Database","1 Automatic Backup"]},{"nama":"Nova","kat":"Basic","harga":70000,"ringkas":"Ruang lebih untuk komunitas kecil.","fitur":["CPU 150%","RAM 4 GB","Storage 20 GB","1 MySQL Database","1 Automatic Backup"]},{"nama":"Quasar","kat":"Basic","harga":104000,"ringkas":"Untuk yang mulai ramai.","fitur":["CPU 200%","RAM 6 GB","Storage 24 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Nebula","kat":"Basic","harga":138000,"ringkas":"Resource lega untuk komunitas aktif.","fitur":["CPU 250%","RAM 8 GB","Storage 32 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Astra","kat":"Basic","harga":172000,"ringkas":"Untuk komunitas yang terus tumbuh.","fitur":["CPU 300%","RAM 10 GB","Storage 32 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Zenith","kat":"Basic","harga":207000,"ringkas":"Ruang besar untuk komunitas ramai.","fitur":["CPU 350%","RAM 12 GB","Storage 40 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Cosmos","kat":"Basic","harga":275000,"ringkas":"Untuk kebutuhan skala besar.","fitur":["CPU 400%","RAM 16 GB","Storage 64 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Eclipse","kat":"Basic","harga":412000,"ringkas":"Resource besar untuk server ramai.","fitur":["CPU 450%","RAM 24 GB","Storage 80 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Infinity","kat":"Basic","harga":549000,"ringkas":"Resource tertinggi di Basic.","fitur":["CPU 500%","RAM 32 GB","Storage 96 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Aurora","kat":"Premium","harga":24999,"ringkas":"Awal yang nyaman di Premium.","fitur":["CPU 150%","RAM 1 GB","Storage 10 GB","1 MySQL Database","1 Automatic Backup"]},{"nama":"Vega","kat":"Premium","harga":48000,"ringkas":"CPU lebih tinggi untuk server kecil.","fitur":["CPU 200%","RAM 2 GB","Storage 10 GB","1 MySQL Database","1 Automatic Backup"]},{"nama":"Sirius","kat":"Premium","harga":94000,"ringkas":"Seimbang dengan backup lebih banyak.","fitur":["CPU 250%","RAM 4 GB","Storage 24 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Polaris","kat":"Premium","harga":140000,"ringkas":"Untuk komunitas yang mulai ramai.","fitur":["CPU 300%","RAM 6 GB","Storage 28 GB","1 MySQL Database","2 Automatic Backups"]},{"nama":"Arcturus","kat":"Premium","harga":186000,"ringkas":"Ruang lega dengan 3 backup.","fitur":["CPU 350%","RAM 8 GB","Storage 36 GB","1 MySQL Database","3 Automatic Backups"]},{"nama":"Draco","kat":"Premium","harga":233000,"ringkas":"Untuk komunitas yang terus tumbuh.","fitur":["CPU 400%","RAM 10 GB","Storage 40 GB","1 MySQL Database","3 Automatic Backups"]},{"nama":"Andromeda","kat":"Premium","harga":279000,"ringkas":"Ruang besar untuk komunitas ramai.","fitur":["CPU 450%","RAM 12 GB","Storage 48 GB","1 MySQL Database","3 Automatic Backups"]},{"nama":"Celestia","kat":"Premium","harga":372000,"ringkas":"Untuk kebutuhan skala besar.","fitur":["CPU 500%","RAM 16 GB","Storage 72 GB","1 MySQL Database","3 Automatic Backups"]},{"nama":"Stellaris","kat":"Premium","harga":558000,"ringkas":"Resource besar untuk skala besar.","fitur":["CPU 600%","RAM 24 GB","Storage 96 GB","1 MySQL Database","3 Automatic Backups"]},{"nama":"Empyrean","kat":"Premium","harga":744000,"ringkas":"Resource tertinggi di Premium.","fitur":["CPU 700%","RAM 32 GB","Storage 112 GB","1 MySQL Database","3 Automatic Backups"]}]};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var mem = {};
  function ld(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (x) { return k in mem ? mem[k] : d; } }
  function sv(k, v) { mem[k] = v; try { localStorage.setItem(k, JSON.stringify(v)); } catch (x) {} }
  function ss(k, v) {
    if (v === undefined) { try { var r = sessionStorage.getItem(k); return r === null ? mem["s" + k] : r; } catch (x) { return mem["s" + k]; } }
    mem["s" + k] = v; window.__nxS = window.__nxS || {}; window.__nxS[k] = v; try { sessionStorage.setItem(k, v); } catch (x) {}
  }
  function go(u) { if (window.__nxGo) window.__nxGo(u); else location.href = u; }
  function e(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function rp(n) { return "Rp\u00a0" + Number(n).toLocaleString("id-ID"); }
  function toast(t) { var d = document.createElement("div"); d.className = "toast"; d.textContent = t; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 3200); }
  function av(n) { return '<span class="av">' + e(String(n || "?").trim().charAt(0).toUpperCase()) + "</span>"; }
  var ST = ["Menunggu admin balas", "Terhubung dengan admin", "Menunggu pembayaran", "Pembayaran Dikonfirmasi", "Pesanan Diproses", "Orderan Selesai"];
  var SHORT = { "Menunggu admin balas": "Menunggu balas", "Terhubung dengan admin": "Terhubung", "Menunggu pembayaran": "Pembayaran", "Pembayaran Dikonfirmasi": "Dikonfirmasi", "Pesanan Diproses": "Diproses", "Orderan Selesai": "Order selesai" };
  var BC = { "Menunggu admin balas": "b1", "Terhubung dengan admin": "b2", "Menunggu pembayaran": "b3", "Pembayaran Dikonfirmasi": "b7", "Pesanan Diproses": "b8", "Orderan Selesai": "b4", Menunggu: "b3", Selesai: "b4", Diproses: "b8", Terbuka: "b1", "Belum dibayar": "b1", Terlambat: "b5", Lunas: "b4", Dibatalkan: "b6", Ditutup: "b6" };
  function bd(s, short) { return '<span class="bd ' + (BC[s] || "b1") + '">' + e(short && SHORT[s] ? SHORT[s] : s) + "</span>"; }
  var MAXT = 3;
  function me() { return ss("nx-name") || "Customer"; }
  function hm() { var d = new Date(); return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2); }
  function ptime(id, i) { var n = 0; for (var k = 0; k < id.length; k++) n = (n * 31 + id.charCodeAt(k)) % 997; n = (n + i * 137) % 720; return ("0" + (8 + Math.floor(n / 60))).slice(-2) + ":" + ("0" + (n % 60)).slice(-2); }
  function dayL(m) { return m.d === "Baru saja" || m.d === "Hari ini" ? "Hari ini" : m.d; }
  var NCOL = ["#d9534f", "#2a9a56", "#3b7ddd", "#c43d85", "#0e9594", "#b7791f"];
  function ncol(n) { var h = 0; for (var i = 0; i < n.length; i++) h = (h * 31 + n.charCodeAt(i)) % 97; return NCOL[h % NCOL.length]; }
  function uname(t) { return t.user === "__me" ? (window.__nxAdm ? ld("nx-cust", "Demo Customer") : me()) : t.user; }
  var LEG = { Terbuka: "Menunggu admin balas", Diproses: "Pesanan Diproses", Selesai: "Orderan Selesai" };
  function mig(a) { a.forEach(function (x) { if (LEG[x.st]) { if (x.st === "Selesai") x.closed = true; x.st = LEG[x.st]; } }); return a; }
  function cl(x) { return x.closed === true; }
  function TK() { return mig(ld("nx-tk", [
    { id: "T-1043", subj: "Tanya perpanjangan hosting", kat: "Bantuan", paket: "-", st: "Terbuka", tgl: "20 Okt 2026", user: "__me", m: [{ w: "c", t: "Bagaimana cara memperpanjang paket hosting?", d: "20 Okt" }] },
    { id: "T-1042", subj: "Setup Survival Plugin", kat: "Order baru", paket: "Survival Plugin", st: "Diproses", tgl: "18 Okt 2026", user: "__me", m: [{ w: "c", t: "Halo, saya mau pesan setup Survival Plugin untuk server Java.", d: "18 Okt" }, { w: "a", t: "Siap! Versi Java yang kamu pakai berapa?", d: "18 Okt" }, { w: "c", t: "Java 21, sekitar 30 pemain.", d: "18 Okt" }] },
    { id: "T-1031", subj: "Setup Vanilla Starter", kat: "Order baru", paket: "Vanilla Starter", st: "Selesai", tgl: "02 Okt 2026", user: "__me", m: [{ w: "c", t: "Mau pesan Vanilla Starter.", d: "02 Okt" }, { w: "a", t: "Server sudah jadi, detailnya sudah kami kirim. Terima kasih!", d: "03 Okt" }] },
    { id: "T-1040", subj: "Setup Discord Server Gaming", kat: "Order baru", paket: "Server Gaming", st: "Menunggu pembayaran", tgl: "15 Okt 2026", user: "Rizky", m: [{ w: "c", t: "Mau setup Discord untuk komunitas gaming.", d: "15 Okt" }, { w: "a", t: "Harga final sudah kami kirim, silakan konfirmasi pembayaran.", d: "15 Okt" }] },
    { id: "T-1038", subj: "Whitelist tidak berfungsi", kat: "Bantuan", paket: "-", st: "Selesai", tgl: "12 Okt 2026", user: "Andi", m: [{ w: "c", t: "Whitelist tidak jalan di server saya.", d: "12 Okt" }, { w: "a", t: "Sudah diperbaiki ya, coba cek lagi.", d: "12 Okt" }] }])); }
  function OR() { return ld("nx-or", [
    { id: "ORD-2044", tk: "T-1042", item: "Survival Plugin", jenis: "Setup Minecraft", tgl: "18 Okt 2026", st: "Diproses" },
    { id: "ORD-2031", tk: "T-1031", item: "Vanilla Starter", jenis: "Setup Minecraft", tgl: "02 Okt 2026", st: "Selesai" }]); }
  function HG() { return ld("nx-harga", D); }
  var SI = { "Ticket terbuka": "chat-dots", "Sedang diproses": "lightning-charge", "Total ticket": "tags", "Total pesanan": "receipt", "Ticket aktif": "chat-dots", "Ticket selesai": "check2", "Pesanan berjalan": "lightning-charge", "Menunggu pembayaran": "receipt", "Tagihan aktif": "cash-stack" };
  function stat(l, v) { return '<div class="dstat"><span class="si"><i class="bi bi-' + SI[l] + '"></i></span><div><small>' + l + "</small><b>" + v + "</b></div></div>"; }
  function table(h, rows, cls) {
    rows = rows.replace(/<tr>([\s\S]*?)<\/tr>/g, function (_, r) { var i = 0; return "<tr>" + r.replace(/<td( class="[^"]*")?>/g, function (_m, c) { return "<td" + (c || "") + ' data-l="' + h[i++] + '">'; }) + "</tr>"; });
    return '<div class="tw"><table class="dt' + (cls ? " " + cls : "") + '"><thead><tr>' + h.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
  }
  function modal(html, mount) {
    var m = document.createElement("div"); m.className = "modal"; m.innerHTML = html; document.body.appendChild(m);
    function close() { m.remove(); }
    m.addEventListener("click", function (ev) { if (ev.target === m || ev.target.closest("[data-x]")) close(); });
    if (mount) mount(m, close); return close;
  }
  function shrink(file, max, type, cb) {
    var fr = new FileReader();
    fr.onload = function () { var im = new Image(); im.onload = function () { var s = Math.min(1, max / Math.max(im.width, im.height)), c = document.createElement("canvas"); c.width = Math.round(im.width * s); c.height = Math.round(im.height * s); c.getContext("2d").drawImage(im, 0, 0, c.width, c.height); cb(c.toDataURL(type, 0.82)); }; im.src = fr.result; };
    fr.readAsDataURL(file);
  }

  function authInit(mode, root) {
    var forms = $$("form", root);
    function masuk(n, em) { ss("nx-role", mode === "alogin" ? "admin" : "cust"); ss("nx-name", n); ss("nx-email", em || ""); go(mode === "alogin" ? "nexora-admin.html" : "dashboard.html"); }
    $$("[data-m]", root).forEach(function (b) { b.addEventListener("click", function () {
      $$("[data-m]", root).forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      forms.forEach(function (f) { f.hidden = f.dataset.f !== b.dataset.m; });
      $("[data-ttl]", root).textContent = b.dataset.m === "daftar" ? "Buat akun NEXORA" : "Masuk ke NEXORA";
    }); });
    root.addEventListener("click", function (ev) {
      var t = ev.target.closest(".pw-t,[data-sso]"); if (!t) return;
      if (t.dataset.sso) return masuk("Demo " + t.dataset.sso);
      var i = $("input", t.parentNode), show = i.type === "password"; i.type = show ? "text" : "password"; $("i", t).className = "bi bi-" + (show ? "eye-slash" : "eye");
    });
    forms.forEach(function (f) { f.addEventListener("submit", function (ev) {
      ev.preventDefault(); var er = $(".err", f);
      if (f.dataset.f === "daftar") {
        var msg = f.password.value.length < 8 ? "Password minimal 8 karakter." : f.password.value !== f.ulang.value ? "Password dan ulangi password tidak sama." : "";
        if (msg) { er.textContent = msg; er.hidden = false; return; }
      }
      masuk((f.nama && f.nama.value) || f.email.value.split("@")[0], f.email.value);
    }); });
  }

  function dashInit(adm, root) {
    var ctab = "aktif", tab = "ringkasan", sel = null, tg = "aktif", hs = "minecraft", tv = "list", af = "Aktif", aq = "", of = "semua", foto = "", bsv = "minecraft", bfil = "semua", bnew = false, BF = {}, lastTab = "", hcat = {}, cq = "";
    var scrim = document.createElement("div"); scrim.className = "side-scrim"; document.body.appendChild(scrim);
    function isMob() { return window.matchMedia("(max-width:820px)").matches; }
    function syncT() {
      var t = $("#side-t"); if (!t) return; var mob = isMob(), o = root.classList.contains("open"), mi = root.classList.contains("mini");
      $("i", t).className = "bi bi-" + (mob ? (o ? "x-lg" : "list") : (mi ? "layout-sidebar-inset-reverse" : "layout-sidebar-inset"));
      t.setAttribute("aria-expanded", String(mob ? o : !mi)); t.setAttribute("aria-label", mob ? (o ? "Tutup menu" : "Buka menu") : (mi ? "Perlebar menu" : "Persempit menu")); t.title = t.getAttribute("aria-label");
    }
    function setOpen(o) { root.classList.toggle("open", o); scrim.classList.toggle("on", o); syncT(); }
    function setWide() { if (isMob()) setOpen(!root.classList.contains("open")); else { root.classList.toggle("mini"); syncT(); } }
    (function () {
      var side = $(".side", root), hd = $(".topbar"), w = $(".wrap", hd), lg = $(".logo", w), nr = $(".nav-right", w), dc = $(".dc-icon", nr); if (dc) dc.remove();
      var st = $("#side-t"); st.className = "tgl"; st.innerHTML = '<i class="bi bi-layout-sidebar-inset"></i>';
      var sh = document.createElement("div"); sh.className = "side-head"; var lg2 = document.createElement("div"); lg2.className = "logo side-logo"; lg2.innerHTML = lg.innerHTML; lg.parentNode.removeChild(lg); lg = lg2;
      var sx = document.createElement("button"); sx.type = "button"; sx.className = "side-x"; sx.setAttribute("aria-label", "Tutup menu"); sx.innerHTML = '<i class="bi bi-x-lg"></i>';
      side.insertBefore(sh, side.firstChild); sh.appendChild(lg); sh.appendChild(sx);
      var tl = document.createElement("div"); tl.className = "tb-l"; tl.appendChild(st);
      var dl = document.createElement("span"); dl.className = "tb-sub"; dl.textContent = adm ? "Dashboard Admin" : "Dashboard"; tl.appendChild(dl);
      w.insertBefore(tl, nr); root.insertBefore(hd, $(".dmain", root));
      var un = ss("nx-name") || (adm ? "Admin" : "Customer"), em = ss("nx-email") || "-";
      var uw = document.createElement("div"); uw.className = "uwrap";
      uw.innerHTML = '<button type="button" class="uchip" aria-haspopup="true" aria-expanded="false"><span class="av">' + e(un.charAt(0).toUpperCase()) + '</span><span class="un">' + e(un.split(" ")[0]) + '</span><i class="bi bi-chevron-down chv"></i></button><div class="umenu" hidden><div class="um-i"><b>' + e(un) + "</b><small>" + e(em) + '</small></div><div class="um-sep"></div><button type="button" class="um-o"><i class="bi bi-box-arrow-right"></i> Logout</button></div>';
      nr.appendChild(uw);
      if (!adm) {
        var nw = document.createElement("div"); nw.className = "nwrap";
        nw.innerHTML = '<button type="button" class="nbell" aria-label="Notifikasi" aria-haspopup="true" aria-expanded="false"><i class="bi bi-bell"></i><b class="nb" hidden>0</b></button><div class="nmenu" hidden><div class="nm-h"><b>Notifikasi</b><button type="button" class="nm-all">Tandai semua dibaca</button></div><div class="nm-l"></div><div class="nm-f" hidden><button type="button" class="nm-p"><i class="bi bi-bell"></i> Aktifkan notifikasi browser</button></div></div>';
        nr.insertBefore(nw, uw);
        var nbtn = $(".nbell", nw), nmn = $(".nmenu", nw), nbg = $(".nb", nw), seen = null;
        function nOpen(o) { nmn.hidden = !o; nbtn.setAttribute("aria-expanded", String(o)); if (o) { uOpen(false); nfUp(); } }
        function ago(ts) { var m = Math.round((Date.now() - ts) / 60000); return m < 1 ? "Baru saja" : m < 60 ? m + " mnt lalu" : m < 1440 ? Math.floor(m / 60) + " jam lalu" : new Date(ts).toLocaleDateString("id-ID", { day: "numeric", month: "short" }); }
        nfUp = function () {
          var a = nfMine(), un = a.filter(function (n) { return !n.r; });
          nbg.hidden = !un.length; nbg.textContent = un.length > 9 ? "9+" : un.length;
          nbtn.setAttribute("aria-label", "Notifikasi" + (un.length ? ", " + un.length + " belum dibaca" : ""));
          $(".nm-l", nw).innerHTML = a.slice(0, 20).map(function (n) { return '<button type="button" class="nm-i' + (n.r ? "" : " un") + '" data-n="' + n.id + '"><span class="nm-ic ' + n.k + '"><i class="bi bi-' + (n.k === "bill" ? "receipt" : "chat-dots") + '"></i></span><span class="nm-t"><b>' + e(n.t) + "</b><small>" + e(n.x) + "</small><em>" + ago(n.ts) + "</em></span>" + (n.r ? "" : '<i class="nm-d"></i>') + "</button>"; }).join("") || '<div class="nm-e"><i class="bi bi-bell-slash"></i><b>Belum ada notifikasi</b><small>Balasan admin dan update tagihan akan muncul di sini.</small></div>';
          $(".nm-f", nw).hidden = !("Notification" in window) || Notification.permission !== "default";
          if (seen === null) { seen = {}; a.forEach(function (n) { seen[n.id] = 1; }); return; }
          un.forEach(function (n) { if (seen[n.id]) return; seen[n.id] = 1; if ("Notification" in window && Notification.permission === "granted") { try { new Notification(n.t, { body: n.x, icon: "../assets/img/favicon.png" }); } catch (er) {} } });
        };
        nbtn.addEventListener("click", function (ev) { ev.stopPropagation(); nOpen(nmn.hidden); });
        $(".nm-all", nw).addEventListener("click", function () { var a = nfAll(); a.forEach(function (n) { if (n.u === "__me" || n.u === me()) n.r = true; }); sv("nx-notif", a); nfUp(); });
        $(".nm-p", nw).addEventListener("click", function () { Notification.requestPermission().then(function () { nfUp(); toast(Notification.permission === "granted" ? "Notifikasi browser aktif" : "Izin notifikasi ditolak"); }); });
        $(".nm-l", nw).addEventListener("click", function (ev) {
          var it = ev.target.closest("[data-n]"); if (!it) return;
          var a = nfAll(), n = a.filter(function (x) { return x.id === it.dataset.n; })[0]; if (!n) return; n.r = true; sv("nx-notif", a); nOpen(false);
          var tk = TK().filter(function (x) { return x.id === n.tk; })[0]; if (tk) { sel = tk.id; tv = "chat"; tab = cl(tk) ? "riwayat" : "tiket"; setOpen(false); draw(); } else nfUp();
        });
        document.addEventListener("click", function (ev) { if (!nw.contains(ev.target)) nOpen(false); });
        document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") nOpen(false); });
        nfClose = function () { nOpen(false); };
        nfUp();
      }
      var uc = $(".uchip", uw), um = $(".umenu", uw);
      function uOpen(o) { um.hidden = !o; uc.setAttribute("aria-expanded", String(o)); }
      uc.addEventListener("click", function (ev) { ev.stopPropagation(); if (nfClose) nfClose(); uOpen(um.hidden); });
      $(".um-o", uw).addEventListener("click", function () { uOpen(false); outAsk(); });
      document.addEventListener("click", function (ev) { if (!uw.contains(ev.target)) uOpen(false); });
      sx.addEventListener("click", function () { setOpen(false); });
      scrim.addEventListener("click", function () { setOpen(false); });
      document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") { uOpen(false); if (root.classList.contains("open")) setOpen(false); } });
      window.addEventListener("resize", function () { if (!isMob()) root.classList.remove("open"), scrim.classList.remove("on"); syncT(); });
      syncT();
    })();
    function out() { ss("nx-role", ""); go(adm ? "nexora-admin-access.html" : "masuk.html"); }
    function outAsk() {
      modal('<div class="mbox sm warn" role="alertdialog" aria-modal="true" aria-labelledby="lo-t"><span class="warn-ic"><i class="bi bi-box-arrow-right"></i></span><div class="mb"><h3 id="lo-t">Keluar dari akun?</h3><p>Apakah kamu yakin ingin keluar dari akun?</p></div><div class="mf"><button type="button" class="btn ghost" data-x>Batal</button><button type="button" class="btn dng" data-ok>Ya, keluar</button></div></div>', function (m, close) {
        $("[data-ok]", m).addEventListener("click", out);
        m.addEventListener("keydown", function (ev) { if (ev.key === "Escape") close(); });
        $("[data-x].btn", m).focus();
      });
    }
    function tb() { var h = $(".topbar"); if (h) document.documentElement.style.setProperty("--tb", h.offsetHeight + "px"); }
    tb(); window.addEventListener("resize", tb);
    window.__nxAdm = adm; if (!adm) { sv("nx-cust", me()); var UU = USR(), pp = ld("nx-prof", {}), nu = UU[me()] || {}; nu.email = ss("nx-email") || nu.email || ""; nu.discord = pp.discord || nu.discord || ""; nu.wa = pp.wa || nu.wa || ""; nu.joined = nu.joined || new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }); UU[me()] = nu; sv("nx-users", UU); }
    $("#who").textContent = ss("nx-name") || (adm ? "Admin" : "Customer"); var wv = $("#wav"); if (wv) wv.textContent = me().charAt(0).toUpperCase();
    function mine() { return TK().filter(function (x) { return x.user === "__me" || x.user === me(); }); }
    function last(t) { return t.m[t.m.length - 1]; }
    function USR() {
      var u = ld("nx-users", { "Demo Customer": { email: "demo@example.com", discord: "democustomer", wa: "081234567890", joined: "10 Okt 2026" }, "Rizky": { email: "rizky@example.com", discord: "rizky_gg", wa: "085711112222", joined: "02 Okt 2026" }, "Andi": { email: "", discord: "", wa: "", joined: "28 Sep 2026" } });
      return u;
    }
    function waNum(v) { var d = String(v || "").replace(/\D/g, ""); if (!d) return ""; if (d.charAt(0) === "0") d = "62" + d.slice(1); return d; }
    function custNames() {
      var n = Object.keys(USR());
      TK().forEach(function (x) { var u = uname(x); if (n.indexOf(u) < 0) n.push(u); });
      BL().forEach(function (b) { var u = bcust(b); if (n.indexOf(u) < 0) n.push(u); });
      return n;
    }
    function custInfo(name) {
      var u = USR()[name] || {}, tk = TK().filter(function (x) { return uname(x) === name; }), bl = BL().filter(function (b) { return bcust(b) === name; });
      return { name: name, email: u.email || "", discord: u.discord || "", wa: u.wa || "", joined: u.joined || "-", tk: tk, act: tk.filter(function (x) { return !cl(x); }), bl: bl, unpaid: bl.filter(function (b) { return b.st === "Belum dibayar"; }) };
    }
    function custModal(name) {
      var c = custInfo(name), wn = waNum(c.wa), none = '<span class="cu-none">Belum diisi</span>';
      var row = function (ic, lb, v, raw, extra) { return '<div class="cu-r"><span class="cu-i"><i class="bi bi-' + ic + '"></i></span><div class="cu-v"><small>' + lb + "</small>" + (v ? "<b>" + e(v) + "</b>" : none) + "</div>" + (v && raw ? '<button type="button" class="ib" data-c="' + e(raw) + '" aria-label="Salin ' + lb + '"><i class="bi bi-copy"></i></button>' : "") + (extra || "") + "</div>"; };
      var rec = c.tk.slice(0, 4).map(function (x) { return '<button type="button" class="li ln" data-g="' + x.id + '"><span><b>' + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(x.tgl) + "</small></span>" + bd(x.st, 1) + (cl(x) ? '<span class="bd b6">Ditutup</span>' : "") + "</button>"; }).join("") || '<p class="muted">Belum ada ticket.</p>';
      modal('<div class="mbox cu-m"><div class="mh"><div class="cu-h">' + av(name) + '<div><b>' + e(name) + '</b><small>Akun customer</small></div></div><button type="button" class="ib" data-x aria-label="Tutup"><i class="bi bi-x-lg"></i></button></div><div class="mb">' +
        '<div class="cu-st"><div><b>' + c.act.length + "</b><small>Ticket aktif</small></div><div><b>" + c.tk.length + "</b><small>Total ticket</small></div><div><b>" + c.unpaid.length + "</b><small>Tagihan aktif</small></div></div>" +
        '<section class="bd-s"><h4><i class="bi bi-person-lines-fill"></i> Kontak customer</h4><div class="cu-list">' + row("person", "Nama akun", name, name) + row("envelope", "Email", c.email, c.email) + row("discord", "Username Discord", c.discord, c.discord) + row("whatsapp", "WhatsApp", wn ? "+" + wn : "", wn ? "+" + wn : "") + "</div>" + (c.wa || c.discord ? "" : '<p class="cu-note"><i class="bi bi-info-circle"></i> Customer belum melengkapi Discord / WhatsApp di halaman Profil. Hubungi lewat ticket atau email.</p>') + "</section>" +
        '<section class="bd-s"><h4><i class="bi bi-calendar3"></i> Akun</h4><dl class="bd-dl"><div><dt>Bergabung</dt><dd>' + e(c.joined) + "</dd></div></dl></section>" +
        '<section class="bd-s"><h4><i class="bi bi-chat-dots"></i> Ticket terbaru</h4><div class="lis">' + rec + "</div></section></div>" +
        '<div class="mf cu-f"><button type="button" class="btn ghost sm" data-all><i class="bi bi-clipboard"></i> Salin semua kontak</button>' + (wn ? '<a class="btn sm" target="_blank" rel="noopener" href="https://wa.me/' + wn + '"><i class="bi bi-whatsapp"></i> Chat WhatsApp</a>' : '<button type="button" class="btn sm" disabled><i class="bi bi-whatsapp"></i> Chat WhatsApp</button>') + "</div></div>", function (m, close) {
        m.addEventListener("click", function (ev) {
          var b = ev.target.closest("[data-c]"); if (b) { cpy(b.dataset.c); toast("Disalin"); return; }
          var g = ev.target.closest("[data-g]"); if (g) { var id = g.dataset.g, x = TK().filter(function (z) { return z.id === id; })[0]; close(); sel = id; tv = "chat"; tab = "tiket"; if (x) af = cl(x) ? "Riwayat" : "Aktif"; setOpen(false); draw(); }
        });
        $("[data-all]", m).addEventListener("click", function () { cpy("Nama: " + name + "\nEmail: " + (c.email || "-") + "\nDiscord: " + (c.discord || "-") + "\nWhatsApp: " + (wn ? "+" + wn : "-")); toast("Kontak disalin"); });
      });
    }
    function custCards() {
      var q = cq.toLowerCase(), a = custNames().map(custInfo).filter(function (c) { return (c.name + " " + c.email + " " + c.discord + " " + c.wa).toLowerCase().indexOf(q) > -1; });
      return a.map(function (c) {
        var wn = waNum(c.wa), none = '<span class="cu-none">Belum diisi</span>';
        return '<article class="cu-c">' + '<div class="cu-ch">' + av(c.name) + '<div><b>' + e(c.name) + "</b><small>" + c.act.length + " ticket aktif · " + c.tk.length + ' total</small></div>' + (c.unpaid.length ? '<span class="bd b3">' + c.unpaid.length + " tagihan</span>" : "") + "</div>" +
          '<ul class="cu-ls"><li><i class="bi bi-envelope"></i><span>' + (c.email ? e(c.email) : none) + '</span></li><li><i class="bi bi-discord"></i><span>' + (c.discord ? e(c.discord) : none) + '</span></li><li><i class="bi bi-whatsapp"></i><span>' + (wn ? "+" + wn : none) + "</span></li></ul>" +
          '<div class="cu-ca"><button type="button" class="btn ghost sm" data-cu="' + e(c.name) + '"><i class="bi bi-person-vcard"></i> Lihat akun</button>' + (wn ? '<a class="btn sm" target="_blank" rel="noopener" href="https://wa.me/' + wn + '"><i class="bi bi-whatsapp"></i> WhatsApp</a>' : "") + "</div></article>";
      }).join("") || '<div class="dcard empty"><i class="bi bi-people"></i><b>Customer tidak ditemukan</b></div>';
    }
    function nfAll() { return ld("nx-notif", []); }
    function nfMine() { return nfAll().filter(function (n) { return n.u === "__me" || n.u === me(); }); }
    function nt(x, kind, title, text) {
      var P = ld("nx-prof", {}); if ((kind === "tk" && P.nTk === false) || (kind === "bill" && P.nBill === false)) return;
      var a = nfAll(); a.unshift({ id: "N" + Date.now() + Math.random().toString(36).slice(2, 6), u: x.user, k: kind, t: title, x: text, tk: x.id, ts: Date.now(), r: false }); sv("nx-notif", a.slice(0, 60));
    }
    var nfUp, nfClose;
    function actCount() { return mine().filter(function (x) { return !cl(x); }).length; }
    function limitModal() {
      modal('<div class="mbox sm warn" role="alertdialog" aria-modal="true" aria-labelledby="lm-t"><span class="warn-ic am"><i class="bi bi-exclamation-triangle"></i></span><div class="mb"><h3 id="lm-t">Batas ticket tercapai</h3><p>Kamu sudah mempunyai ' + MAXT + ' ticket aktif silahkan menutup 1 ticket untuk membuat ticket baru.</p></div><div class="mf"><button type="button" class="btn ghost" data-x>Mengerti</button><button type="button" class="btn" data-ok>Lihat ticket</button></div></div>', function (m, close) {
        $("[data-ok]", m).addEventListener("click", function () { close(); tab = "tiket"; setOpen(false); draw(); });
        $("[data-x].btn", m).focus();
      });
    }
    function syncOrd(x) {
      var o = OR(), ch = false;
      o.forEach(function (r) { if (r.tk === x.id) { var n = x.st === "Pesanan Diproses" ? "Diproses" : x.st === "Orderan Selesai" ? "Selesai" : "Menunggu"; if (r.st !== n) { r.st = n; ch = true; } } });
      if (ch) sv("nx-or", o);
    }
    function tkStat(id, st, note) {
      var a = TK(), ch = false;
      a.forEach(function (x) { if (x.id === id && !cl(x) && x.st !== st) { x.st = st; x.m.push({ w: "s", t: note || ("Status: " + st), d: "Baru saja", h: hm() }); ch = true; syncOrd(x); nt(x, /agihan|embayaran/.test(note || "") ? "bill" : "tk", /dibatalkan/.test(note || "") ? "Tagihan dibatalkan" : st === "Menunggu pembayaran" ? "Tagihan baru" : st === "Pembayaran Dikonfirmasi" ? "Pembayaran dikonfirmasi" : "Status diperbarui", (note || st) + " · " + x.id); } });
      if (ch) sv("nx-tk", a);
    }
    var AFS = ["Aktif", "Menunggu admin balas", "Terhubung dengan admin", "Menunggu pembayaran", "Pembayaran Dikonfirmasi", "Pesanan Diproses", "Orderan Selesai", "Riwayat"], snap = {};
    function inAf(x, s) { return s === "Aktif" ? !cl(x) : s === "Riwayat" ? cl(x) : (x.st === s && !cl(x)); }
    function mk() { snap = {}; TK().forEach(function (x) { snap[x.id] = [x.m.length, x.st, cl(x)]; }); }
    function remote() {
      var cm = $(".cmp", root), val = cm ? cm.value : "", foc = cm && document.activeElement === cm, mw = adm ? "a" : "c";
      TK().forEach(function (x) { var s = snap[x.id], l = last(x);
        if (!s) { if (adm) toast("Ticket baru: " + x.id); return; }
        if (x.m.length > s[0] && l.w !== mw && l.w !== "s") toast("Pesan baru di " + x.id);
        if (!adm && !s[2] && cl(x)) toast("Ticket " + x.id + " ditutup oleh admin"); else if (!adm && s[1] !== x.st) toast("Status " + x.id + ": " + x.st); });
      draw(); cm = $(".cmp", root); if (cm && val) { cm.value = val; if (foc) cm.focus(); }
    }

    function thread(t, back) {
      var mineW = adm ? "a" : "c", prev = "", closed = cl(t), pd = t.m.length ? dayL(t.m[0]) : "";
      var body = '<div class="sys">Ticket dibuat · ' + e(t.tgl) + "</div>" + t.m.map(function (m, i) {
        var tm = m.h || ptime(t.id, i);
        if (m.w === "s") { prev = ""; return '<div class="sys">' + e(m.t) + " · " + e(dayL(m)) + ", " + tm + "</div>"; }
        var dv = ""; if (dayL(m) !== pd) { pd = dayL(m); dv = '<div class="sys day">' + e(pd) + "</div>"; prev = ""; }
        var first = m.w !== prev, mn = m.w === mineW; prev = m.w;
        var who = m.w === "a" ? "Admin" + (m.n ? " - " + m.n : "") : uname(t), nc = m.w === "a" ? "var(--accent)" : ncol(who);
        return dv + '<div class="row ' + (mn ? "me" : "ot") + (first ? " first" : "") + '">' + (mn ? "" : first ? (m.w === "a" ? '<span class="av nx"><i class="bi bi-box2"></i></span>' : av(uname(t))) : '<span class="av gh"></span>') + '<div class="col"><div class="bub"><span class="bn" style="--nc:' + nc + '">' + e(who) + (mn && !adm ? " · kamu" : "") + "</span>" + e(m.t) + "<time>" + tm + "</time></div></div></div>";
      }).join("") + (closed && last(t).w !== "s" ? '<div class="sys">Ticket ditutup</div>' : "");
      var si = ST.indexOf(t.st), nmsg = t.m.filter(function (m) { return m.w !== "s"; }).length;
      var info = '<div class="th-i"><div class="th-c"><span><i class="bi bi-tag"></i>' + e(t.kat) + "</span>" + (t.paket !== "-" ? '<span><i class="bi bi-box2"></i>' + e(t.paket) + "</span>" : "") + '<span><i class="bi bi-calendar3"></i>' + e(t.tgl) + "</span>" + (adm ? '<button type="button" class="cu-chip" data-cu="' + e(uname(t)) + '"><i class="bi bi-person-vcard"></i>' + e(uname(t)) + " · Lihat akun</button>" : "") + '<span><i class="bi bi-chat-text"></i>' + nmsg + ' pesan</span></div><div class="stpr"><div class="stpr-b' + (closed ? " done" : "") + '">' + ST.map(function (s2, i) { return '<i class="' + (closed || i <= si ? "on" : "") + (i === si && !closed ? " cur" : "") + '" title="' + s2 + '"></i>'; }).join("") + "</div><small>" + (closed ? "Ticket ditutup" : "Langkah " + (si + 1) + " dari " + ST.length + " · <b>" + e(t.st) + "</b>") + "</small></div></div>";
      var cbd = closed ? '<span class="bd b6">Ditutup</span>' : "";
      var act = adm ? (closed ? bd(t.st) + cbd : '<select class="sel" data-st aria-label="Status">' + ST.map(function (s) { return "<option" + (s === t.st ? " selected" : "") + ">" + s + "</option>"; }).join("") + '</select><button class="btn dng sm" type="button" data-close><i class="bi bi-x-lg"></i> Tutup ticket</button>') : bd(t.st) + cbd;
      return '<div class="th"><div class="th-h">' + (adm || back ? '<button class="ib bk-b" type="button" data-back aria-label="Kembali"><i class="bi bi-chevron-left"></i></button>' : "") + (adm ? av(uname(t)) : '<span class="th-ic"><i class="bi bi-' + (t.kat === "Order baru" ? "receipt" : t.kat === "Pembayaran" ? "wallet2" : "chat-dots") + '"></i></span>') + '<div class="th-t"><b>' + e(t.subj) + "</b><small>" + e(t.id) + (adm ? " · " + e(uname(t)) : "") + '</small></div><div class="th-a">' + act + "</div></div>" + info +
        '<div class="th-m">' + body + "</div>" +
        (closed ? '<p class="muted done"><i class="bi bi-chat-dots"></i> Ticket ini sudah ditutup, chat tidak bisa dikirim lagi.' + (adm ? "" : " Buka ticket baru kalau masih butuh bantuan.") + "</p>" : '<form class="th-f" data-rep><textarea class="cmp" rows="1" placeholder="Tulis pesan…" enterkeyhint="send" required></textarea><button class="send" type="submit" aria-label="Kirim"><i class="bi bi-send"></i></button></form>') + "</div>";
    }
    function admList() {
      var a = TK().filter(function (x) { return inAf(x, af) && (x.subj + " " + uname(x) + " " + x.id).toLowerCase().indexOf(aq.toLowerCase()) > -1; });
      return a.map(function (x) { var l = last(x); return '<button class="tk-item" data-id="' + x.id + '" aria-current="' + (x.id === sel) + '">' + av(uname(x)) + '<span class="ti"><b>' + (!cl(x) && l.w === "c" ? '<i class="dot" title="Menunggu balasan"></i>' : "") + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(uname(x)) + '</small><span class="pv">' + e(l.t) + '</span></span><span class="tr"><small>' + e(l.d) + "</small>" + bd(x.st, 1) + "</span></button>"; }).join("") || '<p class="muted pad">Tidak ada ticket.</p>';
    }
    function cList() {
      var q = aq.toLowerCase();
      var a = mine().filter(function (x) { return !cl(x) && (x.subj + " " + x.id + " " + x.paket + " " + x.kat).toLowerCase().indexOf(q) > -1; });
      return a.map(function (x) {
        var l = last(x), who = l.w === "a" ? "Admin: " : l.w === "c" ? "Kamu: " : "";
        return '<button class="tk-item cti" data-id="' + x.id + '" aria-current="' + (x.id === sel) + '"><span class="ct-ic"><i class="bi bi-' + (x.kat === "Order baru" ? "receipt" : x.kat === "Pembayaran" ? "wallet2" : "chat-dots") + '"></i></span><span class="ti"><b>' + (l.w === "a" ? '<i class="dot" title="Ada balasan admin"></i>' : "") + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(x.kat) + (x.paket !== "-" ? " · " + e(x.paket) : "") + '</small><span class="pv">' + who + e(l.t) + '</span></span><span class="tr"><small>' + e(l.d) + "</small>" + bd(x.st, 1) + "</span></button>";
      }).join("") || '<p class="muted pad">Tidak ada ticket yang cocok.</p>';
    }
    function histList() {
      var q = aq.toLowerCase();
      var a = mine().filter(function (x) { return cl(x) && (x.subj + " " + x.id + " " + x.paket + " " + x.kat).toLowerCase().indexOf(q) > -1; });
      return a.map(function (x) { var l = last(x); return '<button class="tk-item" data-id="' + x.id + '" aria-current="' + (x.id === sel) + '"><span class="hs-ic"><i class="bi bi-check2-circle"></i></span><span class="ti"><b>' + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(x.kat) + (x.paket !== "-" ? " · " + e(x.paket) : "") + '</small><span class="pv">' + e(l.t) + '</span></span><span class="tr"><small>' + e(x.tgl) + "</small>" + bd(x.st) + "</span></button>"; }).join("") || '<p class="muted pad">Tidak ada riwayat yang cocok.</p>';
    }
    function histPanel() {
      var all = mine().filter(function (x) { return cl(x); });
      if (!all.length) return '<div class="dcard empty"><i class="bi bi-clock-history"></i><b>Belum ada riwayat ticket</b><p class="muted">Ticket yang ditutup admin akan masuk ke sini.</p></div>';
      if (!all.some(function (x) { return x.id === sel; })) sel = null;
      var t = all.filter(function (x) { return x.id === sel; })[0];
      return '<div class="tk adm hs ' + (sel ? tv : "list") + '"><div class="tk-side"><div class="tk-tools"><label class="sbox"><i class="bi bi-search"></i><input class="inp" data-q type="search" placeholder="Cari riwayat ticket…" value="' + e(aq) + '"></label><div class="hs-cnt"><i class="bi bi-clock-history"></i> ' + all.length + ' ticket selesai</div></div><div class="tk-list">' + histList() + '</div></div><div class="tk-chat">' + (t ? thread(t, true) : '<div class="dcard empty"><i class="bi bi-clock-history"></i><b>Pilih ticket</b><p class="muted">Pilih ticket di kiri untuk membaca percakapannya.</p></div>') + "</div></div>";
    }
    function tkPanel() {
      if (!adm) {
        var hist = tab === "riwayat"; tg = hist ? "selesai" : "aktif";
        if (hist) return histPanel();
        var cur = mine().filter(function (x) { return !cl(x); }), n = cur.length;
        if (!cur.some(function (x) { return x.id === sel; })) sel = (!isMob() && n) ? cur[0].id : null;
        var t = cur.filter(function (x) { return x.id === sel; })[0], dots = "";
        for (var d2 = 0; d2 < MAXT; d2++) dots += "<i" + (d2 < n ? ' class="on"' : "") + "></i>";
        var head = '<div class="cth"><div class="cquota"><div class="qd">' + dots + "</div><span><b>" + n + "</b> dari " + MAXT + " ticket aktif" + (n >= MAXT ? " · batas tercapai" : "") + '</span></div><button class="btn" data-go="buka"><i class="bi bi-plus-circle"></i> Ticket baru</button></div>';
        if (!n) return head + '<div class="dcard empty"><i class="bi bi-chat-dots"></i><b>Tidak ada ticket aktif</b><p class="muted">Buka ticket baru untuk order atau bertanya ke tim NEXORA.</p></div>';
        return head + '<div class="tk adm cs ' + (sel ? tv : "list") + '"><div class="tk-side"><div class="tk-tools"><label class="sbox"><i class="bi bi-search"></i><input class="inp" data-q type="search" placeholder="Cari ticket…" value="' + e(aq) + '"></label></div><div class="tk-list">' + cList() + '</div></div><div class="tk-chat">' + (t ? thread(t, true) : '<div class="dcard empty"><i class="bi bi-chat-dots"></i><b>Pilih ticket</b><p class="muted">Pilih ticket di kiri untuk membaca dan membalas.</p></div>') + "</div></div>";
      }
      var all = TK();
      if (!all.some(function (x) { return x.id === sel; })) sel = null;
      var t2 = all.filter(function (x) { return x.id === sel; })[0];
      var chips = AFS.map(function (s) { var n = all.filter(function (x) { return inAf(x, s); }).length; return '<button class="chip" data-af="' + s + '" aria-pressed="' + (af === s) + '">' + (SHORT[s] || s) + " <b>" + n + "</b></button>"; }).join("");
      return '<div class="tk adm ' + (sel ? tv : "list") + '"><div class="tk-side"><div class="tk-tools"><label class="sbox"><i class="bi bi-search"></i><input class="inp" data-q type="search" placeholder="Cari ticket atau customer…" value="' + e(aq) + '"></label><div class="chips mini">' + chips + '</div></div><div class="tk-list">' + admList() + '</div></div><div class="tk-chat">' + (t2 ? thread(t2) : '<div class="dcard empty"><i class="bi bi-chat-dots"></i><b>Pilih ticket</b><p class="muted">Pilih ticket di kiri untuk melihat dan membalas.</p></div>') + "</div></div>";
    }
    function ddBuild(f, rows) {
      var menu = $("#dd-paket .dd-menu"), g = "";
      f.paket.value = rows[0] ? rows[0].nama : ""; f.paket.dataset.l = bsv;
      menu.innerHTML = rows.map(function (p) {
        var h = p.kat !== g ? '<div class="dd-grp">' + e(p.kat) + "</div>" : ""; g = p.kat;
        return h + '<button class="dd-opt" type="button" role="option" data-v="' + e(p.nama) + '"><span class="tx"><b>' + e(p.nama) + "</b><small>" + e(p.ringkas || "") + '</small></span><span class="pr2">' + rp(p.harga) + '</span><i class="bi bi-check2 ck"></i></button>';
      }).join("");
    }
    function ddSync(p) {
      var dd = $("#dd-paket"); if (!dd) return;
      $(".dd-val", dd).innerHTML = p ? "<b>" + e(p.nama) + "</b><small>" + e(p.kat) + " · " + rp(p.harga) + "</small>" : "Pilih paket";
      $$(".dd-opt", dd).forEach(function (o) { o.setAttribute("aria-selected", !!p && o.dataset.v === p.nama); });
    }
    function ddClose() { $$(".dd-menu").forEach(function (m) { m.hidden = true; if (m.previousElementSibling) m.previousElementSibling.setAttribute("aria-expanded", "false"); }); }
    document.addEventListener("click", function (ev) { if (!ev.target.closest(".dd")) ddClose(); });
    function bukaSync() {
      var f = $("#f-buka"); if (!f) return;
      var k = f.kat.value, ord = k === "Order baru";
      $("#ord").hidden = !ord; $("#rq").hidden = ord; f.subj.required = !ord; $("#n3").textContent = ord ? "3" : "2";
      var rows = bsv === "hosting" ? HG().hosting : HG().jasa[bsv];
      if (ord && f.paket.dataset.l !== bsv) ddBuild(f, rows);
      var p = rows.filter(function (x) { return x.nama === f.paket.value; })[0]; ddSync(p);
      $("#pcv").innerHTML = ord && p ? '<div class="pc"><div><b>' + e(p.nama) + "</b><small> · " + e(p.kat) + "</small><p>" + e(p.ringkas) + '</p><div class="tg">' + (p.fitur || []).slice(0, 5).map(function (x) { return "<span>" + e(x) + "</span>"; }).join("") + '</div></div><div class="pr"><small>Mulai dari</small><b>' + rp(p.harga) + "</b><small>" + (bsv === "hosting" ? "per bulan" : "sekali bayar") + "</small></div></div><p class=\"hint\">Harga final dikonfirmasi tim NEXORA.</p>" : "";
      f.subj.placeholder = ord ? "Boleh dikosongkan, otomatis jadi Order " + (p ? p.nama : "") : "Ringkas masalah atau pertanyaanmu";
      f.msg.placeholder = ord ? "Ceritakan kebutuhanmu: versi Minecraft, jumlah pemain, plugin atau mod yang diinginkan, dll." : "Tulis pesanmu dengan jelas agar cepat kami bantu.";
    }
    function li(a) { return a.map(function (x) { return '<button class="li" data-gt="' + x.id + '"><span><b>' + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(x.tgl) + "</small></span>" + bd(x.st, 1) + "</button>"; }).join("") || '<p class="muted">Belum ada.</p>'; }
    function harga(kind) {
      var H = HG(), rows = kind === "hosting" ? H.hosting : H.jasa[hs], j = kind === "jasa", cats = [];
      rows.forEach(function (p) { if (cats.indexOf(p.kat) < 0) cats.push(p.kat); });
      var cf = hcat[kind] || "semua"; if (cf !== "semua" && cats.indexOf(cf) < 0) cf = "semua"; hcat[kind] = cf;
      var head = '<div class="tkhead">' + (j ? '<div class="seg2">' + [["minecraft", "Minecraft"], ["discord", "Discord"]].map(function (x) { return '<button type="button" data-hs="' + x[0] + '" aria-pressed="' + (x[0] === hs) + '">' + x[1] + " <b>" + H.jasa[x[0]].length + "</b></button>"; }).join("") + "</div>" : '<span class="muted">' + rows.length + " paket hosting</span>") + '<button class="btn" type="button" data-add><i class="bi bi-plus-circle"></i> Tambah paket</button></div>';
      var chips = cats.length > 1 ? '<div class="chips mini pk-chips">' + ["semua"].concat(cats).map(function (c) { var n = c === "semua" ? rows.length : rows.filter(function (p) { return p.kat === c; }).length; return '<button class="chip" type="button" data-hc="' + e(c) + '" aria-pressed="' + (c === cf) + '">' + (c === "semua" ? "Semua" : e(c)) + " <b>" + n + "</b></button>"; }).join("") + "</div>" : "";
      var card = function (p, i) {
        var f = p.fitur || [];
        return '<article class="pkc"><div class="pkc-t">' + (j ? '<span class="thumb">' + (p.foto ? '<img src="' + p.foto + '" alt="">' : '<i class="bi bi-image"></i>') + "</span>" : "") + '<div class="pkc-n"><b>' + e(p.nama) + '</b><span class="pkc-k">' + e(p.kat) + '</span></div><div class="pkc-p"><strong>' + rp(p.harga) + "</strong><small>" + (j ? "sekali bayar" : "per bulan") + "</small></div></div>" +
          (p.ringkas ? '<p class="pkc-d">' + e(p.ringkas) + "</p>" : "") +
          '<ul class="pkc-f">' + f.slice(0, 3).map(function (x) { return '<li><i class="bi bi-check2"></i>' + e(x) + "</li>"; }).join("") + (f.length > 3 ? '<li class="more">+' + (f.length - 3) + " fitur lainnya</li>" : "") + (f.length ? "" : '<li class="more">Belum ada isi paket</li>') + "</ul>" +
          '<div class="pkc-a"><button class="btn ghost sm" type="button" data-edit="' + i + '"><i class="bi bi-pencil"></i> Edit</button><button class="btn ghost sm dn" type="button" data-del="' + i + '"><i class="bi bi-trash"></i> Hapus</button></div></article>';
      };
      var body = cats.filter(function (c) { return cf === "semua" || c === cf; }).map(function (c) {
        var it = rows.map(function (p, i) { return p.kat === c ? card(p, i) : ""; }).join("");
        return '<div class="pk-grp"><h3 class="pk-gh">' + e(c) + "<small>" + rows.filter(function (p) { return p.kat === c; }).length + ' paket</small></h3><div class="pk-grid">' + it + "</div></div>";
      }).join("") || '<div class="dcard empty"><i class="bi bi-tags"></i><b>Belum ada paket</b><p class="muted">Klik Tambah paket untuk membuat paket pertama.</p></div>';
      $("#p-" + kind).innerHTML = head + chips + body;
    }
    function formPaket(kind, idx) {
      var H = HG(), rows = kind === "hosting" ? H.hosting : H.jasa[hs], p = idx == null ? {} : rows[idx], j = kind === "jasa";
      var cats = []; rows.forEach(function (x) { if (cats.indexOf(x.kat) < 0) cats.push(x.kat); }); foto = p.foto || "";
      var fr = function (v) { return '<div class="frow"><span class="fgrip"><i class="bi bi-check2"></i></span><input class="inp" maxlength="80" value="' + e(v || "") + '" placeholder="Contoh: RAM 2 GB"><button type="button" class="ib dn" data-fx aria-label="Hapus baris"><i class="bi bi-x-lg"></i></button></div>'; };
      var feats = (p.fitur && p.fitur.length ? p.fitur : [""]).map(fr).join("");
      modal('<form class="mbox pk" id="f-pkt"><div class="mh"><div><b>' + (idx == null ? "Tambah paket" : "Edit paket") + "</b>" + (idx == null ? "" : '<small class="muted pk-sub">' + e(p.nama) + "</small>") + '</div><button type="button" class="ib" data-x aria-label="Tutup"><i class="bi bi-x-lg"></i></button></div><div class="mb">' +
        '<div class="pk-s"><h4><i>1</i>Info paket</h4><label class="fld"><span>Nama paket <em class="req">*</em></span><input class="inp" name="nama" required maxlength="40" value="' + e(p.nama) + '" placeholder="Contoh: Pulse"></label>' +
        '<div class="fld"><span>Kategori <em class="req">*</em></span><input class="inp" name="kat" required maxlength="30" value="' + e(p.kat) + '" placeholder="Pilih di bawah atau ketik kategori baru">' + (cats.length ? '<div class="catpick">' + cats.map(function (c) { return '<button type="button" class="cat-chip" data-cc="' + e(c) + '" aria-pressed="' + (c === p.kat) + '">' + e(c) + "</button>"; }).join("") + "</div>" : "") + "</div>" +
        '<label class="fld"><span>Deskripsi singkat</span><input class="inp" name="ringkas" maxlength="90" value="' + e(p.ringkas) + '" placeholder="Satu kalimat yang menjelaskan paket ini"></label></div>' +
        '<div class="pk-s"><h4><i>2</i>Harga</h4><label class="fld"><span>Harga (Rp) <em class="req">*</em></span><div class="money"><span>Rp</span><input class="inp" name="harga" type="number" inputmode="numeric" min="0" required value="' + (p.harga == null ? "" : p.harga) + '" placeholder="0"></div><small class="hint" id="hg-v">' + (p.harga == null ? "Tulis angka tanpa titik." : rp(p.harga) + (j ? " · sekali bayar" : " · per bulan")) + "</small></label></div>" +
        '<div class="pk-s"><h4><i>3</i>Isi paket</h4><small class="hint">Satu fitur per baris. Tekan Enter untuk menambah baris baru.</small><div class="flist" id="fr-list">' + feats + '</div><button type="button" class="btn ghost sm" id="fr-add"><i class="bi bi-plus-lg"></i> Tambah baris</button></div>' +
        (j ? '<div class="pk-s"><h4><i>4</i>Foto</h4><div class="upl"><input class="upl-in" type="file" accept="image/*" id="pf"><label class="upl-box" for="pf"><span class="upl-pv" id="fp">' + (foto ? '<img src="' + foto + '" alt="">' : '<i class="bi bi-image"></i>') + '</span><span class="upl-t"><b>Foto paket</b><small id="pf-name">' + (foto ? "Foto aktif. Klik atau seret gambar baru." : PF_TXT) + '</small></span><span class="btn sm upl-btn"><i class="bi bi-cloud-arrow-up"></i> Pilih foto</span></label><button type="button" class="btn ghost sm" id="pf-x"><i class="bi bi-trash3"></i> Hapus foto</button></div></div>' : "") +
        '</div><div class="mf"><button type="button" class="btn ghost" data-x>Batal</button><button class="btn" type="submit"><i class="bi bi-check2"></i> Simpan paket</button></div></form>', function (m, close) {
        var fl = $("#fr-list", m), kin = $('[name="kat"]', m), hin = $('[name="harga"]', m);
        function addRow(v, focus) { var d = document.createElement("div"); d.innerHTML = fr(v); var r = d.firstChild; fl.appendChild(r); if (focus) $("input", r).focus(); }
        $("#fr-add", m).addEventListener("click", function () { addRow("", true); });
        fl.addEventListener("click", function (ev) { var x = ev.target.closest("[data-fx]"); if (!x) return; var r = x.closest(".frow"); if ($$(".frow", fl).length > 1) r.remove(); else $("input", r).value = ""; });
        fl.addEventListener("keydown", function (ev) { if (ev.key === "Enter" && ev.target.matches("input")) { ev.preventDefault(); addRow("", true); } });
        function syncCat() { $$(".cat-chip", m).forEach(function (c) { c.setAttribute("aria-pressed", c.dataset.cc === kin.value.trim()); }); }
        $$(".cat-chip", m).forEach(function (c) { c.addEventListener("click", function () { kin.value = c.dataset.cc; syncCat(); }); });
        kin.addEventListener("input", syncCat);
        hin.addEventListener("input", function () { $("#hg-v", m).textContent = hin.value !== "" ? rp(hin.value) + (j ? " · sekali bayar" : " · per bulan") : "Tulis angka tanpa titik."; });
        var pf = $("#pf", m); if (pf) {
          var setF = function (file) { if (!file || file.type.indexOf("image/") !== 0) return toast("File harus berupa gambar"); shrink(file, 640, "image/jpeg", function (d) { foto = d; $("#fp", m).innerHTML = '<img src="' + d + '" alt="">'; $("#pf-name", m).textContent = file.name + " · " + Math.max(1, Math.round(file.size / 1024)) + " KB"; }); };
          pf.addEventListener("change", function () { if (pf.files[0]) setF(pf.files[0]); pf.value = ""; });
          var ub = $(".upl-box", m);
          ub.addEventListener("dragover", function (ev) { ev.preventDefault(); ub.classList.add("drag"); });
          ub.addEventListener("dragleave", function () { ub.classList.remove("drag"); });
          ub.addEventListener("drop", function (ev) { ev.preventDefault(); ub.classList.remove("drag"); setF(ev.dataTransfer.files[0]); });
          $("#pf-x", m).addEventListener("click", function () { foto = ""; $("#fp", m).innerHTML = '<i class="bi bi-image"></i>'; $("#pf-name", m).textContent = PF_TXT; });
        }
        $("#f-pkt", m).addEventListener("submit", function (ev) {
          ev.preventDefault(); var f = ev.target, it = { nama: f.nama.value.trim(), kat: f.kat.value.trim(), harga: Number(f.harga.value), ringkas: f.ringkas.value.trim(), fitur: $$(".frow input", fl).map(function (x) { return x.value.trim(); }).filter(Boolean) };
          if (j && foto) it.foto = foto;
          var H2 = HG(), r = kind === "hosting" ? H2.hosting : H2.jasa[hs]; if (idx == null) r.push(it); else r[idx] = it;
          sv("nx-harga", H2); close(); toast("Paket tersimpan (demo, belum mengubah web asli)"); draw();
        });
      });
    }
    var UPL_TXT = "PNG, JPG, atau WEBP. Klik atau seret gambar ke sini.";
    var PF_TXT = "JPG, PNG, atau WEBP. Disarankan rasio 16:9.";
    function uplHTML(T) {
      return '<div class="upl"><input class="upl-in" type="file" accept="image/*" id="lg"><label class="upl-box" for="lg"><span class="upl-pv" id="upl-pv">' + (T.logo ? '<img src="' + T.logo + '" alt="">' : '<i class="bi bi-image"></i>') + '</span><span class="upl-t"><b id="upl-ttl">' + (T.logo ? "Logo aktif" : "Unggah logo") + '</b><small id="upl-name">' + (T.logo ? "Klik atau seret gambar baru untuk mengganti." : UPL_TXT) + '</small></span><span class="btn sm upl-btn"><i class="bi bi-cloud-arrow-up"></i> Pilih file</span></label><button class="btn ghost sm" id="lg-x" type="button"><i class="bi bi-trash3"></i> Hapus logo</button></div>';
    }
    function setLogo(file) {
      if (!file || file.type.indexOf("image/") !== 0) return toast("File harus berupa gambar");
      shrink(file, 256, "image/png", function (d) {
        root._T.logo = d; $("#nvl").innerHTML = '<img src="' + d + '" alt="Logo">';
        var pv = $("#upl-pv"); if (pv) pv.innerHTML = '<img src="' + d + '" alt="">';
        var nm = $("#upl-name"); if (nm) nm.textContent = file.name + " · " + Math.max(1, Math.round(file.size / 1024)) + " KB";
        var tt = $("#upl-ttl"); if (tt) tt.textContent = "Logo dipilih";
      });
    }
    var QR_TXT = "PNG atau JPG. Klik atau seret gambar QR ke sini.";
    function qrNow() { try { return localStorage.getItem("nx-qr") || ""; } catch (x) { return mem["nx-qr"] || ""; } }
    function qrHTML() {
      var q = qrNow();
      return '<div class="dcard wide"><b>QR Code Discord</b><p class="muted">Tampil di bagian "Siap bikin server kamu?" di halaman utama. Pakai gambar QR yang jelas dan berlatar putih.</p><div class="qr-adm"><div class="upl"><input class="upl-in" type="file" accept="image/*" id="qr"><label class="upl-box" for="qr"><span class="upl-pv" id="qr-pv">' + (q ? '<img src="' + q + '" alt="">' : '<i class="bi bi-qr-code"></i>') + '</span><span class="upl-t"><b id="qr-ttl">' + (q ? "QR aktif" : "Unggah QR Code") + '</b><small id="qr-name">' + (q ? "Klik atau seret gambar baru untuk mengganti." : QR_TXT) + '</small></span><span class="btn sm upl-btn"><i class="bi bi-cloud-arrow-up"></i> Pilih file</span></label><button class="btn ghost sm" id="qr-x" type="button"' + (q ? "" : " hidden") + '><i class="bi bi-trash3"></i> Hapus QR</button></div><div class="qr-pvw"><span class="qr-pvb" id="qr-pvb">' + (q ? '<img src="' + q + '" alt="QR">' : '<small>Belum ada QR</small>') + '</span><small class="muted">Pratinjau di homepage</small></div></div></div>';
    }
    function qrShow(d, nama) {
      var pv = $("#qr-pv"); if (pv) pv.innerHTML = d ? '<img src="' + d + '" alt="">' : '<i class="bi bi-qr-code"></i>';
      var b = $("#qr-pvb"); if (b) b.innerHTML = d ? '<img src="' + d + '" alt="QR">' : "<small>Belum ada QR</small>";
      var tt = $("#qr-ttl"); if (tt) tt.textContent = d ? "QR aktif" : "Unggah QR Code";
      var nm = $("#qr-name"); if (nm) nm.textContent = d ? (nama || "Klik atau seret gambar baru untuk mengganti.") : QR_TXT;
      var x = $("#qr-x"); if (x) x.hidden = !d;
    }
    function setQR(file) {
      if (!file || file.type.indexOf("image/") !== 0) return toast("File harus berupa gambar");
      shrink(file, 800, "image/png", function (d) {
        try { localStorage.setItem("nx-qr", d); } catch (x) { mem["nx-qr"] = d; return toast("QR dipakai sementara (penyimpanan browser penuh/diblokir)"); }
        qrShow(d, file.name + " \u00b7 " + Math.max(1, Math.round(file.size / 1024)) + " KB"); toast("QR Code diperbarui di homepage");
      });
    }
    function tampilan() {
      var T = ld("nx-tampilan", { nama: "NEXORA", discord: "https://discord.gg/7bFYCRheRm", hero: "Buat Server Minecraft Impianmu Bersama NEXORA.", sub: "Kami membantu menyiapkan server Minecraft, server Discord, dan hosting. Kamu tinggal fokus main dan membangun komunitas.", warna: "#7c5cff", logo: "" });
      var cols = ["#7c5cff", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"];
      $("#p-tampilan").innerHTML = '<div class="tmp"><div class="tcol"><div class="dcard"><b>Logo & nama</b><p class="muted">Tampil di navbar dan footer.</p><div class="nv-prev"><span class="lg" id="nvl">' + (T.logo ? '<img src="' + T.logo + '" alt="">' : '<i class="bi bi-box2"></i>') + '</span><b id="nvn">' + e(T.nama) + '</b></div>' + uplHTML(T) + '<label class="fld" style="margin-top:14px"><span>Nama situs</span><input class="inp" data-t="nama" value="' + e(T.nama) + '"></label></div><div class="dcard"><b>Warna aksen</b><p class="muted">Pilih warna utama tombol dan penanda.</p><div class="sws">' + cols.map(function (c) { return '<button type="button" class="sw" data-c="' + c + '" style="--c:' + c + '" aria-pressed="' + (c === T.warna) + '" aria-label="Warna ' + c + '"></button>'; }).join("") + '</div><div class="pvbox" id="pvb" style="--pv:' + T.warna + '"><span class="pb">Tombol contoh</span><span class="pg">Badge</span></div></div></div><div class="tcol">' + qrHTML() + '<div class="dcard"><b>Teks halaman utama</b><label class="fld" style="margin-top:12px"><span>Judul</span><input class="inp" data-t="hero" value="' + e(T.hero) + '"></label><label class="fld"><span>Deskripsi</span><textarea class="txa" data-t="sub">' + e(T.sub) + '</textarea></label><label class="fld"><span>Link invite Discord</span><input class="inp" data-t="discord" value="' + e(T.discord) + '"></label></div></div></div><div class="tmp-a"><button class="btn" id="sv-tmp">Simpan perubahan</button><button class="btn ghost" id="rs-tmp">Reset</button></div>';
      root._T = T;
    }
    /* ===== Tagihan ===== */
    var BMS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"], BMF = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    function pad(n) { return ("0" + n).slice(-2); }
    function iso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
    function pdt(s) { var a = s.split("-"); return new Date(+a[0], +a[1] - 1, +a[2]); }
    function fdt(s) { var d = pdt(s); return d.getDate() + " " + BMS[d.getMonth()] + " " + d.getFullYear(); }
    function t0() { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }
    function dleft(s) { return Math.round((pdt(s) - t0()) / 864e5); }
    function stamp() { var t = new Date(); return t.getDate() + " " + BMS[t.getMonth()] + " " + t.getFullYear() + ", " + pad(t.getHours()) + ":" + pad(t.getMinutes()); }
    function seedB() {
      var ad = function (n) { return iso(new Date(t0().getTime() + n * 864e5)); }, lg = [{ a: "Tagihan dibuat dan dikirim ke customer", by: "Admin NEXORA", at: "15 Okt 2026, 10:00" }];
      return [
        { id: "INV-3003", tk: "T-1042", user: "__me", item: "Pulse", siklus: "Bulanan", dasar: 19000, adj: "none", pct: 0, alasan: "", total: 19000, jatuh: ad(5), st: "Belum dibayar", dibuat: ad(-2), by: "Admin NEXORA", ts: 0, ticket: "", log: lg },
        { id: "INV-3002", tk: "T-1040", user: "Rizky", item: "Server Gaming", siklus: "Sekali bayar", dasar: 35000, adj: "none", pct: 0, alasan: "", total: 35000, jatuh: ad(-3), st: "Belum dibayar", dibuat: ad(-10), by: "Admin NEXORA", ts: 0, ticket: "", log: lg },
        { id: "INV-3001", tk: "T-1031", user: "__me", item: "Vanilla Starter", siklus: "Sekali bayar", dasar: 40000, adj: "none", pct: 0, alasan: "", total: 40000, jatuh: ad(-20), st: "Lunas", dibuat: ad(-25), by: "Admin NEXORA", ts: 0, ticket: "", log: lg.concat([{ a: "Ditandai lunas", by: "Admin NEXORA", at: "03 Okt 2026, 09:12" }]) }];
    }
    function BL() { return ld("nx-bill", seedB()); }
    function bj(b) { return b.jenis || (b.siklus === "Sekali bayar" ? "bill" : "hosting"); }
    function cpy(t) { if (navigator.clipboard) navigator.clipboard.writeText(t).catch(function () {}); else { var x = document.createElement("textarea"); x.value = t; document.body.appendChild(x); x.select(); try { document.execCommand("copy"); } catch (e) {} x.remove(); } }
    function bs(b) { return b.st === "Belum dibayar" && dleft(b.jatuh) < 0 ? "Terlambat" : b.st; }
    function rel(b) { var n = dleft(b.jatuh); return n < 0 ? "Terlambat " + (-n) + " hari" : n === 0 ? "Jatuh tempo hari ini" : "Dalam " + n + " hari"; }
    function bmine(b) { return b.user === "__me" || b.user === me(); }
    function bcust(b) { return b.user === "__me" ? ld("nx-cust", "Demo Customer") : b.user; }
    function pk(n) {
      var H = HG(), f = function (r) { return r.filter(function (x) { return x.nama === n; })[0]; }, p = f(H.hosting);
      if (p) return { harga: p.harga, host: true };
      p = f(H.jasa.minecraft) || f(H.jasa.discord); return p ? { harga: p.harga, host: false } : null;
    }
    function OTL() { return TK().filter(function (x) { if (x.kat !== "Order baru") return false; if (BF.jenis === "bill") return true; var q = pk(x.paket); return !!(q && q.host); }); }
    function sik(t) { return pk(t.paket).host ? ["Bulanan", "Tahunan"] : ["Sekali bayar"]; }
    function bfReset() { var x = new Date(Date.now() + 7 * 864e5); BF = { jenis: "hosting", tk: "", siklus: "", d: String(x.getDate()), m: String(x.getMonth() + 1), y: String(x.getFullYear()), adj: "none", pct: "", alasan: "", nom: "", ket: "" }; }
    function bDue() { return BF.y + "-" + pad(BF.m) + "-" + pad(BF.d); }
    function calc() {
      var t = TK().filter(function (x) { return x.id === BF.tk; })[0]; if (!t) return null;
      if (BF.jenis === "bill") { var n = Math.round(Number(BF.nom) || 0); return { t: t, dasar: n, pct: 0, total: n }; }
      var q = pk(t.paket); if (!q) return null;
      var dasar = q.harga * (BF.siklus === "Tahunan" ? 12 : 1), pct = BF.adj === "none" ? 0 : Math.min(20, Math.max(0, Number(BF.pct) || 0)), sg = BF.adj === "diskon" ? -1 : 1;
      return { t: t, dasar: dasar, pct: pct, total: Math.round(dasar * (1 + sg * pct / 100)) };
    }
    function srows(p) { return '<div class="sum">' + p.map(function (x) { return "<div><span>" + e(x[0]) + "</span><b>" + e(x[1]) + "</b></div>"; }).join("") + "</div>"; }
    function ddH(id, cur, opts) {
      var c = opts.filter(function (o) { return String(o.v) === String(cur); })[0];
      return '<div class="dd full" id="' + id + '" data-bdd><button class="dd-btn" type="button" aria-haspopup="listbox" aria-expanded="false"><span class="dd-val">' + (c ? "<b>" + e(c.t) + "</b>" + (c.s ? "<small>" + e(c.s) + "</small>" : "") : "<b>Pilih</b>") + '</span><i class="bi bi-chevron-down chev"></i></button><div class="dd-menu" role="listbox" hidden>' +
        opts.map(function (o) { return '<button class="dd-opt" type="button" role="option" data-v="' + e(o.v) + '" aria-selected="' + (String(o.v) === String(cur)) + '"><span class="tx"><b>' + e(o.t) + "</b>" + (o.s ? "<small>" + e(o.s) + "</small>" : "") + '</span><i class="bi bi-check2 ck"></i></button>'; }).join("") + "</div></div>";
    }
    function bdd(id, v) {
      var k = { "dd-bo": "tk", "dd-bd": "d", "dd-bm": "m", "dd-by": "y" }[id]; BF[k] = v;
      if (k === "tk") { var t = TK().filter(function (x) { return x.id === v; })[0], q = pk(t.paket); if (BF.jenis === "bill") { BF.siklus = "Sekali bayar"; if (q) BF.nom = String(q.harga); } else BF.siklus = sik(t)[0]; }
      draw();
    }
    function bForm() {
      var els = OTL(), y = new Date().getFullYear(), c = calc(), days = [], mons = [], bill = BF.jenis === "bill", n = 0;
      for (var i = 1; i <= 31; i++) days.push({ v: i, t: String(i) });
      BMF.forEach(function (m, k) { mons.push({ v: k + 1, t: m }); });
      var adjs = [["none", "Tanpa penyesuaian"], ["diskon", "Diskon"], ["biaya", "Biaya tambahan"]];
      var sec = function (t, h) { n++; return '<section class="bs"><h3><i>' + n + "</i>" + t + "</h3>" + h + "</section>"; };
      return '<div class="tkhead"><button class="btn ghost" type="button" data-bx="back"><i class="bi bi-arrow-left"></i> Kembali ke daftar</button></div><div class="bk"><div class="bfm">' +
        sec("Jenis tagihan", '<div class="seg2 full" role="group"><button type="button" data-bx="jenis" data-v="hosting" aria-pressed="' + !bill + '">Hosting berkala</button><button type="button" data-bx="jenis" data-v="bill" aria-pressed="' + bill + '">Bill order</button></div><small class="hint">' + (bill ? "Untuk order apa pun, sekali bayar. Customer membayar lewat transfer rekening atau e-wallet." : "Tagihan bulanan atau tahunan untuk hosting. Customer membayar lewat ticket.") + "</small>") +
        sec("Pilih order customer", (els.length ? ddH("dd-bo", BF.tk, els.map(function (x) { var q = pk(x.paket); return { v: x.id, t: x.paket + " · " + x.id, s: uname(x) + " · " + (q ? rp(q.harga) : "harga manual") }; })) : '<p class="muted">' + (bill ? "Belum ada order ticket." : "Belum ada order hosting. Pakai Bill order atau tunggu customer memesan hosting.") + "</p>") + '<small class="hint">Tagihan hanya bisa dibuat dari order ticket yang sudah ada.</small>') +
        (bill ? sec("Nominal dan keterangan", '<label class="fld"><span>Nominal (Rp) <em class="req">*</em></span><input class="inp" type="number" inputmode="numeric" min="1000" max="10000000" data-bf="nom" value="' + e(BF.nom) + '" placeholder="Maks. 10.000.000"></label><label class="fld"><span>Keterangan tagihan <em class="req">*</em></span><input class="inp" data-bf="ket" maxlength="100" value="' + e(BF.ket) + '" placeholder="Contoh: Tambahan plugin dan revisi"></label>')
          : sec("Siklus tagihan", c ? '<div class="seg2 full" role="group">' + sik(c.t).map(function (s) { return '<button type="button" data-bx="sik" data-v="' + s + '" aria-pressed="' + (BF.siklus === s) + '">' + s + "</button>"; }).join("") + "</div>" : '<p class="muted">Pilih order dulu.</p>')) +
        sec("Tanggal jatuh tempo", '<div class="dates">' + ddH("dd-bd", BF.d, days) + ddH("dd-bm", BF.m, mons) + ddH("dd-by", BF.y, [{ v: y, t: String(y) }, { v: y + 1, t: String(y + 1) }]) + '</div><small class="hint">Tidak boleh tanggal yang sudah lewat dan maksimal 12 bulan dari hari ini.</small>') +
        (bill ? "" : sec("Penyesuaian harga (opsional)", '<div class="seg2 full" role="group">' + adjs.map(function (a) { return '<button type="button" data-bx="adj" data-v="' + a[0] + '" aria-pressed="' + (BF.adj === a[0]) + '">' + a[1] + "</button>"; }).join("") + "</div>" +
          (BF.adj === "none" ? "" : '<div class="row2"><label class="fld"><span>Persen (1-20) <em class="req">*</em></span><input class="inp" type="number" min="1" max="20" data-bf="pct" value="' + e(BF.pct) + '"></label><label class="fld"><span>Alasan <em class="req">*</em></span><input class="inp" data-bf="alasan" maxlength="120" value="' + e(BF.alasan) + '" placeholder="Min. 10 karakter, tercatat di log"></label></div>'))) +
        '<button class="btn lg" type="button" data-bx="review"><i class="bi bi-shield-check"></i> Tinjau dan kirim</button></div>' +
        '<aside class="dcard bki"><b>Ringkasan tagihan</b><div id="bsum"></div><b>Pengaman</b><ul><li>Hanya dari order ticket yang ada.</li><li>Hosting: harga dari daftar paket, penyesuaian maks. 20% wajib beralasan.</li><li>Bill order: nominal Rp 1.000 - 10.000.000 dan wajib keterangan.</li><li>Kirim wajib kode keamanan admin.</li><li>Maksimal 5 tagihan baru per 24 jam.</li><li>Setelah terkirim tidak bisa diedit atau dihapus.</li></ul></aside></div>';
    }
    function updSum() {
      var b = $("#bsum"); if (!b) return; var c = calc(), bill = BF.jenis === "bill";
      b.innerHTML = c ? srows([["Customer", uname(c.t)], ["Jenis", bill ? "Bill order" : "Hosting berkala"], ["Paket", c.t.paket], ["Siklus", bill ? "Sekali bayar" : (BF.siklus || "-")]].concat(bill ? [["Keterangan", BF.ket || "-"]] : [["Harga dasar", rp(c.dasar)], ["Penyesuaian", BF.adj === "none" ? "-" : (BF.adj === "diskon" ? "-" : "+") + c.pct + "%"]]).concat([["Jatuh tempo", fdt(bDue())]])) + '<div class="sum"><div class="tot"><span>Total</span><b>' + rp(c.total) + "</b></div></div>" : '<p class="muted">Pilih order untuk melihat ringkasan.</p>';
    }
    function bValid() {
      var c = calc(); if (!c) return "Pilih order customer dulu.";
      var dt = new Date(+BF.y, +BF.m - 1, +BF.d); if (dt.getDate() !== +BF.d || dt.getMonth() !== +BF.m - 1) return "Tanggal tidak valid.";
      var n = dleft(bDue()); if (n < 0) return "Jatuh tempo tidak boleh tanggal yang sudah lewat."; if (n > 366) return "Jatuh tempo maksimal 12 bulan dari hari ini.";
      var all = BL();
      if (BF.jenis === "bill") {
        if (c.total < 1000 || c.total > 10000000) return "Nominal harus Rp 1.000 sampai Rp 10.000.000.";
        if ((BF.ket || "").trim().length < 5) return "Keterangan tagihan minimal 5 karakter.";
        if (all.some(function (b) { return b.tk === BF.tk && b.st === "Belum dibayar" && b.total === c.total && b.jatuh === bDue(); })) return "Tagihan yang sama untuk order ini sudah ada.";
      } else {
        if (BF.adj !== "none") { var p = Number(BF.pct); if (!(p >= 1 && p <= 20)) return "Persentase penyesuaian harus 1 sampai 20%."; if ((BF.alasan || "").trim().length < 10) return "Alasan penyesuaian minimal 10 karakter."; }
        if (all.some(function (b) { return b.tk === BF.tk && b.st === "Belum dibayar" && bj(b) === "hosting" && b.jatuh.slice(0, 7) === bDue().slice(0, 7); })) return "Sudah ada tagihan aktif untuk order ini di bulan jatuh tempo yang sama.";
      }
      if (all.filter(function (b) { return b.by === me() && Date.now() - b.ts < 864e5; }).length >= 5) return "Batas 5 tagihan baru per 24 jam sudah tercapai.";
      return "";
    }
    function guard(o, fn) {
      modal('<div class="mbox sm"><div class="mh"><b>' + o.title + '</b><button type="button" class="ib" data-x aria-label="Tutup"><i class="bi bi-x-lg"></i></button></div><div class="mb">' + o.html +
        (o.reason ? '<label class="fld"><span>Alasan <em class="req">*</em></span><textarea class="txa" id="g-r" maxlength="200" placeholder="Min. 10 karakter, tercatat di log"></textarea></label>' : "") +
        '<label class="fld"><span>Kode keamanan admin <em class="req">*</em></span><input class="inp" id="g-p" type="password" inputmode="numeric" autocomplete="off"><small class="hint">Demo: kode awal 246810. Di versi asli diverifikasi di server.</small></label><p class="err" id="g-e" hidden></p></div><div class="mf"><button type="button" class="btn ghost" data-x>Batal</button><button type="button" class="btn' + (o.danger ? " dng" : "") + '" data-ok>' + o.ok + "</button></div></div>", function (m, close) {
        $("[data-ok]", m).addEventListener("click", function () {
          var er = $("#g-e", m), r = o.reason ? $("#g-r", m).value.trim() : "";
          function bad(x) { er.textContent = x; er.hidden = false; }
          if (Date.now() < ld("nx-lock", 0)) return bad("Terlalu banyak percobaan. Coba lagi beberapa menit lagi.");
          if (o.reason && r.length < 10) return bad("Alasan minimal 10 karakter.");
          if ($("#g-p", m).value !== String(ld("nx-pin", "246810"))) { var f = (ld("nx-fail", 0) || 0) + 1; sv("nx-fail", f); if (f >= 3) { sv("nx-lock", Date.now() + 3e5); sv("nx-fail", 0); return bad("Salah 3 kali. Dikunci 5 menit."); } return bad("Kode keamanan salah (" + f + "/3)."); }
          sv("nx-fail", 0); close(); fn(r);
        });
      });
    }
    function bSend() {
      var er = bValid(); if (er) return toast(er);
      var c = calc(), due = bDue(), bill = BF.jenis === "bill";
      guard({ title: "Kirim tagihan ke customer?", ok: "Kirim tagihan", html: srows([["Customer", uname(c.t)], ["Jenis", bill ? "Bill order" : "Hosting berkala"], ["Paket", c.t.paket], ["Siklus", bill ? "Sekali bayar" : BF.siklus]].concat(bill ? [["Keterangan", BF.ket.trim()]] : []).concat([["Total", rp(c.total)], ["Jatuh tempo", fdt(due)]])) + '<p class="muted">Setelah terkirim, tagihan tidak bisa diedit atau dihapus. Hanya bisa dibatalkan dengan alasan.</p>' }, function () {
        var all = BL(), n = all.reduce(function (m, b) { return Math.max(m, Number(b.id.slice(4)) || 0); }, 3000) + 1;
        all.unshift({ id: "INV-" + n, jenis: BF.jenis, ket: bill ? BF.ket.trim() : "", tk: c.t.id, user: c.t.user, item: c.t.paket, siklus: bill ? "Sekali bayar" : BF.siklus, dasar: c.dasar, adj: bill ? "none" : BF.adj, pct: c.pct, alasan: bill ? "" : (BF.alasan || "").trim(), total: c.total, jatuh: due, st: "Belum dibayar", dibuat: iso(t0()), by: me(), ts: Date.now(), ticket: "", log: [{ a: "Tagihan dibuat dan dikirim ke customer", by: me(), at: stamp() }] });
        sv("nx-bill", all); bnew = false; tkStat(c.t.id, "Menunggu pembayaran", "Tagihan INV-" + n + " dikirim · status: Menunggu pembayaran"); toast("Tagihan INV-" + n + " terkirim ke " + uname(c.t)); draw();
      });
    }
    function bUpd(id, st, aksi, r) {
      var all = BL(); all.forEach(function (b) {
        if (b.id !== id) return; b.st = st; b.log.push({ a: aksi + (r ? ": " + r : ""), by: me(), at: stamp() });
        if (b.ticket) { var tk = TK(); tk.forEach(function (x) { if (x.id === b.ticket) x.m.push({ w: "s", t: "Tagihan " + id + (st === "Lunas" ? " ditandai lunas" : " dibatalkan"), d: "Baru saja", h: hm() }); }); sv("nx-tk", tk); }
      });
      var bb = all.filter(function (x) { return x.id === id; })[0], oth = bb && all.some(function (o) { return o.id !== id && o.tk === bb.tk && o.st === "Belum dibayar"; });
      sv("nx-bill", all);
      if (bb && !oth) {
        if (st === "Lunas") tkStat(bb.tk, "Pembayaran Dikonfirmasi", "Pembayaran " + id + " dikonfirmasi admin");
        else if (st === "Dibatalkan") { var tt = TK().filter(function (x) { return x.id === bb.tk; })[0]; if (tt && tt.st === "Menunggu pembayaran") tkStat(bb.tk, "Terhubung dengan admin", "Tagihan " + id + " dibatalkan"); }
      }
      toast("Tagihan " + id + ": " + st); draw();
    }
    function bDetail(id) {
      var b = BL().filter(function (x) { return x.id === id; })[0]; if (!b) return; var act = b.st === "Belum dibayar", hs = bj(b) === "hosting";
      var dl = function (rows) { return '<dl class="bd-dl">' + rows.map(function (r) { return "<div><dt>" + r[0] + "</dt><dd>" + (r[2] ? r[1] : e(r[1])) + "</dd></div>"; }).join("") + "</dl>"; };
      var adj = b.adj === "none" ? "Tidak ada" : (b.adj === "diskon" ? "Diskon " : "Biaya tambahan ") + b.pct + "%" + (b.alasan ? " (" + e(b.alasan) + ")" : "");
      modal('<div class="mbox bd-m"><div class="mh"><div class="bd-ti"><b>' + e(b.id) + "</b>" + bd(bs(b)) + '</div><button type="button" class="ib" data-x aria-label="Tutup"><i class="bi bi-x-lg"></i></button></div><div class="mb">' +
        '<div class="bd-top"><div><small>Total tagihan</small><strong>' + rp(b.total) + '</strong></div><div class="bd-dd"><small>Jatuh tempo</small><b>' + fdt(b.jatuh) + "</b>" + (act ? "<em>" + rel(b) + "</em>" : "") + "</div></div>" +
        '<section class="bd-s"><h4><i class="bi bi-person"></i> Informasi</h4>' + dl([["Customer", bcust(b)], ["Jenis", hs ? "Hosting berkala" : "Bill order"], ["Paket", b.item], ["Siklus", b.siklus], ["Order ticket", b.tk || "-"]].concat(hs ? [] : [["Keterangan", b.ket || "-"]])) + "</section>" +
        '<section class="bd-s"><h4><i class="bi bi-cash-stack"></i> Rincian harga</h4>' + dl([["Harga dasar", rp(b.dasar)], ["Penyesuaian", adj, 1], ["Total", "<b>" + rp(b.total) + "</b>", 1]]) + "</section>" +
        '<section class="bd-s"><h4><i class="bi bi-wallet2"></i> Pembayaran</h4>' + dl([hs ? ["Ticket pembayaran", b.ticket || "Belum dibuka customer"] : ["Konfirmasi bayar", b.lapor ? "Customer sudah konfirmasi · " + b.lapor : "Belum ada konfirmasi"], ["Dibuat oleh", b.by + " · " + fdt(b.dibuat)]]) + "</section>" +
        '<section class="bd-s"><h4><i class="bi bi-clock-history"></i> Log aktivitas</h4><ol class="bd-tl">' + b.log.map(function (l) { return "<li><b>" + e(l.a) + "</b><small>" + e(l.by) + " · " + e(l.at) + "</small></li>"; }).join("") + "</ol></section></div>" +
        (act ? '<div class="mf bd-f"><button type="button" class="btn ghost sm" data-pay><i class="bi bi-check2-circle"></i> Tandai lunas</button><button type="button" class="btn dng sm" data-void><i class="bi bi-x-circle"></i> Batalkan tagihan</button></div>' : "") + "</div>", function (m, close) {
        var p = $("[data-pay]", m), v = $("[data-void]", m);
        if (p) p.addEventListener("click", function () { close(); guard({ title: "Tandai lunas?", ok: "Tandai lunas", reason: true, html: "<p>Pastikan pembayaran " + e(b.id) + " (" + rp(b.total) + ") sudah kamu terima. Isi catatan bukti pembayaran.</p>" }, function (r) { bUpd(id, "Lunas", "Ditandai lunas", r); }); });
        if (v) v.addEventListener("click", function () { close(); guard({ title: "Batalkan tagihan?", ok: "Batalkan tagihan", danger: true, reason: true, html: "<p>Tagihan " + e(b.id) + " akan dibatalkan dan tidak bisa dibuka lagi.</p>" }, function (r) { bUpd(id, "Dibatalkan", "Dibatalkan", r); }); });
      });
    }
    function bList() {
      var all = BL(), F = ["semua", "Belum dibayar", "Terlambat", "Lunas", "Dibatalkan"], ok = function (b, f) { return f === "semua" || bs(b) === f; };
      var rows = all.filter(function (b) { return ok(b, bfil); }).map(function (b) {
        var act = b.st === "Belum dibayar", hs2 = bj(b) === "hosting";
        return '<tr><td class="bt-id"><b>' + e(b.id) + '</b></td><td class="bt-c"><span class="bt-cu">' + av(bcust(b)) + "<span>" + e(bcust(b)) + '</span></span></td><td class="bt-pk"><b>' + e(b.item) + "</b><small>" + (hs2 ? e(b.siklus) : "Bill order") + '</small></td><td class="bt-amt">' + rp(b.total) + '</td><td class="bt-due">' + fdt(b.jatuh) + (act ? "<small>" + rel(b) + "</small>" : "") + '</td><td class="bt-st">' + bd(bs(b)) + (b.lapor && act ? ' <span class="bd b2" title="Customer sudah konfirmasi bayar">Dikonfirmasi</span>' : "") + '</td><td class="act"><button class="btn ghost sm" type="button" data-bx="det" data-v="' + e(b.id) + '"><i class="bi bi-eye"></i> Detail</button></td></tr>';
      }).join("");
      return '<div class="guard"><i class="bi bi-shield-check"></i><div><b>Pengaman tagihan aktif</b><small>Tagihan hanya dari order ticket, kirim wajib kode keamanan, log permanen, tidak bisa dihapus.</small></div></div>' +
        '<div class="tkhead bhead"><div class="chips mini bchips">' + F.map(function (f) { return '<button class="chip" type="button" data-bx="fil" data-v="' + f + '" aria-pressed="' + (bfil === f) + '">' + (f === "semua" ? "Semua" : f) + " <b>" + all.filter(function (b) { return ok(b, f); }).length + "</b></button>"; }).join("") + '</div><button class="btn" type="button" data-bx="new"><i class="bi bi-plus-circle"></i> Buat tagihan</button></div>' +
        (rows ? table(["ID", "Customer", "Paket", "Total", "Jatuh tempo", "Status", "Aksi"], rows, "bt") : '<div class="dcard empty"><i class="bi bi-cash-stack"></i><b>Tidak ada tagihan</b><p class="muted">Tagihan yang kamu buat akan muncul di sini.</p></div>');
    }
    function cBills() {
      var a = BL().filter(bmine), act = a.filter(function (b) { return b.st === "Belum dibayar"; }).sort(function (x, y) { return x.jatuh < y.jatuh ? -1 : 1; }), his = a.filter(function (b) { return b.st !== "Belum dibayar"; });
      var tot = act.reduce(function (s, b) { return s + b.total; }, 0), od = act.filter(function (b) { return dleft(b.jatuh) < 0; }).length;
      var s2 = function (ic, l, v, c) { return '<div class="dstat"><span class="si"><i class="bi bi-' + ic + '"></i></span><div><small>' + l + "</small><b" + (c ? ' class="' + c + '"' : "") + ">" + v + "</b></div></div>"; };
      return '<div class="dstats">' + s2("wallet2", "Total belum dibayar", rp(tot), "v2") + s2("calendar-event", "Jatuh tempo terdekat", act[0] ? fdt(act[0].jatuh) : "-", "v2") + s2("exclamation-circle", "Terlambat", od) + "</div><h2>Harus dibayar</h2>" +
        (act.map(function (b) {
          var hs = bj(b) === "hosting", tkid = hs ? b.ticket : (TK().some(function (x) { return x.id === b.tk; }) ? b.tk : "");
          return '<div class="dcard bill' + (dleft(b.jatuh) < 0 ? " late" : "") + '"><div class="bill-h"><div><b>' + e(b.item) + "</b><small>" + e(b.id) + " · " + (hs ? e(b.siklus) : "Bill order") + "</small></div>" + bd(bs(b)) + '</div><div class="bill-g"><div class="bill-i"><small>Total tagihan</small><b>' + rp(b.total) + '</b></div><div class="bill-i due"><small>Jatuh tempo</small><b>' + fdt(b.jatuh) + '</b><em class="rel">' + rel(b) + "</em></div></div>" +
            (!hs && b.ket ? '<p class="bill-n">Untuk: ' + e(b.ket) + "</p>" : "") +
            (b.adj !== "none" ? '<p class="bill-n">Termasuk ' + (b.adj === "diskon" ? "diskon " : "biaya tambahan ") + b.pct + "%: " + e(b.alasan) + "</p>" : "") +
            (!hs && b.lapor ? '<p class="bill-n ok"><i class="bi bi-hourglass-split"></i> Konfirmasi pembayaran sudah dikirim, menunggu dicek admin.</p>' : "") + '<p class="bill-n"><i class="bi bi-info-circle"></i> ' + (hs ? "Pembayaran hosting dilakukan lewat ticket." : "Bayar lewat transfer ke rekening atau e-wallet NEXORA.") + '</p><div class="bill-a"><button class="btn" type="button" data-bx="pay" data-v="' + e(b.id) + '"><i class="bi bi-credit-card"></i> Bayar sekarang</button>' + (tkid ? '<button class="btn ghost" type="button" data-bx="tk" data-v="' + e(tkid) + '"><i class="bi bi-chat-dots"></i> Lihat ticket ' + e(tkid) + "</button>" : "") + "</div></div>";
        }).join("") || '<div class="dcard empty"><i class="bi bi-check-circle"></i><b>Tidak ada tagihan</b><p class="muted">Semua tagihanmu sudah beres.</p></div>') +
        (his.length ? '<div class="bh-head"><h2>Riwayat tagihan</h2><span class="muted">' + his.length + " tagihan</span></div><div class=\"bh-list\">" + his.map(function (b) { var okb = b.st === "Lunas"; return '<div class="bh ' + (okb ? "ok" : "x") + '"><span class="bh-i ' + (okb ? "ok" : "x") + '"><i class="bi bi-' + (okb ? "check2-circle" : "x-circle") + '"></i></span><div class="bh-t"><b>' + e(b.item) + "</b><small>" + e(b.id) + " · " + (bj(b) === "hosting" ? e(b.siklus) : "Bill order") + "</small><small>Jatuh tempo " + fdt(b.jatuh) + '</small></div><div class="bh-r"><strong>' + rp(b.total) + "</strong>" + bd(b.st) + "</div></div>"; }).join("") + "</div>" : "");
    }
    function bPay(id, sudah) {
      var b = BL().filter(function (x) { return x.id === id; })[0]; if (!b) return;
      var all = TK(), ex = all.filter(function (x) { return x.id === b.ticket && !cl(x); })[0];
      var msg = sudah ? "Halo, saya sudah transfer untuk tagihan " + b.id + " (" + b.item + ", " + rp(b.total) + "). Berikut bukti transfernya, mohon dicek." : "Halo, saya ingin membayar tagihan " + b.id + " (" + b.item + ", " + rp(b.total) + ", jatuh tempo " + fdt(b.jatuh) + "). Mohon info cara pembayarannya.";
      if (!ex) {
        var n = all.reduce(function (m, x) { return Math.max(m, Number(x.id.slice(2)) || 0); }, 1043) + 1, tid = "T-" + n;
        all.unshift({ id: tid, subj: (sudah ? "Konfirmasi bayar " : "Bayar ") + b.id + " · " + b.item, kat: "Pembayaran", paket: b.item, st: "Menunggu admin balas", tgl: "Hari ini", user: "__me", m: [{ w: "c", t: msg, d: "Baru saja", h: hm() }] }); sv("nx-tk", all);
        var bl = BL(); bl.forEach(function (x) { if (x.id === id) { x.ticket = tid; x.log.push({ a: "Customer membuka ticket pembayaran " + tid, by: me(), at: stamp() }); } }); sv("nx-bill", bl);
        ex = { id: tid }; toast("Ticket " + tid + " dibuat untuk pembayaran " + b.id);
      } else if (sudah) { all.forEach(function (x) { if (x.id === ex.id) x.m.push({ w: "c", t: msg, d: "Baru saja", h: hm() }); }); sv("nx-tk", all); }
      sel = ex.id; tg = "aktif"; tab = "tiket"; tv = "chat"; draw();
    }
    function bPaid(id) {
      var bl = BL(), b = bl.filter(function (x) { return x.id === id; })[0]; if (!b) return;
      var all = TK(), ot = all.filter(function (x) { return x.id === b.tk && !cl(x); })[0];
      if (!b.lapor) {
        b.lapor = stamp(); (b.log = b.log || []).push({ a: "Customer mengonfirmasi sudah membayar", by: me(), at: stamp() }); sv("nx-bill", bl);
        if (ot) { ot.m.push({ w: "c", t: "Halo, saya sudah transfer untuk tagihan " + b.id + " (" + b.item + ", " + rp(b.total) + "). Berikut bukti transfernya, mohon dicek.", d: "Baru saja", h: hm() }); sv("nx-tk", all); }
        toast(ot ? "Konfirmasi terkirim ke ticket " + ot.id + ". Kirim bukti transfermu di sini." : "Konfirmasi pembayaran terkirim ke admin");
      } else toast("Konfirmasi sudah terkirim, tunggu admin mengecek.");
      if (ot) { sel = ot.id; tg = "aktif"; tab = "tiket"; tv = "chat"; }
      draw();
    }
    function bPayClick(id) {
      var b = BL().filter(function (x) { return x.id === id; })[0]; if (!b) return;
      if (bj(b) === "hosting") return bPay(id, false);
      var ac = BYR().filter(function (x) { return x.aktif !== false; }),
        ot = TK().filter(function (x) { return x.id === b.tk && !cl(x); })[0],
        cp = function (v, m, l) { return '<button class="pm-cp" type="button" data-cp="' + e(v) + '" data-msg="' + e(m) + '"><i class="bi bi-copy"></i> ' + l + "</button>"; };
      modal('<div class="mbox pm"><div class="mh pm-h"><span class="pm-ic"><i class="bi bi-wallet2"></i></span><div><b>Pembayaran</b><small>Bill order · ' + e(b.id) + '</small></div><button type="button" class="ib" data-x aria-label="Tutup"><i class="bi bi-x-lg"></i></button></div><div class="mb">' +
        '<div class="pm-total"><small>Total yang harus ditransfer</small><div class="pm-amt"><b>' + rp(b.total) + "</b>" + cp(String(b.total), "Nominal disalin", "Salin nominal") + '</div><div class="pm-meta"><span><i class="bi bi-box2"></i> ' + e(b.item) + '</span><span><i class="bi bi-calendar-event"></i> Jatuh tempo ' + fdt(b.jatuh) + "</span>" + (b.ket ? '<span><i class="bi bi-card-text"></i> ' + e(b.ket) + "</span>" : "") + "</div></div>" +
        '<div class="pm-code"><span><small>Kode berita / catatan transfer</small><b>' + e(b.id) + "</b></span>" + cp(b.id, "Kode disalin", "Salin kode") + "</div>" +
        (ac.length ? '<h3 class="pm-sec">Transfer ke salah satu</h3><div class="pm-list">' + ac.map(function (x) { return '<div class="pm-acc"><span class="pm-ai"><i class="bi bi-' + (x.jenis === "Bank" ? "bank" : "wallet2") + '"></i></span><div class="pm-at"><small>' + e(x.jenis) + " · " + e(x.nama) + '</small><b class="pm-no">' + e(x.no) + "</b><small>a.n. " + e(x.an) + "</small></div>" + cp(x.no, "Nomor disalin", "Salin") + "</div>"; }).join("") + "</div>" : '<p class="pm-note"><i class="bi bi-info-circle"></i><span>Rekening belum diatur. Hubungi admin lewat ' + (ot ? "ticket " + e(ot.id) : "Discord NEXORA") + " untuk info pembayaran.</span></p>") +
        '<ol class="pm-steps"><li><span>Transfer tepat <b>' + rp(b.total) + "</b> ke salah satu rekening di atas.</span></li><li><span>Tulis kode <b>" + e(b.id) + "</b> di berita atau catatan transfer.</span></li><li><span>Klik <b>Saya sudah bayar</b>" + (ot ? ", lalu kirim bukti transfer di ticket <b>" + e(ot.id) + "</b>." : ", lalu tunggu admin mengecek pembayaranmu.") + "</span></li></ol>" +
        (b.lapor ? '<p class="pm-note ok"><i class="bi bi-hourglass-split"></i><span>Konfirmasi pembayaran sudah dikirim ke admin. Tunggu admin mengecek.</span></p>' : "") +
        '</div><div class="mf"><button type="button" class="btn ghost" data-x>Tutup</button><button type="button" class="btn" data-done><i class="bi bi-check2-circle"></i> Saya sudah bayar</button></div></div>', function (m, close) {
        m.addEventListener("click", function (ev) {
          var c = ev.target.closest("[data-cp]"); if (!c || c.classList.contains("ok")) return;
          cpy(c.dataset.cp); toast(c.dataset.msg || "Disalin");
          var h = c.innerHTML; c.classList.add("ok"); c.innerHTML = '<i class="bi bi-check2"></i> Tersalin';
          setTimeout(function () { c.classList.remove("ok"); c.innerHTML = h; }, 1500);
        });
        $("[data-done]", m).addEventListener("click", function () { close(); bPaid(id); });
      });
    }
    function bAct(d) {
      var v = d.v;
      if (d.bx === "new") { bnew = true; bfReset(); return draw(); }
      if (d.bx === "back") { bnew = false; return draw(); }
      if (d.bx === "jenis") { BF.jenis = v; BF.tk = ""; BF.siklus = ""; return draw(); }
      if (d.bx === "sik") { BF.siklus = v; return draw(); }
      if (d.bx === "adj") { BF.adj = v; return draw(); }
      if (d.bx === "review") return bSend();
      if (d.bx === "fil") { bfil = v; return draw(); }
      if (d.bx === "det") return bDetail(v);
      if (d.bx === "pay") return bPayClick(v);
      if (d.bx === "tk") { sel = v; tg = "aktif"; tv = "chat"; tab = "tiket"; return draw(); }
    }
    /* ===== Kontak & rekening (diedit admin) ===== */
    var KT = [["email", "Email", "envelope", "nama@domain.com"], ["whatsapp", "WhatsApp", "whatsapp", "081234567890"], ["discord", "Discord", "discord", "https://discord.gg/kodeinvite"], ["instagram", "Instagram", "instagram", "https://instagram.com/akunmu"], ["telegram", "Telegram", "telegram", "https://t.me/akunmu"], ["youtube", "YouTube", "youtube", "https://youtube.com/@kanalmu"], ["lainnya", "Link lain", "link-45deg", "https://..."]];
    function ktf(t) { return KT.filter(function (x) { return x[0] === t; })[0] || KT[6]; }
    function KON() { return ld("nx-kontak", [{ id: "k1", tipe: "discord", label: "Discord", nilai: "https://discord.gg/7bFYCRheRm", ket: "Konsultasi dan order lewat server Discord NEXORA.", aktif: true }, { id: "k2", tipe: "whatsapp", label: "WhatsApp", nilai: "6281234567890", ket: "Chat langsung dengan tim NEXORA.", aktif: true }, { id: "k3", tipe: "email", label: "Email", nilai: "halo@nexora.id", ket: "Untuk pertanyaan dan kerja sama.", aktif: true }]); }
    function BYR() { return ld("nx-bayar", [{ id: "p1", jenis: "Bank", nama: "BCA", no: "1234567890", an: "NEXORA", aktif: true }, { id: "p2", jenis: "E-wallet", nama: "DANA", no: "081234567890", an: "NEXORA", aktif: true }]); }
    function edList(k) {
      var isK = k === "k", a = isK ? KON() : BYR();
      return '<div class="tkhead"><span class="muted">' + a.length + (isK ? " kontak · tampil di halaman Hubungi kami" : " rekening / e-wallet · tampil ke customer saat bayar bill order") + '</span><button class="btn" type="button" data-ed="' + k + 'new"><i class="bi bi-plus-circle"></i> Tambah ' + (isK ? "kontak" : "rekening") + '</button></div><div class="klist">' +
        (a.map(function (x, i) {
          var ic = isK ? ktf(x.tipe)[2] : (x.jenis === "Bank" ? "bank" : "wallet2"), on = x.aktif !== false;
          return '<div class="kr' + (on ? "" : " off") + '"><span class="kr-i"><i class="bi bi-' + ic + '"></i></span><div class="kr-t"><b>' + e(isK ? x.label : x.jenis + " · " + x.nama) + "</b><small>" + e(isK ? x.nilai : x.no + " · a.n. " + x.an) + '</small></div><div class="kr-ac"><button class="swt" type="button" role="switch" aria-checked="' + on + '" aria-label="Tampilkan" data-ed="' + k + 'tgl" data-i="' + i + '"></button><em class="kr-lb">' + (on ? "Ditampilkan" : "Disembunyikan") + '</em><span class="kr-sp"></span><button class="ib" type="button" data-ed="' + k + 'edit" data-i="' + i + '" aria-label="Edit"><i class="bi bi-pencil"></i></button><button class="ib dn" type="button" data-ed="' + k + 'del" data-i="' + i + '" aria-label="Hapus"><i class="bi bi-trash"></i></button></div></div>';
        }).join("") || '<div class="dcard empty"><i class="bi bi-' + (isK ? "telephone" : "bank") + '"></i><b>Belum ada ' + (isK ? "kontak" : "rekening") + "</b></div>") + '</div><p class="muted kr-n">Demo: perubahan tersimpan di browser ini dan belum mengubah web asli.</p>';
    }
    function edModal(k, i) {
      var isK = k === "k", a = isK ? KON() : BYR(), cur = i >= 0 ? a[i] : null, tip = cur ? (isK ? cur.tipe : cur.jenis) : (isK ? "email" : "Bank");
      var opts = isK ? KT.map(function (x) { return [x[0], x[1], x[2]]; }) : [["Bank", "Bank", "bank"], ["E-wallet", "E-wallet", "wallet2"]];
      var f = isK ? [["Label", cur ? cur.label : "", "Contoh: Email support"], ["Nilai (email / nomor / link)", cur ? cur.nilai : "", ktf(tip)[3]], ["Keterangan (opsional)", cur ? cur.ket || "" : "", "Tampil di bawah kontak"]] : [["Nama bank / e-wallet", cur ? cur.nama : "", "Contoh: BCA atau DANA"], ["Nomor rekening / HP", cur ? cur.no : "", "Nomor tujuan transfer"], ["Atas nama", cur ? cur.an : "", "Nama pemilik rekening"]];
      modal('<div class="mbox sm pk"><div class="mh"><b>' + (cur ? "Edit " : "Tambah ") + (isK ? "kontak" : "rekening / e-wallet") + '</b><button type="button" class="ib" data-x aria-label="Tutup"><i class="bi bi-x-lg"></i></button></div><div class="mb"><div class="fld"><span>Jenis</span><div class="tipe" id="ed-t" role="group">' + opts.map(function (o) { return '<button type="button" class="tp" data-v="' + o[0] + '" aria-pressed="' + (o[0] === tip) + '"><i class="bi bi-' + o[2] + '"></i><span>' + o[1] + "</span></button>"; }).join("") + "</div></div>" +
        f.map(function (x, n) { return '<label class="fld"><span>' + x[0] + '</span><input class="inp" id="ed-' + "abc".charAt(n) + '" maxlength="120" value="' + e(x[1]) + '" placeholder="' + e(x[2]) + '"></label>'; }).join("") + '<p class="err" id="ed-e" hidden></p></div><div class="mf"><button type="button" class="btn ghost" data-x>Batal</button><button type="button" class="btn" data-ok>Simpan</button></div></div>', function (m, close) {
        var T = tip;
        $$("#ed-t button", m).forEach(function (b) { b.addEventListener("click", function () { T = b.dataset.v; $$("#ed-t button", m).forEach(function (x) { x.setAttribute("aria-pressed", x === b); }); if (isK) $("#ed-b", m).placeholder = ktf(T)[3]; }); });
        $("[data-ok]", m).addEventListener("click", function () {
          var A = $("#ed-a", m).value.trim(), B = $("#ed-b", m).value.trim(), C = $("#ed-c", m).value.trim(), er = $("#ed-e", m);
          function bad(x) { er.textContent = x; er.hidden = false; }
          if (!A || !B) return bad(isK ? "Label dan nilai wajib diisi." : "Nama dan nomor wajib diisi.");
          if (isK) {
            if (T === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(B)) return bad("Format email tidak valid.");
            if (T === "whatsapp") { B = B.replace(/\D/g, ""); if (B.charAt(0) === "0") B = "62" + B.slice(1); if (B.length < 9) return bad("Nomor WhatsApp tidak valid."); }
            if (T !== "email" && T !== "whatsapp") { if (!/^https?:\/\//i.test(B)) B = "https://" + B; if (!/^https?:\/\/[^\s.]+\.[^\s]+$/i.test(B)) return bad("Link tidak valid."); }
          } else if (!C) return bad("Atas nama wajib diisi.");
          var ak = cur ? cur.aktif !== false : true, o = isK ? { id: cur ? cur.id : "k" + Date.now(), tipe: T, label: A, nilai: B, ket: C, aktif: ak } : { id: cur ? cur.id : "p" + Date.now(), jenis: T, nama: A, no: B, an: C, aktif: ak };
          if (cur) a[i] = o; else a.push(o);
          sv(isK ? "nx-kontak" : "nx-bayar", a); close(); toast("Tersimpan"); draw();
        });
      });
    }
    function edAct(d) {
      var k = d.ed.charAt(0), op = d.ed.slice(1), isK = k === "k", a = isK ? KON() : BYR(), i = Number(d.i);
      if (op === "new") return edModal(k, -1);
      if (op === "edit") return edModal(k, i);
      if (op === "tgl") { a[i].aktif = a[i].aktif === false; sv(isK ? "nx-kontak" : "nx-bayar", a); return draw(); }
      if (op === "del") return modal('<div class="mbox sm"><div class="mh"><b>Hapus ' + (isK ? "kontak" : "rekening") + '?</b></div><div class="mb"><p>' + e(isK ? a[i].label : a[i].nama) + ' akan dihapus dan tidak tampil lagi.</p></div><div class="mf"><button type="button" class="btn ghost" data-x>Batal</button><button type="button" class="btn dng" data-ok>Hapus</button></div></div>', function (m, close) { $("[data-ok]", m).addEventListener("click", function () { a.splice(i, 1); sv(isK ? "nx-kontak" : "nx-bayar", a); close(); toast("Dihapus"); draw(); }); });
    }
    var TITLES = { c: { ringkasan: ["Dashboard", ""], pesanan: ["Riwayat pesanan", "Semua pesanan dan perkembangannya."], tiket: ["Ticket saya", "Chat dengan tim NEXORA di ticket yang masih aktif."], riwayat: ["Riwayat ticket", "Ticket yang sudah ditutup. Hanya bisa dibaca."], tagihan: ["Tagihan", "Tagihan yang perlu kamu bayar beserta jatuh temponya."], buka: ["Buka ticket", "Order baru atau tanya sesuatu ke tim NEXORA."], profil: ["Profil", "Kelola data akunmu."] },
      a: { ringkasan: ["Dashboard", "Kondisi ticket dan pesanan saat ini."], tiket: ["Ticket", "Lihat, balas, dan ubah status ticket customer."], tagihan: ["Tagihan", "Buat dan pantau tagihan customer dengan pengaman."], kontak: ["Kontak", "Atur kontak yang tampil di halaman Hubungi kami."], bayar: ["Pembayaran", "Rekening dan e-wallet untuk pembayaran bill order."], jasa: ["Jasa setup", "Kelola paket setup Minecraft dan Discord."], hosting: ["Hosting", "Kelola paket hosting."], tampilan: ["Logo & tampilan", "Atur logo, warna, dan teks website."], ekspor: ["Ekspor data", "Unduh cadangan ticket dan pesanan."], customer: ["Customer", "Data akun customer untuk menghubungi jika ada kendala."] } };
    var PAN = {
      ringkasan: function () {
        var a = adm ? TK() : mine(), n = a.filter(function (x) { return !cl(x); }).length, el = $("#p-ringkasan");
        if (adm) {
          var all = TK(), act = all.filter(function (x) { return !cl(x); }), need = act.filter(function (x) { return last(x).w === "c"; }), bl = BL(), cn = function (st) { return act.filter(function (x) { return x.st === st; }).length; };
          var unpaid = bl.filter(function (b) { return b.st === "Belum dibayar"; }), late = unpaid.filter(function (b) { return dleft(b.jatuh) < 0; }), tot = unpaid.reduce(function (z, b) { return z + Number(b.total || 0); }, 0);
          var H = HG(), np = H.hosting.length + H.jasa.minecraft.length + H.jasa.discord.length;
          var jm = new Date().getHours(), sl = jm < 11 ? "pagi" : jm < 15 ? "siang" : jm < 18 ? "sore" : "malam", hr = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
          var SG = [["Menunggu admin balas", "#d9a000"], ["Terhubung dengan admin", "#3b7ddd"], ["Menunggu pembayaran", "#c43d85"], ["Pembayaran Dikonfirmasi", "#0ea5a4"], ["Pesanan Diproses", "#8b5cf6"], ["Orderan Selesai", "#2a9a56"]], acc = 0, stops = [];
          SG.forEach(function (g) { var p = act.length ? cn(g[0]) / act.length * 100 : 0; if (p) { stops.push(g[1] + " " + acc.toFixed(2) + "% " + (acc + p).toFixed(2) + "%"); acc += p; } });
          var dn = stops.length ? "conic-gradient(" + stops.join(",") + ")" : "conic-gradient(var(--line) 0 100%)";
          var sx = function (ic, lb, v, tn, tb, sub) { return '<button type="button" class="dstat sx ' + tn + '" data-tab="' + tb + '"><span class="si"><i class="bi bi-' + ic + '"></i></span><div><small>' + lb + "</small><b>" + v + "</b>" + (sub ? "<em>" + sub + "</em>" : "") + "</div></button>"; };
          var needH = need.slice(0, 5).map(function (x) { return '<button class="li ln" data-gt="' + x.id + '">' + av(uname(x)) + '<span><b>' + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(uname(x)) + " · " + e(last(x).d) + "</small></span>" + bd(x.st, 1) + "</button>"; }).join("") || '<div class="dcard empty sm0"><i class="bi bi-check2-circle"></i><b>Semua sudah dibalas</b><p class="muted">Tidak ada ticket yang menunggu balasanmu.</p></div>';
          var billH = unpaid.slice().sort(function (x, y) { return x.jatuh < y.jatuh ? -1 : 1; }).slice(0, 4).map(function (b) { var lt = dleft(b.jatuh) < 0; return '<button class="li ln' + (lt ? " late" : "") + '" data-tab="tagihan"><span class="bh-i ' + (lt ? "x" : "w") + '"><i class="bi bi-' + (lt ? "exclamation-triangle" : "hourglass-split") + '"></i></span><span><b>' + e(b.item) + " · " + rp(b.total) + "</b><small>" + e(b.id) + " · " + e(bcust(b)) + " · " + rel(b) + "</small></span>" + bd(bs(b)) + "</button>"; }).join("") || '<div class="dcard empty sm0"><i class="bi bi-cash-stack"></i><b>Tidak ada tagihan aktif</b><p class="muted">Tagihan yang belum dibayar muncul di sini.</p></div>';
          var legend = SG.map(function (g) { return '<li><i style="background:' + g[1] + '"></i><span>' + (SHORT[g[0]] || g[0]) + "</span><b>" + cn(g[0]) + "</b></li>"; }).join("");
          var QK = [["receipt", "Buat tagihan", "tagihan"], ["tags", "Jasa setup", "jasa"], ["hdd-stack", "Hosting", "hosting"], ["telephone", "Kontak", "kontak"]].map(function (q) { return '<button type="button" class="qk" data-tab="' + q[2] + '"><i class="bi bi-' + q[0] + '"></i><span>' + q[1] + "</span></button>"; }).join("");
          el.innerHTML = '<div class="hero-c adm-hero"><div><small class="hero-d">' + e(hr) + "</small><b>Selamat " + sl + ", " + e(me()) + "</b><p>" + (need.length ? need.length + " ticket menunggu balasanmu." : "Semua ticket sudah ditanggapi.") + (late.length ? " " + late.length + " tagihan terlambat." : "") + '</p></div><div class="hc-a"><button class="btn" data-tab="tiket"><i class="bi bi-chat-dots"></i> Buka ticket</button><button class="btn ghost" data-tab="tagihan"><i class="bi bi-receipt"></i> Tagihan</button></div></div>' +
            '<div class="dstats sx-g">' + sx("chat-left-dots", "Perlu dibalas", need.length, "t1", "tiket") + sx("chat-dots", "Ticket aktif", act.length, "t2", "tiket") + sx("hourglass-split", "Menunggu pembayaran", cn("Menunggu pembayaran"), "t3", "tiket") + sx("lightning-charge", "Pesanan diproses", cn("Pesanan Diproses"), "t5", "tiket") + sx("cash-stack", "Tagihan aktif", unpaid.length, "t4", "tagihan", rp(tot)) + sx("exclamation-triangle", "Terlambat", late.length, "t6", "tagihan") + "</div>" +
            '<div class="cols2 adm-cols"><div><div class="sec-h"><h2>Perlu dibalas</h2><button type="button" class="lnk" data-tab="tiket">Lihat semua <i class="bi bi-arrow-right"></i></button></div><div class="lis">' + needH + '</div><div class="sec-h"><h2>Tagihan perlu perhatian</h2><button type="button" class="lnk" data-tab="tagihan">Lihat semua <i class="bi bi-arrow-right"></i></button></div><div class="lis">' + billH + "</div></div>" +
            '<div><div class="sec-h"><h2>Status ticket aktif</h2></div><div class="dcard dn-card"><div class="donut" style="--dn:' + dn + '"><div><b>' + act.length + "</b><small>aktif</small></div></div><ul class=\"dn-lg\">" + legend + '</ul></div><div class="sec-h"><h2>Pintasan</h2></div><div class="qk-g">' + QK + '</div><p class="muted" style="margin-top:12px">' + np + " paket aktif di daftar harga.</p></div></div>"; return;
        }
        var jam = new Date().getHours(), sal = jam < 11 ? "pagi" : jam < 15 ? "siang" : jam < 18 ? "sore" : "malam";
        var hari = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long" });
        var tg2 = BL().filter(function (b) { return bmine(b) && b.st === "Belum dibayar"; }), tot = tg2.reduce(function (z, b) { return z + Number(b.total || 0); }, 0);
        var aktif = a.filter(function (x) { return !cl(x); }), bayar = a.filter(function (x) { return x.st === "Menunggu pembayaran"; }), ls = ctab === "bayar" ? bayar : aktif;
        var HL = [["book", "Pertanyaan umum", "faq.html"], ["discord", "Discord NEXORA", "https://discord.gg/7bFYCRheRm"], ["file-earmark-text", "Syarat dan ketentuan", "terms.html"], ["shield-check", "Kebijakan privasi", "privacy.html"]];
        el.innerHTML = '<p class="dt-date">' + e(hari) + '</p><div class="cdash"><div class="cmain"><section class="cg"><h2>Selamat ' + sal + ", " + e(me()) + '</h2><p class="cg-note">Ceritakan kebutuhan servermu saat memesan. Makin jelas, makin cepat tim NEXORA memberi harga.</p><div class="cg-a"><button class="cg-b" data-go="buka"><i class="bi bi-shop"></i> Pesan jasa</button><a class="cg-b" href="https://discord.gg/7bFYCRheRm" target="_blank" rel="noopener"><i class="bi bi-question-circle"></i> Tanya admin</a><button class="cg-b" data-go="tagihan"><i class="bi bi-receipt"></i> Tagihan</button></div></section>' +
          '<section class="cc"><header class="cc-h"><i class="bi bi-chat-dots"></i><b>Pesananmu</b></header><div class="cc-seg"><button type="button" data-ct="aktif" aria-pressed="' + (ctab !== "bayar") + '">Ticket aktif <em>' + aktif.length + '</em></button><button type="button" data-ct="bayar" aria-pressed="' + (ctab === "bayar") + '">Menunggu bayar <em>' + bayar.length + '</em></button></div><div class="cc-b">' +
          (ls.length ? li(ls.slice(0, 5)) : '<div class="cc-e"><i class="bi bi-inbox"></i><span>' + (ctab === "bayar" ? "Tidak ada pesanan yang menunggu pembayaran." : "Belum ada ticket aktif.") + '</span><button class="cg-b" data-go="buka"><i class="bi bi-plus-circle"></i> Pesan jasa</button></div>') + '</div></section></div>' +
          '<aside class="cside"><section class="cc"><header class="cc-h"><i class="bi bi-wallet2"></i><b>Tagihan</b></header><div class="cc-p"><small>Belum dibayar</small><b class="big">' + rp(tot) + '</b><small>' + tg2.length + ' tagihan aktif</small><button type="button" class="cg-w" data-go="tagihan">Lihat tagihan</button></div></section>' +
          '<section class="cc"><header class="cc-h"><i class="bi bi-life-preserver"></i><b>Bantuan</b></header><div class="hl">' + HL.map(function (h) { return '<a href="' + h[2] + '"' + (h[2].indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "") + '><span><i class="bi bi-' + h[0] + '"></i></span>' + h[1] + '<i class="bi bi-arrow-up-right"></i></a>'; }).join("") + "</div></section></aside></div>";
      },
      pesanan: function () {
        var o = OR().filter(function (x) { return of === "semua" || (of === "selesai") === (x.st === "Selesai"); }), steps = ["Menunggu", "Diproses", "Selesai"];
        $("#p-pesanan").innerHTML = '<div class="chips mini">' + [["semua", "Semua"], ["jalan", "Berjalan"], ["selesai", "Selesai"]].map(function (x) { return '<button class="chip" data-of="' + x[0] + '" aria-pressed="' + (of === x[0]) + '">' + x[1] + "</button>"; }).join("") + "</div>" +
          (o.map(function (x) { var k = steps.indexOf(x.st === "Menunggu pembayaran" ? "Menunggu" : x.st); return '<div class="dcard oc"><div class="oc-h"><div><b>' + e(x.item) + "</b><small>" + e(x.id) + " · " + e(x.jenis) + " · " + e(x.tgl) + "</small></div>" + bd(x.st) + '</div><div class="stp">' + steps.map(function (s, i) { return '<span class="' + (i <= k ? "on" : "") + '"><i></i>' + s + "</span>"; }).join("") + "</div></div>"; }).join("") || '<div class="dcard empty"><i class="bi bi-receipt"></i><b>Belum ada pesanan</b><p class="muted">Pesanan dari ticket order akan muncul di sini.</p></div>');
      },
      tiket: function () { $("#p-tiket").innerHTML = tkPanel(); },
      riwayat: function () { $("#p-riwayat").innerHTML = tkPanel(); },
      kontak: function () { $("#p-kontak").innerHTML = edList("k"); },
      bayar: function () { $("#p-bayar").innerHTML = edList("b"); },
      tagihan: function () { $("#p-tagihan").innerHTML = adm ? (bnew ? bForm() : bList()) : cBills(); if (adm && bnew) updSum(); },
      buka: function () {
        bsv = "minecraft";
        $("#p-buka").innerHTML = '<div class="bk"><form class="bkf" id="f-buka"><section class="bs"><h3><i>1</i>Pilih jenis</h3><div class="opts">' +
          [["Order baru", "receipt", "Pesan setup atau hosting"], ["Bantuan", "chat-dots", "Tanya atau lapor kendala"], ["Lainnya", "three-dots", "Keperluan lain"]].map(function (o, i) { return '<label class="opt"><input type="radio" name="kat" value="' + o[0] + '"' + (i ? "" : " checked") + '><i class="bi bi-' + o[1] + '"></i><b>' + o[0] + "</b><small>" + o[2] + "</small></label>"; }).join("") +
          '</div></section><section class="bs" id="ord"><h3><i>2</i>Pilih layanan dan paket</h3><div class="seg2 full" role="group">' + [["minecraft", "Setup Minecraft", "box2"], ["discord", "Setup Discord", "discord"], ["hosting", "Hosting", "hdd-stack"]].map(function (s, i) { return '<button type="button" data-svc="' + s[0] + '" aria-pressed="' + (i === 0) + '"><i class="bi bi-' + s[2] + '"></i> ' + s[1] + "</button>"; }).join("") + '</div><div class="fld"><span>Paket</span><div class="dd full" id="dd-paket"><input type="hidden" name="paket"><button class="dd-btn" type="button" aria-haspopup="listbox" aria-expanded="false"><span class="dd-val"></span><i class="bi bi-chevron-down chev"></i></button><div class="dd-menu" role="listbox" hidden></div></div></div><div id="pcv"></div></section>' +
          '<section class="bs"><h3><i id="n3">3</i>Ceritakan kebutuhanmu</h3><label class="fld"><span>Subjek <em class="req" id="rq">*</em></span><input class="inp" name="subj" maxlength="80"></label><label class="fld"><span>Pesan <em class="req">*</em></span><textarea class="txa" name="msg" maxlength="1000" required></textarea><small class="hint"><span id="cc">0</span>/1000</small></label></section><button class="btn lg" type="submit"><i class="bi bi-send"></i> Kirim ticket</button></form>' +
          '<aside class="dcard bki"><b>Cara kerjanya</b><ol class="tl"><li><i>1</i><div><b>Kirim ticket</b><small>Isi form di samping.</small></div></li><li><i>2</i><div><b>Admin dinotifikasi</b><small>Pesan masuk ke Discord tim NEXORA.</small></div></li><li><i>3</i><div><b>Balasan di sini</b><small>Pantau di Ticket saya.</small></div></li></ol><p class="muted">Lebih suka chat langsung? <a href="https://discord.gg/7bFYCRheRm" target="_blank" rel="noopener">Order via Discord</a></p></aside></div>';
        bukaSync();
      },
      profil: function () {
        var P = ld("nx-prof", { discord: "", wa: "" }), mi = mine(), nT = mi.filter(function (x) { return !cl(x); }).length, nO = OR().length, nB = BL().filter(function (b) { return bmine(b) && b.st === "Belum dibayar"; }).length, em = ss("nx-email") || "";
        var tg = function (k, ic, t, sub) { var on = P[k] !== false; return '<div class="pf-tg"><span class="pf-ti"><i class="bi bi-' + ic + '"></i></span><div><b>' + t + "</b><small>" + sub + '</small></div><button type="button" class="swt" role="switch" aria-checked="' + on + '" aria-label="' + t + '" data-pf="' + k + '"></button></div>'; };
        var st = function (ic, l, v) { return '<div class="pf-s"><i class="bi bi-' + ic + '"></i><b>' + v + "</b><small>" + l + "</small></div>"; };
        $("#p-profil").innerHTML = '<div class="pfx"><section class="pf-hero"><span class="pf-av">' + e(me().charAt(0).toUpperCase()) + '</span><div class="pf-id"><b>' + e(me()) + "</b><small>" + e(em || "Login lewat Discord/Google") + '</small><div class="pf-b"><span class="bd b4"><i class="bi bi-patch-check"></i> Customer</span><span class="bd b2">Akun aktif</span></div></div></section>' +
          '<div class="pf-sts">' + st("chat-dots", "Ticket aktif", nT) + st("receipt", "Total pesanan", nO) + st("wallet2", "Tagihan aktif", nB) + "</div>" +
          '<div class="pf-g"><form class="dcard pf-f" id="f-prof"><h3><i class="bi bi-person-lines-fill"></i> Data akun</h3><label class="fld"><span>Nama</span><input class="inp" name="nama" required maxlength="40" value="' + e(me()) + '"></label><label class="fld"><span>Email</span><input class="inp" disabled value="' + e(em || "-") + '"></label><div class="row2"><label class="fld"><span>Username Discord</span><input class="inp" name="dc" placeholder="contoh: nexora_user" value="' + e(P.discord || "") + '"></label><label class="fld"><span>Nomor WhatsApp</span><input class="inp" name="wa" inputmode="tel" placeholder="08xxxxxxxxxx" value="' + e(P.wa || "") + '"></label></div><small class="hint">Discord dan WhatsApp dipakai tim NEXORA untuk menghubungimu soal order.</small><button class="btn" type="submit"><i class="bi bi-check2"></i> Simpan profil</button></form>' +
          '<div class="pf-col"><section class="dcard"><h3><i class="bi bi-bell"></i> Notifikasi</h3>' + tg("nTk", "chat-dots", "Balasan ticket", "Kabari saat admin membalas ticketmu.") + tg("nBill", "cash-stack", "Tagihan", "Pengingat saat ada tagihan dan jatuh tempo.") + '</section><section class="dcard"><h3><i class="bi bi-life-preserver"></i> Bantuan cepat</h3><div class="pf-ln"><button type="button" class="qk" data-go="buka"><i class="bi bi-plus-circle"></i><span>Buka ticket</span></button><button type="button" class="qk" data-go="tagihan"><i class="bi bi-wallet2"></i><span>Tagihan</span></button><button type="button" class="qk" id="logout2"><i class="bi bi-box-arrow-right"></i><span>Keluar</span></button></div></section></div></div></div>';
      },
      customer: function () {
        $("#p-customer").innerHTML = '<div class="tkhead"><span class="muted">' + custNames().length + ' customer · data untuk menghubungi jika ada kendala</span><label class="sbox cu-sb"><i class="bi bi-search"></i><input class="inp" data-cq type="search" placeholder="Cari nama, email, Discord, WA…" value="' + e(cq) + '"></label></div><div class="cu-grid">' + custCards() + "</div>";
      },
      jasa: function () { harga("jasa"); },
      hosting: function () { harga("hosting"); },
      tampilan: tampilan,
      ekspor: function () { var C = [["nx-tk", "Ticket", "chat-dots", TK().length + " ticket"], ["nx-or", "Pesanan", "receipt", OR().length + " pesanan"], ["nx-harga", "Harga & paket", "tags", "Jasa dan hosting"]]; $("#p-ekspor").innerHTML = '<div class="exg">' + C.map(function (c) { return '<div class="dcard ex"><span class="si"><i class="bi bi-' + c[2] + '"></i></span><div><b>' + c[1] + "</b><small>" + c[3] + '</small></div><button class="btn ghost sm" data-exp="' + c[0] + '"><i class="bi bi-download"></i> Unduh JSON</button></div>'; }).join("") + "</div>"; }
    };
    function draw() {
      $$(".stab[data-tab]", root).forEach(function (b) { b.setAttribute("aria-selected", b.dataset.tab === tab); });
      $$(".dpanel", root).forEach(function (p) { p.hidden = p.id !== "p-" + tab; });
      var pn = $("#p-" + tab), sx = (lastTab === tab && pn) ? $$(".chips,.bchips,.tkpills", pn).map(function (el) { return el.scrollLeft; }) : null;
      var isNew = lastTab !== tab;
      PAN[tab]();
      if (pn && isNew) { pn.classList.remove("enter"); void pn.offsetWidth; pn.classList.add("enter"); clearTimeout(pn._en); pn._en = setTimeout(function () { pn.classList.remove("enter"); }, 1200); }
      if (pn) $$(".chips,.bchips,.tkpills", pn).forEach(function (el, i) {
        if (sx && sx[i] != null) el.scrollLeft = sx[i];
        var on = $('[aria-pressed="true"],[aria-current="true"]', el);
        if (on) { var l = on.offsetLeft - el.offsetLeft; if (l < el.scrollLeft) el.scrollLeft = Math.max(0, l - 12); else if (l + on.offsetWidth > el.scrollLeft + el.clientWidth) el.scrollLeft = l + on.offsetWidth - el.clientWidth + 12; }
      });
      lastTab = tab; if (nfUp) nfUp();
      var tt = TITLES[adm ? "a" : "c"][tab]; $("#ptitle").textContent = tt[0].replace("{n}", me()); $("#psub").textContent = tt[1]; $("#ptitle").hidden = tab === "ringkasan"; $("#psub").hidden = tab === "ringkasan" || !tt[1];
      var tm = $(".th-m", root); if (tm) tm.scrollTop = tm.scrollHeight;
      root.classList.toggle("chatv", !!sel && (tab === "tiket" ? tv === "chat" : (tab === "riwayat" && !adm && tv === "chat")));
      var ct = $("#c-tiket"); if (ct) { var cc = (adm ? TK().filter(function (x) { return x.st === "Menunggu admin balas" && !cl(x); }) : mine().filter(function (x) { return !cl(x); })).length; ct.textContent = cc; ct.hidden = !cc; }
      var cb = $("#c-tagihan"); if (cb) { var nb = BL().filter(function (b) { return b.st === "Belum dibayar" && (adm ? dleft(b.jatuh) < 0 : bmine(b)); }).length; cb.textContent = nb; cb.hidden = !nb; }
      mk();
    }
    var nl = document.getElementById("nav-logout"); if (nl) nl.addEventListener("click", function (ev) { ev.preventDefault(); outAsk(); });
    root.addEventListener("click", function (ev) {
      var t = ev.target.closest("[data-tab],[data-go],.tk-item,.tk-pill,[data-svc],[data-tg],[data-gt],[data-af],[data-of],[data-back],[data-close],[data-hs],[data-add],[data-edit],[data-del],#logout,#side-t,[data-exp],[data-ct],#sv-tmp,#rs-tmp,#lg-x,#qr-x,.sw,.dd-btn,.dd-opt,[data-bx],[data-ed],[data-hc],[data-pf],[data-cu],#logout2"); if (!t) return;
      var d = t.dataset;
      if (t.classList.contains("dd-btn")) { var mn = t.nextElementSibling, op = mn.hidden; ddClose(); mn.hidden = !op; t.setAttribute("aria-expanded", op); if (op) { var cs = $('[aria-selected="true"]', mn); if (cs) cs.scrollIntoView({ block: "nearest" }); } return; }
      if (t.classList.contains("dd-opt")) { var dd = t.closest(".dd"); ddClose(); if (dd.hasAttribute("data-bdd")) return bdd(dd.id, d.v); $("#f-buka").paket.value = d.v; return bukaSync(); }
      if (d.bx) return bAct(d);
      if (d.ed) return edAct(d);
      if (t.id === "logout" || t.id === "logout2") return outAsk();
      if (t.id === "side-t") return setWide();
      if (d.ct) { ctab = d.ct; return draw(); }
      if (d.tab || d.go) { var nt = d.tab || d.go; if (!adm && nt === "buka" && actCount() >= MAXT) { setOpen(false); return limitModal(); } if (nt !== tab) { aq = ""; tv = "list"; } tab = nt; setOpen(false); return draw(); }
      if (d.pf) { var P1 = ld("nx-prof", {}); P1[d.pf] = P1[d.pf] === false; sv("nx-prof", P1); return draw(); }
      if (d.cu) return custModal(d.cu);
      if (d.hc !== undefined) { hcat[tab] = d.hc; return draw(); }
      if (d.gt) { var x = TK().filter(function (y) { return y.id === d.gt; })[0]; sel = d.gt; tg = cl(x) ? "selesai" : "aktif"; tv = "chat"; tab = (!adm && cl(x)) ? "riwayat" : "tiket"; return draw(); }
      if (d.svc) { bsv = d.svc; $$("[data-svc]", root).forEach(function (b) { b.setAttribute("aria-pressed", b === t); }); $("#f-buka").paket.dataset.l = ""; return bukaSync(); }
      if (d.tg) { tg = d.tg; sel = null; return draw(); }
      if (t.classList.contains("tk-item") || t.classList.contains("tk-pill")) { sel = d.id; tv = "chat"; return draw(); }
      if (d.back !== undefined) { tv = "list"; return draw(); }
      if (d.af) { af = d.af; return draw(); }
      if (d.of) { of = d.of; return draw(); }
      if (d.hs) { hs = d.hs; hcat.jasa = "semua"; return draw(); }
      if (d.close !== undefined) return modal('<div class="mbox sm"><div class="mh"><b>Tutup ticket?</b></div><div class="mb"><p>Apakah kamu yakin ingin menutup ticket ini?</p><p class="muted">Setelah ditutup, customer dan admin tidak bisa mengirim pesan lagi dan ticket masuk ke Riwayat.</p></div><div class="mf"><button class="btn ghost" data-x>Batal</button><button class="btn dng" data-ok>Ya, tutup ticket</button></div></div>', function (m, close) { $("[data-ok]", m).addEventListener("click", function () { var a = TK(); a.forEach(function (y) { if (y.id === sel) { nt(y, "tk", "Ticket ditutup", y.id + " ditutup oleh admin."); y.closed = true; y.m.push({ w: "s", t: "Ticket ditutup oleh admin", d: "Baru saja", h: hm() }); } }); sv("nx-tk", a); close(); toast("Ticket ditutup dan dipindah ke Riwayat"); af = "Riwayat"; draw(); }); });
      if (d.add !== undefined) return formPaket(tab, null);
      if (d.edit !== undefined) return formPaket(tab, Number(d.edit));
      if (d.del !== undefined) { var H = HG(), r = tab === "hosting" ? H.hosting : H.jasa[hs], i = Number(d.del); return modal('<div class="mbox sm"><div class="mh"><b>Hapus paket?</b></div><div class="mb"><p class="muted">Paket "' + e(r[i].nama) + '" akan dihapus dari daftar.</p></div><div class="mf"><button class="btn ghost" data-x>Batal</button><button class="btn dng" data-ok>Hapus</button></div></div>', function (m, close) { $("[data-ok]", m).addEventListener("click", function () { r.splice(i, 1); sv("nx-harga", H); close(); toast("Paket dihapus"); draw(); }); }); }
      if (d.exp) { var b = new Blob([JSON.stringify(d.exp === "nx-harga" ? HG() : ld(d.exp, []), null, 2)], { type: "application/json" }), l = document.createElement("a"); l.href = URL.createObjectURL(b); l.download = d.exp + ".json"; l.click(); return; }
      if (d.c) { root._T.warna = d.c; $$(".sw", root).forEach(function (s) { s.setAttribute("aria-pressed", s === t); }); $("#pvb").style.setProperty("--pv", d.c); return; }
      if (t.id === "lg-x") { root._T.logo = ""; $("#nvl").innerHTML = '<i class="bi bi-box2"></i>'; var pv = $("#upl-pv"); if (pv) pv.innerHTML = '<i class="bi bi-image"></i>'; var nm = $("#upl-name"); if (nm) nm.textContent = UPL_TXT; var tt = $("#upl-ttl"); if (tt) tt.textContent = "Unggah logo"; return; }
      if (t.id === "qr-x" || t.closest("#qr-x")) { try { localStorage.removeItem("nx-qr"); } catch (xq) {} delete mem["nx-qr"]; qrShow(""); return toast("QR Code dihapus"); }
      if (t.id === "sv-tmp") { sv("nx-tampilan", root._T); return toast("Tampilan tersimpan (demo, belum mengubah web asli)"); }
      if (t.id === "rs-tmp") { sv("nx-tampilan", null); try { localStorage.removeItem("nx-tampilan"); } catch (x2) {} delete mem["nx-tampilan"]; try { localStorage.removeItem("nx-qr"); } catch (x3) {} delete mem["nx-qr"]; tampilan(); return toast("Tampilan dikembalikan ke awal"); }
    });
    root.addEventListener("input", function (ev) {
      var t = ev.target;
      if (t.dataset.bf) { BF[t.dataset.bf] = t.value; updSum(); }
      if (t.matches("[data-cq]")) { cq = t.value; $(".cu-grid", root).innerHTML = custCards(); return; }
      if (t.matches("[data-q]")) { aq = t.value; $(".tk-list", root).innerHTML = adm ? admList() : (tab === "riwayat" ? histList() : cList()); }
      if (t.matches(".cmp")) { t.style.height = "auto"; t.style.height = Math.min(t.scrollHeight, 140) + "px"; }
      if (t.name === "msg" && $("#cc")) $("#cc").textContent = t.value.length;
      if (t.dataset.t && root._T) { root._T[t.dataset.t] = t.value; if (t.dataset.t === "nama") $("#nvn").textContent = t.value; }
    });
    root.addEventListener("keydown", function (ev) {
      var dd = ev.target.closest && ev.target.closest(".dd");
      if (dd) {
        var mn = $(".dd-menu", dd), ops = $$(".dd-opt", mn);
        if (ev.key === "Escape") { ddClose(); $(".dd-btn", dd).focus(); return; }
        if (ev.key === "ArrowDown" || ev.key === "ArrowUp") { ev.preventDefault(); if (mn.hidden) $(".dd-btn", dd).click(); var i = ops.indexOf(document.activeElement); i = ev.key === "ArrowDown" ? Math.min(ops.length - 1, i + 1) : Math.max(0, i - 1); if (ops[i]) ops[i].focus(); return; }
      }
      if (ev.key === "Enter" && !ev.shiftKey && ev.target.matches(".cmp")) { ev.preventDefault(); var f = ev.target.form; if (f.requestSubmit) f.requestSubmit(); else f.dispatchEvent(new Event("submit", { cancelable: true })); }
    });
    root.addEventListener("change", function (ev) {
      var t = ev.target;
      if (t.closest("#f-buka")) bukaSync();
      if (t.matches("[data-st]")) { var a = TK(); a.forEach(function (x) { if (x.id === sel && x.st !== t.value) { x.st = t.value; x.m.push({ w: "s", t: "Status diubah: " + t.value, d: "Baru saja", h: hm() }); syncOrd(x); nt(x, "tk", "Status diperbarui", x.id + " · " + t.value); } }); sv("nx-tk", a); toast("Status diperbarui"); draw(); }
      if (t.id === "lg" && t.files[0]) { setLogo(t.files[0]); t.value = ""; }
      if (t.id === "qr" && t.files[0]) { setQR(t.files[0]); t.value = ""; }
    });
    root.addEventListener("dragover", function (ev) { var b = ev.target.closest(".upl-box"); if (!b) return; ev.preventDefault(); b.classList.add("drag"); });
    root.addEventListener("dragleave", function (ev) { var b = ev.target.closest(".upl-box"); if (b) b.classList.remove("drag"); });
    root.addEventListener("drop", function (ev) { var b = ev.target.closest(".upl-box"); if (!b) return; ev.preventDefault(); b.classList.remove("drag"); (b.getAttribute("for") === "qr" ? setQR : setLogo)(ev.dataTransfer.files[0]); });
    root.addEventListener("submit", function (ev) {
      ev.preventDefault(); var f = ev.target;
      if (f.matches("[data-rep]")) {
        var txt = $("textarea", f).value.trim(); if (!txt) return; var a = TK(), cur = a.filter(function (x) { return x.id === sel; })[0];
        if (!cur || cl(cur)) { toast("Ticket sudah ditutup, chat tidak bisa dikirim"); return draw(); }
        cur.m.push(adm ? { w: "a", n: me(), t: txt, d: "Baru saja", h: hm() } : { w: "c", t: txt, d: "Baru saja", h: hm() }); if (adm) nt(cur, "tk", "Balasan baru · " + cur.id, "Admin - " + me() + ": " + (txt.length > 80 ? txt.slice(0, 80) + "…" : txt)); if (adm && cur.st === "Menunggu admin balas") cur.st = "Terhubung dengan admin"; sv("nx-tk", a); draw();
        if (!adm) { var tid = sel; setTimeout(function () { var b = TK(); b.forEach(function (x) { if (x.id === tid && !cl(x) && last(x).w === "c") x.m.push({ w: "a", t: "Terima kasih, pesanmu sudah kami terima. Tim NEXORA akan segera membalas. (balasan otomatis demo)", d: "Baru saja", h: hm() }); if (x.id === tid && !cl(x) && last(x).w === "a") nt(x, "tk", "Balasan baru · " + x.id, "Admin: Terima kasih, pesanmu sudah kami terima."); }); sv("nx-tk", b); remote(); }, 3500); }
        return;
      }
      if (f.id === "f-prof") { ss("nx-name", f.nama.value.trim()); var P2 = ld("nx-prof", {}); P2.discord = f.dc.value.trim(); P2.wa = f.wa.value.trim(); sv("nx-prof", P2); var UU2 = USR(), nu2 = UU2[me()] || {}; nu2.discord = P2.discord; nu2.wa = P2.wa; UU2[me()] = nu2; sv("nx-users", UU2); $("#who").textContent = me(); toast("Profil tersimpan"); return draw(); }
      if (f.id === "f-buka") {
        if (actCount() >= MAXT) return limitModal();
        var b = TK(), id = "T-" + (1044 + b.length), k = f.kat.value, p = k === "Order baru" ? f.paket.value : "-";
        b.unshift({ id: id, subj: f.subj.value || ("Order " + p), kat: k, paket: p, st: "Menunggu admin balas", tgl: "Hari ini", user: "__me", m: [{ w: "c", t: f.msg.value, d: "Baru saja", h: hm() }] }); sv("nx-tk", b);
        if (k === "Order baru") { var o = OR(); o.unshift({ id: "ORD-" + (2045 + o.length), tk: id, item: p, jenis: "Order via ticket", tgl: "Hari ini", st: "Menunggu" }); sv("nx-or", o); }
        sel = id; tg = "aktif"; tab = "tiket"; draw(); toast("Ticket " + id + " dibuat. Nanti notifikasi otomatis masuk ke Discord NEXORA.");
      }
    });
    window.addEventListener("storage", function (ev) { if (ev.key === "nx-tk" || ev.key === "nx-or" || ev.key === "nx-bill" || ev.key === "nx-notif") remote(); });
    draw();
  }

  window.nxDash = function () {
    var root = $("[data-dash]"); if (!root) return; var m = root.dataset.dash;
    if (m === "login" || m === "alogin") return authInit(m, root);
    var need = m === "admin" ? "admin" : "cust";
    if (ss("nx-role") !== need) return go(m === "admin" ? "nexora-admin-access.html" : "masuk.html");
    dashInit(m === "admin", root);
  };
  document.addEventListener("DOMContentLoaded", window.nxDash);
})();

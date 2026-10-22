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
  var ST = ["Terbuka", "Diproses", "Menunggu pembayaran", "Selesai"];
  var BC = { Terbuka: "b1", Diproses: "b2", "Menunggu pembayaran": "b3", Menunggu: "b3", Selesai: "b4", "Belum dibayar": "b1", Terlambat: "b5", Lunas: "b4", Dibatalkan: "b6" };
  function bd(s, short) { return '<span class="bd ' + (BC[s] || "b1") + '">' + e(short && s === "Menunggu pembayaran" ? "Pembayaran" : s) + "</span>"; }
  function me() { return ss("nx-name") || "Customer"; }
  function uname(t) { return t.user === "__me" ? (window.__nxAdm ? ld("nx-cust", "Demo Customer") : me()) : t.user; }
  function TK() { return ld("nx-tk", [
    { id: "T-1043", subj: "Tanya perpanjangan hosting", kat: "Bantuan", paket: "-", st: "Terbuka", tgl: "20 Okt 2026", user: "__me", m: [{ w: "c", t: "Bagaimana cara memperpanjang paket hosting?", d: "20 Okt" }] },
    { id: "T-1042", subj: "Setup Survival Plugin", kat: "Order baru", paket: "Survival Plugin", st: "Diproses", tgl: "18 Okt 2026", user: "__me", m: [{ w: "c", t: "Halo, saya mau pesan setup Survival Plugin untuk server Java.", d: "18 Okt" }, { w: "a", t: "Siap! Versi Java yang kamu pakai berapa?", d: "18 Okt" }, { w: "c", t: "Java 21, sekitar 30 pemain.", d: "18 Okt" }] },
    { id: "T-1031", subj: "Setup Vanilla Starter", kat: "Order baru", paket: "Vanilla Starter", st: "Selesai", tgl: "02 Okt 2026", user: "__me", m: [{ w: "c", t: "Mau pesan Vanilla Starter.", d: "02 Okt" }, { w: "a", t: "Server sudah jadi, detailnya sudah kami kirim. Terima kasih!", d: "03 Okt" }] },
    { id: "T-1040", subj: "Setup Discord Server Gaming", kat: "Order baru", paket: "Server Gaming", st: "Menunggu pembayaran", tgl: "15 Okt 2026", user: "Rizky", m: [{ w: "c", t: "Mau setup Discord untuk komunitas gaming.", d: "15 Okt" }, { w: "a", t: "Harga final sudah kami kirim, silakan konfirmasi pembayaran.", d: "15 Okt" }] },
    { id: "T-1038", subj: "Whitelist tidak berfungsi", kat: "Bantuan", paket: "-", st: "Selesai", tgl: "12 Okt 2026", user: "Andi", m: [{ w: "c", t: "Whitelist tidak jalan di server saya.", d: "12 Okt" }, { w: "a", t: "Sudah diperbaiki ya, coba cek lagi.", d: "12 Okt" }] }]); }
  function OR() { return ld("nx-or", [
    { id: "ORD-2044", item: "Survival Plugin", jenis: "Setup Minecraft", tgl: "18 Okt 2026", st: "Diproses" },
    { id: "ORD-2031", item: "Vanilla Starter", jenis: "Setup Minecraft", tgl: "02 Okt 2026", st: "Selesai" }]); }
  function HG() { return ld("nx-harga", D); }
  var SI = { "Ticket terbuka": "chat-dots", "Sedang diproses": "lightning-charge", "Total ticket": "tags", "Total pesanan": "receipt", "Ticket aktif": "chat-dots", "Ticket selesai": "check2", "Pesanan berjalan": "lightning-charge", "Menunggu pembayaran": "receipt", "Tagihan aktif": "cash-stack" };
  function stat(l, v) { return '<div class="dstat"><span class="si"><i class="bi bi-' + SI[l] + '"></i></span><div><small>' + l + "</small><b>" + v + "</b></div></div>"; }
  function table(h, rows) {
    rows = rows.replace(/<tr>([\s\S]*?)<\/tr>/g, function (_, r) { var i = 0; return "<tr>" + r.replace(/<td>/g, function () { return '<td data-l="' + h[i++] + '">'; }) + "</tr>"; });
    return '<div class="tw"><table class="dt"><thead><tr>' + h.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
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
    var tab = "ringkasan", sel = null, tg = "aktif", hs = "minecraft", tv = "list", af = "Aktif", aq = "", of = "semua", foto = "", bsv = "minecraft", bfil = "semua", bnew = false, BF = {};
    function setWide(w) { root.classList.toggle("wide", w); var b = $("#side-t"); $("i", b).className = "bi bi-chevron-double-" + (w ? "left" : "right"); b.setAttribute("aria-label", w ? "Persempit tab" : "Perlebar tab"); }
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
    window.__nxAdm = adm; if (!adm) sv("nx-cust", me());
    $("#who").textContent = ss("nx-name") || (adm ? "Admin" : "Customer"); var wv = $("#wav"); if (wv) wv.textContent = me().charAt(0).toUpperCase();
    function mine() { return TK().filter(function (x) { return x.user === "__me" || x.user === me(); }); }
    function last(t) { return t.m[t.m.length - 1]; }
    var AFS = ["Aktif", "Terbuka", "Diproses", "Menunggu pembayaran", "Riwayat"], snap = {};
    function inAf(x, s) { return s === "Aktif" ? x.st !== "Selesai" : s === "Riwayat" ? x.st === "Selesai" : x.st === s; }
    function mk() { snap = {}; TK().forEach(function (x) { snap[x.id] = [x.m.length, x.st]; }); }
    function remote() {
      var cm = $(".cmp", root), val = cm ? cm.value : "", foc = cm && document.activeElement === cm, mw = adm ? "a" : "c";
      TK().forEach(function (x) { var s = snap[x.id], l = last(x);
        if (!s) { if (adm) toast("Ticket baru: " + x.id); return; }
        if (x.m.length > s[0] && l.w !== mw && l.w !== "s") toast("Pesan baru di " + x.id);
        if (!adm && s[1] !== "Selesai" && x.st === "Selesai") toast("Ticket " + x.id + " ditutup oleh admin"); });
      draw(); cm = $(".cmp", root); if (cm && val) { cm.value = val; if (foc) cm.focus(); }
    }

    function thread(t) {
      var mineW = adm ? "a" : "c", prev = "", closed = t.st === "Selesai";
      var body = '<div class="sys">Ticket dibuat · ' + e(t.tgl) + "</div>" + t.m.map(function (m) {
        if (m.w === "s") { prev = ""; return '<div class="sys">' + e(m.t) + " · " + e(m.d) + "</div>"; }
        var first = m.w !== prev, mn = m.w === mineW; prev = m.w;
        var who = m.w === "a" ? "Admin NEXORA" : (adm ? uname(t) : "Kamu");
        return '<div class="row ' + (mn ? "me" : "ot") + '">' + (mn ? "" : first ? (m.w === "a" ? '<span class="av nx"><i class="bi bi-box2"></i></span>' : av(uname(t))) : '<span class="av gh"></span>') + '<div class="col">' + (first && !mn ? '<small class="nm">' + e(who) + "</small>" : "") + '<div class="bub">' + e(m.t) + "<time>" + e(m.d) + "</time></div></div></div>";
      }).join("") + (closed && last(t).w !== "s" ? '<div class="sys">Ticket ditutup</div>' : "");
      var act = adm ? (closed ? bd(t.st) : '<select class="sel" data-st aria-label="Status">' + ["Terbuka", "Diproses", "Menunggu pembayaran"].map(function (s) { return "<option" + (s === t.st ? " selected" : "") + ">" + s + "</option>"; }).join("") + '</select><button class="btn dng sm" type="button" data-close><i class="bi bi-x-lg"></i> Close ticket</button>') : bd(t.st);
      return '<div class="th"><div class="th-h">' + (adm ? '<button class="ib bk-b" type="button" data-back aria-label="Kembali"><i class="bi bi-chevron-left"></i></button>' : "") + '<div class="th-t"><b>' + e(t.subj) + "</b><small>" + e(t.id) + " · " + e(t.kat) + (t.paket !== "-" ? " · " + e(t.paket) : "") + " · " + e(t.tgl) + (adm ? " · " + e(uname(t)) : "") + '</small></div><div class="th-a">' + act + "</div></div>" +
        '<div class="th-m">' + body + "</div>" +
        (closed ? '<p class="muted done"><i class="bi bi-chat-dots"></i> Ticket ini sudah ditutup, chat tidak bisa dikirim lagi.' + (adm ? "" : " Buka ticket baru kalau masih butuh bantuan.") + "</p>" : '<form class="th-f" data-rep><textarea class="cmp" rows="1" placeholder="Tulis pesan…" enterkeyhint="send" required></textarea><button class="send" type="submit" aria-label="Kirim"><i class="bi bi-send"></i></button></form>') + "</div>";
    }
    function admList() {
      var a = TK().filter(function (x) { return inAf(x, af) && (x.subj + " " + uname(x) + " " + x.id).toLowerCase().indexOf(aq.toLowerCase()) > -1; });
      return a.map(function (x) { var l = last(x); return '<button class="tk-item" data-id="' + x.id + '" aria-current="' + (x.id === sel) + '">' + av(uname(x)) + '<span class="ti"><b>' + (x.st !== "Selesai" && l.w === "c" ? '<i class="dot" title="Menunggu balasan"></i>' : "") + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(uname(x)) + '</small><span class="pv">' + e(l.t) + '</span></span><span class="tr"><small>' + e(l.d) + "</small>" + bd(x.st, 1) + "</span></button>"; }).join("") || '<p class="muted pad">Tidak ada ticket.</p>';
    }
    function tkPanel() {
      if (!adm) {
        var hist = tab === "riwayat"; tg = hist ? "selesai" : "aktif";
        var a = mine(), cur = a.filter(function (x) { return (x.st === "Selesai") === hist; });
        if (!cur.some(function (x) { return x.id === sel; })) sel = cur.length ? cur[0].id : null;
        var t = cur.filter(function (x) { return x.id === sel; })[0];
        var head = '<div class="tkhead"><span class="muted">' + cur.length + (hist ? " ticket selesai" : " ticket aktif") + "</span>" + (hist ? "" : '<button class="btn ghost" data-go="buka"><i class="bi bi-plus-circle"></i> Ticket baru</button>') + "</div>";
        if (!cur.length) return head + '<div class="dcard empty"><i class="bi bi-' + (hist ? "clock-history" : "chat-dots") + '"></i><b>' + (hist ? "Belum ada riwayat ticket" : "Tidak ada ticket aktif") + '</b><p class="muted">' + (hist ? "Ticket yang ditutup admin akan masuk ke sini." : "Buka ticket baru untuk order atau bertanya ke tim NEXORA.") + "</p></div>";
        return head + '<div class="tkpills">' + cur.map(function (x) { return '<button class="tk-pill" data-id="' + x.id + '" aria-current="' + (x.id === sel) + '"><b>' + e(x.id) + "</b><span>" + e(x.subj) + "</span>" + (hist ? "" : bd(x.st, 1)) + "</button>"; }).join("") + "</div>" + thread(t);
      }
      var all = TK();
      if (!all.some(function (x) { return x.id === sel; })) sel = null;
      var t2 = all.filter(function (x) { return x.id === sel; })[0];
      var chips = AFS.map(function (s) { var n = all.filter(function (x) { return inAf(x, s); }).length; return '<button class="chip" data-af="' + s + '" aria-pressed="' + (af === s) + '">' + (s === "Menunggu pembayaran" ? "Pembayaran" : s) + " <b>" + n + "</b></button>"; }).join("");
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
    function li(a) { return a.map(function (x) { return '<button class="li" data-gt="' + x.id + '"><span><b>' + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(x.tgl) + "</small></span>" + bd(x.st) + "</button>"; }).join("") || '<p class="muted">Belum ada.</p>'; }
    function harga(kind) {
      var H = HG(), rows = kind === "hosting" ? H.hosting : H.jasa[hs], j = kind === "jasa";
      var tr = rows.map(function (p, i) { return "<tr>" + (j ? '<td><span class="thumb">' + (p.foto ? '<img src="' + p.foto + '" alt="">' : '<i class="bi bi-image"></i>') + "</span></td>" : "") + "<td>" + e(p.nama) + "</td><td>" + e(p.kat) + "</td><td>" + rp(p.harga) + '</td><td class="act"><button class="ib" data-edit="' + i + '" aria-label="Edit"><i class="bi bi-pencil"></i></button><button class="ib dn" data-del="' + i + '" aria-label="Hapus"><i class="bi bi-trash"></i></button></td></tr>'; }).join("");
      $("#p-" + kind).innerHTML = '<div class="tkhead">' + (j ? '<div class="seg2">' + [["minecraft", "Minecraft"], ["discord", "Discord"]].map(function (x) { return '<button type="button" data-hs="' + x[0] + '" aria-pressed="' + (x[0] === hs) + '">' + x[1] + " <b>" + H.jasa[x[0]].length + "</b></button>"; }).join("") + "</div>" : "<span class=\"muted\">" + rows.length + " paket hosting</span>") + '<button class="btn" data-add><i class="bi bi-plus-circle"></i> Tambah paket</button></div>' + table((j ? ["Foto"] : []).concat(["Paket", "Kategori", "Harga", "Aksi"]), tr);
    }
    function formPaket(kind, idx) {
      var H = HG(), rows = kind === "hosting" ? H.hosting : H.jasa[hs], p = idx == null ? {} : rows[idx], j = kind === "jasa";
      var cats = {}; rows.forEach(function (x) { cats[x.kat] = 1; }); foto = p.foto || "";
      modal('<form class="mbox" id="f-pkt"><div class="mh"><b>' + (idx == null ? "Tambah paket" : "Edit paket") + '</b><button type="button" class="ib" data-x aria-label="Tutup"><i class="bi bi-x-lg"></i></button></div><div class="mb">' +
        '<label class="fld"><span>Nama paket <em class="req">*</em></span><input class="inp" name="nama" required value="' + e(p.nama) + '"></label>' +
        '<div class="row2"><label class="fld"><span>Kategori <em class="req">*</em></span><input class="inp" name="kat" list="kt" required value="' + e(p.kat) + '"><datalist id="kt">' + Object.keys(cats).map(function (c) { return '<option value="' + e(c) + '">'; }).join("") + '</datalist></label><label class="fld"><span>Harga (Rp) <em class="req">*</em></span><input class="inp" name="harga" type="number" min="0" required value="' + (p.harga == null ? "" : p.harga) + '"></label></div>' +
        '<label class="fld"><span>Deskripsi singkat</span><input class="inp" name="ringkas" value="' + e(p.ringkas) + '"></label>' +
        '<label class="fld"><span>Isi paket (satu fitur per baris)</span><textarea class="txa" name="fitur">' + e((p.fitur || []).join("\n")) + "</textarea></label>" +
        (j ? '<div class="fgrp"><span class="mlb">Foto</span><div class="upl"><input class="upl-in" type="file" accept="image/*" id="pf"><label class="upl-box" for="pf"><span class="upl-pv" id="fp">' + (foto ? '<img src="' + foto + '" alt="">' : '<i class="bi bi-image"></i>') + '</span><span class="upl-t"><b>Foto paket</b><small id="pf-name">' + (foto ? "Foto aktif. Klik atau seret gambar baru." : PF_TXT) + '</small></span><span class="btn sm upl-btn"><i class="bi bi-cloud-arrow-up"></i> Pilih foto</span></label><button type="button" class="btn ghost sm" id="pf-x"><i class="bi bi-trash3"></i> Hapus foto</button></div></div>' : "") +
        '</div><div class="mf"><button type="button" class="btn ghost" data-x>Batal</button><button class="btn" type="submit">Simpan</button></div></form>', function (m, close) {
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
          ev.preventDefault(); var f = ev.target, it = { nama: f.nama.value.trim(), kat: f.kat.value.trim(), harga: Number(f.harga.value), ringkas: f.ringkas.value.trim(), fitur: f.fitur.value.split("\n").map(function (x) { return x.trim(); }).filter(Boolean) };
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
    function tampilan() {
      var T = ld("nx-tampilan", { nama: "NEXORA", discord: "https://discord.gg/7bFYCRheRm", hero: "Buat Server Minecraft Impianmu Bersama NEXORA.", sub: "Kami membantu menyiapkan server Minecraft, server Discord, dan hosting. Kamu tinggal fokus main dan membangun komunitas.", warna: "#7c5cff", logo: "" });
      var cols = ["#7c5cff", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#ec4899"];
      $("#p-tampilan").innerHTML = '<div class="tmp"><div class="dcard"><b>Logo & nama</b><p class="muted">Tampil di navbar dan footer.</p><div class="nv-prev"><span class="lg" id="nvl">' + (T.logo ? '<img src="' + T.logo + '" alt="">' : '<i class="bi bi-box2"></i>') + '</span><b id="nvn">' + e(T.nama) + '</b></div>' + uplHTML(T) + '<label class="fld" style="margin-top:14px"><span>Nama situs</span><input class="inp" data-t="nama" value="' + e(T.nama) + '"></label></div>' +
        '<div class="dcard"><b>Warna aksen</b><p class="muted">Pilih warna utama tombol dan penanda.</p><div class="sws">' + cols.map(function (c) { return '<button type="button" class="sw" data-c="' + c + '" style="--c:' + c + '" aria-pressed="' + (c === T.warna) + '" aria-label="Warna ' + c + '"></button>'; }).join("") + '</div><div class="pvbox" id="pvb" style="--pv:' + T.warna + '"><span class="pb">Tombol contoh</span><span class="pg">Badge</span></div></div>' +
        '<div class="dcard wide"><b>Teks halaman utama</b><label class="fld" style="margin-top:12px"><span>Judul</span><input class="inp" data-t="hero" value="' + e(T.hero) + '"></label><label class="fld"><span>Deskripsi</span><textarea class="txa" data-t="sub">' + e(T.sub) + '</textarea></label><label class="fld"><span>Link invite Discord</span><input class="inp" data-t="discord" value="' + e(T.discord) + '"></label></div></div><div class="tmp-a"><button class="btn" id="sv-tmp">Simpan perubahan</button><button class="btn ghost" id="rs-tmp">Reset</button></div>';
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
    function bs(b) { return b.st === "Belum dibayar" && dleft(b.jatuh) < 0 ? "Terlambat" : b.st; }
    function rel(b) { var n = dleft(b.jatuh); return n < 0 ? "Terlambat " + (-n) + " hari" : n === 0 ? "Jatuh tempo hari ini" : "Dalam " + n + " hari"; }
    function bmine(b) { return b.user === "__me" || b.user === me(); }
    function bcust(b) { return b.user === "__me" ? ld("nx-cust", "Demo Customer") : b.user; }
    function pk(n) {
      var H = HG(), f = function (r) { return r.filter(function (x) { return x.nama === n; })[0]; }, p = f(H.hosting);
      if (p) return { harga: p.harga, host: true };
      p = f(H.jasa.minecraft) || f(H.jasa.discord); return p ? { harga: p.harga, host: false } : null;
    }
    function OTL() { return TK().filter(function (x) { return x.kat === "Order baru" && x.paket !== "-" && pk(x.paket); }); }
    function sik(t) { return pk(t.paket).host ? ["Bulanan", "Tahunan"] : ["Sekali bayar"]; }
    function bfReset() { var x = new Date(Date.now() + 7 * 864e5); BF = { tk: "", siklus: "", d: String(x.getDate()), m: String(x.getMonth() + 1), y: String(x.getFullYear()), adj: "none", pct: "", alasan: "" }; }
    function bDue() { return BF.y + "-" + pad(BF.m) + "-" + pad(BF.d); }
    function calc() {
      var t = TK().filter(function (x) { return x.id === BF.tk; })[0]; if (!t) return null;
      var q = pk(t.paket), dasar = q.harga * (BF.siklus === "Tahunan" ? 12 : 1), pct = BF.adj === "none" ? 0 : Math.min(20, Math.max(0, Number(BF.pct) || 0)), sg = BF.adj === "diskon" ? -1 : 1;
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
      if (k === "tk") BF.siklus = sik(TK().filter(function (x) { return x.id === v; })[0])[0];
      draw();
    }
    function bForm() {
      var els = OTL(), y = new Date().getFullYear(), c = calc(), days = [], mons = [];
      for (var i = 1; i <= 31; i++) days.push({ v: i, t: String(i) });
      BMF.forEach(function (m, k) { mons.push({ v: k + 1, t: m }); });
      var adjs = [["none", "Tanpa penyesuaian"], ["diskon", "Diskon"], ["biaya", "Biaya tambahan"]];
      return '<div class="tkhead"><button class="btn ghost" type="button" data-bx="back"><i class="bi bi-arrow-left"></i> Kembali ke daftar</button></div><div class="bk"><div class="bfm">' +
        '<section class="bs"><h3><i>1</i>Pilih order customer</h3>' + (els.length ? ddH("dd-bo", BF.tk, els.map(function (x) { return { v: x.id, t: x.paket + " · " + x.id, s: uname(x) + " · " + rp(pk(x.paket).harga) }; })) + '<small class="hint">Tagihan hanya bisa dibuat dari order ticket yang harganya ada di daftar paket.</small>' : '<p class="muted">Belum ada order ticket yang bisa ditagih.</p>') + "</section>" +
        '<section class="bs"><h3><i>2</i>Siklus tagihan</h3>' + (c ? '<div class="seg2 full" role="group">' + sik(c.t).map(function (s) { return '<button type="button" data-bx="sik" data-v="' + s + '" aria-pressed="' + (BF.siklus === s) + '">' + s + "</button>"; }).join("") + "</div>" : '<p class="muted">Pilih order dulu.</p>') + "</section>" +
        '<section class="bs"><h3><i>3</i>Tanggal jatuh tempo</h3><div class="dates">' + ddH("dd-bd", BF.d, days) + ddH("dd-bm", BF.m, mons) + ddH("dd-by", BF.y, [{ v: y, t: String(y) }, { v: y + 1, t: String(y + 1) }]) + '</div><small class="hint">Tidak boleh tanggal yang sudah lewat dan maksimal 12 bulan dari hari ini.</small></section>' +
        '<section class="bs"><h3><i>4</i>Penyesuaian harga (opsional)</h3><div class="seg2 full" role="group">' + adjs.map(function (a) { return '<button type="button" data-bx="adj" data-v="' + a[0] + '" aria-pressed="' + (BF.adj === a[0]) + '">' + a[1] + "</button>"; }).join("") + "</div>" +
        (BF.adj === "none" ? "" : '<div class="row2"><label class="fld"><span>Persen (1-20) <em class="req">*</em></span><input class="inp" type="number" min="1" max="20" data-bf="pct" value="' + e(BF.pct) + '"></label><label class="fld"><span>Alasan <em class="req">*</em></span><input class="inp" data-bf="alasan" maxlength="120" value="' + e(BF.alasan) + '" placeholder="Min. 10 karakter, tercatat di log"></label></div>') + "</section>" +
        '<button class="btn lg" type="button" data-bx="review"><i class="bi bi-shield-check"></i> Tinjau dan kirim</button></div>' +
        '<aside class="dcard bki"><b>Ringkasan tagihan</b><div id="bsum"></div><b>Pengaman</b><ul><li>Harga diambil dari daftar paket, tidak diketik bebas.</li><li>Penyesuaian maksimal 20% dan wajib beralasan.</li><li>Kirim wajib kode keamanan admin.</li><li>Maksimal 5 tagihan baru per 24 jam.</li><li>Setelah terkirim tidak bisa diedit atau dihapus.</li></ul></aside></div>';
    }
    function updSum() {
      var b = $("#bsum"); if (!b) return; var c = calc();
      b.innerHTML = c ? srows([["Customer", uname(c.t)], ["Paket", c.t.paket], ["Siklus", BF.siklus || "-"], ["Harga dasar", rp(c.dasar)], ["Penyesuaian", BF.adj === "none" ? "-" : (BF.adj === "diskon" ? "-" : "+") + c.pct + "%"], ["Jatuh tempo", fdt(bDue())]]) + '<div class="sum"><div class="tot"><span>Total</span><b>' + rp(c.total) + "</b></div></div>" : '<p class="muted">Pilih order untuk melihat ringkasan.</p>';
    }
    function bValid() {
      var c = calc(); if (!c) return "Pilih order customer dulu.";
      var dt = new Date(+BF.y, +BF.m - 1, +BF.d); if (dt.getDate() !== +BF.d || dt.getMonth() !== +BF.m - 1) return "Tanggal tidak valid.";
      var n = dleft(bDue()); if (n < 0) return "Jatuh tempo tidak boleh tanggal yang sudah lewat."; if (n > 366) return "Jatuh tempo maksimal 12 bulan dari hari ini.";
      if (BF.adj !== "none") { var p = Number(BF.pct); if (!(p >= 1 && p <= 20)) return "Persentase penyesuaian harus 1 sampai 20%."; if ((BF.alasan || "").trim().length < 10) return "Alasan penyesuaian minimal 10 karakter."; }
      var all = BL();
      if (all.some(function (b) { return b.tk === BF.tk && b.st === "Belum dibayar" && b.jatuh.slice(0, 7) === bDue().slice(0, 7); })) return "Sudah ada tagihan aktif untuk order ini di bulan jatuh tempo yang sama.";
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
      var c = calc(), due = bDue();
      guard({ title: "Kirim tagihan ke customer?", ok: "Kirim tagihan", html: srows([["Customer", uname(c.t)], ["Paket", c.t.paket], ["Siklus", BF.siklus], ["Total", rp(c.total)], ["Jatuh tempo", fdt(due)]]) + '<p class="muted">Setelah terkirim, tagihan tidak bisa diedit atau dihapus. Hanya bisa dibatalkan dengan alasan.</p>' }, function () {
        var all = BL(), n = all.reduce(function (m, b) { return Math.max(m, Number(b.id.slice(4)) || 0); }, 3000) + 1;
        all.unshift({ id: "INV-" + n, tk: c.t.id, user: c.t.user, item: c.t.paket, siklus: BF.siklus, dasar: c.dasar, adj: BF.adj, pct: c.pct, alasan: (BF.alasan || "").trim(), total: c.total, jatuh: due, st: "Belum dibayar", dibuat: iso(t0()), by: me(), ts: Date.now(), ticket: "", log: [{ a: "Tagihan dibuat dan dikirim ke customer", by: me(), at: stamp() }] });
        sv("nx-bill", all); bnew = false; toast("Tagihan INV-" + n + " terkirim ke " + uname(c.t)); draw();
      });
    }
    function bUpd(id, st, aksi, r) {
      var all = BL(); all.forEach(function (b) {
        if (b.id !== id) return; b.st = st; b.log.push({ a: aksi + (r ? ": " + r : ""), by: me(), at: stamp() });
        if (b.ticket) { var tk = TK(); tk.forEach(function (x) { if (x.id === b.ticket) x.m.push({ w: "s", t: "Tagihan " + id + (st === "Lunas" ? " ditandai lunas" : " dibatalkan"), d: "Baru saja" }); }); sv("nx-tk", tk); }
      });
      sv("nx-bill", all); toast("Tagihan " + id + ": " + st); draw();
    }
    function bDetail(id) {
      var b = BL().filter(function (x) { return x.id === id; })[0]; if (!b) return; var act = b.st === "Belum dibayar";
      modal('<div class="mbox"><div class="mh"><b>' + e(b.id) + " " + bd(bs(b)) + '</b><button type="button" class="ib" data-x aria-label="Tutup"><i class="bi bi-x-lg"></i></button></div><div class="mb">' +
        srows([["Customer", bcust(b)], ["Order ticket", b.tk], ["Paket", b.item], ["Siklus", b.siklus], ["Harga dasar", rp(b.dasar)], ["Penyesuaian", b.adj === "none" ? "-" : (b.adj === "diskon" ? "-" : "+") + b.pct + "% (" + b.alasan + ")"], ["Total", rp(b.total)], ["Jatuh tempo", fdt(b.jatuh) + (act ? " · " + rel(b) : "")], ["Dibuat oleh", b.by + " · " + fdt(b.dibuat)], ["Ticket pembayaran", b.ticket || "Belum dibuka customer"]]) +
        '<h2>Log aktivitas</h2><ul class="blog">' + b.log.map(function (l) { return "<li>" + e(l.a) + "<small>" + e(l.by) + " · " + e(l.at) + "</small></li>"; }).join("") + "</ul></div>" +
        (act ? '<div class="mf"><button type="button" class="btn ghost" data-pay>Tandai lunas</button><button type="button" class="btn dng" data-void>Batalkan tagihan</button></div>' : "") + "</div>", function (m, close) {
        var p = $("[data-pay]", m), v = $("[data-void]", m);
        if (p) p.addEventListener("click", function () { close(); guard({ title: "Tandai lunas?", ok: "Tandai lunas", reason: true, html: "<p>Pastikan pembayaran " + e(b.id) + " (" + rp(b.total) + ") sudah kamu terima. Isi catatan bukti pembayaran.</p>" }, function (r) { bUpd(id, "Lunas", "Ditandai lunas", r); }); });
        if (v) v.addEventListener("click", function () { close(); guard({ title: "Batalkan tagihan?", ok: "Batalkan tagihan", danger: true, reason: true, html: "<p>Tagihan " + e(b.id) + " akan dibatalkan dan tidak bisa dibuka lagi.</p>" }, function (r) { bUpd(id, "Dibatalkan", "Dibatalkan", r); }); });
      });
    }
    function bList() {
      var all = BL(), F = ["semua", "Belum dibayar", "Terlambat", "Lunas", "Dibatalkan"], ok = function (b, f) { return f === "semua" || bs(b) === f; };
      var rows = all.filter(function (b) { return ok(b, bfil); }).map(function (b) { return "<tr><td>" + e(b.id) + "</td><td>" + e(bcust(b)) + "</td><td>" + e(b.item) + "</td><td>" + e(b.siklus) + "</td><td>" + rp(b.total) + "</td><td>" + fdt(b.jatuh) + "</td><td>" + bd(bs(b)) + '</td><td class="act"><button class="ib" type="button" data-bx="det" data-v="' + e(b.id) + '" aria-label="Detail"><i class="bi bi-eye"></i></button></td></tr>'; }).join("");
      return '<div class="guard"><i class="bi bi-shield-check"></i><div><b>Pengaman tagihan aktif</b><small>Tagihan hanya dari order ticket, harga dari daftar paket, kirim wajib kode keamanan, log permanen, tidak bisa dihapus.</small></div></div>' +
        '<div class="tkhead bhead"><div class="chips mini bchips">' + F.map(function (f) { return '<button class="chip" type="button" data-bx="fil" data-v="' + f + '" aria-pressed="' + (bfil === f) + '">' + (f === "semua" ? "Semua" : f) + " <b>" + all.filter(function (b) { return ok(b, f); }).length + "</b></button>"; }).join("") + '</div><button class="btn" type="button" data-bx="new"><i class="bi bi-plus-circle"></i> Buat tagihan</button></div>' +
        (rows ? table(["ID", "Customer", "Paket", "Siklus", "Total", "Jatuh tempo", "Status", "Aksi"], rows) : '<div class="dcard empty"><i class="bi bi-cash-stack"></i><b>Tidak ada tagihan</b><p class="muted">Tagihan yang kamu buat akan muncul di sini.</p></div>');
    }
    function cBills() {
      var a = BL().filter(bmine), act = a.filter(function (b) { return b.st === "Belum dibayar"; }).sort(function (x, y) { return x.jatuh < y.jatuh ? -1 : 1; }), his = a.filter(function (b) { return b.st !== "Belum dibayar"; });
      var tot = act.reduce(function (s, b) { return s + b.total; }, 0), od = act.filter(function (b) { return dleft(b.jatuh) < 0; }).length;
      var s2 = function (ic, l, v, c) { return '<div class="dstat"><span class="si"><i class="bi bi-' + ic + '"></i></span><div><small>' + l + "</small><b" + (c ? ' class="' + c + '"' : "") + ">" + v + "</b></div></div>"; };
      return '<div class="dstats">' + s2("wallet2", "Total belum dibayar", rp(tot), "v2") + s2("calendar-event", "Jatuh tempo terdekat", act[0] ? fdt(act[0].jatuh) : "-", "v2") + s2("exclamation-circle", "Terlambat", od) + "</div><h2>Harus dibayar</h2>" +
        (act.map(function (b) {
          return '<div class="dcard bill' + (dleft(b.jatuh) < 0 ? " late" : "") + '"><div class="bill-h"><div><b>' + e(b.item) + "</b><small>" + e(b.id) + " · " + e(b.siklus) + "</small></div>" + bd(bs(b)) + '</div><div class="bill-g"><div class="bill-i"><small>Total tagihan</small><b>' + rp(b.total) + '</b></div><div class="bill-i due"><small>Jatuh tempo</small><b>' + fdt(b.jatuh) + '</b><em class="rel">' + rel(b) + "</em></div></div>" +
            (b.adj !== "none" ? '<p class="bill-n">Termasuk ' + (b.adj === "diskon" ? "diskon " : "biaya tambahan ") + b.pct + "%: " + e(b.alasan) + "</p>" : "") +
            '<div class="bill-a"><button class="btn" type="button" data-bx="pay" data-v="' + e(b.id) + '"><i class="bi bi-credit-card"></i> Bayar sekarang</button>' + (b.ticket ? '<button class="btn ghost" type="button" data-bx="tk" data-v="' + e(b.ticket) + '"><i class="bi bi-chat-dots"></i> Lihat ticket ' + e(b.ticket) + "</button>" : "") + "</div></div>";
        }).join("") || '<div class="dcard empty"><i class="bi bi-check-circle"></i><b>Tidak ada tagihan</b><p class="muted">Semua tagihanmu sudah beres.</p></div>') +
        (his.length ? "<h2>Riwayat tagihan</h2><div class=\"lis\">" + his.map(function (b) { return '<div class="li"><span><b>' + e(b.item) + "</b><small>" + e(b.id) + " · " + rp(b.total) + " · " + fdt(b.jatuh) + "</small></span>" + bd(b.st) + "</div>"; }).join("") + "</div>" : "");
    }
    function bPay(id) {
      var b = BL().filter(function (x) { return x.id === id; })[0]; if (!b) return;
      var all = TK(), ex = all.filter(function (x) { return x.id === b.ticket && x.st !== "Selesai"; })[0];
      if (!ex) {
        var n = all.reduce(function (m, x) { return Math.max(m, Number(x.id.slice(2)) || 0); }, 1043) + 1, tid = "T-" + n;
        all.unshift({ id: tid, subj: "Bayar " + b.id + " · " + b.item, kat: "Pembayaran", paket: b.item, st: "Terbuka", tgl: "Hari ini", user: "__me", m: [{ w: "c", t: "Halo, saya ingin membayar tagihan " + b.id + " (" + b.item + ", " + rp(b.total) + ", jatuh tempo " + fdt(b.jatuh) + "). Mohon info cara pembayarannya.", d: "Baru saja" }] }); sv("nx-tk", all);
        var bl = BL(); bl.forEach(function (x) { if (x.id === id) { x.ticket = tid; x.log.push({ a: "Customer membuka ticket pembayaran " + tid, by: me(), at: stamp() }); } }); sv("nx-bill", bl);
        ex = { id: tid }; toast("Ticket " + tid + " dibuat untuk pembayaran " + b.id);
      }
      sel = ex.id; tg = "aktif"; tab = "tiket"; tv = "chat"; draw();
    }
    function bAct(d) {
      var v = d.v;
      if (d.bx === "new") { bnew = true; bfReset(); return draw(); }
      if (d.bx === "back") { bnew = false; return draw(); }
      if (d.bx === "sik") { BF.siklus = v; return draw(); }
      if (d.bx === "adj") { BF.adj = v; return draw(); }
      if (d.bx === "review") return bSend();
      if (d.bx === "fil") { bfil = v; return draw(); }
      if (d.bx === "det") return bDetail(v);
      if (d.bx === "pay") return bPay(v);
      if (d.bx === "tk") { sel = v; tg = "aktif"; tv = "chat"; tab = "tiket"; return draw(); }
    }
    var TITLES = { c: { ringkasan: ["Halo, {n}!", "Ringkasan akun dan aktivitas terbaru kamu."], pesanan: ["Riwayat pesanan", "Semua pesanan dan perkembangannya."], tiket: ["Ticket saya", "Chat dengan tim NEXORA di ticket yang masih aktif."], riwayat: ["Riwayat ticket", "Ticket yang sudah ditutup. Hanya bisa dibaca."], tagihan: ["Tagihan", "Tagihan yang perlu kamu bayar beserta jatuh temponya."], buka: ["Buka ticket", "Order baru atau tanya sesuatu ke tim NEXORA."], profil: ["Profil", "Kelola data akunmu."] },
      a: { ringkasan: ["Dashboard", "Kondisi ticket dan pesanan saat ini."], tiket: ["Ticket", "Lihat, balas, dan ubah status ticket customer."], tagihan: ["Tagihan", "Buat dan pantau tagihan customer dengan pengaman."], jasa: ["Jasa setup", "Kelola paket setup Minecraft dan Discord."], hosting: ["Hosting", "Kelola paket hosting."], tampilan: ["Logo & tampilan", "Atur logo, warna, dan teks website."], ekspor: ["Ekspor data", "Unduh cadangan ticket dan pesanan."] } };
    var PAN = {
      ringkasan: function () {
        var a = adm ? TK() : mine(), n = a.filter(function (x) { return x.st !== "Selesai"; }).length, el = $("#p-ringkasan");
        if (adm) {
          var all = TK(), act = all.filter(function (x) { return x.st !== "Selesai"; }), need = act.filter(function (x) { return last(x).w === "c"; }), cn = function (s) { return all.filter(function (x) { return x.st === s; }).length; };
          var H = HG(), np = H.hosting.length + H.jasa.minecraft.length + H.jasa.discord.length, mx = Math.max(1, cn("Terbuka"), cn("Diproses"), cn("Menunggu pembayaran"), cn("Selesai"));
          el.innerHTML = '<div class="hero-c"><div><b>Selamat datang, ' + e(me()) + "</b><p>" + (need.length ? need.length + " ticket menunggu balasanmu." : "Semua ticket sudah ditanggapi.") + '</p></div><div class="hc-a"><button class="btn" data-tab="tiket"><i class="bi bi-chat-dots"></i> Buka ticket</button><button class="btn ghost" data-tab="jasa"><i class="bi bi-tags"></i> Kelola harga</button></div></div>' +
            '<div class="dstats">' + stat("Ticket terbuka", cn("Terbuka")) + stat("Sedang diproses", cn("Diproses")) + stat("Menunggu pembayaran", cn("Menunggu pembayaran")) + stat("Total pesanan", OR().length) + stat("Tagihan aktif", BL().filter(function (b) { return b.st === "Belum dibayar"; }).length) + '</div><div class="cols2"><div><h2>Perlu dibalas</h2><div class="lis">' +
            (need.map(function (x) { return '<button class="li" data-gt="' + x.id + '"><span><b>' + e(x.subj) + "</b><small>" + e(x.id) + " · " + e(uname(x)) + "</small></span>" + bd(x.st) + "</button>"; }).join("") || '<p class="muted">Tidak ada ticket yang menunggu.</p>') +
            '</div></div><div><h2>Status ticket</h2><div class="dcard bars">' + [["Terbuka", "b1"], ["Diproses", "b2"], ["Menunggu pembayaran", "b3"], ["Selesai", "b4"]].map(function (s) { return '<div class="bar"><span>' + s[0] + '</span><div><i class="' + s[1] + '" style="width:' + Math.round(cn(s[0]) / mx * 100) + '%"></i></div><b>' + cn(s[0]) + "</b></div>"; }).join("") + '</div><p class="muted" style="margin-top:10px">' + np + " paket aktif di daftar harga.</p></div></div>"; return;
        }
        var o = OR();
        el.innerHTML = '<div class="hero-c"><div><b>Butuh setup server?</b><p>Order lewat ticket atau langsung di Discord NEXORA.</p></div><div class="hc-a"><button class="btn" data-go="buka"><i class="bi bi-plus-circle"></i> Buka ticket</button><a class="btn ghost" href="https://discord.gg/7bFYCRheRm" target="_blank" rel="noopener"><i class="bi bi-discord"></i> Order via Discord</a></div></div>' +
          '<div class="dstats">' + stat("Pesanan berjalan", o.filter(function (x) { return x.st !== "Selesai"; }).length) + stat("Ticket aktif", n) + stat("Ticket selesai", a.length - n) + stat("Tagihan aktif", BL().filter(function (b) { return bmine(b) && b.st === "Belum dibayar"; }).length) + '</div><div class="cols2"><div><h2>Ticket terbaru</h2><div class="lis">' + li(a.slice(0, 3)) + '</div></div><div><h2>Pesanan terakhir</h2><div class="lis">' + (o.slice(0, 3).map(function (x) { return '<div class="li"><span><b>' + e(x.item) + "</b><small>" + e(x.id) + " · " + e(x.tgl) + "</small></span>" + bd(x.st) + "</div>"; }).join("") || '<p class="muted">Belum ada.</p>') + "</div></div></div>";
      },
      pesanan: function () {
        var o = OR().filter(function (x) { return of === "semua" || (of === "selesai") === (x.st === "Selesai"); }), steps = ["Menunggu", "Diproses", "Selesai"];
        $("#p-pesanan").innerHTML = '<div class="chips mini">' + [["semua", "Semua"], ["jalan", "Berjalan"], ["selesai", "Selesai"]].map(function (x) { return '<button class="chip" data-of="' + x[0] + '" aria-pressed="' + (of === x[0]) + '">' + x[1] + "</button>"; }).join("") + "</div>" +
          (o.map(function (x) { var k = steps.indexOf(x.st === "Menunggu pembayaran" ? "Menunggu" : x.st); return '<div class="dcard oc"><div class="oc-h"><div><b>' + e(x.item) + "</b><small>" + e(x.id) + " · " + e(x.jenis) + " · " + e(x.tgl) + "</small></div>" + bd(x.st) + '</div><div class="stp">' + steps.map(function (s, i) { return '<span class="' + (i <= k ? "on" : "") + '"><i></i>' + s + "</span>"; }).join("") + "</div></div>"; }).join("") || '<div class="dcard empty"><i class="bi bi-receipt"></i><b>Belum ada pesanan</b><p class="muted">Pesanan dari ticket order akan muncul di sini.</p></div>');
      },
      tiket: function () { $("#p-tiket").innerHTML = tkPanel(); },
      riwayat: function () { $("#p-riwayat").innerHTML = tkPanel(); },
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
        var P = ld("nx-prof", { discord: "" });
        $("#p-profil").innerHTML = '<form class="dcard pf" id="f-prof"><div class="pf-h">' + av(me()) + "<div><b>" + e(me()) + "</b><small>" + e(ss("nx-email") || "Login lewat Discord/Google") + '</small></div></div><label class="fld"><span>Nama</span><input class="inp" name="nama" required value="' + e(me()) + '"></label><label class="fld"><span>Email</span><input class="inp" disabled value="' + e(ss("nx-email") || "-") + '"></label><label class="fld"><span>Username Discord (untuk notifikasi)</span><input class="inp" name="dc" placeholder="contoh: nexora_user" value="' + e(P.discord) + '"></label><button class="btn" type="submit">Simpan profil</button></form>';
      },
      jasa: function () { harga("jasa"); },
      hosting: function () { harga("hosting"); },
      tampilan: tampilan,
      ekspor: function () { var C = [["nx-tk", "Ticket", "chat-dots", TK().length + " ticket"], ["nx-or", "Pesanan", "receipt", OR().length + " pesanan"], ["nx-harga", "Harga & paket", "tags", "Jasa dan hosting"]]; $("#p-ekspor").innerHTML = '<div class="exg">' + C.map(function (c) { return '<div class="dcard ex"><span class="si"><i class="bi bi-' + c[2] + '"></i></span><div><b>' + c[1] + "</b><small>" + c[3] + '</small></div><button class="btn ghost sm" data-exp="' + c[0] + '"><i class="bi bi-download"></i> Unduh JSON</button></div>'; }).join("") + "</div>"; }
    };
    function draw() {
      $$(".stab[data-tab]", root).forEach(function (b) { b.setAttribute("aria-selected", b.dataset.tab === tab); });
      $$(".dpanel", root).forEach(function (p) { p.hidden = p.id !== "p-" + tab; });
      PAN[tab]();
      var tt = TITLES[adm ? "a" : "c"][tab]; $("#ptitle").textContent = tt[0].replace("{n}", me()); $("#psub").textContent = tt[1];
      var tm = $(".th-m", root); if (tm) tm.scrollTop = tm.scrollHeight;
      root.classList.toggle("chatv", !!sel && (adm ? (tab === "tiket" && tv === "chat") : (tab === "tiket" || tab === "riwayat")));
      var ct = $("#c-tiket"); if (ct) { var cc = (adm ? TK().filter(function (x) { return x.st === "Terbuka"; }) : mine().filter(function (x) { return x.st !== "Selesai"; })).length; ct.textContent = cc; ct.hidden = !cc; }
      var cb = $("#c-tagihan"); if (cb) { var nb = BL().filter(function (b) { return b.st === "Belum dibayar" && (adm ? dleft(b.jatuh) < 0 : bmine(b)); }).length; cb.textContent = nb; cb.hidden = !nb; }
      mk();
    }
    var nl = document.getElementById("nav-logout"); if (nl) nl.addEventListener("click", function (ev) { ev.preventDefault(); outAsk(); });
    root.addEventListener("click", function (ev) {
      var t = ev.target.closest("[data-tab],[data-go],.tk-item,.tk-pill,[data-svc],[data-tg],[data-gt],[data-af],[data-of],[data-back],[data-close],[data-hs],[data-add],[data-edit],[data-del],#logout,#side-t,[data-exp],#sv-tmp,#rs-tmp,#lg-x,.sw,.dd-btn,.dd-opt,[data-bx]"); if (!t) return;
      var d = t.dataset;
      if (t.classList.contains("dd-btn")) { var mn = t.nextElementSibling, op = mn.hidden; ddClose(); mn.hidden = !op; t.setAttribute("aria-expanded", op); if (op) { var cs = $('[aria-selected="true"]', mn); if (cs) cs.scrollIntoView({ block: "nearest" }); } return; }
      if (t.classList.contains("dd-opt")) { var dd = t.closest(".dd"); ddClose(); if (dd.hasAttribute("data-bdd")) return bdd(dd.id, d.v); $("#f-buka").paket.value = d.v; return bukaSync(); }
      if (d.bx) return bAct(d);
      if (t.id === "logout") return outAsk();
      if (t.id === "side-t") return setWide(!root.classList.contains("wide"));
      if (d.tab || d.go) { tab = d.tab || d.go; return draw(); }
      if (d.gt) { var x = TK().filter(function (y) { return y.id === d.gt; })[0]; sel = d.gt; tg = x.st === "Selesai" ? "selesai" : "aktif"; tv = "chat"; tab = (!adm && x.st === "Selesai") ? "riwayat" : "tiket"; return draw(); }
      if (d.svc) { bsv = d.svc; $$("[data-svc]", root).forEach(function (b) { b.setAttribute("aria-pressed", b === t); }); $("#f-buka").paket.dataset.l = ""; return bukaSync(); }
      if (d.tg) { tg = d.tg; sel = null; return draw(); }
      if (t.classList.contains("tk-item") || t.classList.contains("tk-pill")) { sel = d.id; tv = "chat"; return draw(); }
      if (d.back !== undefined) { tv = "list"; return draw(); }
      if (d.af) { af = d.af; return draw(); }
      if (d.of) { of = d.of; return draw(); }
      if (d.hs) { hs = d.hs; return draw(); }
      if (d.close !== undefined) return modal('<div class="mbox sm"><div class="mh"><b>Tutup ticket?</b></div><div class="mb"><p>Apakah kamu yakin ingin menutup ticket ini?</p><p class="muted">Setelah ditutup, customer dan admin tidak bisa mengirim pesan lagi dan ticket masuk ke Riwayat.</p></div><div class="mf"><button class="btn ghost" data-x>Batal</button><button class="btn dng" data-ok>Ya, tutup ticket</button></div></div>', function (m, close) { $("[data-ok]", m).addEventListener("click", function () { var a = TK(); a.forEach(function (y) { if (y.id === sel) { y.st = "Selesai"; y.m.push({ w: "s", t: "Ticket ditutup oleh admin", d: "Baru saja" }); } }); sv("nx-tk", a); close(); toast("Ticket ditutup dan dipindah ke Riwayat"); af = "Riwayat"; draw(); }); });
      if (d.add !== undefined) return formPaket(tab, null);
      if (d.edit !== undefined) return formPaket(tab, Number(d.edit));
      if (d.del !== undefined) { var H = HG(), r = tab === "hosting" ? H.hosting : H.jasa[hs], i = Number(d.del); return modal('<div class="mbox sm"><div class="mh"><b>Hapus paket?</b></div><div class="mb"><p class="muted">Paket "' + e(r[i].nama) + '" akan dihapus dari daftar.</p></div><div class="mf"><button class="btn ghost" data-x>Batal</button><button class="btn dng" data-ok>Hapus</button></div></div>', function (m, close) { $("[data-ok]", m).addEventListener("click", function () { r.splice(i, 1); sv("nx-harga", H); close(); toast("Paket dihapus"); draw(); }); }); }
      if (d.exp) { var b = new Blob([JSON.stringify(d.exp === "nx-harga" ? HG() : ld(d.exp, []), null, 2)], { type: "application/json" }), l = document.createElement("a"); l.href = URL.createObjectURL(b); l.download = d.exp + ".json"; l.click(); return; }
      if (d.c) { root._T.warna = d.c; $$(".sw", root).forEach(function (s) { s.setAttribute("aria-pressed", s === t); }); $("#pvb").style.setProperty("--pv", d.c); return; }
      if (t.id === "lg-x") { root._T.logo = ""; $("#nvl").innerHTML = '<i class="bi bi-box2"></i>'; var pv = $("#upl-pv"); if (pv) pv.innerHTML = '<i class="bi bi-image"></i>'; var nm = $("#upl-name"); if (nm) nm.textContent = UPL_TXT; var tt = $("#upl-ttl"); if (tt) tt.textContent = "Unggah logo"; return; }
      if (t.id === "sv-tmp") { sv("nx-tampilan", root._T); return toast("Tampilan tersimpan (demo, belum mengubah web asli)"); }
      if (t.id === "rs-tmp") { sv("nx-tampilan", null); try { localStorage.removeItem("nx-tampilan"); } catch (x2) {} delete mem["nx-tampilan"]; tampilan(); return toast("Tampilan dikembalikan ke awal"); }
    });
    root.addEventListener("input", function (ev) {
      var t = ev.target;
      if (t.dataset.bf) { BF[t.dataset.bf] = t.value; updSum(); }
      if (t.matches("[data-q]")) { aq = t.value; $(".tk-list", root).innerHTML = admList(); }
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
      if (t.matches("[data-st]")) { var a = TK(); a.forEach(function (x) { if (x.id === sel) x.st = t.value; }); sv("nx-tk", a); toast("Status diperbarui"); draw(); }
      if (t.id === "lg" && t.files[0]) { setLogo(t.files[0]); t.value = ""; }
    });
    root.addEventListener("dragover", function (ev) { var b = ev.target.closest(".upl-box"); if (!b) return; ev.preventDefault(); b.classList.add("drag"); });
    root.addEventListener("dragleave", function (ev) { var b = ev.target.closest(".upl-box"); if (b) b.classList.remove("drag"); });
    root.addEventListener("drop", function (ev) { var b = ev.target.closest(".upl-box"); if (!b) return; ev.preventDefault(); b.classList.remove("drag"); setLogo(ev.dataTransfer.files[0]); });
    root.addEventListener("submit", function (ev) {
      ev.preventDefault(); var f = ev.target;
      if (f.matches("[data-rep]")) {
        var txt = $("textarea", f).value.trim(); if (!txt) return; var a = TK(), cur = a.filter(function (x) { return x.id === sel; })[0];
        if (!cur || cur.st === "Selesai") { toast("Ticket sudah ditutup, chat tidak bisa dikirim"); return draw(); }
        cur.m.push({ w: adm ? "a" : "c", t: txt, d: "Baru saja" }); if (adm && cur.st === "Terbuka") cur.st = "Diproses"; sv("nx-tk", a); draw();
        if (!adm) { var tid = sel; setTimeout(function () { var b = TK(); b.forEach(function (x) { if (x.id === tid && x.st !== "Selesai" && last(x).w === "c") x.m.push({ w: "a", t: "Terima kasih, pesanmu sudah kami terima. Tim NEXORA akan segera membalas. (balasan otomatis demo)", d: "Baru saja" }); }); sv("nx-tk", b); remote(); }, 3500); }
        return;
      }
      if (f.id === "f-prof") { ss("nx-name", f.nama.value.trim()); sv("nx-prof", { discord: f.dc.value.trim() }); $("#who").textContent = me(); toast("Profil tersimpan"); return draw(); }
      if (f.id === "f-buka") {
        var b = TK(), id = "T-" + (1044 + b.length), k = f.kat.value, p = k === "Order baru" ? f.paket.value : "-";
        b.unshift({ id: id, subj: f.subj.value || ("Order " + p), kat: k, paket: p, st: "Terbuka", tgl: "Hari ini", user: "__me", m: [{ w: "c", t: f.msg.value, d: "Baru saja" }] }); sv("nx-tk", b);
        if (k === "Order baru") { var o = OR(); o.unshift({ id: "ORD-" + (2045 + o.length), item: p, jenis: "Order via ticket", tgl: "Hari ini", st: "Menunggu" }); sv("nx-or", o); }
        sel = id; tg = "aktif"; tab = "tiket"; draw(); toast("Ticket " + id + " dibuat. Nanti notifikasi otomatis masuk ke Discord NEXORA.");
      }
    });
    window.addEventListener("storage", function (ev) { if (ev.key === "nx-tk" || ev.key === "nx-or" || ev.key === "nx-bill") remote(); });
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

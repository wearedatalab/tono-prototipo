/* ============================================================
   tono. — lógica compartida: nav, footer, toasts, reveals
   ============================================================ */

function navHTML(clara) {
  const u = TONO.user;
  const cuenta = u
    ? `<a class="avatar-chip" href="mi-entrenamiento.html"><span class="av">${u.nombre[0].toUpperCase()}</span>${u.nombre.split(' ')[0]}</a>`
    : `<a class="btn btn-sm btn-ghost" href="acceso.html">Ingresar</a>`;
  return `
  <nav class="nav ${clara ? 'clara' : 'solid'}" id="nav">
    <div class="nav-in">
      <a class="logo" href="index.html">tono<i>.</i></a>
      <div class="nav-links">
        <a href="explorar.html">Explorar</a>
        <a href="index.html#instructores">Instructores</a>
        <a href="index.html#como">Cómo funciona</a>
      </div>
      <div class="nav-right">
        ${cuenta}
        <a class="btn btn-sm btn-coral" href="explorar.html">Empieza hoy</a>
        <button class="hamb" onclick="document.getElementById('mnav').classList.add('open')">☰</button>
      </div>
    </div>
  </nav>
  <div class="mnav" id="mnav">
    <button class="cerrar" onclick="document.getElementById('mnav').classList.remove('open')">×</button>
    <a href="index.html">Inicio</a>
    <a href="explorar.html">Explorar programas</a>
    <a href="index.html#instructores">Instructores</a>
    <a href="${u ? 'mi-entrenamiento.html' : 'acceso.html'}">${u ? 'Mi entrenamiento' : 'Ingresar'}</a>
    <a href="panel-instructor.html" style="color:var(--lila)">Soy instructor</a>
  </div>`;
}

function footerHTML() {
  return `
  <footer>
    <div class="foot-in">
      <div class="foot-top">
        <div>
          <div class="logo" style="font-size:2.2rem">tono<i>.</i></div>
          <p style="opacity:.65;max-width:280px;margin-top:14px;font-size:.95rem">
            Entrena con los mejores instructores, desde cualquier dispositivo.</p>
        </div>
        <div class="foot-links">
          <div>
            <h4>Plataforma</h4>
            <a href="explorar.html">Explorar programas</a>
            <a href="index.html#instructores">Instructores</a>
            <a href="acceso.html">Crear cuenta</a>
          </div>
          <div>
            <h4>Instructores</h4>
            <a href="panel-instructor.html">Panel del instructor</a>
            <a href="index.html#instructor-cta">Publica tus clases</a>
          </div>
          <div>
            <h4>Soporte</h4>
            <a href="#">Centro de ayuda</a>
            <a href="#">Términos y condiciones</a>
            <a href="#">Tratamiento de datos</a>
          </div>
          <div>
            <h4>Back office</h4>
            <a href="admin.html">Administración</a>
          </div>
        </div>
      </div>
      <div class="foot-note">
        <span>© 2026 tono. — Marca demo del prototipo</span>
        <span>Prototipo navegable elaborado por <strong>DataLab</strong> · wearedatalab.co</span>
      </div>
    </div>
  </footer>
  <div class="demo-pill">Prototipo navegable · sin datos reales</div>`;
}

function montarUI(opts = {}) {
  document.body.insertAdjacentHTML('afterbegin', navHTML(opts.navClara));
  if (!opts.sinFooter) document.body.insertAdjacentHTML('beforeend', footerHTML());

  // nav sólida al hacer scroll (solo si arrancó transparente)
  const nav = document.getElementById('nav');
  if (opts.navClara) {
    const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // reveals
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.rv').forEach((el) => io.observe(el));

  // banner de impersonación (superadmin viendo como usuario)
  const imp = TONO.impersonando;
  if (imp) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="imp-banner">
        <span>👁 Estás navegando como <strong>${imp}</strong> (modo soporte del superadministrador)</span>
        <button onclick="TONO.dejarImpersonar();location.href='admin.html'">Volver al back office</button>
      </div>`);
  }
}

let _toastT;
function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(_toastT);
  _toastT = setTimeout(() => t.classList.remove('show'), 3200);
}

function pcardHTML(p) {
  const inst = findI(p.instructor);
  return `
  <a class="pcard rv" href="programa.html?p=${p.slug}">
    <div class="ph"><img src="${p.img}" alt="${p.titulo}" loading="lazy"><span class="tag">${catLabel(p.cat)}</span></div>
    <div class="pc-body">
      <h3>${p.titulo}</h3>
      <div class="pc-inst"><img src="${inst.img}" alt="">${inst.nombre}</div>
      <div class="pc-meta"><span>${p.semanas} semanas</span><span>·</span><span>${p.sesiones} clases</span><span>·</span><span>${p.nivel}</span></div>
      <div class="pc-foot">
        <span class="precio">${$fmt(p.precio)}</span>
        <span class="rating"><i>★</i> ${p.rating} <span class="mut">(${p.alumnos})</span></span>
      </div>
    </div>
  </a>`;
}

function param(k) { return new URLSearchParams(location.search).get(k); }

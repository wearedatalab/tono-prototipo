// tabs — cada vista tiene su propia URL (admin.html#usuarios)
document.querySelectorAll('.stab').forEach(b => b.onclick = () => {
  document.querySelectorAll('.stab').forEach(x => x.classList.remove('on'));
  document.querySelectorAll('.vista').forEach(x => x.classList.remove('on'));
  b.classList.add('on');
  document.getElementById('v-' + b.dataset.v).classList.add('on');
  history.replaceState(null, '', '#' + b.dataset.v);
});

function abrirVista(v) {
  const b = document.querySelector('.stab[data-v="' + v + '"]');
  if (b) b.click();
}
if (location.hash) abrirVista(location.hash.slice(1));
window.addEventListener('hashchange', () => abrirVista(location.hash.slice(1)));

// chart
const meses = [['Feb', 9.2], ['Mar', 11.5], ['Abr', 10.8], ['May', 14.1], ['Jun', 15.9], ['Jul', 18.4]];
document.getElementById('chartAdmin').innerHTML = meses.map(([m, v]) => `
  <div class="col"><span class="v">$${v.toFixed(1)}M</span><div class="bar" style="height:${v / 20 * 100}%"></div><span class="m">${m}</span></div>`).join('');

// top programas
const topVentas = [
  ['booty-camp', 34], ['core-21', 29], ['hiit-quema-30', 21], ['reformer-en-casa', 18], ['reset-nutricional', 14],
];
document.getElementById('topProgs').innerHTML = topVentas.map(([slug, ventas], i) => {
  const p = findP(slug); const inst = findI(p.instructor);
  return `<tr><td>${i + 1}</td><td><b>${p.titulo}</b></td><td>${inst.nombre}</td><td>${ventas}</td><td>${$fmt(ventas * p.precio)}</td></tr>`;
}).join('');

// usuarios
const usuarios = [
  ['Daniela Torres', 'daniela@gmail.com', 'alum', 'Hoy', true],
  ['Valentina Ríos', 'valen@tono.fit', 'inst', '12 ene 2026', true],
  ['Camila Duarte', 'camila@tono.fit', 'inst', '12 ene 2026', true],
  ['Paula Arango', 'paula.a@correo.com', 'alum', 'Ayer', true],
  ['Andrés Vélez', 'andres@tono.fit', 'inst', '3 feb 2026', true],
  ['Juliana Vega', 'juli.vega@correo.com', 'alum', '18 jul 2026', true],
  ['Equipo DataLab', 'soporte@tono.fit', 'admin', '5 ene 2026', true],
];
const rolTxt = { admin: 'Superadmin', inst: 'Instructor', alum: 'Alumno' };
document.getElementById('usersBody').innerHTML = usuarios.map(u => `
  <tr>
    <td><b>${u[0]}</b></td><td class="mut">${u[1]}</td>
    <td><span class="pill ${u[2]}">${rolTxt[u[2]]}</span></td>
    <td class="mut">${u[3]}</td>
    <td><span class="pill ok">Activo</span></td>
    <td>${u[2] === 'alum' ? `<button class="btn-mini" onclick="verComo('${u[0]}')">👁 Ingresar como</button>` : ''}</td>
  </tr>`).join('');

function verComo(nombre) {
  TONO.impersonar(nombre);
  if (!TONO.user) TONO.login({ nombre, email: nombre.toLowerCase().replace(/ /g, '.') + '@correo.com' });
  location.href = 'mi-entrenamiento.html';
}

// instructores
document.getElementById('instsBody').innerHTML = INSTRUCTORES.map(i => {
  const n = PROGRAMAS.filter(p => p.instructor === i.slug).length;
  return `<tr>
    <td><b>${i.nombre}</b></td><td class="mut">${i.rol}</td><td>${n}</td><td>${i.alumnos.toLocaleString('es-CO')}</td>
    <td>${$fmt(Math.round(i.alumnos * 1900))}</td>
    <td><span class="pill ${i.verificada ? 'ok' : 'pend'}">${i.verificada ? 'Verificado' : 'Pendiente'}</span></td>
    <td>${i.verificada ? '' : `<button class="btn-mini coral" onclick="this.closest('td').previousElementSibling.innerHTML='<span class=\\'pill ok\\'>Verificado</span>';this.remove();toast('✓ Instructor verificado — su perfil ya muestra la insignia')">Verificar</button>`}</td>
  </tr>`;
}).join('');

// categorías
document.getElementById('catsAdmin').innerHTML = CATS.map(c => `
  <div class="cat-row"><span class="drag">⠿</span> <b>${c.label}</b>
  <span class="mut" style="margin-left:auto;font-size:.82rem">${PROGRAMAS.filter(p => p.cat === c.id).length} programas</span></div>`).join('');

// logs
const logs = [
  ['10:41', 'v', 'VENTA', 'Daniela Torres compró «Core 21 Días» — $79.900 (tarjeta ****4242)'],
  ['10:41', 's', 'EMAIL', 'Correo de confirmación enviado a daniela@gmail.com'],
  ['10:41', 's', 'EMAIL', 'Notificación de venta enviada a Valentina Ríos'],
  ['10:38', 'u', 'REGISTRO', 'Nueva cuenta: daniela@gmail.com (magic link)'],
  ['09:52', 'v', 'VENTA', 'Paula Arango compró «Reformer en Casa» — $129.900 (Nequi)'],
  ['09:14', 'u', 'LOGIN', 'Juliana Vega inició sesión (Google)'],
  ['08:30', 's', 'BACKUP', 'Copia de seguridad diaria completada (AWS S3)'],
  ['07:02', 'u', 'SOPORTE', 'Superadmin ingresó como «Carolina Mora» para diagnóstico'],
  ['06:00', 's', 'SISTEMA', 'Renovación de certificado SSL verificada'],
];
function renderLogs(f) {
  document.getElementById('logsBody').innerHTML = logs
    .filter(l => !f || l[1] === f)
    .map(l => `<div class="log"><span class="h">23 jul · ${l[0]}</span><span class="tipo ${l[1]}">[${l[2]}]</span><span>${l[3]}</span></div>`).join('');
}
renderLogs('');
document.querySelectorAll('[data-f]').forEach(b => b.onclick = () => {
  document.querySelectorAll('[data-f]').forEach(x => x.classList.remove('coral'));
  b.classList.add('coral');
  renderLogs(b.dataset.f);
});

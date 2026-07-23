/* ============================================================
   tono. — datos demo del prototipo (sin datos reales)
   ============================================================ */

const CATS = [
  { id: 'pilates',       label: 'Pilates',        img: 'img/p-reformer.jpg' },
  { id: 'funcional',     label: 'Funcional',      img: 'img/p-funcional.jpg' },
  { id: 'fuerza',        label: 'Fuerza',         img: 'img/p-gluteos.jpg' },
  { id: 'estiramientos', label: 'Estiramientos',  img: 'img/p-movilidad.jpg' },
  { id: 'nutricion',     label: 'Nutrición',      img: 'img/p-reset.jpg' },
];

const INSTRUCTORES = [
  {
    slug: 'valentina-rios', nombre: 'Valentina Ríos', rol: 'Pilates & Core',
    cats: ['pilates'], img: 'img/valentina.jpg', handle: '@valen.pilates',
    bio: 'Instructora certificada de pilates mat y reformer con 9 años de experiencia en estudios boutique de Bogotá. Su método combina control, respiración y fuerza profunda del core para transformar tu postura desde la primera semana.',
    alumnos: 1284, rating: 4.9, resenas: 312, verificada: true,
  },
  {
    slug: 'camila-duarte', nombre: 'Camila Duarte', rol: 'Glúteos & Fuerza',
    cats: ['fuerza'], img: 'img/camila.jpg', handle: '@cami.strong',
    bio: 'Coach de fuerza especializada en tren inferior. Creadora del método Booty Camp: progresiones con banda, peso libre y técnica impecable para resultados visibles y articulaciones sanas.',
    alumnos: 2105, rating: 4.8, resenas: 528, verificada: true,
  },
  {
    slug: 'andres-velez', nombre: 'Andrés Vélez', rol: 'Funcional & HIIT',
    cats: ['funcional'], img: 'img/andres.jpg', handle: '@andresmueve',
    bio: 'Entrenador funcional certificado NSCA. Sesiones cortas, intensas y sin equipos: quema, resistencia y potencia desde tu sala. Si tienes 30 minutos, tienes entrenamiento.',
    alumnos: 967, rating: 4.9, resenas: 204, verificada: true,
  },
  {
    slug: 'sara-mendoza', nombre: 'Sara Mendoza', rol: 'Movilidad & Estiramientos',
    cats: ['estiramientos'], img: 'img/sara.jpg', handle: '@sara.flow',
    bio: 'Especialista en movilidad articular y flexibilidad. Sus rutinas de 20 minutos deshacen horas de escritorio: caderas libres, espalda feliz y un cuerpo que se mueve como debe.',
    alumnos: 731, rating: 5.0, resenas: 189, verificada: true,
  },
  {
    slug: 'laura-pineda', nombre: 'Laura Pineda', rol: 'Nutrición & Hábitos',
    cats: ['nutricion'], img: 'img/laura.jpg', handle: '@lau.nutre',
    bio: 'Nutricionista dietista U. Javeriana. Nada de dietas imposibles: planes reales con comida colombiana, guías descargables y hábitos que se quedan contigo.',
    alumnos: 542, rating: 4.9, resenas: 143, verificada: true,
  },
  {
    slug: 'julian-rojas', nombre: 'Julián Rojas', rol: 'Fuerza en casa',
    cats: ['fuerza', 'funcional'], img: 'img/julian.jpg', handle: '@julianentrena',
    bio: 'Entrenamiento de fuerza con lo que tienes en casa: bandas, mancuernas y tu propio peso. Programas progresivos para ganar músculo sin pisar un gimnasio.',
    alumnos: 418, rating: 4.7, resenas: 96, verificada: false,
  },
];

const PROGRAMAS = [
  {
    slug: 'reformer-en-casa', titulo: 'Pilates Reformer en Casa', instructor: 'valentina-rios',
    cat: 'pilates', nivel: 'Intermedio', semanas: 6, sesiones: 24, min: 35,
    precio: 129900, img: 'img/p-reformer.jpg', rating: 4.9, alumnos: 486, destacado: true,
    desc: 'Toda la precisión del reformer adaptada al mat. Seis semanas de control, alineación y fuerza profunda con solo una banda y tu colchoneta.',
    incluye: ['24 clases en video HD', 'Guía de posturas en PDF', 'Calendario semanal', 'Acceso de por vida'],
    material: 'Guía de alineación y posturas (PDF, 18 págs.)',
  },
  {
    slug: 'core-21', titulo: 'Core 21 Días', instructor: 'valentina-rios',
    cat: 'pilates', nivel: 'Principiante', semanas: 3, sesiones: 21, min: 20,
    precio: 79900, img: 'img/p-core21.jpg', rating: 4.8, alumnos: 812, destacado: true,
    desc: 'Veintiún días, veinte minutos diarios. El reto de core más querido de la plataforma: abdomen fuerte, espalda protegida y postura nueva.',
    incluye: ['21 clases guiadas', 'Reto imprimible', 'Comunidad privada', 'Acceso de por vida'],
    material: 'Calendario del reto (PDF)',
  },
  {
    slug: 'booty-camp', titulo: 'Booty Camp · 8 Semanas', instructor: 'camila-duarte',
    cat: 'fuerza', nivel: 'Intermedio', semanas: 8, sesiones: 32, min: 45,
    precio: 189000, img: 'img/p-bootycamp.jpg', rating: 4.9, alumnos: 1043, destacado: true,
    desc: 'El programa insignia de Camila: progresión completa de glúteos con banda y peso libre. Técnica, volumen y resultados medibles semana a semana.',
    incluye: ['32 sesiones en video', 'Guía de cargas y RIR', 'Plan de progresión', 'Registro de medidas'],
    material: 'Guía de progresión de cargas (PDF, 24 págs.)',
  },
  {
    slug: 'gluteos-de-acero', titulo: 'Glúteos de Acero', instructor: 'camila-duarte',
    cat: 'fuerza', nivel: 'Principiante', semanas: 4, sesiones: 16, min: 30,
    precio: 99900, img: 'img/p-gluteos.jpg', rating: 4.8, alumnos: 655, destacado: false,
    desc: 'La puerta de entrada al método de Camila. Cuatro semanas de fundamentos: activación, técnica de sentadilla y primeras progresiones con banda.',
    incluye: ['16 clases en video', 'Guía de activación', 'Acceso de por vida'],
    material: 'Guía de activación de glúteo (PDF)',
  },
  {
    slug: 'hiit-quema-30', titulo: 'HIIT Quema 30', instructor: 'andres-velez',
    cat: 'funcional', nivel: 'Avanzado', semanas: 4, sesiones: 20, min: 30,
    precio: 89900, img: 'img/p-hiit30.jpg', rating: 4.9, alumnos: 534, destacado: true,
    desc: 'Treinta minutos que se sienten como sesenta. Intervalos de alta intensidad sin equipos, con calentamiento y enfriamiento guiados en cada sesión.',
    incluye: ['20 sesiones HIIT', 'Test de nivel inicial', 'Playlist sugerida', 'Acceso de por vida'],
    material: 'Test de condición física (PDF)',
  },
  {
    slug: 'funcional-sin-equipos', titulo: 'Funcional Sin Equipos', instructor: 'andres-velez',
    cat: 'funcional', nivel: 'Principiante', semanas: 6, sesiones: 18, min: 35,
    precio: 84900, img: 'img/p-funcional.jpg', rating: 4.7, alumnos: 389, destacado: false,
    desc: 'Fuerza, cardio y coordinación usando solo tu peso corporal. El punto de partida perfecto si llevas tiempo sin entrenar.',
    incluye: ['18 clases progresivas', 'Guía de técnica', 'Acceso de por vida'],
    material: 'Guía de técnica básica (PDF)',
  },
  {
    slug: 'movilidad-total', titulo: 'Movilidad Total', instructor: 'sara-mendoza',
    cat: 'estiramientos', nivel: 'Todos los niveles', semanas: 4, sesiones: 20, min: 20,
    precio: 69900, img: 'img/p-movilidad.jpg', rating: 5.0, alumnos: 447, destacado: true,
    desc: 'Veinte minutos diarios para deshacer el daño de la silla. Caderas, columna y hombros libres con rutinas que caben en cualquier agenda.',
    incluye: ['20 rutinas guiadas', 'Rutina exprés de escritorio', 'Acceso de por vida'],
    material: 'Rutina exprés de oficina (PDF)',
  },
  {
    slug: 'flex-and-flow', titulo: 'Flex & Flow', instructor: 'sara-mendoza',
    cat: 'estiramientos', nivel: 'Intermedio', semanas: 5, sesiones: 15, min: 30,
    precio: 74900, img: 'img/p-flexflow.jpg', rating: 4.9, alumnos: 284, destacado: false,
    desc: 'Secuencias fluidas que combinan estiramiento activo y respiración. Para quienes ya se mueven y quieren llegar más lejos, sin dolor.',
    incluye: ['15 secuencias en video', 'Guía de respiración', 'Acceso de por vida'],
    material: 'Guía de respiración (PDF)',
  },
  {
    slug: 'reset-nutricional', titulo: 'Reset Nutricional · 4 Semanas', instructor: 'laura-pineda',
    cat: 'nutricion', nivel: 'Todos los niveles', semanas: 4, sesiones: 12, min: 15,
    precio: 119900, img: 'img/p-reset.jpg', rating: 4.9, alumnos: 371, destacado: true,
    desc: 'Un mes para ordenar tu alimentación sin dietas extremas: mercado inteligente, porciones reales y recetas colombianas de 20 minutos.',
    incluye: ['12 videoclases', 'Recetario de 40 recetas', 'Lista de mercado semanal', 'Plantilla de hábitos'],
    material: 'Recetario + lista de mercado (PDF, 32 págs.)',
  },
  {
    slug: 'fuerza-con-bandas', titulo: 'Fuerza en Casa con Bandas', instructor: 'julian-rojas',
    cat: 'fuerza', nivel: 'Principiante', semanas: 6, sesiones: 18, min: 40,
    precio: 49900, img: 'img/p-bandas.jpg', rating: 4.7, alumnos: 218, destacado: false,
    desc: 'Un set de bandas y seis semanas de plan. Progresiones de empuje, tracción y pierna para construir músculo real en tu sala.',
    incluye: ['18 sesiones en video', 'Guía de bandas por color', 'Acceso de por vida'],
    material: 'Guía de resistencias (PDF)',
  },
];

/* Lecciones demo por programa (generadas por semana) */
function leccionesDe(p) {
  const nombres = {
    'reformer-en-casa': ['Fundamentos y respiración', 'Serie abdominal clásica', 'Alineación de columna', 'Trabajo de piernas con banda'],
    'core-21': ['Activación profunda', 'Plancha y variaciones', 'Oblicuos y rotación', 'Core en movimiento'],
    'booty-camp': ['Activación y técnica', 'Hip thrust: progresión', 'Volumen y tempo', 'Semana de carga'],
    default: ['Sesión de apertura', 'Progresión y técnica', 'Intensidad y control', 'Sesión de cierre'],
  };
  const base = nombres[p.slug] || nombres.default;
  const perWeek = Math.max(2, Math.round(p.sesiones / p.semanas));
  const semanas = [];
  let n = 1;
  for (let s = 1; s <= p.semanas; s++) {
    const lecciones = [];
    for (let i = 0; i < perWeek && n <= p.sesiones; i++, n++) {
      lecciones.push({
        id: 'l' + n, num: n,
        titulo: 'Clase ' + n + ' · ' + base[i % base.length],
        dur: p.min + (i % 3) - 1 + ' min',
      });
    }
    semanas.push({ semana: s, lecciones });
  }
  return semanas;
}

/* Reseñas demo */
const RESENAS = [
  { n: 'Mariana G.', t: 'Llevaba dos años pagando gimnasio sin ir. Con esto entreno 4 veces por semana desde mi sala. La mejor inversión.', r: 5 },
  { n: 'Carolina P.', t: 'Las clases se sienten como si la instructora estuviera contigo. Explica cada postura y corrige antes de que te equivoques.', r: 5 },
  { n: 'Juan David R.', t: 'Compré con Nequi en literalmente un minuto. El acceso llegó de inmediato al correo.', r: 5 },
  { n: 'Alejandra M.', t: 'Lo uso desde el celular en las mañanas y desde el televisor los fines de semana. Funciona perfecto en los dos.', r: 4 },
];

/* ---------- helpers ---------- */
const $fmt = (v) => '$' + v.toLocaleString('es-CO');
const findP = (slug) => PROGRAMAS.find((p) => p.slug === slug);
const findI = (slug) => INSTRUCTORES.find((i) => i.slug === slug);
const catLabel = (id) => (CATS.find((c) => c.id === id) || {}).label || id;

/* ---------- store (localStorage compartido) ---------- */
const TONO = {
  read(k, d) { try { return JSON.parse(localStorage.getItem('tono_' + k)) ?? d; } catch { return d; } },
  write(k, v) { localStorage.setItem('tono_' + k, JSON.stringify(v)); },

  get user() { return this.read('user', null); },
  login(u) { this.write('user', u); },
  logout() { localStorage.removeItem('tono_user'); localStorage.removeItem('tono_impersonando'); },

  get compras() { return this.read('compras', []); },
  comprar(slug) {
    const c = this.compras;
    if (!c.includes(slug)) { c.push(slug); this.write('compras', c); }
  },
  tiene(slug) { return this.compras.includes(slug); },

  progreso(slug) { return this.read('prog_' + slug, []); },
  completar(slug, lid) {
    const p = this.progreso(slug);
    if (!p.includes(lid)) { p.push(lid); this.write('prog_' + slug, p); }
  },

  get notifs() { return this.read('notifs', []); },
  notificar(titulo, cuerpo) {
    const n = this.notifs;
    n.unshift({ titulo, cuerpo, fecha: new Date().toLocaleString('es-CO', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) });
    this.write('notifs', n.slice(0, 12));
  },

  get impersonando() { return this.read('impersonando', null); },
  impersonar(nombre) { this.write('impersonando', nombre); },
  dejarImpersonar() { localStorage.removeItem('tono_impersonando'); },
};

# Ivan Rios Raya - Hospital Dolores

## Sistema de Gestión Hospitalaria

### 🌐 URL de Despliegue
**GitHub Pages:** [https://ivanrr462.github.io/Proyecto-Hospitalito/](https://ivanrr462.github.io/Proyecto-Hospitalito/)

#### Módulos del Sistema:
- **Página Principal:** [https://ivanrr462.github.io/Proyecto-Hospitalito/home.html](https://ivanrr462.github.io/Proyecto-Hospitalito/home.html)
- **Preinscripciones:**
  - [Lista de Citas](https://ivanrr462.github.io/Proyecto-Hospitalito/preinscripciones/citas-lista.html)
  - [Detalle de Cita](https://ivanrr462.github.io/Proyecto-Hospitalito/preinscripciones/cita-detalle.html)
  - [Historia Clínica](https://ivanrr462.github.io/Proyecto-Hospitalito/preinscripciones/historia-clinica.html)
  - [Buscar Pacientes](https://ivanrr462.github.io/Proyecto-Hospitalito/preinscripciones/buscar-pacientes.html)
- **Enfermería:**
  - [Dashboard](https://ivanrr462.github.io/Proyecto-Hospitalito/enfermeria/dist/index.html)
  - [Mapa de Camas](https://ivanrr462.github.io/Proyecto-Hospitalito/enfermeria/dist/pages/mapa-camas.html)
  - [Hoja de Medicación](https://ivanrr462.github.io/Proyecto-Hospitalito/enfermeria/dist/pages/hoja-medicacion.html)
- **Urgencias:**
  - [Dashboard](https://ivanrr462.github.io/Proyecto-Hospitalito/urgencias/dist/index.html)
  - [Registro de Pacientes](https://ivanrr462.github.io/Proyecto-Hospitalito/urgencias/dist/registro.html)
  - [Triaje](https://ivanrr462.github.io/Proyecto-Hospitalito/urgencias/dist/triaje.html)
  - [Listado de Pacientes](https://ivanrr462.github.io/Proyecto-Hospitalito/urgencias/dist/listado-pacientes.html)

---

## 🛠️ Tecnologías Utilizadas

### Módulo de Preinscripciones
- **HTML5** + **CSS3** (Vanilla)
- Arquitectura CSS modular:
  - `styles/core/` - Reset, variables, layout base
  - `styles/components/` - Componentes reutilizables (botones, tarjetas, formularios, tablas)
  - `styles/pages/` - Estilos específicos de cada página

### Módulo de Enfermería
- **Vite 7.2.5** (rolldown-vite)
- **Sass/SCSS** (Dart Sass 1.94.2)
- Estructura modular con partials:
  - `_variables.scss` - Paleta de colores y tipografía
  - `_mixins.scss` - Mixins reutilizables
  - `_layout.scss` - Grid y contenedores
  - `_components.scss` - Componentes (header, cards, buttons)
  - `_pages.scss` - Estilos específicos de página

### Módulo de Urgencias
- **Vite 7.2.5** (rolldown-vite)
- **Tailwind CSS v4.1.17** (@tailwindcss/vite)
- Sintaxis Tailwind v4: `@import "tailwindcss"`
- Sistema de triaje Manchester con 5 niveles de prioridad

### Diseño Global
- **Tipografía:** Ubuntu (300, 400, 500, 700) - Google Fonts
- **Paleta de colores:**
  - Primario: `#0D3B66` (azul oscuro)
  - Secundario: `#6FA3D8` (azul claro)
  - Primario hover: `#0b3156`
  - Texto: `#06233f`
- **Diseño responsive** y consistente en todos los módulos
- Hero sections con gradientes
- Iconos con emojis para UX mejorada

---

## 📁 Estructura del Proyecto

```
Hospitalito/
│
├── index.html                      # Página de login
├── home.html                       # Dashboard principal
├── guia-estilos.html              # Guía de estilos del proyecto
├── README.md                      # Este archivo
├── .nojekyll                      # Configuración para GitHub Pages
│
├── styles/                        # Estilos globales (Preinscripciones)
│   ├── main.css                   # CSS principal
│   ├── core/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── layout.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── forms.css
│   │   ├── header.css
│   │   ├── tabla.css
│   │   ├── historial.css
│   │   └── resultados.css
│   └── pages/
│       ├── login.css
│       ├── home.css
│       ├── busqueda.css
│       ├── citas.css
│       ├── cita-detalle.css
│       └── historia.css
│
├── preinscripciones/              # Módulo de Preinscripciones (CSS Vanilla)
│   ├── citas-lista.html
│   ├── cita-detalle.html
│   ├── historia-clinica.html
│   └── buscar-pacientes.html
│
├── enfermeria/                    # Módulo de Enfermería (Vite + Sass)
│   ├── index.html                 # Archivo fuente
│   ├── package.json
    ├── vite.config.js            # Base: /Proyecto-Hospitalito/enfermeria/dist/
│   ├── main.js
│   ├── styles/
│   │   ├── main.scss
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _layout.scss
│   │   ├── _components.scss
│   │   └── _pages.scss
│   ├── pages/
│   │   ├── mapa-camas.html
│   │   └── hoja-medicacion.html
│   └── dist/                      # Build de producción (GitHub Pages)
│       ├── index.html
│       ├── assets/
│       │   ├── main-BHRx63GR.css
│       │   └── main-Bqa0zGVv.js
│       └── pages/
│           ├── mapa-camas.html
│           └── hoja-medicacion.html
│
└── urgencias/                     # Módulo de Urgencias (Vite + Tailwind v4)
    ├── index.html                 # Archivo fuente (Dashboard)
    ├── registro.html              # Formulario de registro
    ├── triaje.html                # Sistema de triaje Manchester
    ├── listado-pacientes.html     # Tabla de pacientes
    ├── package.json
    ├── vite.config.js            # Base: /Proyecto-Hospitalito/urgencias/dist/
    ├── tailwind.config.js        # Configuración Tailwind v4
    ├── src/
    │   ├── main.js
    │   └── style.css              # @import "tailwindcss"
    └── dist/                      # Build de producción (GitHub Pages)
        ├── index.html
        ├── registro.html
        ├── triaje.html
        ├── listado-pacientes.html
        ├── vite.svg
        └── assets/
            ├── main-ktnkTQdP.css  # Tailwind compilado
            └── main-CDFiH7rZ.js
```

---

## 🚀 Instrucciones de Desarrollo

### Módulo de Enfermería

```bash
# Instalar dependencias
cd enfermeria
npm install

# Servidor de desarrollo
npm run dev

# Build para producción (genera carpeta dist/)
npm run build
```

### Módulo de Urgencias

```bash
# Instalar dependencias
cd urgencias
npm install

# Servidor de desarrollo con Tailwind
npm run dev

# Build para producción (genera carpeta dist/)
npm run build
```

### Visualizar el proyecto completo localmente

```bash
# Desde la raíz del proyecto
npx http-server -p 8000

# Abre en el navegador:
# http://127.0.0.1:8000/home.html
```

---

## 📦 Despliegue en GitHub Pages

El proyecto está configurado para desplegarse desde la rama `main` en la carpeta raíz:

1. **Repositorio:** `Ivanrr462/Hospitalito`
2. **Rama:** `main`
3. **Carpeta:** `/` (root)
4. **Archivo `.nojekyll`** presente para servir assets correctamente

### Rutas configuradas:
- **Enfermería:** `base: '/Proyecto-Hospitalito/enfermeria/dist/'`
- **Urgencias:** `base: '/Proyecto-Hospitalito/urgencias/dist/'`
- Todos los enlaces de navegación usan rutas absolutas desde `/Proyecto-Hospitalito/`

---

## Notas para el profesor

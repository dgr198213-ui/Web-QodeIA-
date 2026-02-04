# QODEIA - Web Oficial

Un espacio para crear, conectar y crecer juntos.

## 🚀 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Diseño moderno y responsive
- **Framer Motion** - Animaciones suaves

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🌐 Despliegue en Vercel

### Opción 1: Desde la interfaz de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Crea una cuenta o inicia sesión
3. Click en "Add New Project"
4. Importa tu repositorio de GitHub/GitLab/Bitbucket
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Click en "Deploy"

### Opción 2: Desde la terminal (Vercel CLI)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Para producción
vercel --prod
```

### Configuración del Dominio

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Añade tu dominio `qodeia.com`
4. Sigue las instrucciones para configurar los registros DNS

**Registros DNS necesarios:**
```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

## 📁 Estructura del Proyecto

```
qodeia-web/
├── app/
│   ├── page.tsx              # Página de inicio
│   ├── admin/
│   │   └── mcp/
│   │       └── page.tsx      # NUEVO: Panel de Administración MCP
│   ├── proyectos/
│   │   └── page.tsx          # Página de proyectos
│   ├── comunidad/
│   │   └── page.tsx          # Página de comunidad
│   ├── sobre-qodeia/
│   │   └── page.tsx          # Sobre QODEIA
│   ├── apoya/
│   │   └── page.tsx          # Página de apoyo
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Estilos globales
├── components/
│   ├── Header.tsx            # Navegación
│   └── Footer.tsx            # Pie de página
├── public/                   # Archivos estáticos
└── package.json
```

## 🎨 Personalización

### Colores de marca (Tailwind Config)

Los colores de QODEIA están configurados en `tailwind.config.js`:

- **Azul QODEIA**: `qodeia-blue-500` (#0087b1)
- **Verde Menta**: `qodeia-mint-500` (#00cd91)
- **Azul Oscuro**: `qodeia-dark-500` (#192b37)

### Fuentes

- **Títulos**: Outfit (Google Fonts)
- **Texto**: Inter (Google Fonts)

## 📝 Contenido

Para actualizar los textos, edita directamente los archivos `.tsx` en cada página.

### Añadir nuevos proyectos

Edita el array `projects` en `app/proyectos/page.tsx`:

```tsx
const projects = [
  {
    id: 'nuevo-proyecto',
    title: 'Nombre del Proyecto',
    icon: '🚀',
    status: 'En desarrollo',
    statusColor: 'mint',
    description: 'Descripción breve...',
    story: 'Historia del proyecto...',
    features: ['Feature 1', 'Feature 2'],
    link: 'https://tu-proyecto.com',
  },
]
```

## 🔧 Comandos útiles

```bash
# Limpiar caché de Next.js
rm -rf .next

# Verificar errores de TypeScript
npm run lint

# Formatear código
npx prettier --write .
```

## 📞 Contacto

- **Email**: qodeia_info@gmail.com
- **Ubicación**: Alcalá de Henares, España

## 🔌 Administración MCP

Se ha integrado un **Panel de Administración MCP** para gestionar la base de conocimiento de QodeIA (NotebookLM).

- **Acceso**: `/admin/mcp`
- **Funcionalidades**: Autenticación OAuth con Google, configuración de cuadernos, monitoreo de estadísticas y toggle de activación.

## 📄 Licencia

Este proyecto es de código abierto y está disponible para toda la comunidad QODEIA.

---

**Creado con 💛 desde Alcalá de Henares**

*Crecemos juntos, siempre* ✨

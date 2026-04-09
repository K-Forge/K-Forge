<p align="center">
	<img src="https://capsule-render.vercel.app/api?type=waving&height=180&text=K-Forge&fontAlign=50&fontAlignY=35&color=8B5CF6&fontColor=ffffff&desc=Web%20oficial%20del%20club%20universitario%20de%20desarrollo%20de%20software&descAlign=50&descAlignY=58&animation=twinkling" alt="K-Forge Banner" />
</p>

<p align="center">
	<img src="https://img.shields.io/badge/Estado-Activo-8B5CF6?style=for-the-badge" alt="Estado activo" />
	<img src="https://img.shields.io/badge/Angular%2021-8B5CF6?style=for-the-badge&logo=angular&logoColor=white" alt="Angular 21" />
	<img src="https://img.shields.io/badge/Tailwind%20CSS%203-8B5CF6?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
	<img src="https://img.shields.io/badge/Bun-8B5CF6?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
	<img src="https://img.shields.io/badge/Vercel-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## Descripción

Este repositorio corresponde exclusivamente a la **web oficial de K-Forge** (landing/app institucional).
No representa el código de todos los proyectos del club: aquí vive solo la aplicación web pública desplegada en Vercel.

<p align="center">
	<a href="https://kforge-home.vercel.app/" target="_blank" rel="noopener noreferrer">
		<img src="https://img.shields.io/badge/%F0%9F%9A%80%20Ir%20a%20la%20web%20oficial%20%28landing%20page%29-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white&labelColor=8B5CF6" alt="Ir a la web oficial (landing page) de K-Forge" />
	</a>
</p>

### Objetivo del sitio

- Presentar la identidad y propuesta de valor de K-Forge.
- Comunicar misión, enfoque y cultura de colaboración.
- Mostrar la estructura del equipo y canales de contacto.

### Composición funcional (secciones actuales)

1. **Inicio (Hero):** presentación del club y accesos principales.
2. **Nosotros:** misión, qué hacemos y por qué unirte.
3. **Proyectos:** vitrina de repositorios destacados desde GitHub.
4. **Equipo:** miembros que impulsan el ecosistema K-Forge.
5. **Contacto:** formulario para unirse o colaborar.

### Arquitectura de la app web

- **Framework:** Angular 21 con componentes standalone.
- **Estado local:** Signals (`signal`, `computed`) para UI reactiva.
- **UI y estilos:** Tailwind CSS 3 con tokens del proyecto.
- **Internacionalización:** servicio propio con soporte `es` y `en`.
- **Integración externa:** consumo de GitHub API para datos públicos de repositorios.
- **Deploy:** Vercel (entorno productivo de la landing/app).

### Organización del código

- `src/app/components/`: secciones visuales standalone de la landing.
- `src/app/services/`: i18n, integraciones y lógica reutilizable de aplicación.
- `src/app/app.ts`: composición principal de secciones y navegación.
- `src/styles.css`: estilos globales y base visual compartida.
- `public/`: assets estáticos públicos.

---

## Stack técnico

**Angular 21** (standalone components + signals) • **Tailwind CSS 3** • **Bun** • **Vercel**

---

## Acceso

Repositorio público para consulta y referencia técnica.

> Mantenimiento exclusivo de miembros autorizados de K-Forge.

## Licencia

<p align="center">
	<a href="LICENSE">
		<img src="https://img.shields.io/badge/License-Proprietary-8B5CF6?style=for-the-badge" alt="All Rights Reserved" />
	</a>
</p>

Proyecto bajo [Proprietary License](LICENSE) — K-Forge 2026.

El código es visible para consulta, pero no se permite su reutilización,
modificación, copia ni distribución sin autorización previa y por escrito de
K-Forge.

<p align="center">
	<img src="https://capsule-render.vercel.app/api?type=waving&height=110&section=footer&color=8B5CF6" alt="K-Forge Footer" width="100%" />
</p>

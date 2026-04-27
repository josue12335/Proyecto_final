# 🎓 Proyecto Final - Portafolio Académico

Tu portafolio académico conectado directamente a GitHub. Visualiza todo lo que subes semana por semana.

## 📊 Características

✅ **16 semanas** organizadas en 4 módulos  
✅ **Sincronización automática** con GitHub  
✅ **Visor de archivos** integrado (HTML, imágenes, PDF, código, video)  
✅ **Progreso visual** - barra de avance  
✅ **Responsive** - funciona en móvil y desktop  
✅ **Sin dependencias** - HTML puro + API de GitHub  

## 🚀 Primeros Pasos

### 1. Clona este repositorio

```bash
git clone https://github.com/josue12335/Proyecto_final.git
cd Proyecto_final
```

### 2. Crea las carpetas de semanas

```bash
mkdir semana{1..16}
```

O manualmente, crea 16 carpetas llamadas `semana1`, `semana2`, etc.

### 3. Sube el archivo HTML a la raíz

El archivo `Proyecto_final.html` debe estar en la raíz del repositorio:
```
josue12335.github.io/
├── Proyecto_final.html
├── semana1/
├── semana2/
├── ... semana16/
└── README.md
```

### 4. Configura GitHub Pages (si no está activo)

1. Ve a Settings → Pages
2. Selecciona "Deploy from a branch"
3. Branch: `main`, folder: `/ (root)`
4. Guarda

### 5. Accede a la página

```
https://josue12335.github.io/Proyecto_final.html
```

## 📁 Estructura de Carpetas

Cada carpeta `semanaX` puede contener múltiples archivos:

```
semana1/
  ├── index.html        (se renderiza)
  ├── style.css
  ├── script.js
  └── imagen.png

semana2/
  ├── documento.pdf
  ├── resumen.md
  └── datos.json
```

## 📤 Cómo Subir Archivos

### Desde Terminal
```bash
# Copia tu archivo a la carpeta
cp mi-trabajo.html semana1/

# Sube los cambios
git add semana1/mi-trabajo.html
git commit -m "Semana 1: Trabajo completado"
git push origin main
```

### Desde GitHub.com
1. Abre tu repositorio en GitHub
2. Ve a la carpeta `semanaX`
3. Haz clic en "Add file" → "Upload files"
4. Arrastra o selecciona tus archivos
5. Haz commit

**⏱️ La página se actualiza automáticamente en 1-2 minutos**

## 🎨 Tipos de Archivo Soportados

| Tipo | Extensión | Resultado |
|------|-----------|-----------|
| HTML | `.html`, `.htm` | Se renderiza completamente |
| Imágenes | `.png`, `.jpg`, `.gif`, `.svg` | Se visualiza |
| PDF | `.pdf` | Visor de PDF |
| Código | `.js`, `.py`, `.css`, etc. | Código formateado |
| Video | `.mp4`, `.webm` | Reproductor HTML5 |
| Texto | `.txt`, `.md` | Texto plano |

## 💡 Consejos y Mejores Prácticas

✓ Mantén los nombres de archivo **sin espacios**  
✓ Usa nombres descriptivos: `semana1-introduccion.html`  
✓ Cada semana puede tener 1 o múltiples archivos  
✓ Archivos HTML complejos: asegúrate que tengan rutas relativas  
✓ Los cambios pueden tardar 1-2 minutos en aparecer  

## 🔧 Personalización

Para cambiar el color, logo o textos, edita el `<style>` en `Proyecto_final.html`

### Variables CSS principales:
```css
--accent: #C17F3F;        /* Color principal */
--text: #2C1F0E;          /* Texto */
--white: #fff;            /* Fondo */
```

## ❓ Solución de Problemas

**"No veo mis archivos subidos"**
- Espera 2 minutos para que GitHub actualice la API
- Verifica que la carpeta se llame exactamente `semanaX` (sin espacios)
- Abre la consola (F12) para ver errores

**"Mi HTML no se renderiza"**
- Verifica que el archivo sea `.html` (no `.txt`)
- Asegúrate de que todas las rutas sean relativas o absolutas a GitHub

**"Veo error de CORS"**
- Es normal - los archivos se cargan desde GitHub Raw
- Solo ocurre con ciertos tipos de archivo

## 📚 Recursos

- [GitHub Docs](https://docs.github.com/es)
- [GitHub Pages Docs](https://pages.github.com)
- [API de GitHub](https://docs.github.com/es/rest)

---

**Última actualización**: 27 de Abril, 2025  
**Autor**: Josue  
**Repositorio**: https://github.com/josue12335/Proyecto_final

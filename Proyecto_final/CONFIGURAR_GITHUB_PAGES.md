# ⚙️ CONFIGURACIÓN DE GITHUB PAGES

## ¿QUÉ ES GITHUB PAGES?

GitHub Pages es un servicio que convierte tu repositorio en una página web.

Tu repositorio: `https://github.com/josue12335/Proyecto_final`  
Será visible en: `https://josue12335.github.io/Proyecto_final.html`

---

## 🔧 PASOS PARA CONFIGURAR GITHUB PAGES

### Paso 1: Ir a Configuración
1. Ve a tu repositorio: https://github.com/josue12335/Proyecto_final
2. Haz clic en ⚙️ **Settings** (arriba a la derecha)
3. Busca "Pages" en el menú izquierdo

### Paso 2: Configurar la Rama
En la sección "GitHub Pages":

1. **Source**: Selecciona "Deploy from a branch"
2. **Branch**: Selecciona `main` (o `master` si es más antigua)
3. **Folder**: Selecciona `/ (root)` - IMPORTANTE
4. Haz clic en **Save**

Debería verse así:
```
Source: Deploy from a branch
Branch: main / (root)
```

### Paso 3: Esperar
GitHub necesita **5-10 minutos** para activar la página.

---

## ✅ VERIFICAR QUE FUNCIONA

Después de 5-10 minutos:

1. Ve a: `https://josue12335.github.io/`
   - Si ves un listado de carpetas, GitHub Pages está activado ✓

2. Ve a: `https://josue12335.github.io/Proyecto_final.html`
   - Si ves tu portafolio, ¡TODO FUNCIONA! ✓

---

## 🐛 SI NO FUNCIONA

### Opción 1: Verifica la rama
1. Ve a Settings → Code and automation → Actions
2. Busca un workflow llamado "pages build and deployment"
3. Si hay un ❌ error, haz clic para ver detalles

### Opción 2: Verifica el archivo
1. Asegúrate que `Proyecto_final.html` esté en la **raíz**
2. No esté en una carpeta
3. El nombre sea exacto (mayúsculas y todo)

### Opción 3: Limpia la caché
- Abre en navegador privado/incógnito
- O presiona Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### Opción 4: Espera más
A veces tarda 15-20 minutos. Espera y recarga.

---

## 📝 ARCHIVO CORRECTO EN LA RAÍZ

**✓ CORRECTO:**
```
github.com/josue12335/Proyecto_final/
├── Proyecto_final.html    ← En la raíz
├── README.md
├── semana1/
└── ...
```

**✗ INCORRECTO:**
```
github.com/josue12335/Proyecto_final/
├── src/
│   └── Proyecto_final.html    ← NO aquí
├── README.md
└── ...
```

---

## 🔄 CICLO DE ACTUALIZACIÓN

Cada vez que haces `git push`:

1. Subes archivos a GitHub (instantáneo)
2. GitHub Pages detecta cambios (1-2 minutos)
3. Genera la página (30 segundos)
4. La página se actualiza en el navegador

**Total: 2-3 minutos**

---

## 📊 ESTADO DE DEPLOYMENT

Para ver el estado de tu deployment:

1. Ve a tu repositorio
2. Busca el ícono 🟢 junto a tu último commit
3. Haz clic en él para ver detalles
4. Si ves ✅ "deployment successful", ¡está listo!

---

## 🆘 CONTACTO Y AYUDA

Si GitHub Pages no funciona:

1. **Verificar estado de GitHub**: https://www.githubstatus.com
2. **Documentación oficial**: https://pages.github.com
3. **Foro de GitHub**: https://github.community

---

## 🎯 RESUMEN

| Elemento | Valor |
|----------|-------|
| Repositorio | `josue12335/Proyecto_final` |
| Rama | `main` |
| Carpeta | `/ (root)` |
| Archivo | `Proyecto_final.html` |
| URL | `https://josue12335.github.io/Proyecto_final.html` |
| Tiempo de espera | 5-10 minutos |
| Actualización | 2-3 minutos después de push |

---

Una vez configurado, solo necesitas subir archivos a las carpetas `semanaX` y todo se actualizará automáticamente. ✨

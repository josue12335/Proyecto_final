# 📊 DIAGRAMA DEL SISTEMA

## 🔄 Cómo funciona todo

```
┌─────────────────────────────────────────────────────────────┐
│                      TU PORTAFOLIO                          │
│      https://josue12335.github.io/Proyecto_final.html       │
└─────────────────────────────────────────────────────────────┘
                           ▲
                           │ Se actualiza
                           │ automáticamente
                           │ cada 2-3 min
                           │
                ┌──────────┴──────────┐
                │                     │
        Detecta carpetas        Carga archivos
        semana1-16              desde GitHub
                │                     │
                └──────────┬──────────┘
                           │
                           ▼
            ┌─────────────────────────────────┐
            │    GITHUB REPOSITORY            │
            │ josue12335/Proyecto_final       │
            └─────────────────────────────────┘
                    │         │        │
        ┌───────────┤         ├────────┴───────────┐
        │           │         │                    │
        ▼           ▼         ▼                    ▼
    semana1/    semana2/   semana3/   ...    semana16/
     index.html  script.js  documento.pdf
     imagen.png  datos.json
```

---

## 📁 Estructura en GitHub

```
github.com/josue12335/Proyecto_final
│
├─ Proyecto_final.html     ← Página principal (RAÍZ)
├─ README.md
├─ COMIENZA_AQUI.md
├─ GUIA_RAPIDA.md
├─ CHECKLIST.md
├─ ... (otros archivos de documentación)
│
└─ Carpetas de semanas:
    ├─ semana1/
    │   ├─ index.html
    │   ├─ imagen.png
    │   └─ script.js
    │
    ├─ semana2/
    │   └─ proyecto.html
    │
    ├─ semana3/
    │   └─ documento.pdf
    │
    └─ ... semana16/
```

---

## 🔄 Flujo de Trabajo Semanal

```
┌──────────────────┐
│  Creas contenido │
│ (mi-archivo.html)│
└────────┬─────────┘
         │
         ▼
┌──────────────────────────┐
│ Copias a carpeta semanaX │
│ cp archivo semana5/      │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────┐
│  Haces Git Commit        │
│  git add .               │
│  git commit -m "..."     │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────┐
│  Haces Git Push          │
│  git push origin main    │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────┐
│ GitHub procesa cambios   │
│   (1 minuto)             │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────┐
│ Tu portafolio se         │
│ actualiza automáticamente │
│   (2 minutos)            │
└────────┬─────────────────┘
         │
         ▼
┌──────────────────────────┐
│ ✅ Recarga la página     │
│ ¡VES TU CONTENIDO!       │
└──────────────────────────┘
```

---

## 🎯 4 MÓDULOS × 16 SEMANAS

```
MÓDULO I                MÓDULO II               MÓDULO III              MÓDULO IV
Semanas 1-4            Semanas 5-8             Semanas 9-12            Semanas 13-16

Week 1 ✓ →            Week 5 ✓ →              Week 9 ✓ →              Week 13 ✓ →
Week 2 ✓ →            Week 6 ✓ →              Week 10 ✓ →             Week 14 ✓ →
Week 3 ○ →            Week 7 ○ →              Week 11 ○ →             Week 15 ○ →
Week 4 ○ →            Week 8 ○ →              Week 12 ○ →             Week 16 ○ →

✓ = Con archivos       ○ = Sin archivos
```

---

## 📊 Dashboard / Barra de Progreso

```
┌─────────────────────────────────────────────────────┐
│ Progreso general                              25%   │
│ ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
│ 4 de 16 semanas con contenido                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ MÓDULO I (Semanas 1-4)                              │
├─────────────────────────────────────────────────────┤
│                                                      │
│ Semana 1  [3 archivos]  📅 27 Abr    Ver archivos │
│ Semana 2  [2 archivos]  📅 26 Abr    Ver archivos │
│ Semana 3  [0 archivos]               Ver archivos │
│ Semana 4  [0 archivos]               Ver archivos │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 🖥️ Visor de Archivos

```
┌─────────────────────────────────────────────────────┐
│ josue12335/Proyecto_final · index.html   │Previo│Cod│
├─────────────────────────────────────────────────────┤
│  Archivos:  [index.html] [style.css] [script.js]   │
├─────────────────────────────────────────────────────┤
│                                                      │
│                    RENDERIZADO HTML                 │
│                                                      │
│  ┌──────────────────────────────────────────────┐  │
│  │ 🎓 Semana 1: Introducción al Proyecto        │  │
│  │ Contenido renderizado desde GitHub           │  │
│  │ ...                                          │  │
│  └──────────────────────────────────────────────┘  │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 🔗 API de GitHub

```
Tu página (Proyecto_final.html)
        │
        ├─→ API de GitHub
        │   https://api.github.com/repos/
        │   josue12335/Proyecto_final/
        │   contents/semana1
        │
        ├─→ Obtiene lista de archivos
        │   - name: "index.html"
        │   - size: 2048
        │   - download_url: "..."
        │
        └─→ Descarga archivos desde
            https://raw.githubusercontent.com/
            josue12335/Proyecto_final/main/
            semana1/index.html
```

---

## 🎨 Flujo de Renderizado

```
ARCHIVO EN GITHUB          TIPO              RESULTADO EN VISOR

index.html                 HTML              → Se renderiza completo
imagen.png                 Imagen            → Se muestra como imagen
documento.pdf              PDF               → Visor de PDF
script.js                  Código JS         → Código formateado
style.css                  Código CSS        → Código formateado
datos.json                 JSON              → Código JSON
resumen.md                 Markdown/Texto    → Texto formateado
video.mp4                  Video             → Reproductor HTML5
```

---

## 📈 Barra de Progreso (Dinámica)

```
Semana 1: 1 archivo → Progreso: 1/16 = 6%
Semana 2: 3 archivos → Progreso: 2/16 = 12%
Semana 3: 2 archivos → Progreso: 3/16 = 18%
Semana 4: 0 archivos → Progreso: 3/16 = 18% (igual)
...
Semana 16: 4 archivos → Progreso: 16/16 = 100% ✅

La barra se actualiza automáticamente cuando:
- Agregas archivos a una carpeta semanaX
- Haces git push
- GitHub actualiza la API (2 minutos)
- La página detecta los cambios (1 minuto)
```

---

## ⏱️ Timeline de Actualización

```
T+0 min:   Haces git push
T+1 min:   GitHub procesa tu commit
T+2 min:   GitHub Pages detecta cambios
T+3 min:   Tu navegador recarga la página
           ✅ VES LOS CAMBIOS

Nota: Si no ves cambios inmediatamente,
      espera 5 minutos y haz Ctrl+Shift+R
```

---

## 🔐 Seguridad y Acceso

```
Tu portafolio es PÚBLICO (porque está en GitHub Pages)

Cualquiera puede:
✓ Ver tu portafolio
✓ Ver tu código
✓ Descargar tus archivos

Solo TÚ puedes:
✓ Hacer cambios al repositorio
✓ Crear/Editar archivos
✓ Cambiar GitHub Pages
```

---

## 📱 Responsive

```
DESKTOP (800px+)              MÓVIL (<800px)
┌──────────────────┐          ┌────────────┐
│ ✦ Proyecto Final │          │✦ Proy.Fin.│
├──────────────────┤          ├────────────┤
│ Logo    Menu ...│          │  Menu...   │
├──────────────────┤          ├────────────┤
│  [Imagen] │ Texto│          │   Imagen   │
│           │      │          │  Texto...  │
├──────────────────┤          ├────────────┤
│ MOD I │ MOD II   │          │  MOD I     │
│ ┌──┐  ┌──┐       │          │  Sem 1...  │
│ │Sem 1 │Sem 5    │  ──→     │            │
│ └──┘  └──┘       │          │  MOD II    │
│ MOD III │ MOD IV │          │  Sem 5...  │
└──────────────────┘          └────────────┘
```

---

## 🎓 RESUMEN VISUAL

```
┌─────────────────────────────────────────┐
│          TU PORTAFOLIO                  │
│                                         │
│  Automático    Profesional    Fácil     │
│     ✓              ✓           ✓        │
│                                         │
│  Cuota gratis  Sin código   Sin costo  │
│     ✓              ✓           ✓        │
│                                         │
│      GitHub Pages + tu HTML             │
└─────────────────────────────────────────┘
```

---

**¿Dudas?** Lee los archivos de documentación en orden de la guía. ✨

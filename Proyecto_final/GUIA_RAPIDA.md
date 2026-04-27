# 🚀 GUÍA RÁPIDA DE INICIO

## ¿Qué es esto?

Es un **portafolio académico** que se actualiza automáticamente cada vez que subes archivos a GitHub. 
Muestra 16 semanas de trabajo organizadas en 4 módulos.

---

## ✅ LISTA DE VERIFICACIÓN INICIAL

- [ ] Tienes un repositorio en GitHub: `https://github.com/josue12335/Proyecto_final`
- [ ] GitHub Pages está activado (Settings → Pages)
- [ ] El archivo `Proyecto_final.html` está en la raíz del repositorio
- [ ] Creaste las 16 carpetas: `semana1`, `semana2`, ..., `semana16`

---

## 📝 PASO A PASO

### 1. Clona el repositorio
```bash
git clone https://github.com/josue12335/Proyecto_final.git
cd Proyecto_final
```

### 2. Crea las carpetas de semanas
```bash
# En Windows
for /l %i in (1,1,16) do mkdir semana%i

# En Mac/Linux
mkdir semana{1..16}
```

### 3. Sube el archivo HTML
- Coloca `Proyecto_final.html` en la **raíz** del repositorio
- Las carpetas `semana1` a `semana16` deben estar al mismo nivel

### 4. Haz el primer commit
```bash
git add .
git commit -m "Inicializar estructura del portafolio"
git push origin main
```

### 5. Accede a tu portafolio
```
https://josue12335.github.io/Proyecto_final.html
```

---

## 📤 CÓMO SUBIR ARCHIVOS CADA SEMANA

### Opción A: Terminal (recomendado)
```bash
# 1. Copia tu archivo
cp mi-trabajo.html semana1/

# 2. Sube
git add semana1/
git commit -m "Semana 1: Trabajo completado"
git push origin main
```

### Opción B: GitHub Web
1. Ve a https://github.com/josue12335/Proyecto_final
2. Abre la carpeta `semanaX`
3. "Add file" → "Upload files"
4. Arrastra tus archivos
5. "Commit changes"

---

## 🎨 ESTRUCTURA FINAL

Tu repositorio debe verse así:

```
josue12335.github.io/
│
├── Proyecto_final.html          ← El archivo principal
├── README.md                     ← Esta documentación
│
├── semana1/
│   ├── index.html               ← Tu archivo de semana 1
│   └── imagen.png               ← Puedes tener múltiples archivos
│
├── semana2/
│   └── proyecto.html
│
├── semana3/
│   └── documento.pdf
│
... (semana4 a semana16)
│
└── semana16/
    └── entrega-final.html
```

---

## 🔍 VERIFICAR QUE FUNCIONA

1. Abre: `https://josue12335.github.io/Proyecto_final.html`
2. Deberías ver 4 módulos con 16 semanas
3. Haz clic en una semana que tenga archivos
4. Deberías ver los archivos en el visor

Si no ves nada:
- Espera 2-3 minutos (GitHub tarda en actualizar)
- Abre la consola (F12) para ver errores
- Verifica que los nombres de carpeta sean exactos: `semanaX`

---

## 📊 MONITOREO DE PROGRESO

En la página principal verás:
- **Barra de progreso**: % de semanas completadas
- **Contador de archivos**: Total de archivos subidos
- **Fecha de actualización**: Cuándo se actualizó cada semana
- **Tipos de archivo**: Qué contenido tiene cada semana

---

## 🎯 ARCHIVOS SOPORTADOS

| Tipo | Se muestra como | Ejemplo |
|------|-----------------|---------|
| HTML | Página completa | `index.html` |
| PNG/JPG | Imagen | `captura.png` |
| PDF | Visor PDF | `documento.pdf` |
| JS/PY/CSS | Código | `script.js` |
| MP4/WebM | Video | `presentacion.mp4` |
| MD/TXT | Texto | `resumen.md` |

---

## 🆘 SOLUCIÓN DE PROBLEMAS

**P: No veo mis archivos**
R: Espera 2 minutos y recarga. GitHub tarda en actualizar la API.

**P: Veo carpeta vacía pero sé que subí archivos**
R: Verifica que la carpeta se llame exactamente `semanaX` (sin espacios)

**P: Mi HTML no se renderiza**
R: Asegúrate de que:
- El archivo termine en `.html`
- Las imágenes usen rutas relativas o URLs completas

**P: ¿Cuántos archivos puedo subir por semana?**
R: Los que quieras. Cada archivo aparecerá en el visor.

---

## 💡 CONSEJOS PRO

- Usa nombres de archivo **sin espacios**: `mi-proyecto.html` ✓
- Una carpeta vacía no cuenta: debe tener al menos 1 archivo
- Los cambios se propagan en 1-3 minutos
- Puedes usar Git desde cualquier carpeta, no solo desde terminal
- Personaliza los colores editando las variables CSS en el HTML

---

## 🔗 LINKS IMPORTANTES

- 📖 Documentación: [GitHub Pages](https://pages.github.com)
- 📚 Tutorial Git: [git-scm.com](https://git-scm.com)
- 🎓 Mi Repositorio: [github.com/josue12335/Proyecto_final](https://github.com/josue12335/Proyecto_final)

---

**¿Necesitas ayuda?** Abre un issue en tu repositorio o revisa los logs en la consola (F12).

¡Buena suerte con tu proyecto! 🚀

# 📁 Estructura de Carpetas para tu Repositorio

Tu repositorio **https://github.com/josue12335/Proyecto_final** debe tener esta estructura:

```
Proyecto_final/
├── semana1/
│   ├── archivo.html
│   ├── archivo.css
│   └── archivo.js
├── semana2/
│   ├── archivo.html
│   └── script.py
├── semana3/
│   ├── documento.pdf
│   └── README.md
├── semana4/
│   └── presentacion.html
│
├── semana5/
│   └── proyecto.html
├── semana6/
│   └── codigo.js
├── semana7/
│   └── datos.json
├── semana8/
│   └── resultado.txt
│
├── semana9/
│   └── imagen.png
├── semana10/
│   └── documento.md
├── semana11/
│   └── video.mp4
├── semana12/
│   └── archivo.pdf
│
├── semana13/
│   └── proyecto_final.html
├── semana14/
│   └── presentacion.pdf
├── semana15/
│   └── resumen.md
├── semana16/
│   └── entrega_final.html
│
└── README.md (opcional)
```

## 🚀 Cómo Subir Archivos

### Opción 1: Desde GitHub.com (web)

1. Ve a tu repositorio: https://github.com/josue12335/Proyecto_final
2. Haz clic en "Add file" → "Upload files"
3. Selecciona o arrastra los archivos
4. Selecciona la carpeta **semanaX** en el selector de ramas
5. Haz clic en "Commit changes"

### Opción 2: Desde Terminal (más rápido)

```bash
# Clona tu repositorio
git clone https://github.com/josue12335/Proyecto_final.git
cd Proyecto_final

# Crea las carpetas si no existen
mkdir semana1 semana2 semana3 ... semana16

# Añade tus archivos a la carpeta correspondiente
cp mi_archivo.html semana1/

# Sube los cambios
git add semana1/
git commit -m "Semana 1: Completado"
git push origin main
```

## 📝 Archivos Soportados

La página visualiza automáticamente estos tipos:

- **HTML**: `archivo.html` - Se renderiza completo
- **Imágenes**: `PNG`, `JPG`, `GIF`, `SVG` - Se muestra como imagen
- **PDF**: `documento.pdf` - Se abre en visor
- **Código**: `JavaScript`, `Python`, `CSS`, etc. - Se muestra el código fuente
- **Video**: `MP4`, `WebM`, `OGG` - Reproductor integrado
- **Texto**: `TXT`, `MD`, etc. - Se muestra como código

## ⏰ El Progreso se Actualiza Automáticamente

Una vez que subas archivos a una carpeta `semanaX`:
1. La página detectará los archivos automáticamente
2. Mostrará la cantidad de archivos
3. Indicará qué tipos de archivos hay
4. La barra de progreso se actualizará

## 💡 Consejos

- Mantén nombres de archivo **sin espacios** (usa guiones: `mi-archivo.html`)
- Organiza cada semana en su carpeta correspondiente
- Puedes tener múltiples archivos por semana
- Los archivos HTML serán renderizados completamente
- Los cambios pueden tomar 1-2 minutos en aparecer

## 🔗 Links Útiles

- **Repositorio**: https://github.com/josue12335/Proyecto_final
- **Página**: https://josue12335.github.io
- **GitHub Docs**: https://docs.github.com/es

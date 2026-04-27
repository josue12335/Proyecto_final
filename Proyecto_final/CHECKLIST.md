# ✅ CHECKLIST DE CONFIGURACIÓN

Sigue este checklist para asegurar que todo esté funcionando correctamente.

## 🔧 CONFIGURACIÓN INICIAL

- [ ] **Repositorio creado**: https://github.com/josue12335/Proyecto_final
- [ ] **Git instalado** en tu computadora
- [ ] **Carpeta local clonada**: `git clone ...`

## 📁 ESTRUCTURA DE CARPETAS

- [ ] Carpeta raíz con estos archivos:
  - [ ] `Proyecto_final.html` (el archivo principal)
  - [ ] `README.md`
  - [ ] `.gitignore` (opcional)

- [ ] 16 carpetas creadas en la raíz:
  - [ ] `semana1/`
  - [ ] `semana2/`
  - [ ] `semana3/`
  - [ ] `semana4/`
  - [ ] `semana5/`
  - [ ] `semana6/`
  - [ ] `semana7/`
  - [ ] `semana8/`
  - [ ] `semana9/`
  - [ ] `semana10/`
  - [ ] `semana11/`
  - [ ] `semana12/`
  - [ ] `semana13/`
  - [ ] `semana14/`
  - [ ] `semana15/`
  - [ ] `semana16/`

## 🌐 GITHUB PAGES

- [ ] GitHub Pages **está habilitado**
  - Ir a: Settings → Pages
  - Branch: `main`
  - Folder: `/ (root)`
  
- [ ] Esperaste **5 minutos** para que se active

## 🚀 PRIMER COMMIT

```bash
cd Proyecto_final
git add .
git commit -m "Inicializar estructura"
git push origin main
```

- [ ] Subiste los cambios iniciales a GitHub
- [ ] El HTML está en la raíz del repositorio

## 🧪 VERIFICACIÓN

- [ ] Abre: `https://josue12335.github.io/Proyecto_final.html`
- [ ] Ves **4 módulos** con **16 semanas**
- [ ] Ves la **barra de progreso** (0% al inicio)
- [ ] Ves el **visor de archivos**

## 📤 PRIMER ARCHIVO DE PRUEBA

Para probar que funciona:

1. Copia el archivo `ejemplo-semana1.html` a `semana1/`
   ```bash
   cp ejemplo-semana1.html semana1/index.html
   ```

2. Sube los cambios:
   ```bash
   git add semana1/
   git commit -m "Semana 1: Contenido inicial"
   git push origin main
   ```

3. Espera 2-3 minutos y recarga la página

4. Verifica:
   - [ ] Semana 1 muestra "1 archivo"
   - [ ] Haces clic y ves el HTML
   - [ ] La barra de progreso cambia a 6% (1 de 16)

## 🎨 PERSONALIZACIÓN (OPCIONAL)

- [ ] Editaste los colores en `Proyecto_final.html`
- [ ] Cambiste el nombre si lo necesitabas
- [ ] Ajustaste la descripción del héroe

## 📝 DOCUMENTACIÓN

- [ ] Revisaste `README.md`
- [ ] Revisaste `GUIA_RAPIDA.md`
- [ ] Entendiste cómo subir archivos
- [ ] Sabes qué tipos de archivo se soportan

## 🔄 FLUJO SEMANAL

Cada semana repites esto:

```bash
# 1. Haz tu trabajo y crea un archivo
# Mi trabajo semana 1.html

# 2. Cópialo a la carpeta correspondiente
cp "Mi trabajo.html" semana1/

# 3. Sube a GitHub
git add semana1/
git commit -m "Semana 1: Descripción del trabajo"
git push origin main

# 4. Espera 2 minutos
# 5. Recarga https://josue12335.github.io/Proyecto_final.html
# 6. ¡Verás tu contenido!
```

- [ ] Entendiste el flujo semanal
- [ ] Sabes cómo subir archivos regularmente

## ❓ SOLUCIÓN DE PROBLEMAS

Si algo no funciona:

**"No veo los archivos"**
- [ ] Espera 3-5 minutos
- [ ] Recarga con Ctrl+Shift+R (limpiar caché)
- [ ] Verifica la ortografía: `semanaX` exacto

**"El HTML no se renderiza"**
- [ ] El archivo debe terminar en `.html` (no .txt)
- [ ] Abre F12 y mira la consola de errores

**"GitHub Pages no funciona"**
- [ ] Ve a Settings → Pages
- [ ] Asegúrate que esté en "Deploy from a branch"
- [ ] Rama: `main`, folder: `/ (root)`

**"Git no me deja hacer push"**
- [ ] Verifica tu conexión a internet
- [ ] Configura tu email: `git config --global user.email "tu@email.com"`
- [ ] Usa HTTPS o SSH según esté configurado

## 🎯 PRÓXIMOS PASOS

Una vez todo esté funcionando:

1. **Semana 1**: Copia tus archivos a `semana1/`
2. **Semana 2**: Copia tus archivos a `semana2/`
3. ... y así hasta la semana 16

Cada semana:
- [ ] Creas tu contenido
- [ ] Lo copias a la carpeta `semanaX`
- [ ] Haces `git add`, `git commit`, `git push`
- [ ] ¡Listo! Aparece automáticamente

## 📊 RESULTADO FINAL

Cuando completes todo, tu portafolio verá:
- 100% de progreso (16/16 semanas)
- Todos los módulos con contenido
- Visor funcionando para todos los archivos
- Una página profesional con tu portafolio académico

---

**¡Buena suerte! Si todo está marcado, estás listo para empezar.** ✨

Cualquier pregunta: revisa los logs (F12) o la documentación incluida.

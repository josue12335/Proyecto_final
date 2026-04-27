<!-- EJEMPLOS DE CONTENIDO POR SEMANA -->

<!-- ========================================
     SEMANA CON HTML
     ======================================== -->
archivo: semana1/index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Semana 1</title>
    <style>
        body { font-family: Arial; background: #f0f0f0; padding: 20px; }
        .card { background: white; padding: 20px; border-radius: 8px; }
    </style>
</head>
<body>
    <div class="card">
        <h1>Semana 1: Título del Trabajo</h1>
        <p>Descripción del trabajo realizado...</p>
    </div>
</body>
</html>
```

<!-- ========================================
     SEMANA CON CÓDIGO
     ======================================== -->
archivo: semana2/script.js
```javascript
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}

console.log(saludar("Josue"));
```

<!-- ========================================
     SEMANA CON MARKDOWN
     ======================================== -->
archivo: semana3/resumen.md
```markdown
# Semana 3: Resumen

## Contenido cubierto
- Punto 1
- Punto 2
- Punto 3

## Aprendizajes clave
1. Aprendizaje 1
2. Aprendizaje 2

[Más información](https://ejemplo.com)
```

<!-- ========================================
     SEMANA CON JSON
     ======================================== -->
archivo: semana4/datos.json
```json
{
  "semana": 4,
  "proyecto": "Mi Proyecto",
  "archivos": ["index.html", "style.css"],
  "estado": "completado",
  "progreso": 100
}
```

<!-- ========================================
     SEMANA CON CSS
     ======================================== -->
archivo: semana5/style.css
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
```

<!-- ========================================
     SEMANA CON PYTHON
     ======================================== -->
archivo: semana6/script.py
```python
def fibonacci(n):
    """Genera la serie de Fibonacci hasta n"""
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a + b
    print()

fibonacci(10)
```

<!-- ========================================
     SEMANA CON HTML CANVAS
     ======================================== -->
archivo: semana7/canvas.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Canvas Demo</title>
</head>
<body>
    <canvas id="canvas" width="800" height="600"></canvas>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        // Dibujar rectángulo
        ctx.fillStyle = '#667eea';
        ctx.fillRect(50, 50, 200, 200);
        
        // Dibujar círculo
        ctx.fillStyle = '#764ba2';
        ctx.beginPath();
        ctx.arc(400, 300, 100, 0, Math.PI * 2);
        ctx.fill();
    </script>
</body>
</html>
```

<!-- ========================================
     SEMANA CON SVG
     ======================================== -->
archivo: semana8/diagrama.svg
```svg
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <!-- Rectángulo -->
    <rect x="50" y="50" width="100" height="100" fill="#667eea"/>
    
    <!-- Círculo -->
    <circle cx="250" cy="100" r="50" fill="#764ba2"/>
    
    <!-- Texto -->
    <text x="50" y="200" font-size="24" fill="#333">
        Semana 8 - SVG
    </text>
    
    <!-- Línea -->
    <line x1="50" y1="250" x2="350" y2="250" stroke="#999" stroke-width="2"/>
</svg>
```

<!-- ========================================
     SEMANA CON SQL
     ======================================== -->
archivo: semana9/base_datos.sql
```sql
CREATE TABLE estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    email VARCHAR(100),
    fecha_inscripcion DATE
);

INSERT INTO estudiantes (nombre, email, fecha_inscripcion)
VALUES ('Josue', 'josue@example.com', '2025-01-01');

SELECT * FROM estudiantes WHERE nombre LIKE '%o%';
```

<!-- ========================================
     SEMANA CON HTML Y VIDEO
     ======================================== -->
archivo: semana10/presentacion.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Presentación Semana 10</title>
</head>
<body>
    <h1>Mi Presentación</h1>
    <video width="600" controls>
        <source src="video.mp4" type="video/mp4">
        Tu navegador no soporta video
    </video>
</body>
</html>
```

<!-- ========================================
     SEMANA CON FORMULARIO
     ======================================== -->
archivo: semana11/formulario.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Formulario</title>
    <style>
        form { max-width: 400px; margin: 50px auto; }
        input, textarea, button { width: 100%; padding: 10px; margin: 10px 0; }
        button { background: #667eea; color: white; cursor: pointer; }
    </style>
</head>
<body>
    <form>
        <input type="text" placeholder="Nombre" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Mensaje"></textarea>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>
```

<!-- ========================================
     SEMANA CON TABLA
     ======================================== -->
archivo: semana12/datos.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Tabla de Datos</title>
    <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background: #667eea; color: white; }
    </style>
</head>
<body>
    <table>
        <tr><th>Semana</th><th>Archivos</th><th>Estado</th></tr>
        <tr><td>1</td><td>3</td><td>✓ Completada</td></tr>
        <tr><td>2</td><td>2</td><td>✓ Completada</td></tr>
        <tr><td>3</td><td>5</td><td>⏳ En progreso</td></tr>
    </table>
</body>
</html>
```

<!-- ========================================
     SEMANA CON LIBRERÍA (Bootstrap)
     ======================================== -->
archivo: semana13/bootstrap.html
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <title>Bootstrap Demo</title>
</head>
<body>
    <div class="container mt-5">
        <div class="alert alert-success" role="alert">
            ¡Semana 13 completada!
        </div>
        <button class="btn btn-primary">Click aquí</button>
    </div>
</body>
</html>
```

<!-- ========================================
     SEMANA CON JavaScript Interactivo
     ======================================== -->
archivo: semana14/interactivo.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Contador Interactivo</title>
    <style>
        body { text-align: center; font-family: Arial; padding: 50px; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
        #contador { font-size: 48px; margin: 20px 0; }
    </style>
</head>
<body>
    <h1>Contador</h1>
    <div id="contador">0</div>
    <button onclick="incrementar()">+</button>
    <button onclick="decrementar()">-</button>
    <button onclick="resetear()">Reset</button>
    
    <script>
        let count = 0;
        function incrementar() { count++; actualizar(); }
        function decrementar() { count--; actualizar(); }
        function resetear() { count = 0; actualizar(); }
        function actualizar() { 
            document.getElementById('contador').textContent = count;
        }
    </script>
</body>
</html>
```

<!-- ========================================
     SEMANA CON LISTA DE ENLACES
     ======================================== -->
archivo: semana15/enlaces.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>Recursos Semana 15</title>
    <style>
        body { font-family: Arial; padding: 20px; max-width: 600px; margin: 0 auto; }
        a { display: block; padding: 10px; margin: 5px 0; background: #f0f0f0; }
    </style>
</head>
<body>
    <h1>Recursos Útiles</h1>
    <a href="https://developer.mozilla.org">MDN Web Docs</a>
    <a href="https://stackoverflow.com">Stack Overflow</a>
    <a href="https://github.com">GitHub</a>
</body>
</html>
```

<!-- ========================================
     SEMANA 16: PROYECTO FINAL
     ======================================== -->
archivo: semana16/index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto Final - Semana 16</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: white;
            padding: 50px;
            border-radius: 15px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 600px;
        }
        h1 { color: #667eea; margin-bottom: 20px; font-size: 2.5rem; }
        p { color: #666; line-height: 1.8; margin: 15px 0; }
        .badge { display: inline-block; background: #667eea; color: white; 
                 padding: 10px 20px; border-radius: 50px; margin: 10px 5px; }
        .congrats { font-size: 3rem; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="congrats">🎉</div>
        <h1>¡Felicidades!</h1>
        <p>Completaste el proyecto final de las 16 semanas.</p>
        
        <div>
            <span class="badge">✓ 16 Semanas</span>
            <span class="badge">✓ 4 Módulos</span>
            <span class="badge">✓ 100% Completado</span>
        </div>
        
        <p style="margin-top: 30px;">
            <strong>Compartir portafolio:</strong><br>
            https://josue12335.github.io/Proyecto_final.html
        </p>
    </div>
</body>
</html>
```

---

## 📋 RESUMEN

Estos ejemplos muestran cómo crear contenido para cada semana. Puedes:
- Mezclar archivos diferentes en la misma semana
- Usar múltiples archivos HTML
- Incluir imágenes, videos, PDFs
- Escribir código, markdown, JSON, etc.

**Recuerda:** Solo sube los archivos a la carpeta correspondiente en GitHub y aparecerán automáticamente.

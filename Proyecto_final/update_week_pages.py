from pathlib import Path
import re
base = Path(r'c:\Users\ASUS TUF\Downloads\Proyecto_final\semanas')
files = sorted(base.glob('semana*/index.html'))
if not files:
    raise SystemExit('No files found')
for path in files:
    text = path.read_text(encoding='utf-8')
    week = re.search(r'semana(\d+)/index\.html$', str(path).replace('\\','/'))
    if not week:
        continue
    num = week.group(1)
    text = re.sub(r'href="\.\./semanas/semana%s/index\.html"\s+target="_blank"\s+class="btn github-btn"' % num,
                  f'href="https://github.com/josue12335/proyecto-16-semanas/tree/main/semanas/semana{num}" target="_blank" class="btn github-btn"', text)
    if 'class="week-actions"' not in text:
        insert_html = f'''                <div class="week-actions">
                    <a href="https://github.com/josue12335/proyecto-16-semanas/tree/main/semanas/semana{num}" target="_blank" class="btn github-btn">Ver GitHub Semana {num}</a>
                </div>

                <div class="pdf-viewer-card">
                    <h3>Visor PDF desde GitHub</h3>
                    <p>Pega aquí un enlace RAW o un enlace GitHub con /blob/ a un PDF.</p>
                    <form id="pdfForm" class="pdf-form">
                        <label for="pdfUrl">URL del PDF</label>
                        <input id="pdfUrl" class="pdf-input" type="url" placeholder="https://raw.githubusercontent.com/usuario/repositorio/main/semanas/semana{num}/documento.pdf" required>
                        <button type="submit" class="btn">Ver PDF</button>
                    </form>
                    <div class="pdf-preview">
                        <iframe id="pdfViewer" src="" title="Visor de PDF"></iframe>
                        <p class="pdf-info">Usa un enlace RAW de GitHub o un enlace .pdf válido.</p>
                    </div>
                </div>
'''
        marker = '</ul>\n                    </div>\n                </div>\n            </div>\n'
        idx = text.find(marker)
        if idx != -1:
            insert_point = idx + len(marker)
            text = text[:insert_point] + insert_html + text[insert_point:]
        else:
            fallback = '\n            <p style="margin-top: 3rem; text-align: center;">'
            idx2 = text.find(fallback)
            if idx2 != -1:
                text = text[:idx2] + insert_html + text[idx2:]
    if 'pdfForm' not in text or 'pdfViewer' not in text:
        script_add = '''
        const pdfForm = document.getElementById('pdfForm');
        if (pdfForm) {
            const pdfUrlInput = document.getElementById('pdfUrl');
            const pdfViewer = document.getElementById('pdfViewer');
            const pdfInfo = document.querySelector('.pdf-info');

            pdfForm.addEventListener('submit', function(event) {
                event.preventDefault();
                let pdfUrl = pdfUrlInput.value.trim();
                if (!pdfUrl) {
                    pdfInfo.textContent = 'Ingresa una URL válida a un archivo PDF.';
                    return;
                }
                if (pdfUrl.includes('github.com') && !pdfUrl.includes('raw.githubusercontent.com')) {
                    pdfUrl = pdfUrl.replace('https://github.com/', 'https://raw.githubusercontent.com/').replace('/blob/', '/');
                }
                pdfViewer.src = pdfUrl;
                pdfInfo.textContent = 'Si el PDF no carga, verifica que el enlace sea un archivo .pdf o un enlace RAW de GitHub.';
            });
        }
'''
        first_script = text.find('</script>')
        if first_script != -1:
            before = text[:first_script]
            if 'function openTab(evt, tabName)' in before:
                text = text[:first_script] + script_add + text[first_script:]
    path.write_text(text, encoding='utf-8')
    print(f'Updated {path}')

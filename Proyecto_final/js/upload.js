document.addEventListener('DOMContentLoaded', function () {
    const fileInputs = document.querySelectorAll('.file-upload-input');

    fileInputs.forEach(input => {
        const listId = input.dataset.list;
        const list = document.getElementById(listId);
        if (!list) return;

        const storageKey = `upload-list:${window.location.pathname}`;
        let selectedFiles = [];

        const renderList = (files, note = '') => {
            list.innerHTML = '';
            if (!files.length) {
                const emptyItem = document.createElement('li');
                emptyItem.textContent = 'Ningún archivo guardado.';
                list.appendChild(emptyItem);
                return;
            }

            files.forEach(fileName => {
                const item = document.createElement('li');
                item.textContent = fileName;
                list.appendChild(item);
            });

            if (note) {
                const noteItem = document.createElement('li');
                noteItem.textContent = note;
                noteItem.style.fontStyle = 'italic';
                noteItem.style.color = '#5a5a5a';
                list.appendChild(noteItem);
            }
        };

        const savedFiles = JSON.parse(localStorage.getItem(storageKey) || '[]');
        renderList(savedFiles);

        const saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.textContent = 'Guardar archivos';
        saveButton.className = 'btn save-upload-btn';
        saveButton.style.marginLeft = '1rem';
        saveButton.disabled = true;

        input.parentNode.insertBefore(saveButton, input.nextSibling);

        input.addEventListener('change', () => {
            if (!input.files.length) {
                selectedFiles = [];
                saveButton.disabled = true;
                renderList(savedFiles);
                return;
            }

            selectedFiles = Array.from(input.files).map(file => file.name);
            saveButton.disabled = false;
            renderList(selectedFiles, 'Haz clic en Guardar para almacenar los archivos.');
        });

        saveButton.addEventListener('click', () => {
            if (!selectedFiles.length) return;

            const currentFiles = JSON.parse(localStorage.getItem(storageKey) || '[]');
            const allFiles = Array.from(new Set([...currentFiles, ...selectedFiles]));
            localStorage.setItem(storageKey, JSON.stringify(allFiles));
            renderList(allFiles, 'Archivos guardados correctamente.');
            saveButton.disabled = true;
            input.value = '';
            selectedFiles = [];
        });
    });
});

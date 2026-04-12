document.addEventListener('DOMContentLoaded', function () {
    const fileInputs = document.querySelectorAll('.file-upload-input');

    fileInputs.forEach(input => {
        const listId = input.dataset.list;
        const list = document.getElementById(listId);

        if (!list) return;

        input.addEventListener('change', () => {
            list.innerHTML = '';

            if (!input.files.length) {
                const emptyItem = document.createElement('li');
                emptyItem.textContent = 'Ningún archivo seleccionado.';
                list.appendChild(emptyItem);
                return;
            }

            for (const file of input.files) {
                const item = document.createElement('li');
                item.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;
                list.appendChild(item);
            }
        });
    });
});

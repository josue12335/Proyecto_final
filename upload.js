const fs = require('fs');
const path = require('path');

const uploadFile = (file) => {
    // Detect current week from the URL (for example purposes)
    const currentDate = new Date('2026-04-13 16:42:11'); // Insert your UTC date
    const weekNumber = Math.ceil((currentDate.getDate() + (currentDate.getDay() + 1)) / 7);

    // Define the folder for the current week
    const folderPath = path.join(__dirname, `semana${weekNumber}`);

    // Ensure the directory exists
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    // Save the file to the corresponding week's folder
    const filePath = path.join(folderPath, file.name);
    fs.writeFileSync(filePath, file.data);
    console.log(`File saved to ${filePath}`);
};

module.exports = uploadFile;

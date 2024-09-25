const fs = require('fs');
const path = require('path');

function cleanDirectory(directory) {
    if (fs.existsSync(directory)) {
        fs.readdirSync(directory).forEach((file) => {
            const curPath = path.join(directory, file);
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                cleanDirectory(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
    }
}

const directories = ['reports', 'videos', 'screenshots', 'traces'];

directories.forEach(dir => cleanDirectory(dir));

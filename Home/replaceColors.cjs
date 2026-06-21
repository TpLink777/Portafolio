const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = {
    // Colors
    'cyan-': 'emerald-',
    'blue-': 'teal-',
    'purple-': 'emerald-',
    'pink-': 'teal-',
    'fuchsia-': 'emerald-',
    'rose-': 'teal-',
    'indigo-': 'emerald-',
    'slate-': 'zinc-',
    'emerald-500/10 to-teal-500/10': 'emerald-500/10 to-emerald-600/10',
};

function processFile(filePath) {
    if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        for (const [key, value] of Object.entries(replacements)) {
            const regex = new RegExp(key, 'g');
            content = content.replace(regex, value);
        }
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

traverseDir(srcDir);
console.log('Color replacement complete!');

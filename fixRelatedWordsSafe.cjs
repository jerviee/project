const fs = require('fs');

const filePath = './src/data/mockWords.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const relatedWordsPattern = /"meaning": "([^"]*)；相关事物"/g;
const relatedWordsPattern2 = /"meaning": "([^"]*)相关事物"/g;

let match;
let fixedCount = 0;
const errors = [];

while ((match = relatedWordsPattern.exec(content)) !== null) {
    const fullMatch = match[0];
    const word = match[1];

    const parts = word.split('.');
    if (parts.length >= 2) {
        const pos = parts[0] + '.';
        const rest = parts.slice(1).join('.');

        if (rest && rest.length > 0 && rest !== word) {
            const newMeaning = pos + ' ' + rest;
            const newContent = content.replace(fullMatch, `"meaning": "${newMeaning}"`);

            if (newContent !== content) {
                content = newContent;
                fixedCount++;
            }
        } else {
            errors.push({ original: fullMatch, reason: 'No valid Chinese meaning found' });
        }
    } else {
        errors.push({ original: fullMatch, reason: 'Invalid format' });
    }
}

while ((match = relatedWordsPattern2.exec(content)) !== null) {
    const fullMatch = match[0];
    const word = match[1];

    const parts = word.split('.');
    if (parts.length >= 2) {
        const pos = parts[0] + '.';
        const rest = parts.slice(1).join('.');

        if (rest && rest.length > 0) {
            const newMeaning = pos + ' ' + rest;
            const newContent = content.replace(fullMatch, `"meaning": "${newMeaning}"`);

            if (newContent !== content) {
                content = newContent;
                fixedCount++;
            }
        }
    }
}

fs.writeFileSync(filePath, content);

console.log(`Fixed ${fixedCount} occurrences of "相关事物" errors`);
console.log(`Errors that could not be fixed: ${errors.length}`);
if (errors.length > 0) {
    errors.forEach(e => console.log(`  - ${e.reason}: ${e.original}`));
}

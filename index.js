const fs = require('fs');
const rawData = fs.readFileSync('input.txt').toString();
const newLine = rawData.includes('\r\n') ? '\r\n' : '\n';
const parsedData = rawData.split(newLine);
parsedData.pop();
const data = parsedData.map(entry => {
    info = entry.split(',');
    return `${info[1]}\t${info[2]}\t${info[3]}`
}).join(newLine);
fs.writeFileSync('output.txt', data);

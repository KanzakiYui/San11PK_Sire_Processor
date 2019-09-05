const lodash = require('lodash');
const fs = require('fs');
const rawData1 = fs.readFileSync('cherrypick.txt').toString();
const rawData2 = fs.readFileSync('reference.txt').toString();
const newLine1 = rawData1.includes('\r\n') ? '\r\n' : '\n';
const parsedData1 = rawData1.split(newLine1).map(
    entry=>lodash.compact(entry.split(' '))
);
    
const newLine2 = rawData2.includes('\r\n') ? '\r\n' : '\n';
parsedData2 = rawData2.split(newLine2).map(
    entry=>entry.split('\t')
);
const groupedData = parsedData2.reduce((accumulator,info, index)=>{
    accumulator[index] = info[1]
    return accumulator;
},{});
    
const presentData = parsedData1.map(entry =>
    entry.map(id => `${id} ${groupedData[id]}`)
).join(newLine1).replace(/\,/g, ', ');
console.log(rawData2);
//console.log(presentData);

fs.writeFileSync('output.txt', presentData);


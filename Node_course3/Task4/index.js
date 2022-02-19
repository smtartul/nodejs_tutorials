import { appendFile, readFile, unlink, writeFile } from 'fs';

writeFile('employees.json',
    '{"name": "Employee 1 Name", "salary": 2000}',
    'utf8', (err, data) => {
        if (err) console.log(err);
        console.log('Json dosya kaydedildi. step1');
    });

readFile('./employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log('Dosya okundu step2');
});

// update adds a new object
appendFile('./employees.json',
    '\n{"name": "Employee 2 Name", "salary": 3000}',
    'utf8', (err, data) => {
        if (err) console.log(err);
        console.log('Yeni veri eklendi. step3');

    });
// updates first object
writeFile('employees.json',
    '{"name": "Employee 3 Name", "salary": 5000}',
    'utf8', (err, data) => {
        if (err) console.log(err);
        console.log('Mevcut veri guncellendi. step4');
    });

// delete json object which created by code
// unlink('./employees.json', (err) => {
//     if (err) console.log(err);
//     console.log('Json dosya silindi. step5');
// })



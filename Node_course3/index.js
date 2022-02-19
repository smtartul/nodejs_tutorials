import { appendFile, readFile,unlink,writeFile  } from 'fs';
import { Buffer } from 'buffer';

// ----> Dosya okuma işlemleri
readFile('./info.txt', (err, data) => {
    if (err) console.log(err);
    console.log(String(data));
    console.log('Dosya okundu');
});

// ----> veya
// readFile('./info.txt', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log('Dosya okundu');
// });

// ----> dosya yazma işlemi 

// const data = new Uint8Array(Buffer.from('Hello from NodeJS v1'));
// writeFile('example.txt', data, (err) => {
//   if (err) console.log(err);
//   console.log('Dosya kaydedildi. v1');
// });

// ----> veya
writeFile('example.txt', 'Hello Node.js v2', 'utf8', (err, data)=>{
    if (err) console.log(err);
    console.log('Dosya kaydedildi. v2');
});

// ----> veya json ifade için
writeFile('example.json', '{"name":"Samet", "age":33}', 'utf8', (err, data)=>{
    if (err) console.log(err);
    console.log('Json dosya kaydedildi. v3');
});

// ----> dosyaya veri ekleme
appendFile('./example.txt','\nAdded by append command','utf8', (err, data)=>{
    if (err) console.log(err);
    console.log('Yeni bilgi dosyaya eklendi. v4');
});

// ----> dosya silmek 
// unlink('./example.json',(err)=>{
//     if (err) console.log(err);
//     console.log('Json dosya silindi. v5');
// })
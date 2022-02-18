const r = process.argv.slice(2);
const pi = Math.PI;

if (r.length < 1 || isNaN(Number(r[0]))) {
    console.log("Eksik yada hatalı giriş yaptınız");
}
else {
    const area = pi * Number(r[0]);
    console.log(`Girmiş olduğunuz ${r} yarıcaplı dairenin alanı:${area}`);

}
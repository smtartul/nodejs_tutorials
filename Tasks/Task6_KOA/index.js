const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    
    switch (ctx.url) {
        case '/': ctx.body = 'Ana Sayfa';

            break;
        case '/about': ctx.body = 'HAKKINDA SAYFASI';

            break;
        case '/contact': ctx.body = 'ILETISIM SAYFASI';

            break;
        default:
            ctx.body = 'Sayfa Bulunamadı';
            break;
    }

});

const port = 4000
app.listen(port, () => {
    console.log(`Sunucu port ${port} üzerinde çalışmaya basladı`);
});
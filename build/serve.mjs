import serveStatic from 'serve-static';
import connect from 'connect';

(async () => {
    console.log('Site is running...')
    connect().use(serveStatic('dist')).listen(8080);
})();

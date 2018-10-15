import dep1 from './deps/dep1.js';
import dep2 from './deps/dep2.js';

(async () => {
    await dep1();
    await dep2();
})();

import dep1 from './deps/dep1.mjs';
import dep2 from './deps/dep2.mjs';

(async () => {
    await dep2();
    await dep1();
})();

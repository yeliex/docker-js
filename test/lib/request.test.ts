import { name } from '../helper/util';
import fetch from '../../src/lib/request';
import { DEFAULT_ENDPOINT } from '../../src/lib/const';

describe(name(__filename), () => {
    it('should support http', async () => {

    });

    it('should support https', async () => {

    });

    // todo: create an socket server to test
    it('should support unix socket', async () => {
        const res = await fetch('/info', {
            endpoint: DEFAULT_ENDPOINT,
        });

        console.log(res);
    });
});

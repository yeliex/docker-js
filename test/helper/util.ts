import { relative, resolve } from 'path';

const TEST_ROOT = resolve(__dirname, '../');

export const name = (path: string) => {
    return relative(TEST_ROOT, path);
};

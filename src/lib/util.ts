import { TDockerOptions, IDockerOptions } from '../index';
import { defaults } from 'lodash';
import { DEFAULT_ENDPOINT, DEFAULT_VERSION } from './const';

const DEFAULT_OPTIONS: IDockerOptions = {
    version: DEFAULT_VERSION,
    endpoint: DEFAULT_ENDPOINT,
};

export const formatOptions = (input: TDockerOptions = {}): IDockerOptions => {
    const options: IDockerOptions = defaults(input, DEFAULT_OPTIONS);

    return options;
};

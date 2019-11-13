import originFetch, {RequestInit} from "./fetch-socket";
import {format} from 'url';
import {TDockerOptions} from '../index';
import {formatOptions} from './util';

export interface IRequestInit extends Partial<RequestInit>, TDockerOptions {
    query?: any;
    socketPath?: string;
}

const IS_HTTP = /^https?:\/\//i;

export default async function fetch(input: string, init: IRequestInit = {}) {
    init = formatOptions(init);

    const {endpoint, version, query, ...fetchInit} = init;

    // detect protocol by endpoint
    const isHttp = IS_HTTP.exec(endpoint);

    const url = format({
        host: isHttp ? endpoint : '',
        pathname: input,
        query: query,
    });

    const request = await originFetch(url, {
        ...fetchInit,
        socketPath: endpoint
    });

    return request.json();
}

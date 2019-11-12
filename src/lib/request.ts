import originFetch, { RequestInit } from 'node-fetch';
import { Agent } from 'http';
import { format } from 'url';
import { TDockerOptions } from '../index';
import { formatOptions } from './util';

export interface IRequestInit extends RequestInit, TDockerOptions {
    query?: any;
    agent?: Agent;
    socketPath?: string;
}

const IS_HTTP = /^https?:\/\//i;

export default async function fetch(input: string, init: IRequestInit = {}) {
    init = formatOptions(init);

    const { endpoint, version, query, ...fetchInit } = init;

    // detect protocol by endpoint
    const isHttp = IS_HTTP.exec(endpoint);

    if (!isHttp) {
        input = '';
    }

    const url = format({
        host: isHttp ? endpoint : 'http://localhost',
        path: input,
        query: query,
    });

    const fetchInput = isHttp ? url : {
        path: url,
        socketPath: endpoint,
    };

    // todo: is necessary support body?
    const request = await originFetch(fetchInput as any, fetchInit);

    return request.json();
}

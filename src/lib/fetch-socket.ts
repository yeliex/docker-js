import { RequestInit, FetchError, Response, Headers } from 'node-fetch';
import { ClientRequest, request } from 'http';
import { PassThrough } from 'stream';

export interface RequestSocketInit extends RequestInit {
    socketPath: string;
    headers: any;
}

function isBlob(obj: any) {
    return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function createHeadersLenient(obj: any) {
    const headers = new Headers();
    for (const name of Object.keys(obj)) {
        if (invalidTokenRegex.test(name)) {
            continue;
        }
        if (Array.isArray(obj[name])) {
            for (const val of obj[name]) {
                if (invalidHeaderCharRegex.test(val)) {
                    continue;
                }
                if (headers.get(name) === undefined) {
                    headers.set(name, val);
                } else {
                    headers.append(name, val);
                }
            }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers.set(name, obj[name]);
        }
    }
    return headers;
}

function writeToStream(dest: ClientRequest, body?: any) {
    if (body === null || body === undefined) {
        // body is null
        dest.end();
    } else if (isBlob(body)) {
        body.stream().pipe(dest);
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body);
        dest.end();
    } else {
        // body is stream
        body.pipe(dest);
    }
}

export default async function fetchSocket(input: string, init: RequestSocketInit) {
    const { body, socketPath, ...requestInit } = init;

    return new Promise((rec, rej) => {
        const req = request({
            path: input,
            socketPath,
            ...requestInit,
        } as any);

        req.once('error', (err: Error) => {
            rej(new FetchError(`request to ${input} failed, reason: ${err.message}`, 'system', err.toString()));
        });

        req.once('response', (res) => {
            let body = res.pipe(new PassThrough());

            const responseOptions = {
                url: input,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: createHeadersLenient(res.headers),
                size: 0,
                timeout: 0,
                counter: 0,
            };

            const response = new Response(body, responseOptions);

            rec(response);
        });

        writeToStream(req, body);
    });
}

import http from 'http';
import { Socket, createConnection } from 'net';

declare module 'http' {
    export interface Agent extends http.Agent {
        createConnection: typeof createConnection;
    }
}

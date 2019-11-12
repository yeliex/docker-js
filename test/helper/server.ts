import { createServer, IncomingMessage, Server as HttpServer, ServerResponse } from 'http';
import { AddressInfo } from 'net';

class Server {
    public port: number;
    public readonly server: HttpServer;

    constructor() {
        const server = this.server = createServer();
        server.on('request', this.listener);
        server.listen(0, () => {
            this.port = (server.address() as AddressInfo).port;
        });
    }

    listener(request: IncomingMessage, response: ServerResponse) {

    }

    destroy(): Promise<never> {
        return new Promise((rec, rej) => {
            this.server.close((err?: Error) => {
                if (err) {
                    rej(err);
                    return;
                }
                rec();
            });
        });
    }
}

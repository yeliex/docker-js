import DockerBase from '../base';
import { AuthOptions, AuthResponse } from '../type';

export default class System extends DockerBase {
    public async auth(options: AuthOptions): Promise<AuthResponse> {
        return this.request('/auth', {
            method: 'POST',
            body: options,
        });
    }

    public async info() {
        return this.request('/info');
    }

    public async version() {
        return this.request('/version');
    }

    public async ping(head: boolean = true) {
        return this.request('/_ping', {
            method: head ? 'HEAD' : 'GET',
        });
    }

    public async events(options: any) {
        return this.request('/events', {
            query: options,
        });
    }

    public async df() {
        return this.request('/system/df');
    }
}

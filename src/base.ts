import {TDockerOptions} from './index';
import fetch, {IRequestInit} from "./lib/request";

export default abstract class DockerBase {
    public readonly endpoint: string;

    constructor(public readonly options: TDockerOptions) {
        this.endpoint = options.endpoint;
    }

    public async request(url: string, options: IRequestInit = {}) {
        return fetch(url, {
            ...options,
            endpoint: this.endpoint
        })
    }
}

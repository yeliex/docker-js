import DockerSystem from './module/docker';
import Containers from './module/containers';

export interface IDockerOptions {
    endpoint: string; // socket or http
    version: string; // docker api version

}

export type TDockerOptions = Partial<IDockerOptions>

export default class Docker extends DockerSystem {
    public static async request() {

    }

    readonly Containers: Containers;

    constructor(options: TDockerOptions) {
        super(options);

        this.Containers = new Containers(options);
    }

}

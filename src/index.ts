import System from './module/system';
import Containers from './module/containers';

export * from './type';

export interface IDockerOptions {
    endpoint: string; // socket or http
    version?: string; // docker api version
}

export type TDockerOptions = Partial<IDockerOptions>

export default class Docker extends System {
    public static async request() {

    }

    readonly Containers: Containers;

    constructor(options: TDockerOptions) {
        super(options);

        this.Containers = new Containers(options);
    }

}

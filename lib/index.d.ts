import DockerSystem from './module/docker';
import Containers from './module/containers';
export interface IDockerOptions {
    endpoint: string;
    version: string;
}
export declare type TDockerOptions = Partial<IDockerOptions>;
export default class Docker extends DockerSystem {
    static request(): Promise<void>;
    readonly Containers: Containers;
    constructor(options: TDockerOptions);
}

import DockerBase from '../base';
export default class Containers extends DockerBase {
    list(): Promise<void>;
}

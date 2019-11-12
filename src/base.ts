import { TDockerOptions } from './index';

export default abstract class DockerBase {
    constructor(private readonly options: TDockerOptions) {

    }

    public async request() {
        console.log(this.options);
    }
}

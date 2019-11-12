import { TDockerOptions } from './index';
export default abstract class DockerBase {
    private readonly options;
    constructor(options: TDockerOptions);
    request(): Promise<void>;
}

import DockerBase from '../base';
import { IContainersList, Containers as ContainerList, IContainerCreate, ContainerCreate } from '../type';

export default class Containers extends DockerBase {
    public async list(options: IContainersList): Promise<ContainerList> {
        const list = await this.request('/containers/json', {
            query: options,
        });

        return list;
    }

    public async create({Name, ...options}: IContainerCreate): Promise<ContainerCreate> {
        return this.request('/containers', {
            method: 'POST',
            query: {
                name: Name,
            },
            body: options,
        });
    }
}

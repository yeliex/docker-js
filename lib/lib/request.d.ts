import * as Fetch from 'node-fetch';
import { IDockerOptions } from '../index';
export interface IRequestInit extends Fetch.RequestInit, IDockerOptions {
}
export default function fetch(input: string, init?: IRequestInit): Promise<void>;

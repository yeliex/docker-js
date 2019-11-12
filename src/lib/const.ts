import * as os from "os";

export const PLATFORM = os.platform();

export const DEFAULT_VERSION = '1.40'; // todo: is 1.32 better?

export const DEFAULT_ENDPOINT = PLATFORM === 'win32' ? '//./pipe/docker_engine' : '/var/run/docker.sock';

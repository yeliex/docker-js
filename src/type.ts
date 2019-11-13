export type ContainerHealth = 'starting' | 'healthy' | 'unhealthy' | 'none';
export type ContainerIsolation = 'default' | 'process' | 'hyperv';
export type ContainerStatus = 'created' | 'restarting' | 'running' | 'removing' | 'paused' | 'exited' | 'dead';
export type NetworkMode = 'bridge';

export interface KV<T = string> {
    [key: string]: T;
}

export interface ContainerFilter {
    ancestor?: string | string[];
    before?: string | string[];
    expose?: string | string[];
    exited?: number | number[];
    health?: ContainerHealth | ContainerHealth[];
    id?: string | string[];
    isolation?: ContainerIsolation | ContainerIsolation[];
    isTask?: boolean | boolean[];
    label?: string | string[];
    name?: string | string[];
    network?: string | string[];
    publish?: string | string[];
    since?: string;
    status?: string | string[];
    volume?: string | string[];
}

export interface IContainersList {
    all?: boolean;
    limit?: number;
    size?: number;
    filters?: ContainerFilter;
}

export interface ContainerPort {
    PrivatePort: number;
    PublicPort: number;
    Type: string;
}

export interface ContainerHostConfig {
    MaximumIOps: number;
    MaximumIOBps: number;
    BlkioWeight: number;
    BlkioWeightDevice: any[];
    BlkioDeviceReadBps: any[];
    BlkioDeviceWriteBps: any[];
    BlkioDeviceReadIOps: any[];
    BlkioDeviceWriteIOps: any[];
    ContainerIDFile: string;
    CpusetCpus: string;
    CpusetMems: string;
    CpuPercent: number;
    CpuShares: number;
    CpuPeriod: number;
    CpuRealtimePeriod: number;
    CpuRealtimeRuntime: number;
    Devices: any[];
    IpcMode: string;
    LxcConf: any[];
    Memory: number;
    MemorySwap: number;
    MemoryReservation: number;
    KernelMemory: number;
    OomKillDisable: boolean;
    OomScoreAdj: number;
    NetworkMode: NetworkMode;
    PidMode: string;
    PortBindings: any;
    Privileged: boolean;
    ReadonlyRootfs: boolean;
    PublishAllPorts: boolean;
    RestartPolicy: {
        MaximumRetryCount: number;
        Name: string;
    };
    LogConfig: {
        Type: string;
    };
    Sysctls: KV;
    Ulimits: any[];
    VolumeDriver: string;
    ShmSize: number;
}

export interface ContainerNetwork {
    bridge: {
        NetworkID: string;
        EndpointID: string;
        Gateway: string;
        IPAddress: string;
        IPPrefixLen: number;
        IPv6Gateway: string;
        GlobalIPv6Address: string;
        GlobalIPv6PrefixLen: number;
        MacAddress: string;
    }
}

export interface ContainerNetworkSettings {
    Bridge: string;
    SandboxID: string;
    HairpinMode: boolean;
    LinkLocalIPv6Address: string;
    LinkLocalIPv6PrefixLen: number;
    SandboxKey: string;
    EndpointID: string;
    Gateway: string;
    GlobalIPv6Address: string;
    GlobalIPv6PrefixLen: number;
    IPAddress: string;
    IPPrefixLen: number;
    IPv6Gateway: string;
    MacAddress: string;
    Networks: ContainerNetwork;
}

export interface ContainerMount {
    Name: string;
    Source: string;
    Destination: string;
    Driver: string;
    Mode: string;
    RW: boolean;
    Propagation: string;
}

export interface Container {
    Id: string;
    Name: string[];
    Image: string;
    ImageID: string;
    Command: string;
    Created: number;
    State: ContainerStatus;
    Status: string;
    Ports: ContainerPort[];
    Labels: KV;
    SizeRw: number;
    SizeRootFs: number;
    HostConfig: Omit<ContainerHostConfig, 'NetworkMode'>;
    Mounts: ContainerMount[];
}

export type Containers = Container[];

export type IContainerExposedPorts = KV<any>;

export type IContainerVolumes = KV<any>;

export interface HealthConfig {
    Test: string[];
    Interval: number;
    Timeout: number;
    Retries: number;
    StartPeriod: number;
}

export interface IContainerCreate {
    Name?: string;
    Hostname?: string;
    Domainname?: string;
    User?: string;
    AttachStdin?: boolean;
    AttachStdout?: boolean;
    AttachStderr?: boolean;
    ExposedPorts?: IContainerExposedPorts;
    Tty?: boolean;
    OpenStdin?: boolean;
    StdinOnce?: boolean;
    Env?: string[];
    Cmd?: string[];
    Healthcheck?: Partial<HealthConfig>;
    ArgsEscaped?: boolean;
    Image: string;
    Volumes: IContainerVolumes;
    WorkingDir?: string;
    Entrypoint?: string[];
    NetworkDisabled?: boolean;
    MacAddress?: string;
    OnBuild?: string[];
    Labels?: KV<string>;
    StopSignal?: string;
    StopTimeout?: number;
    Shell?: string;
    HostConfig?: any;
    NetworkingConfig?: any;
}

export interface ContainerCreate {
    Id: string;
    Warnings: string[];
}

export interface AuthOptions {
    username: string;
    password: string;
    serveraddress: string;
    email?: string;
}

export interface AuthResponse {
    Status: string;
    IdentityToken: string;
}

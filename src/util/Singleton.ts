// tslint:disable-next-line:interface-name
export interface Singleton<T> {
    instance: T;
    getInstance(): T;
}

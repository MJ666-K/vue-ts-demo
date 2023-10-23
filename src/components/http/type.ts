export interface IHttp {
    request<T>(method: string, url: string, params?: unknown): Promise<T>;
}
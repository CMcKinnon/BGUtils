import axios from "axios";

export default class HttpClient {
    Get = async (uri: string) => {
        const instance = axios.create();
        try {
            return await instance.get(uri);
        }
        catch (error) {
            console.log('failed', uri, error);
        }
    }

    Put = async (uri: string, data: any) => {
        const instance = axios.create();
        try {
            return await instance.put(uri, JSON.stringify(data));
        }
        catch (error) {
            if (error.response === undefined) {
                return await this.Get(uri);
            } else {
                console.log('failed', error);
                return error.response;
            }
        }
    }

    Post = async (uri: string, data: any) => {
        const instance = axios.create();
        try {
            return await instance.post(uri, JSON.stringify(data));
        }
        catch (error) {
            console.log('failed', uri, error);
        }
    }

    Delete = async (uri: string) => {
        const instance = axios.create();
        try {
            return await instance.delete(uri);
        }
        catch (error) {
            console.log('failed', uri, error);
        }
    }
}

export const httpClient = new HttpClient();
import User from "../contracts/User";
import { httpClient } from "../httpClient";

export default class UsersProvider {
    private usersUriRoot: string

    constructor() {
        this.usersUriRoot = "/api/users";
    }

    GetUser = async (userName: string) => {
        let uri = `${this.usersUriRoot}/${userName}`;
        const response = await httpClient.Get(uri);
        return response;
    }
}

export const usersProvider = new UsersProvider();
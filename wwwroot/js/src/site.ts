import axios, { AxiosInstance, AxiosResponse, AxiosPromise } from "axios";
import Vue from "vue";
import "./_nav/_nav";

export class Application {
    constructor() {

    }
    UseUsersPage = () => {
        let app = new Vue({
            el: "#users-container"
        });
    }
}

export const application = new Application();

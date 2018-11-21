import axios, { AxiosInstance, AxiosResponse, AxiosPromise } from "axios";
import Vue from "vue";
import "./_nav/_nav";
import UsersViewModel from "./view-models/UsersViewModel";

export class Application {
    constructor() {

    }
    UseUsersPage = () => {
        let vm = new UsersViewModel();
        let app = new Vue({
            el: "#users-container"
        });
        this["Users"] = vm;
        return this;
    }
}

export const application = new Application();

import axios from 'axios';

export class AppService {
    constructor() {
        const baseURL = 'https://uniwards-api.herokuapp.com/';
        this.axios = axios.create({ baseURL });
    }

    /**
     * @returns {Promise<import('./transaction').Transaction[]>}
     */
    async transactions() {
        const r = await axios.get('');

        return r.data;
    }
}

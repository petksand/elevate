import axios from 'axios';

export class AppService {
    constructor() {
        const baseURL = 'https://uniwards-api.herokuapp.com/';
        this.axios = axios.create({
            baseURL,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    /**
     * @returns {Promise<import('./transaction').Transaction[]>}
     */
    async transactions() {
        const r = await this.axios.get('');
        return r.data;
    }
}

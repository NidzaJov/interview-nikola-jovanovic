import { config } from '../config';

class FetchService {
    static async postRequest(url, payload) {
        return await fetch(`${config.API_URL}/${url}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
    }

    static async getRequest(url) {
        return await fetch(`${config.API_URL}/${url}`, {
            method: 'GET',
        })
    }

    static async putRequest(url, payload) {
        return await fetch(`${config.API_URL}/${url}/${payload._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }) 
    }

    static async deleteRequest(url, payload) {
        return await fetch(`${config.API_URL}/${url}/${payload}`, {
            method: 'DELETE',
        })
    }

    static async patchRequest(url, payload) {
        return await fetch(`${config.API_URL}/${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    }
}

export { FetchService };
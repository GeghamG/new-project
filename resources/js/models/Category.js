import axios from "axios";
const url = "https://evening-headland-21583.herokuapp.com/api/categories";

export default class Category {
    constructor(category = {}) {
        this._id = category._id || null;
        this.name = category.name || "";
        this.parent = category.parent || "";
        this.children = category.children || [];
    }

    // static get = () => axios.get(url);
    static get(url){ axios.get(url)};
    static post({ name, parent }){
        console.log(parent);
        if (parent) return axios.post(url, { name, parent });
        else return axios.post(url, { name });
    };

    static put({ _id, name, parent }){
        if (parent) return axios.put(`${url}/${_id}`, { name, parent });
        else return axios.put(`${url}/${_id}`, { name });
    };

    static delete(_id){ axios.delete(`${url}/${_id}`)};
}

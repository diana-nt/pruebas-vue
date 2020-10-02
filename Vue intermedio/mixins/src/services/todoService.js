import Service from "./Service";


const resource = 'todos';

export default {
    async get(){
        return await Service.get(resource);
    },

    create(data){
        return Service.post(resource, data);
    },
    delete(id){
        return Service.delete(resource, id);
    }
}
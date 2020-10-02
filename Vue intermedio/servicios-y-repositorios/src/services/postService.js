import Service from "@/services/Service";

const resource = 'posts';

export default {
    get() {
        return Service.get(resource);
    }
}
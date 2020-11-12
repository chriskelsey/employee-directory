import axios from 'axios';

const url = 'https://randomuser.me/api/?nat=us&results=50';

export default {
    search: function(){
        return axios.get(url);
    }
};
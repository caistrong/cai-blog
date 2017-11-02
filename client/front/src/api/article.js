import Axios from 'axios'

// if(typeof window == "undefined"){
//     Axios.defaults.adapter.baseURL = "http://127.0.0.1:8889"
// }

export default {
    getAllArticles(){
        return Axios.get('http://127.0.0.1:8889/api/articles')
    }
}
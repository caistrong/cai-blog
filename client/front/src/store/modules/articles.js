import * as types from '../mutations-types'
import articleApi from '../../api/article'
const state = {
    currentArticle:{
        id:'',
        content:''
    },
    ArticlesArr:[]
}

const getters = {
    articlesArr:state=>state.ArticlesArr,
}

const actions = {
    async getAllArticles({commit,state}){
        //PostsArr接收到的是啥啊
        await articleApi.getAllArticles().then((res)=>{
            console.log(__dirname+'actions 执行')
            console.log(res.data.articleArr)
            commit(types.GET_ARTICLES,{ ArticlesArr:res.data.articleArr })
        })
        
    }
}

const mutations = {
    [types.GET_ARTICLES](state,payload){
        state.ArticlesArr=payload.ArticlesArr
        console.log('mutations 也执行了')
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
import * as types from '../mutations-types'
import articleApi from '../../api/article'
const state = {
    currentArticle:{
        id:'1',
        title:'biaoti2',
        creatTime:'2015-5-5',
        summary:'summary',
        content:'content'
    },
    ArticlesArr:[{
        id:'1',
        title:'文章标题1',
        creatTime:'2017-11-4',
        summary:'文章概要1文章概要1文章概要1',
        content:`文章内容1文章内容1文章内容1文章内容1文章内容1
        文章内容1文章内容1文章内容1文章内容1文章内容1文章内容1
        文章内容1文章内容1文章内容1文章内容1文章内容1文章内容1
        文章内容1文章内容1文章内容1文章内容1文章内容1文章内容1
        文章内容1文章内容1`
    },{
        id:'2',
        title:'文章标题2',
        creatTime:'2017-11-3',
        summary:'文章概要2文章概要2文章概要2',
        content:`文章内容2文章内容2文章内容2文章内容2文章内容2
        文章内容2文章内容2文章内容2文章内容2文章内容2文章内容2
        文章内容2文章内容2文章内容2文章内容2文章内容2文章内容2
        文章内容2文章内容2文章`
    }]
}

const getters = {
    articlesArr:state=>state.ArticlesArr,
    article:state=>state.currentArticle
}

const actions = {
    async getAllArticles({commit,state}){
        await articleApi.getAllArticles().then((res)=>{
            console.log(__dirname+'actions 执行')
            console.log(res.data.articleArr)
            commit(types.GET_ARTICLES,{ ArticlesArr : res.data.articleArr })
        })   
    },
    async getArticle({commit,state},id){
        console.log('dispatch actions ok!')
        await articleApi.getArticle(id).then(res=>{
            commit(types.GET_ARTICLE,{ article : res.data.article })
            console.log('提交了commit'+res.data.article)
        })
    }
}

const mutations = {
    [types.GET_ARTICLES](state,payload){
        state.ArticlesArr=payload.ArticlesArr
        console.log('mutations 也执行了')
    },
    [types.GET_ARTICLE](state,payload){
        state.currentArticle= payload.article
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
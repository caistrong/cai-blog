import ArticleModel from '../models/article.js'


class ArticleController{

    //将方法前面写成async是因为这个方法中有IO操作，用异步性能更佳
    static async postArticle(ctx){
        const title = ctx.request.body.title;
        const summary = ctx.request.body.summary;
        const content = ctx.request.body.content;
        const publish = ctx.request.body.publish;
        const createTime = new Date();//当前时间

        //对输入的数据先进行一层检验
        if (title == '') {
            ctx.throw(400, '标题不能为空')
         }
        if (content == '') {
            ctx.throw(400, '文章内容不能为空')
        }
        //new一个文章实例出来
        const article = new ArticleModel({
            title,
            content,
            summary,
            publish,
            createTime
        })
        //以上是ES 6的新写法，你可以使用简写属性来消除对象属性名和本地变量名的重复。
        //当对象属性名和本地变量名相同时，你可以省略冒号与值
         
        //await加在耗时时间前，这里是IO操作-写数据库
        let postResult = await article.save().catch( err =>{
            ctx.throw(500,'服务器内部错误')
        })

        console.log('文章创建成功');

        //  ??? 这里的postResult是什么数据
        ctx.body={
            success:true,
            article:postResult
        }
    }

    static async getAllArticles(ctx){
        let articleArr;

        articleArr = await ArticleModel.find()
            .sort({createTime:-1})
            .catch(err =>{
                ctx.throw(500,'服务器内部错误')
            })
        
        ctx.body = {
            success:true,
            articleArr
        }
    }

    static async getArticle(ctx){
        const id = ctx.params.id;
        console.log(id)
        if(id==''){
            ctx.throw(400,'id不能为空')
        }
        const article = await ArticleModel.findById(id).catch(err=>{
            if(err.name === 'CastError'){
                ctx.throw(400,'id不存在')
            }else{
                ctx.throw(500,'服务器内部错误')
            }
        })
        ctx.body = {
            success: true,
            article: article
        }
    }

    static async deleteArticle(ctx){
        const id = ctx.params.id;
        const article = await ArticleModel.findByIdAndRemove(id).catch(err=>{
            if(err.name === 'CastError'){
                ctx.throw(400,'id不存在')
            }else{
                ctx.throw(500,'服务器错误')
            }
        });
        ctx.body = {
            success: true
        }
    }
}

export default ArticleController;
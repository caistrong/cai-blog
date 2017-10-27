//如果所有中间件都在server/index.js中引入并使用
//当程序逻辑复杂之后server/index.js会变得太大而且难以维护
//有时候我们自己也要写一些自定义的中间件
//因此建立了middleware目录

import convert from 'koa-convert';
//用generator方式开发的中间件要经过convert才能在Koa2中使用
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';



export default function middleware(){
    return convert.compose(
        logger(),
        bodyParser()
    )
}
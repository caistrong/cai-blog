import koa  from 'koa' ;
import staticServer from 'koa-static';
import mongoose from 'mongoose';
import middleware from './middleware';
import config from './configs';
import router from './routes';
import onerror from 'koa-onerror';
import path from 'path';

import cors from 'koa2-cors';
//koa-onerror will automatic set err.status as response status code,
//and err.headers as response headers.


// mongoose.Promise是可以配置的,这里是ES6默认
// 使用第三方库mongoose.Promise = require ('bluebird')
mongoose.Promise = Promise;


//连接数据库
mongoose.connect(config.mongodb.url,{
  useMongoClient:true,
});
mongoose.connection.on('error',console.error);

const app = new koa();

app.use(middleware());
onerror(app);

//允许跨域
app.use(cors());
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../client/static';

app.use(staticServer(
  path.join( __dirname,  staticPath)
));

app.use(router.routes()).use(router.allowedMethods());

app.listen(config.app.port,()=>{
  console.log('The server is running at http://localhost:' + config.app.port);
});

export default app;

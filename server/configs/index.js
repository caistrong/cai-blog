//存放一些静态的配置

const config = {
  app: {
    port: process.env.PORT || 8889,
  },
  mongodb: {
    url: 'mongodb://localhost:27017/cai-blog'
  },
//   mongodbSecret: { //mongodb用户和密码
//     user: '',
//     pass: ''
//   },
  admin: {  //后台初始化的用户名密码
  	user: 'admin',
  	pwd: 'password'
  }
}

export default config;

const Axios = require ('axios')



Axios.get('http://127.0.0.1:8889/api/articles').then((res)=>{
    console.log(res.data.articleArr)
}).catch((err)=>{
    console.log(err)
})

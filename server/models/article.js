import mongoose from  'mongoose'
import moment from 'moment'
moment.locale('zh-cn')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:String,
    summary:String,
    content:String,
    publish:{
        type:Boolean,
        default:false
    },
    createTime:{
        type:Date
    }
})

articleSchema.set('toJSON', { getters: true, virtuals: true });
articleSchema.set('toObject', { getters: true, virtuals: true });
articleSchema.path('createTime').get(function(v) {
  return moment(v).format('LLL');
});
export default mongoose.model('article', articleSchema);

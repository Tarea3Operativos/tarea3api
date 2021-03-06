// Third party.
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const repoUsersSchema = new mongoose.Schema({
  username   : {type : String, required : true},
  password   : {type : String, required : true},
  superAdmin : { type : Boolean, default : false },
}, {
  timestamps : true,
});

repoUsersSchema.plugin(mongoosePaginate);

export default mongoose.model('repoUsers', repoUsersSchema);

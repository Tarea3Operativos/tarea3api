// Third party.
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const foldersSchema = new mongoose.Schema({
  name       : { type : String },
  repoUserId : { type : mongoose.Schema.Types.ObjectId, ref : 'repoUsers' },
  delete     : { type : Boolean, default : true },
  edit       : { type : Boolean, default : true },
  add        : { type : Boolean, default : true },
  view       : { type : Boolean, default : true },
}, {
  timestamps : true,
});

foldersSchema.plugin(mongoosePaginate);

export default mongoose.model('folders', foldersSchema);

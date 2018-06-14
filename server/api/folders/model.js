// Third party.
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const foldersSchema = new mongoose.Schema({
  name       : { type : String },
  repoUserId : { type : String },
  delete     : { type : Boolean },
  edit       : { type : Boolean },
  add        : { type : Boolean },
  view       : { type : Boolean },
}, {
  timestamps : true,
});

foldersSchema.plugin(mongoosePaginate);

export default mongoose.model('folders', foldersSchema);

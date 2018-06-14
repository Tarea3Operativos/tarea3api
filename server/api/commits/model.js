// Third party.
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const commitsSchema = new mongoose.Schema({
  repoUserId : { type : mongoose.Schema.Types.ObjectId, ref : 'repoUsers' },
  message    : { type : String },
  folderId   : { type : mongoose.Schema.Types.ObjectId, ref : 'folders' },
}, {
  timestamps : true,
});

commitsSchema.plugin(mongoosePaginate);

export default mongoose.model('commits', commitsSchema);

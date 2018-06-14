// Models
import CommitsModel from './model';
import FoldersModel from '../folders/model';

export default class FoldersActions {

  async commitsByFolderAndUser (req, res) {
    try {
      const exist = await CommitsModel.find({repoUserId : req.body.repoUserId, folderName : req.body.folderName });
      if (exist) {
        res.created(false, exist, 'Commits found successfully');
      } else {
        res.created(true, false, 'Commits not found');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error creating document');
    }
  }

  async addCommit (req, res) {
    try {
      const folder = await FoldersModel.findOne({folderName : req.body.folderName });
      if (folder) {
        const newCommit = new CommitsModel({
          message    : req.body.message,
          repoUserId : req.body.repoUserId,
          folderId   : folder._id,
        });
        await newCommit.save();
        res.created(false, newCommit, 'Commit created successfully');
      } else {
        res.created(true, false, 'Folder name not found successfully');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error creating document');
    }
  }
}

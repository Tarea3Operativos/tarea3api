// Models
import FoldersModel from './model';
import RepoUsersModel from '../repoUsers/model';

export default class FoldersActions {

  async foldersByUser (req, res) {
    try {
      const exist = await FoldersModel.find({repoUserId : req.body.repoUserId});
      if (exist) {
        res.created(false, exist, 'Folders found successfully');
      } else {
        res.created(false, false, 'Folders not found');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error creating document');
    }
  }

  async validatePermission (req, res) {
    try {
      const exist = await FoldersModel.findOne({name : req.body.name, repoUserId : req.body.repoUserId});
      if (exist) {
        res.created(false, exist, 'Folder found successfully');
      } else {
        res.created(true, false, 'Folder not found');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error creating document');
    }
  }

  async addFolder (req, res) {
    try {
      const existUser = await RepoUsersModel.findOne({username : req.body.name});
      if (existUser) {
        const existFolder = await FoldersModel.findOne({name : req.body.name});
        if (existFolder) {
          const query = { _id : existFolder._id };
          const update = { $set : {
            repoUserId : existUser._id,
            name       : req.body.name,
            delete     : req.body.delete,
            edit       : req.body.edit,
            add        : req.body.add,
            view       : req.body.view,
          }};
          const options = { new : true };
          await FoldersModel.findOneAndUpdate(query, update, options);
          res.created(false, true, 'Folder permissions updated successfully');
        } else {
          const data = {
            repoUserId : existUser._id,
            name       : req.body.name,
            delete     : req.body.delete,
            edit       : req.body.edit,
            add        : req.body.add,
            view       : req.body.view,
          };
          const newFolder = new FoldersModel(data);
          await newFolder.save();
          res.created(false, true, 'Folder permissions updated successfully');
        }
      } else {
        res.created(false, false, 'User not exist successfully');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error creating document');
    }
  }
}

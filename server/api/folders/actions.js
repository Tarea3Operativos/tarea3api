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
      const user = await RepoUsersModel.findOne({username : req.params.username});
      const exist = await FoldersModel.findOne({name : req.params.name, repoUserId : user._id });
      if (exist) {
        res.created(false, exist, 'Folder found successfully');
      } else {
        res.created(true, false, 'Folder not found');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error creating document');
    }
  }
  async getFolders (req, res) {
    try {
      const folders = await FoldersModel.find();
      if (folders) {
        res.created(false, folders, 'folders');
      } else {
        res.created(true, null, 'Not folders');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error loggin in');
    }
  }

  async addFolder (req, res) {
    try {
      const existUser = await RepoUsersModel.findOne({username : req.body.username});
      if (existUser) {
        const existFolder = await FoldersModel.findOne({name : req.body.name, repoUserId : existUser._id });
        if (existFolder) {
          const query = { _id : existFolder._id };
          const update = { $set : {
            repoUserId : existUser._id,
            name       : req.body.name,
            delete     : req.body.delete === '1',
            edit       : req.body.edit === '1',
            add        : req.body.add === '1',
            view       : req.body.view === '1',
          }};
          const options = { new : true };
          await FoldersModel.findOneAndUpdate(query, update, options);
          res.created(false, true, 'Folder permissions updated successfully');
        } else {
          const data = {
            repoUserId : existUser._id,
            name       : req.body.name,
            delete     : req.body.delete === '1',
            edit       : req.body.edit === '1',
            add        : req.body.add === '1',
            view       : req.body.view === '1',
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

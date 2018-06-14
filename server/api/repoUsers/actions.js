// Models
import repoUsersModel from './model';

export default class RepoUsersActions {

  async login (req, res) {
    try {
      const user = await repoUsersModel.findOne({username : req.body.username, password : req.body.password});
      if (user) {
        res.created(false, user, 'User logged successfully');
      } else {
        res.created(true, null, 'Username or password incorrect');
      }
      res.ok(null, user, 'User logged in');
    } catch (err) {
      res.badRequest(err, null, 'Error loggin in');
    }
  }

  async getUsers (req, res) {
    try {
      const users = await repoUsersModel.find();
      if (users) {
        res.created(false, users.map(user => user.username), 'Users');
      } else {
        res.created(true, null, 'Not Users');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error loggin in');
    }
  }

  async createUser (req, res) {
    try {
      const exist = await repoUsersModel.findOne({username : req.body.username});
      if (exist) {
        res.created(true, exist, 'This username already exist');
      } else {
        const newUser = await repoUsersModel.create(req.body);
        res.created(false, newUser, 'User successfully created');
      }
    } catch (err) {
      res.badRequest(err, null, 'Error creating document');
    }
  }
}

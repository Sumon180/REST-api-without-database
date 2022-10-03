let users = require("../models/usersModel");
const { v4: uuidv4 } = require("uuid");

// get users
const getAllusers = (req, res) => {
  res.status(200).json({ users });
};

// create users
const createUser = (req, res) => {
  const newUsers = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUsers);
  res.status(2001).json(users);
};

// update users
const updateUser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.email = email;
    });
  res.status(200).json(users);
};

// delete users
const deleteUser = (req, res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);
  res.status(200).json(users);
};

module.exports = { getAllusers, createUser, updateUser, deleteUser };

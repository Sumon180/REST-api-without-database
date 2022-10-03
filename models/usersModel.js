const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "sumon hossain",
    email: "abc@gmail.com",
  },
  {
    id: uuidv4(),
    username: "rakibul islam",
    email: "abcdef@gmail.com",
  },
];

module.exports = users;

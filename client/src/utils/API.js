import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (usertype, username, email, password) => {
    return axios.post('api/signup', {usertype: usertype, username: username, email: email, password: password});
  }
};

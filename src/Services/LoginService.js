import axios from "axios";

export default class LoginService {
  static login(email, password) {
    axios
      .post("https://frontend-screening-v1.herokuapp.com/login", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
        // return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  static getOrder() {
    axios
      .get("https://frontend-screening-v1.herokuapp.com/order", {
        headers: {
          Authorization:
            "f428d380583f81dff5d148c13da798bb9d59e9bf0f6862d137f0a19566d50626",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

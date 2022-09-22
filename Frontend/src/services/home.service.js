import http from "../http-common";

class HomeDataService {
  static sayHiToServer() {
    return http.get('/');
  }

  static sayHiToServerWithName() {
    const name = "Eagle Head"
    console.log(params)
    return http.get('/', {params: {name:  name}})
  }
};

export default HomeDataService;
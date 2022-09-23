import http from "../http-common";

class HomeDataService {
  static sayHiToServer() {
    return http.get('/');
  }

  static sayHiToServerWithName() {
    return http.get('/', {params: {name: "Eagle Head"}})
  }
};

export default HomeDataService;
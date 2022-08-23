import http from "../http-common";

class HomeDataService {
  static sayHiToServer() {
    return http.get('/');
  }
};

export default HomeDataService;
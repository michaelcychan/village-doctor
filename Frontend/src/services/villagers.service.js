import http from "../http-common";

class VillagerDataService {
  static signUpVillager(villagerSignUpInfo) {
    return http.post('/villagers/addnewvillager', villagerSignUpInfo);
  }

  static logInVillager(villagerLogInInfo) {
    return http.post('/villagers/log-in', villagerLogInInfo);
  }
  
  getAll(page = 0){
    return http.get(`/villagers/show?page=${page}`);
  }

  createBooking(data){
    return http.post('/villagers/new', data);
  }
};

export default VillagerDataService;
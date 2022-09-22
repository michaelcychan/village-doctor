import http from "../http-common";

class VillagerDataService {
  static signUpVillager(villagerSignUpInfo) {
    return http.post('/villagers/addnewvillager', villagerSignUpInfo);
  }

  static logInVillager(villagerLogInInfo) {
    return http.post('/villagers/log-in', villagerLogInInfo);
  }

  static getAllStock = (page = 1) => {
    return http.get(`/store/view?page=${page}`);
  }
  
  getAll(page = 0){
    return http.get(`/villagers/show?page=${page}`);
  }

  static createBooking(data){
    return http.post('/bookings/new', data);
  }
};

export default VillagerDataService;
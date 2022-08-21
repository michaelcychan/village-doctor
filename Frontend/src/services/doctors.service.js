import http from "../http-common";

const DoctorService = () => {
  const getAllStock = (page = 0) => {
    return http.get(`/doctor/show?page=${page}`);
  }

  const createBooking = (data) => {
    return http.post('/doctors/new', data);
  }

  const logIn = data => {
    return http.post('/doctors/new', data)
  }
}

export default DoctorService;
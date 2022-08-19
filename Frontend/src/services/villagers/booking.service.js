import http from "../../http-common";

const BookingService = () => {
  const getAll = (page = 0) => {
    return http.get(`/villagers/show?page=${page}`);
  }

  const createBooking = (data) => {
    return http.post('/villagers/new', data);
  }
}

export default BookingService;
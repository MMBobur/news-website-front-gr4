import { service } from ".";

export default {
  getAll: () => service.get("/news"),
  getOne: (id) => service.get(`/news/${id}`),
};

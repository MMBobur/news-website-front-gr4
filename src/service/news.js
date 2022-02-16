import { service } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/news"),
  getOne: (id) => service.get(`/news/${id}`),
};

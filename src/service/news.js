import { service } from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: () => service.get("/news"),
  create: (data) => service.post("/news", data),
  update: (id, data) => service.put(`/news/${id}`, data),
  delete: (id) => service.delete(`/news/${id}`),
};

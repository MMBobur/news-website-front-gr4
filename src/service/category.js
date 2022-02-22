import { service } from ".";
export default {
  getCounted: () => service.get("/category/count"),
  getOne: (id) =>  service.get(`/category/${id}`),
};

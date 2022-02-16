import { service } from ".";
export default {
  getCounted: () => service.get("/category/count"),
};

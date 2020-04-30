import serviceFactory from "./handlers";

const service = serviceFactory("kasboek");

export default {
  service: service,
  getKasboek() {
    return service.get("*").then((res) => {
      const kasboek = res.data;
      return kasboek;
    });
  },
  deleteKasboek(kasboekId) {
    return service.delete(`/${kasboekId}`).then((res) => {
      const kasboek = res.data.kasboek;
      return kasboek;
    });
  },
  postCSV(json_info) {
    console.log("about to post");
    return service
      .post(`/kasboek`, { newKasboekRow: json_info })
      .then((res) => {
        return res.data;
      });
  },
};

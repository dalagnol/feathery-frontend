import { API } from "services";

export default new (class TestService {
  public async ping(): Promise<string> {
    try {
      const { data } = await API.get("/ping");
      return data;
    } catch (oof) {
      return "Unable to connect. Is dk-back running?";
    }
  }
})();

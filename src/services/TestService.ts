import { api } from "services";

export default new (class TestService {
  public async ping(): Promise<string> {
    const { data } = await api.get("/ping");
    return data;
  }
})();

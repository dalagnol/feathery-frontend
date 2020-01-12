import API from "./connection";

export default new (class UserService {
  public async Authenticate(form: any) {
    try {
      const { data } = await API.post("/login", form);
      return data;
    } catch (oof) {
      console.log(oof);
    }
  }
})();

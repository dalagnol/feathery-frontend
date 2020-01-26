import API from "./api";

export default new (class UserService {
  public async Authenticate(form: any) {
    const { data } = await API.post("/login", form);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data.user;
  }

  public async Register(form: any) {
    const { data } = await API.post("/user", form);
    return data;
  }
})();

import { observable, computed, toJS } from "mobx";

class UserStore {
  @observable private User: any = JSON.parse(localStorage.getItem("user")!);
  @observable private Loading = false;

  @computed public get user() {
    return toJS(this.User);
  }

  public set user(data: any) {
    if (
      data.id &&
      data.name &&
      data.identifier &&
      data.email &&
      localStorage.getItem("token")
    ) {
      this.User = data;
    } else {
      this.User = null;
    }
  }

  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.User = null;
  }

  @computed public get loading() {
    return this.Loading;
  }
}

export default new UserStore();

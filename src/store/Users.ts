import { observable, computed, toJS } from "mobx";

class UserStore {
  @observable private User: any;
  @observable private Loading = false;

  constructor() {
    this.user = JSON.parse(localStorage.getItem("user")!);
  }

  @computed public get user() {
    return toJS(this.User);
  }

  public set user(data: any) {
    if (data) {
      if (
        data.id &&
        data.name &&
        data.identifier &&
        data.email &&
        localStorage.getItem("token")
      ) {
        this.User = data;
        if (this.User.picture) {
          this.User.picture = `data:image/png;base64,${this.User.picture}`;
        }
      } else {
        this.User = null;
      }
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

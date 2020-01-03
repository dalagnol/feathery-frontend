import React from "react";
import { withRouter } from "react-router-dom";

function Main({ history }: any) {
  return (
    <div>
      <h1>Welcome</h1>
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        About Us
      </button>
    </div>
  );
}

export default withRouter(Main);

import React from "react";
import moment from "moment";

export default function Event({ agent, log, timestamp }: any) {
  return (
    <div>
      <p>{log}</p>
      <div>
        <span>{agent}</span>
        <b>{moment(timestamp).fromNow()}</b>
      </div>
    </div>
  );
}

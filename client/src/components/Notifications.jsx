import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "../SocketContext";

export default function Notifications() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  console.log(call.isReceivedCall, callAccepted);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{call.name} is Calling: </h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
}

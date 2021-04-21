import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();

  return (
    <>
      {/* For testing purposes right now, ignore styling */}
      <p>Dashboard</p>
      <p>User:</p>
      <button
        onClick={() => {
          history.push("/login");
        }}
      >
        Logout
      </button>
    </>
  );
}

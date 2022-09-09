import { useState } from "react";

export default function Box() {
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  return <div style={styles} className="box"></div>;
}

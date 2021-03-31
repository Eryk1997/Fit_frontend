import React, { useState } from "react";

function Front() {
  const [title, setTitle] = useState("Praca inżynierska Jakub Kaczuszka");

  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default Front;

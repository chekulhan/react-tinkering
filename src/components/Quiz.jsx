import { useState } from "react";

export default function Quiz() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName_Change(e) {
    setFirstName(e.target.value);
  }

  function handleLastName_Change(e) {
    setLastName(e.target.value);
  }

  const fullName = firstName + " " + lastName;

  return (
    <>
      <h1>Quick quiz</h1>
      <p>Question goes here...</p>
      <input value={firstName} onChange={handleFirstName_Change}></input>
      <input value={lastName} onChange={handleLastName_Change}></input>
      <p>You are typing: {fullName}</p>
    </>
  );
}

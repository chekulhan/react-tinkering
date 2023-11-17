import { useState } from "react";

function AlertButton({ title, message }) {
  return <button onClick={() => alert(message)}>{title}</button>;
}

export default function Quiz() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName_Change(e) {
    setFirstName(e.target.value);
  }

  function handleLastName_Change(e) {
    setLastName(e.target.value);
  }

  function handle_Click() {
    alert("you clicked me!");
  }

  const fullName = firstName + " " + lastName;

  return (
    <>
      <h1>Quick quiz</h1>
      <p>Question goes here...</p>
      <input value={firstName} onChange={handleFirstName_Change}></input>
      <input value={lastName} onChange={handleLastName_Change}></input>
      <p>You are typing: {fullName}</p>
      <button onClick={handle_Click}>Click me - {firstName}</button>
      <AlertButton title="Here I am" message="You clicked me" />
      <AlertButton title="I amnot heream" message="And me" />
    </>
  );
}

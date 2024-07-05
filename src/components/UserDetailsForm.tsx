import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetailsForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name == "" || phoneNumber == "" || email == "") {
      return alert("All fields are required!");
    }

    // save data to local storage
    localStorage.setItem(
      "user_details",
      JSON.stringify({
        name,
        phoneNumber,
        email,
      })
    );

    // clear all fields
    setName("");
    setEmail("");
    setPhoneNumber("");

    // display success message and navigate to next page
    alert("User details successfully saved to local storage!");
    navigate("/second-page");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        size="small"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        size="small"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default UserDetailsForm;

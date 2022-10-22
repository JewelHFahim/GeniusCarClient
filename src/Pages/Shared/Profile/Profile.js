import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Profile = () => {

  const {user} = useContext(AuthContext);
  const photoURLRef = useRef(user.photoURL);
  

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value; 
    console.log(name, event.target.photoURL.value);
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly defaultValue={user?.email} name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL </Form.Label>
          <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} name="photoURL" type="photoURL" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={user?.displayName}
            name="name"
            type="name"
            placeholder="name"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;

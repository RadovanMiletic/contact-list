import React, { useState } from "react";
import "./AddContact.scss";

const AddContact = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");

  const addContactHandler = () => {
    const newData = [...props.data, { firstName, lastName, img: photo }];
    props.setDataHandler(newData);
    props.toggle();
  };
  return (
    <div>
      <div className="add-contact">
        <div className="overlay">
          <div className="add-contact-content">
            <h1>Add New Contact</h1>
            <label for="firstName">First name:</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              value={firstName}
              name="firstName"
            />
            <label for="lastName">Last name:</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              value={lastName}
              name="lastName"
            />
            <label for="photo">Photo:</label>
            <input
              onChange={(e) => setPhoto(e.target.value)}
              type="text"
              value={photo}
              name="photo"
            />
            <div>
              <button
                className="add-contact-button"
                onClick={() => addContactHandler()}
              >
                Save
              </button>
              <button className="add-contact-button" onClick={props.toggle}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

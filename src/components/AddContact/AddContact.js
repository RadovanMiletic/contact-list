import React, { useState } from "react";
import "./AddContact.scss";

const AddContact = (props) => {
  return (
    <div>
      <div className="add-contact">
        <div className="overlay">
          <div className="add-contact-content">
            <h1>Add New Contact</h1>
            <label for="firstName">First name:</label>
            <input type="text" name="firstName" />
            <label for="lastName">Last name:</label>
            <input type="text" name="lastName" />
            <label for="photo">Photo:</label>
            <input type="text" name="photo" />
            <div>
              <button className="add-contact-button" onClick={props.addContact}>
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

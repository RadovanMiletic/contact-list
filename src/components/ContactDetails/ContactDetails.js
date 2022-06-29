import React, { useState } from "react";
import "./ContactDetails.css";

const ContactDetails = (props) => {
  const [firstNameVal, setFirstNameVal] = useState(
    props.contactDetails.firstName
  );
  const [secondNameVal, setSecondNameVal] = useState(
    props.contactDetails.lastName
  );
  const [emailVal, setEmailVal] = useState(props.contactDetails.email);
  const [checkValue, setCheckValue] = useState(props.contactDetails.favourite);
  const [editable, setEditable] = useState(true);
  return (
    <div className="contact-details">
      <div className="overlay">
        <div className="contact-details-content">
          <img src={props.contactDetails.img} alt="" />
          <div className="details">
            <label for="first-name">First Name:</label>
            <input
              name="first-name"
              disabled={editable}
              id="name-value"
              type="text"
              defaultValue={firstNameVal}
            />
            <label for="second-name">Second Name:</label>
            <input
              name="second-name"
              disabled={editable}
              id="name-value"
              type="text"
              defaultValue={secondNameVal}
            />
            <label for="email">Email:</label>
            <input
              name="email"
              disabled={editable}
              id="email-value"
              type="email"
              defaultValue={emailVal}
            />
            <div>
              <label for="favourite">Favourite:</label>
              <input
                disabled={editable}
                type="checkbox"
                id="favourite"
                name="favourite"
                defaultChecked={checkValue}
              ></input>
            </div>
          </div>
          <br></br>
          <div>
            <button
              className="contact-details-buttons edit"
              onClick={() => {
                setEditable(false);
                setCheckValue(null);
              }}
            >
              Edit
            </button>
            <button className="contact-details-buttons" onClick={props.toggle}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

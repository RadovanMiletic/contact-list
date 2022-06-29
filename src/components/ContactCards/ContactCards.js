import React, { useState } from "react";
import "./ContactCards.css";
import "../Modal/Modal";
import Modal from "../Modal/Modal";
import ContactDetails from "../ContactDetails/ContactDetails";
import AddContact from "../AddContact/AddContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
const ContactCards = (props) => {
  const contacts = [
    {
      key: Math.random(),
      firstName: "Ivan",
      lastName: "Ivanovic",
      img: "https://randomuser.me/api/portraits/men/35.jpg",
      email: "ivan@gmail.com",
      favourite: false,
    },
    {
      key: Math.random(),
      firstName: "Milan",
      lastName: "Mitrovic",
      img: "https://randomuser.me/api/portraits/men/28.jpg",
      email: "milan@gmail.com",
      favourite: true,
    },
    {
      key: Math.random(),
      firstName: "Stefan",
      lastName: "Krejovic",
      img: "https://randomuser.me/api/portraits/men/91.jpg",
      email: "stefan@gmail.com",
      favourite: false,
    },
    {
      key: Math.random(),
      firstName: "Radovan",
      lastName: "Miletic",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      email: "radovan@gmail.com",
      favourite: true,
    },
    {
      key: Math.random(),
      firstName: "Goran",
      lastName: "Mitrovic",
      img: "https://randomuser.me/api/portraits/men/61.jpg",
      email: "goran@gmail.com",
      favourite: true,
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [modal, setModal] = useState(false);
  const [contactDetails, setContactDetails] = useState(false);
  const [addContact, setAddContact] = useState(false);

  const filteredContacts = contacts.filter(
    (contact) => contact.favourite === true
  );

  const [fData, setFData] = useState(filteredContacts);
  const [data, setData] = useState(contacts);

  const [index, setIndex] = useState(null);

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setData(data);
      setFData(fData);
    } else {
      const filteredData = contacts.filter((contact) => {
        return Object.keys(contact).some((key) => {
          return contact[key]
            .toString()
            .toLowerCase()
            .includes(lowerCaseValue);
        });
      });
      const filterFData = filteredContacts.filter((contact) => {
        return Object.keys(contact).some((key) => {
          return contact[key]
            .toString()
            .toLowerCase()
            .includes(lowerCaseValue);
        });
      });
      setData(filteredData);
      setFData(filterFData);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleContactDetails = () => {
    setContactDetails(!contactDetails);
  };

  const toggleAddContact = () => {
    setAddContact(!addContact);
  };

  const deleteContactHandler = (index) => {
    const contactList = [...data];
    contactList.splice(index, 1);
    setData(contactList);
  };

  const addContactHandler = () => {};

  return (
    <div className="cards">
      <FontAwesomeIcon
        icon={faPlusCircle}
        onClick={toggleAddContact}
        className="add-button"
      />
      <input
        className="search-input"
        value={searchText}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        type="text"
        placeholder="type here to filter..."
      />
      <h2>All Contacts</h2>
      <div className="all-contacts">
        {data.map((contact, index) => {
          return (
            <div className="card" key={contact.key}>
              <img
                className="contact-img"
                onClick={() => {
                  toggleContactDetails();
                  setIndex(index);
                }}
                src={contact.img}
              />
              <p>{contact.firstName + " " + contact.lastName}</p>

              <FontAwesomeIcon
                icon={faTrashAlt}
                className="buttons"
                onClick={() => {
                  setIndex(index);
                  toggleModal();
                }}
              />
              <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </div>
          );
        })}
      </div>
      <h2>Favourite Contacts</h2>
      <div className="filtered-contacts">
        {fData.map((contact, index) => {
          return (
            <div className="card" key={contact.key}>
              <img src={contact.img} />
              <p>{contact.firstName + " " + contact.lastName}</p>
            </div>
          );
        })}
      </div>

      {modal && (
        <Modal
          toggle={toggleModal}
          deleteContact={() => deleteContactHandler(index)}
        />
      )}
      {contactDetails && (
        <ContactDetails
          toggle={toggleContactDetails}
          contactDetails={contacts[index]}
        />
      )}
      {addContact && (
        <AddContact
          data={data}
          setDataHandler={setData}
          toggle={toggleAddContact}
        />
      )}

      {data.length === 0 && <span>No contacts found to display...</span>}
    </div>
  );
};

export default ContactCards;

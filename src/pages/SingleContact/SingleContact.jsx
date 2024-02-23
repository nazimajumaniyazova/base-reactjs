import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { apiContacts } from "../../api/contacts/apiContacts";

const SingleContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      if (id) {
        const res = await apiContacts.getContact(id);
        setContact(res);
      }
    };
    fetchContacts();
  }, [id]);

  if (!contact) {
    return <div>Loading contact...</div>;
  }

  return (
    <div>
      <h1>{contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <Button type="primary" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default SingleContact;

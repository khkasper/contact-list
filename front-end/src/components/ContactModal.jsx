import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { ContactsContext } from '../context/ContactsProvider';
import fieldsValidation from '../utils/validation';

const customModal = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    background: '#fff',
    border: 'none',
    borderRadius: '10px',
    bottom: 'auto',
    boxShadow: '0 0 20px #000000',
    height: 'auto',
    left: '50%',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
  }
};

function ContactModal({ isModalOpen, setIsModalOpen, contact, mode }) {
  const { addContact, updateContact } = useContext(ContactsContext);
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState(contact ? contact.name : '');
  const [mobile, setMobile] = useState(contact ? contact.mobile : '');
  const [email, setEmail] = useState(contact ? contact.email : '');
  const [url, setUrl] = useState(
    contact
      ? contact.url
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
  );

  const edit = () => {
    updateContact(contact._id, { name, mobile, email, url });
    setIsModalOpen(false);
  };

  const add = () => {
    addContact({ name, mobile, email, url });
    setIsModalOpen(false);
  };

  useEffect(() => {
    const result = fieldsValidation(name, email, mobile, url);
    setDisabled(result);
  }, [name, email, mobile, url]);

  return (
    <Modal
      appElement={ document.getElementById('root') }
      isOpen={ isModalOpen }
      onRequestClose={ () => setIsModalOpen(false) }
      contentLabel="Contact Modal"
      style={ customModal }
    >
      <div className="container">
        <div className="grid">
          <div className="d-flex justify-content-center">
            <p className="text-break fw-bolder fs-3">
              { mode === 'addContact' ? 'Add Contact' : 'Edit Contact' }
            </p>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-4 d-flex flex-column align-items-center">
                  <img
                    src={ url }
                    alt="Contact"
                    className="img-fluid rounded-circle contact-img"
                  />
                </div>
                <div className="col-md-7 d-flex flex-column">
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      <input
                        className="col-md-12"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                      />
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <input
                        className="col-md-12"
                        type="text"
                        name="mobile"
                        placeholder="55999999999"
                        value={ mobile }
                        onChange={ (e) => setMobile(e.target.value) }
                      />
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <input
                        className="col-md-12"
                        type="email"
                        name="email"
                        placeholder="email@email.com"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                      />
                    </li>
                    <li className="list-group-item list-group-item-action">
                      <input
                        className="col-md-12"
                        type="url"
                        name="url"
                        placeholder="Picture URL"
                        value={ url }
                        onChange={ (e) => setUrl(e.target.value) }
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-md-1 d-flex flex-column align-items-center">
                  <button
                    className="btn btn-success my-1 me-2"
                    disabled={ disabled }
                    onClick={ () => {
                      mode === 'editContact' ? edit() : add();
                    } }
                  >
                    <i className="bi bi-check2">
                      <div className="hide-text">submit</div>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ContactModal;

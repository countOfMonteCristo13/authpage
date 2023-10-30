import { useState } from 'react';
import './header.css';
import FormModal from '../../components/FormModal/FormModal';

function Header() {
  const [showForm, setShowForm] = useState(false);
  const [toggleModalButton, setToggleModalButton] = useState(false);

  if (!showForm) {
    return (
      <div className="task__header">
        <div className="task__header-title">
          <h2>WiseTasks</h2>
        </div>
        <ul className="task__header-options">
          <button
            type="button"
            onClick={() => {
              setShowForm(true);
              setToggleModalButton(false);
            }}
          >
            <li>Login</li>
          </button>
          <button
            type="button"
            onClick={() => {
              setShowForm(true);
              setToggleModalButton(true);
            }}
          >
            <li>Register</li>
          </button>
        </ul>
      </div>
    );
  }
  return (
    <div className="task__form-modal-wrapper">
      <div className="task__form-modal">
        <FormModal
          title={toggleModalButton ? 'Register' : 'Login'}
          redirectLink={toggleModalButton ? 'Already have an account?' : "Don't have an account?"}
          closeModal={() => setShowForm(false)}
          toggleModals={() => setToggleModalButton(!toggleModalButton)}
        />
      </div>
    </div>
  );
}

export default Header;

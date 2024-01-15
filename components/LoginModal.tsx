import React, { useState, ChangeEvent, FormEvent } from "react";
import { LoginModalProps } from "@/types";

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // Close the modal after handling the submission
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

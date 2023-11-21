import { useState } from "react";
import Modal from "../../custom-modal/Modal";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <footer>
      <button onClick={() => setOpen(true)}>RULES</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </footer>
  );
};

export default Footer;

import './Modal.css';
import Close from './close.svg';

export default function Modal({ display, title = '', onClose }) {
  if (display === false) {
    return null;
  }
  return (
    <div className="modalContainer">
      <div className="modal">
        {title}
        <div className="closeTagButton">
          <img src={Close} alt="fermer la modale" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}
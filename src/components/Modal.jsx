import { createPortal } from 'react-dom';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const modalContent = (
    // black overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    {/* white box */}
    <div className="bg-white p-6 rounded-lg shadow-xl w-96 relative">
        
         {/* The Close Button 'X'  */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-5 text-gray-500 hover:text-red-500 font-bold text-3xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
return createPortal(modalContent, document.getElementById('modal-root'));
}
export default Modal;
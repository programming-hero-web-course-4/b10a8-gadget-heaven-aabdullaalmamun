import PropTypes from "prop-types";

const Modal = ({ message, onClose }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg max-w-sm w-full z-10">
      <h2 className="text-xl font-bold mb-4 flex items-center">Successfully <img className="size-8 ml-2" src="https://img.icons8.com/?size=48&id=sz8cPVwzLrMP&format=png" alt="" /></h2>
      <p className="text-lg font-bold text-red-600">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
      >
        Close
      </button>
    </div>
  );
};

Modal.propTypes ={
    message: PropTypes.string,
    onClose: PropTypes.func
}
export default Modal;

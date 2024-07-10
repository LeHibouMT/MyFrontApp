/**
 * Modal component.
 * @param content Content of the modal.
 * @param onClose Function to execute when closing the modal.
 * @param onlyCloseButton Optional boolean, true by default, this prevent the modal from closing when clicking outside of the content.
 * @returns The component.
 */
const Modal: React.FC<{
  content: React.ReactNode | string;
  onClose?: () => void;
  title?: string;
  onlyCloseButton?: boolean;
}> = (props) => {
  return (
    <div
      className="modal"
      onClick={!props.onlyCloseButton ? props.onClose : undefined}>
      <div
        className="modal__card"
        onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__button--close"
          onClick={props.onClose}>
          &times;
        </button>
        {props.title && <h1 className="modal__title">{props.title}</h1>}
        <div className="modal__content">{props.content}</div>
      </div>
    </div>
  );
};

export default Modal;

const BackButton: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <div
      className="back__button"
      onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
        aria-label="Close button"
        role="button">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"></path>
      </svg>
    </div>
  );
};

export default BackButton;

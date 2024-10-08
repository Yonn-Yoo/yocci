type Props = {
  isWhite?: boolean;
};

export default function ToastCloseIcon({ isWhite }: Props) {
  return (
    <svg
      className={`${isWhite ? 'w-2 h-2' : 'w-3 h-3'}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke={isWhite ? 'white' : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  );
}

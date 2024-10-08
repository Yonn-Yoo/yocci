type Props = {
  isSmall?: boolean;
};

export default function WhiteXIcon({ isSmall = false }: Props) {
  return (
    <svg
      className={`absolute left-1/2 top-1/2 ${
        isSmall ? 'h-4 w-4' : 'h-5 w-5'
      } -translate-x-1/2 -translate-y-1/2 stroke-[2.5px] text-white fill-white`}
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}

type Props = {
  isActive: boolean;
};

export default function CloudIcon({ isActive }: Props) {
  return (
    <>
      <svg
        className="relative w-8 h-8 mb-4 text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          className={`stroke-current ${
            isActive && 'stroke-black'
          } group-hover:stroke-black duration-300 ease-out`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10"
        />
        <path
          className={`${
            isActive && 'stroke-black translate-y-0'
          } translate-y-0.5 group-hover:translate-y-0 duration-300 ease-out stroke-current group-hover:stroke-black`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
          d="M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
    </>
  );
}

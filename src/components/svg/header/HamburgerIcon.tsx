import useScroll from '../../../hooks/use-scroll';

export default function HamburgerIcon() {
  const { isTriggered } = useScroll();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className={`${
          isTriggered ? 'fill-black' : 'fill-white'
        } duration-500 ease-in-out`}
        d="M20 6.5H4V5H20V6.5ZM20 11.25H4V12.75H20V11.25ZM20 17.5H4V19H20V17.5Z"
      ></path>
    </svg>
  );
}

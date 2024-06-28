import usePath from '../../../hooks/use-path';
import useScroll from '../../../hooks/use-scroll';

type Props = {
  isBlack?: boolean;
};

export default function MagnifierIcon({ isBlack }: Props) {
  const { isTriggered } = useScroll();
  const { isHome } = usePath();

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
          isTriggered || !isHome
            ? 'fill-black'
            : isBlack
            ? 'fill-black'
            : 'fill-white'
        } duration-500 ease-in-out`}
        d="M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C13.94 20 15.72 19.31 17.1 18.16L18.94 20L20 18.94L18.16 17.1C19.31 15.72 20 13.94 20 12ZM12 18.5C8.42 18.5 5.5 15.58 5.5 12C5.5 8.42 8.42 5.5 12 5.5C15.58 5.5 18.5 8.42 18.5 12C18.5 15.58 15.58 18.5 12 18.5Z"
      ></path>
    </svg>
  );
}

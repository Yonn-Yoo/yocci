export default function MainLogo({
  isTriggered,
  isHome,
}: {
  isTriggered: boolean;
  isHome: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 758.8 200"
      className={`transform absolute translate-y-1/2 duration-700 ease-in-out ${
        isTriggered || !isHome
          ? 'w-36 bottom-1/2 max-md:left-0 md:right-1/2 md:translate-x-1/2'
          : 'w-full -bottom-12 md:-bottom-28 max-md:left-1/2 max-md:-translate-x-1/2 md:right-1/2 md:translate-x-1/2'
      } ${isTriggered ? 'pointer-events-auto' : 'pointer-events-none'} ${
        !isHome && '!duration-0 pointer-events-auto'
      }`}
    >
      <text
        color="#7b61ff"
        transform="translate(0 163.4)"
        fontFamily="Granjon, Granjon"
        fontSize="180"
        letterSpacing=".26em"
      >
        <tspan
          className={`${
            isTriggered || !isHome ? 'fill-black' : 'fill-white/50'
          } duration-700 ease-in-out`}
          x="0"
          y="0"
        >
          YOCCI
        </tspan>
      </text>
    </svg>
  );
}

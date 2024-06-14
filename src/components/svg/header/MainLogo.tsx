export default function MainLogo({ isTriggered }: { isTriggered: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 758.8 200"
      className={`transform absolute translate-y-1/2 pointer-events-none duration-700 ease-in-out ${
        isTriggered
          ? 'w-36 bottom-1/2 max-md:left-0 md:right-1/2 md:translate-x-1/2'
          : 'w-full -bottom-12 md:-bottom-28 max-md:left-1/2 max-md:-translate-x-1/2 md:right-1/2 md:translate-x-1/2'
      }`}
    >
      <text
        color="#7b61ff"
        transform="translate(0 163.4)"
        font-family="Granjon, Granjon"
        font-size="180"
        letter-spacing=".26em"
      >
        <tspan
          className={`${
            isTriggered ? 'fill-black' : 'fill-white/50'
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

type Props = {
  src: string;
  service: string;
  description: string;
};

export default function ServiceDescriptionCard({
  src,
  service,
  description,
}: Props) {
  return (
    <li className="max-md:snap-center max-md:min-w-[60vw] w-full flex flex-col space-y-5 items-center">
      <video autoPlay loop muted src={src}></video>
      <h4 className="font-medium">{service}</h4>
      <p className="text-sm font-thin text-center">{description}</p>
    </li>
  );
}

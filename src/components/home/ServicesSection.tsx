import ServiceDescriptionCard from './ServiceDescriptionCard';

const serviceList = [
  {
    src: '/vids/initial-service.mp4',
    service: 'Initial Service',
    description:
      'Add your initials to some items, luggage, belts, leather fashion accessories and pet collection items to make them one-of-a-kind.',
  },
  {
    src: '/vids/pickup-service.mp4',
    service: 'Pick-up',
    description:
      'Order online and pick up your item at your preferred Gucci boutique.',
  },
  {
    src: '/vids/reservation-service.mp4',
    service: 'Reservation',
    description:
      'Reserve your preferred boutique at a time and date that suits you and skip the line. When you arrive at the store, you can try on and style the items just for you.',
  },
];

export default function ServicesSection() {
  return (
    <section className="md:px-20">
      <h2 className="my-8 md:my-16 text-center text-3xl md:text-4xl font-medium">
        Special Online Services
      </h2>
      <ul className="max-md:px-10 max-md:snap-mandatory max-md:snap-x w-full flex overflow-x-auto space-x-8 md:space-x-10 xl:space-x-16 no-scroll">
        {serviceList.map(({ src, service, description }) => (
          <ServiceDescriptionCard
            key={service}
            src={src}
            service={service}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
}

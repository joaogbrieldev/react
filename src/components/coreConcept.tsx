export interface MyProps {
  title: string;
  description: string;
  image: string;
}

export const CoreConcept = ({ image, title, description }: MyProps) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

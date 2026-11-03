export default function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {description && <p className="section-intro">{description}</p>}
      </div>
    </div>
  );
}

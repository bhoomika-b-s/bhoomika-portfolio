
export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="section-title">
      <p className="section-subtitle">{subtitle}</p>
      <h2>{title}</h2>
      <div className="title-line"></div>
    </div>
  );
}

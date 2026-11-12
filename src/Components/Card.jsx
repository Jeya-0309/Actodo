function Card({ bgColor, title, subtitle }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="px-10 py-5 border rounded-md text-center flex-grow"
    >
      <h1 className="text-2xl font-medium">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
export default Card;

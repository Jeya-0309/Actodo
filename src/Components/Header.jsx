function Header({ name }) {
  return (
    <div>
      <h1 className="text-3xl font-medium">Hello {name}</h1>
      <p className="py-2">I help you manage your activities :)</p>
    </div>
  );
}
export default Header;

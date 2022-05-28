import logo from './../images/travel-icon.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="nav-img" />
      <span>my travel journal</span>
    </nav>
  )
}

import "./register.css"
import Navbar from "../Start/Navbar.jsx";
export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label>Shop Name</label>
        <input className="registerInput" type="text" placeholder="Enter your shop Name..." />
        <label>Address</label>
        <textarea className="registerInput" rows={4} cols={40} placeholder="Enter your Address..." />
        <label>Email</label>
        <input className="registerInput" type="email" placeholder="Enter your email..." />
        <label>Mobile </label>
        <input className=" registerInput" type="text" maxlength="10" placeholder="Enter your mobile Number..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  )
}

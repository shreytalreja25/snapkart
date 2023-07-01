import logo from './logo.png';
import '../App.css'

function Navbar(){
    return (
        <div>
            <nav>
                <img src={logo} alt="logo" className="logo"></img>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
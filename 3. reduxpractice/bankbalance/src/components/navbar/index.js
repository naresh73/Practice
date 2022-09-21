import './navbar.css';

export default function NavBar() {
    return (
        <div>
            <nav>
                <ul class="nav-list">
                    <li class="nav-items"><a href="/">
                       <button>BAL : 0 </button> <i class="fa-solid fa-terminal"></i></a></li>
                    <li class="nav-items"><a href="/">Home</a></li>
                    <li class="nav-items"><a href="/">About</a></li>
                    <li class="nav-items"><a href="/">Services</a></li>
                    <li class="nav-items"><a href="/">Career</a></li>
                    <li class="nav-items"><a href="/">Contact</a></li>
                    <li class="nav-items"><button class="nav-btn">Sign In</button></li>
                </ul>
            </nav>
        </div>
    )
}

import './Main.css'

function Navbar() {
    return (
        
        <div className="container">
            <nav class="shortcut">
                <ul>
                    <li >
                        <a href="#">
                            <i class="items fas fa-th-large fa-2x first"></i>
                        </a>

                    </li>
                    <li >
                        <a href="#">
                            <i class="items fas fa-user-plus"></i>
                        </a>

                    </li>
                    <li >
                        <a href="#">
                            <i class="items fas fa-user-friends"></i>
                        </a>

                    </li>
                    <li >
                        <a href="#">
                            <i class="items fas fa-calendar-alt"></i>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class="items fas fa-calendar-day"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="items fas fa-user-friends"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="items fas fa-bars"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="items fas fa-th"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="items fas fa-copy"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
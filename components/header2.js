import Link from '../lib/Link'
import '../sass/main.scss';


const header2 =  () => (
    <nav className="navbar navbar-expand-lg navbar-light ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        {/* <a className="navbar-brand" href="#">Navbar</a> */}

        <div className="collapse navbar-collapse navigation" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 justify-content-center">
                <li className="nav-item navigation__list">
                    <Link activeClassName="active" href="/" prefetch>
                        <a className="nav-link navigation__list-home text-pop-up-bottom">home</a>
                    </Link>
                </li>
                <li className="nav-item navigation__list">
                    <Link activeClassName="active" href="/about" prefetch>
                        <a className="nav-link">about <br/> me</a>
                    </Link>
                </li>
                <li className="nav-item navigation__list">
                    <Link activeClassName="active" href="/projects" prefetch>
                        <a className="nav-link">projects</a>
                    </Link>
                </li>
                <li className="nav-item navigation__list">
                    <Link activeClassName="active" href="/contact" prefetch>
                        <a className="nav-link">contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default header2
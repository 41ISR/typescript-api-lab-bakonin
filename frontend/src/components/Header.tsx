export const Header = () => {
    return (
    <header className="header">
        <div className="header-content">
            <a href="/" className="logo">
                MyApp
            </a>
            <nav className="header-nav">
                <a href="#" className="nav-link">
                    Home
                </a>
                <a href="#" className="nav-link">
                    Categories
                </a>
                <a href="#" className="nav-link">
                    About
                </a>
                <a href="#" className="nav-link">
                    Contact
                </a>
            </nav>
        </div>
    </header>
    )
}
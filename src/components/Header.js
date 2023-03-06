import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    // import logo
    const logoUrl = process.env.PUBLIC_URL + 'assets/images/logo.png';

    return (
        <header className='header'>
            <div className='container'>
                <div className='col-sm-2'>
                    <div className='header__logo'>
                        <a href="https://www.instagram.com/rodrigues.arquitetura/">
                            <img src={logoUrl} alt="Code with Binod"></img>
                        </a>
                    </div>
                </div>
                <div className='col-sm-10'>
                    <nav className='header__nav'>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about-me'>Sobre mim</Link>
                            </li>
                            <li>
                                <Link to='/services'>Serviços</Link>
                            </li>
                            <li>
                                <Link to='/portfolios'>Portifólio</Link>
                            </li>
                            {/* <li>
                                <Link to='/my-resume'>Currículo</Link>
                            </li> */}
                            <li>
                                <Link to='/book-appointment'>Orçamento sem Compromisso</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
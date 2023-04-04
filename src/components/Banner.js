import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    const handImageUrl = process.env.PUBLIC_URL + 'assets/images/hand.png';
    const banneImageUrl = process.env.PUBLIC_URL + 'assets/images/banner-man-one.png';

    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="banner__content">
                            <div className="section__heading">
                                <h4>Arquitetura e Interiores</h4>
                                <h2>
                                    Olá! Eu sou <img src={handImageUrl} alt="Code with Binod" loading="lazy" />
                                    <span className="color-red">Elen Rodrigues</span>
                                </h2>
                                <p>Sou Arquiteta e Designer de Interiores criativa e extremamente focada no meu trabalho.</p>
                            </div>
                                <a href="https://www.instagram.com/rodrigues.arquitetura/">
                                    <button className="button-contato">Entrar em contato</button>
                                </a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="banner__thumbnail">
                            <a href="https://www.instagram.com/rodrigues.arquitetura/">
                                <img src={banneImageUrl} alt="Code with Binod" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
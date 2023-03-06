import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Portfolios = () => {

    const portfolioSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const projectiList = [
        {
            title: 'Título do projeto',
            content: 'Descrição curta do projeto',
            projectType: 'tipo do projeto (design ou arquitetura)',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio1.jpg'
        },
        {
            title: 'Título do projeto',
            content: 'Descrição curta do projeto',
            projectType: 'tipo do projeto (design ou arquitetura)',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio2.jpg'
        },
        {
            title: 'Título do projeto',
            content: 'Descrição curta do projeto',
            projectType: 'tipo do projeto (design ou arquitetura)',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio3.jpg'
        },
        {
            title: 'Título do projeto',
            content: 'Descrição curta do projeto',
            projectType: 'tipo do projeto (design ou arquitetura)',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio4.jpg'
        },
        {
            title: 'Título do projeto',
            content: 'Descrição curta do projeto',
            projectType: 'tipo do projeto (design ou arquitetura)',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio5.jpg'
        },
        {
            title: 'Título do projeto',
            content: 'Descrição curta do projeto',
            projectType: 'tipo do projeto (design ou arquitetura)',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio6.jpg'
        }
    ]

    return (
        <section className="portfolios">
            <div className="section__heading">
                <h4>Meus Projetos</h4>
                <h2>Veja meu Portifólio</h2>
            </div>
            <div className="section__body">
                <div className="portfolios_list">
                    <Slider {...portfolioSettings}>
                        {
                            projectiList.map((item, index) => {
                                return (
                                    <div key={index} className="portfolios_item">
                                        <div className="portfolios_thumbnail">
                                            <img src={item.image} alt={item.title} loading="lazy" />
                                        </div>
                                        <div className="portfolios_description">
                                            <span>{item.projectType}</span>
                                            <h4>{item.title}</h4>
                                            <p>{item.content}</p>
                                            <Link to="/portfolios">Link para o instagram/imagens dos projetos</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Portfolios;
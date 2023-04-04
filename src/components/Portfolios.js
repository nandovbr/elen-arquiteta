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
            title: 'Pet Animacão',
            content: 'Design de interior para Pet Shop',
            projectType: 'Design',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio1.jpg'
        },
        {
            title: 'Pet Animacão',
            content: 'Design de interior para Pet Shop',
            projectType: 'Design',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio2.jpg'
        },
        {
            title: 'Casa FK',
            content: 'Design de interior para residência',
            projectType: 'Design',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio3.jpg'
        },
        {
            title: 'Casa FK',
            content: 'Design de interior para residência',
            projectType: 'Design',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio4.jpg'
        },
        {
            title: 'Casa AL',
            content: 'Design de interior para residência',
            projectType: 'Design',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio5.jpg'
        },
        {
            title: 'Casa AL',
            content: 'Design de interior para residência',
            projectType: 'Design',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio6.jpg'
        },
        {
            title: 'Casa MR',
            content: 'Design de interior para residência',
            projectType: 'Design',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio7.jpg'
        },
        {
            title: 'Casa MR',
            content: 'Design de interior para residência',
            projectType: 'Design',
            image: process.env.PUBLIC_URL + '/assets/images/portfolio8.jpg'
        },
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
                                        <a href="https://www.instagram.com/rodrigues.arquitetura/">
                                            <span>{item.projectType}</span>
                                            <h4>{item.title}</h4>
                                            <p>{item.content}</p>
                                            <h5>IR PARA O INSTAGRAM</h5>
                                        </a>
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
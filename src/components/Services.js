import React from "react";
import { Link } from "react-router-dom";

const Services = () => {

    const servicesList = [
        {
            title: 'Arquitetura',
            content: 'Texto sobre arquitetura Texto sobre arquitetura Texto sobre arquitetura Texto sobre arquitetura.',
            image: process.env.PUBLIC_URL + '/assets/images/service-icon1-one.png'
        },
        {
            title: 'Design de Interiores',
            content: 'Texto sobre design de interiores Texto sobre design de interiores Texto sobre design de interiores.',
            image: process.env.PUBLIC_URL + '/assets/images/service-icon2-one.png'
        },
        {
            title: 'Documentos e Regularização',
            content: 'Texto sobre documentação e burocracias prefeitura Texto sobre documentação e burocracias prefeitura.',
            image: process.env.PUBLIC_URL + '/assets/images/service-icon3-one.png'
        }
    ];


    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="section__heading">
                            <h4>Serviços</h4>
                            <h2>
                                <span>Acompanho sua</span>
                                <span>Obra do inicio ao fim</span>
                            </h2>
                            <p>Texto sobre acompanhamento personalizado Texto sobre acompanhamento personalizado Texto sobre acompanhamento personalizado Texto sobre acompanhamento personalizado.</p>
                            <p>Complemento sobre atendimento e diferencial Complemento sobre atendimento e diferencial Complemento sobre atendimento e diferencial.</p>
                            <Link to='/services'>Ver mais sobre serviços</Link>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="services__list">
                            {
                                servicesList.map((item, index) => {
                                    return (
                                        <div key={index} className="services__item">
                                            <div className="services__item-icon">
                                                <img src={item.image} alt={item.title} loading="lazy" />
                                            </div>
                                            <div className="services__item-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.content}</p>
                                            </div>
                                            <span>0{index + 1}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
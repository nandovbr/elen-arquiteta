import React from "react";

const Clients = () => {

    const clientList = [
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand1.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand2.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand3.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand4.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand5.png'
        },
        {
            image: process.env.PUBLIC_URL + '/assets/images/brand6.png'
        }
    ]

    return (
        <section className="clients">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <ul className="row clients_list">
                            {
                                clientList.map((item, index) => {
                                    return (
                                        <li key={index} className="col-md-4 col-sm-6">
                                            <div className="clients_item">
                                                <img src={item.image} alt="Code with Binod" loading="lazy" />
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="clients__contnet">
                            <div className="section__heading">
                                <h4>Atendidos</h4>
                                <h2>Alguns dentre os <span>100+ Clientes Satisfeitos</span></h2>
                                <p>A satisfação dos meus clientes é um prêmio para mim!</p>
                                <p>
                                    Recebo com muito carinho cada mensagem, e muitos fazem questão de formalizar os agradecimentos e elogios.
                                    Isso me enche o coração, e me motiva a continuar trabalhando com muito amor e dedicação!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;
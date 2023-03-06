import React from "react";

const Process = () => {

    const processList = [
        {
            titile: 'Conceito de criação',
            content: 'Texto curto sobre conceito de criação.',
            image: process.env.PUBLIC_URL + '/assets/images/working-step1.png'
        },
        {
            titile: 'Esboço inicial',
            content: 'Texto curto sobre o esboço inicial.',
            image: process.env.PUBLIC_URL + '/assets/images/working-step2.png'
        },
        {
            titile: 'Design final',
            content: 'Texto curto sobre design final.',
            image: process.env.PUBLIC_URL + '/assets/images/working-step3.png'
        }
    ]

    return (
        <section className="process">
            <div className="container">
                <div className="section__heading">
                    <h4>Passo a Passo</h4>
                    <h2>Meu Processo de Trabalho</h2>
                </div>
                <div className="section__body">
                    <ul className="row process_list">
                        {
                            processList.map((item, index) => {
                                return (
                                    <li key={index} className="col-sm-4 process_item">
                                        <div className="process_item-content">
                                            <div className="process_icon">
                                                <img src={item.image} alt="Code with Binod" loading="lazy" />
                                            </div>
                                            <h4>{item.titile}</h4>
                                            <p>{item.content}</p>
                                            <span>0{index + 1}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Process;
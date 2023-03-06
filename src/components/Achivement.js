import React from 'react';

const Achivement = () => {

    const achivementData = [
        {
            number: 108,
            text1: 'Projetos',
            text2: 'Completos'
        },
        {
            number: 95,
            text1: 'Clientes',
            text2: 'Satisfeitos'
        },
        {
            number: 28,
            text1: 'Cidades',
            text2: 'Diferentes'
        },
        {
            number: 4,
            text1: 'Projetos em',
            text2: 'Andamento'
        }
    ]

    const mappedAchivementData = achivementData.map((item, index) => {
        return (
            <li key={index} className='col-md-3 col-sm-6'>
                <span className='number'>{item.number}</span>
                <span className='text'>
                    <span>{item.text1}</span>
                    <span>{item.text2}</span>
                </span>
            </li>
        )
    });

    return (
        <section className='achivement'>
            <div className='container'>
                <ul className='row'>
                    {mappedAchivementData}
                </ul>
            </div>
        </section>
    )
}

export default Achivement;
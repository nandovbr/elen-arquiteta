import React, { useState } from 'react';

const ProfileTabPanel = () => {

    // Simple Tab for beginners
    const [isTabActive1, setIsTabActive1] = useState(true);
    // const [isTabActive2, setIsTabActive2] = useState(false);
    // const [isTabActive3, setIsTabActive3] = useState(false);

    const handleClick1 = () => {
        if (!isTabActive1) {
            setIsTabActive1(true);
            // setIsTabActive2(false);
            // setIsTabActive2(false);
        }
    }

    // const handleClick2 = () => {
    //     if (!isTabActive2) {
    //         setIsTabActive2(true);
    //         setIsTabActive1(false);
    //         setIsTabActive3(false);
    //     }
    // }
    // const handleClick3 = () => {
    //     if (!isTabActive3) {
    //         setIsTabActive3(true);
    //         setIsTabActive1(false);
    //         setIsTabActive2(false);
    //     }
    // }


    return (
        <div className='profile__tab-panel'>
            <div className='tab-heading'>
                <ul>
                    <li>
                        <button className={isTabActive1 ? 'active' : ''} onClick={handleClick1}>Detalhes</button>
                    </li>
                    {/* <li>
                        <button className={isTabActive2 ? 'active' : ''} onClick={handleClick2}>Trabalhos</button>
                    </li>
                    <li>
                        <button className={isTabActive3 ? 'active' : ''} onClick={handleClick3}>My Skills</button>
                    </li> */}
                </ul>
            </div>
            <div className='tab-body'>
                <div className={isTabActive1 ? 'tab-content active' : 'tab-content'} >
                    <ul className='row'>
                        <li className='col-sm-6'>
                            <span>Meu Nome:</span>
                            <label>Elen Rodrigues</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>Meu Email:</span>
                            <label>elenrodrigues.arquitetura@outlook.com</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>WhatsApp:</span>
                            <label>(12) 98215-6622</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>Atendimento:</span>
                            <label>Sob agendamento podendo ser domiciliar</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>Minha Formação:</span>
                            <label>Arquitetura e Urbanismo</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>CAU:</span>
                            <label>209542-4</label>
                        </li>
                    </ul>
                </div>
                {/* <div className={isTabActive2 ? 'tab-content active' : 'tab-content'} >
                    <ul className='row'>
                        <li className='col-sm-6'>
                            <span>Estados</span>
                            <label>São Paulo e Rio Grande do Sul</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>Cidades</span>
                            <label>Todas dentro dos Estados</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>2021</span>
                            <label>International Photography Gran</label>
                        </li>
                        <li className='col-sm-6'>
                            <span>2016</span>
                            <label>Nikon Small World Competition</label>
                        </li>
                    </ul>
                </div>
                <div className={isTabActive3 ? 'tab-content active' : 'tab-content'} >
                    <div className='skills__range'>
                        <h4>Develoment <span className='skills__range-percentage'>95%</span></h4>
                        <span className='skills__range-bar' style={{ width: '95%' }}></span>
                    </div>
                    <div className='skills__range'>
                        <h4>Design <span className='skills__range-percentage'>80%</span></h4>
                        <span className='skills__range-bar' style={{ width: '80%' }}></span>
                    </div>
                    <div className='skills__range'>
                        <h4>SEO & SEM <span className='skills__range-percentage'>50%</span></h4>
                        <span className='skills__range-bar' style={{ width: '50%' }}></span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ProfileTabPanel;
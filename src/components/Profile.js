import React from "react";

import ProfileTabPanel from "./ProfileTabPanel";

const Profile = () => {

    const profileImageUrl = process.env.PUBLIC_URL + '/assets/images/about-us-img-one.jpg';

    return (
        <section className="profile">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="profile__thumbnail">
                            <img src={profileImageUrl} alt="Code with Binod" loading="lazy" />
                            <div className="profile__experience">
                                <h4>
                                    <span>6 Anos</span>
                                    <span>de Experiência</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="profile__content">
                            <div className="section__heading">
                                <h4>Sou Arquiteta</h4>
                                <h2>construo ideias que<span>Ajudam as pessoas</span></h2>
                                <p>Sempre com objetivo de acertar bem no alvo do seu sonho de ter um lar confortável que é a sua cara.</p>
                            </div>
                            <div className="section__body">
                                <ProfileTabPanel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
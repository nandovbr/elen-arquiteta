import React from "react";

const Contact = (props) => {

    return (
        <section className="contact">
            <div className="container">
                <div className="section__heading">
                    <h4>Tem alguma dúvida? Precisa de um Orçamento?</h4>
                    <h2>Contate-me</h2>
                </div>
                <div className="section__body">
                    <div className="contact__form">
                        <form action="/" method="post">
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control contact-form-control" placeholder="Seu Nome" required />
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" className="form-control contact-form-control" placeholder="Email" required />
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control contact-form-control" placeholder="WhatsApp com DDD" />
                                </div>
                                {/* <div className="col-sm-6">
                                    <input type="text" className="form-control contact-form-control" placeholder="Address" />
                                </div> */}
                                {/* <div className="col-sm-6">
                                    <input type="text" className="form-control contact-form-control" placeholder="Assunto (Orçamento ou Dúvida)" required />
                                </div> */}
                                <div className="col-sm-12">
                                    <textarea type="text" className="form-control contact-form-control" placeholder="Digite sua Mensagem...." required ></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <button className="btn bnt-lg btn-contact-form">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
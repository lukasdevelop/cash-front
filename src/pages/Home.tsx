import '../styles/home.scss'

import imgTeste from '../images/melhores-tecnologias.svg'
import imgTeste2 from '../images/hqdefault.jpg'
import NavBar from '../components/NavBar/NavBar'

export function Home() {
    return (
        <div id="page-home">
            <header>
                <div className="container">
                    <NavBar></NavBar>
                </div>
            </header>
            <section>
                <div className="hero">
                    <div>
                        <h2>
                            As melhores tecnologias em programação, direto ao ponto e do jeito
                            certo.
                        </h2>
                        <p>
                            No meio de tanta informação e da quantidade de ferramentas que
                            surgem todos os dias, você precisa de alguém que te leve na direção
                            certa.
                        </p>
                        <a href="#" className="button">Quero embarcar neste foguete!</a>
                    </div>
                    <img src={imgTeste} alt="Tre"></img>
                </div>
            </section>
            <main>
                <section className="cards">
                    <div className="content">
                        <div className="card">
                            <img src={imgTeste2} alt="Tre"></img>
                        </div>

                        <p className="title text--medium">
                            Formulário Animado com JS puro e CSS Animation | Mayk Brito
                        </p>
                        <div className="info">
                            <p className="text--medium">57 Min</p>
                            <p className="price text--medium">Free</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="card">
                            <img src={imgTeste2} alt="Tre"></img>
                        </div>

                        <p className="title text--medium">
                            Formulário Animado com JS puro e CSS Animation | Mayk Brito
                        </p>
                        <div className="info">
                            <p className="text--medium">57 Min</p>
                            <p className="price text--medium">Free</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="card">
                            <img src={imgTeste2} alt="Tre"></img>
                        </div>

                        <p className="title text--medium">
                            Formulário Animado com JS puro e CSS Animation | Mayk Brito
                        </p>
                        <div className="info"> 
                            <p className="text--medium">57 Min</p>
                            <p className="price text--medium">Free</p>
                        </div>
                    </div>
                </section>
            </main>

            <section id="form">
                <form action="">
                    <h3>Queo estudar na Cash Byte</h3>
                    <div className="form-group">
                        <input type="text" className="input-control" placeholder="Nome"  />
                        <input type="email" className="input-control" placeholder="Email"></input>
                    </div>

                    <div className="form-group">
                        <input type="text" className="input-control" placeholder="Empresa" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="input-control" placeholder="Endereço" />
                    </div>

                    <div className="form-group">
                        <div className="input-control" placeholder="Cidade" ></div>
                        <div className="input-control" placeholder="Estado"></div>
                        <div className="input-control" placeholder="CEP"></div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="button">Save</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
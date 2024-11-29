import livrodoado from '../../assets/livrodoado.png'
import s from './livrosdoados.module.scss'
export default function LivrosDoados(){
    return(
        <section className={s.SectionLivrosDoados}>
            <h2>Livros Doados</h2>
            <div className={s.Livros}>
                <section>
                    <img src={livrodoado} alt="Imagem de capa do livro 'O protagonista" />
                    <div>
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    </div>

                </section>
            </div>
        </section>

    )

}


import livrodoado from '../../assets/livrodoado.png'
import s from './livrosdoados.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function LivrosDoados(){ 

    const [livros, setLivros] = useState([]) // serve para armazenar os livros que vem da API
    const puxarLivros = async() => {
        const resposta = await axios.get("https://api-livros-pmuh.onrender.com/livros")
        setLivros(resposta.data)
    }

    useEffect(()=>{
        puxarLivros()
    }, [])


    return(
        <section className={s.SectionLivrosDoados}>
            <h2>Livros Doados</h2>
            <section className={s.Livros}>
                {
                    livros.map((item) => {
                        return(
                            <section>
                                <img src={item.image_url} alt={`Titulo do livro ${item.titulo}`} />
                                <h3>{item.titulo}</h3>
                                <p>{item.autor}</p>
                                <p>{item.categoria}</p>
                            </section>
                        )
                    })
                }
            </section>
        </section>
    )
}

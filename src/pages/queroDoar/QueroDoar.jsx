import s from './querodoar.module.scss'
import livroaberto from '../../assets/livroaberto.png'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) => {
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) => {
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) => {
        setAutor(e.target.value)
    }
    const capturaImg = (e) => {
        setImage_url(e.target.value)
    }

    const envioDados = async() =>{

        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://api-livros-pmuh.onrender.com/doar", dadosParaEnviar)
    }


    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com as informações do livro</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={livroaberto} alt="ícone de um livro aberto" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type= "text" placeholder="Título" onChange={capturaTitulo}/>
                <input type="text" placeholder="Categoria" onChange ={capturaCategoria} />
                <input type="text" placeholder="Autor" onChange ={capturaAutor}/>
                <input type="text"placeholder="Link da Imagem" onChange={capturaImg}/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
            </form>
        </section>
    )
}
import s from './querodoar.module.scss'
import livroaberto from '../../assets/livroaberto.png'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")
    const [livroDoado, setLivroDoado] = useState(false)

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

    const envioDados = async() => {
        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        
        await axios.post("https://api-livros-pmuh.onrender.com/doar", dadosParaEnviar)
        setLivroDoado(true)
    }

    const voltarParaForms = () => {
        setLivroDoado(false)
        setTitulo("")
        setCategoria("")
        setAutor("")
        setImage_url("")
    }

    if (livroDoado) {
        return (
            <section className={s.queroDoarSection}>
                <div className={s.mensagemSucesso}>
                    <h2>Livro doado com sucesso!</h2>
                    <p>Obrigado pela sua contribuição!</p>
                    <button onClick={voltarParaForms}>Doar outro livro</button>
                </div>
            </section>
        )
    }

    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com as informações do livro</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={livroaberto} alt="ícone de um livro aberto" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder="Título" value={titulo} onChange={capturaTitulo}/>
                <input type="text" placeholder="Categoria" value={categoria} onChange={capturaCategoria} />
                <input type="text" placeholder="Autor" value={autor} onChange={capturaAutor}/>
                <input type="text" placeholder="Link da Imagem" value={image_url} onChange={capturaImg}/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
            </form>
        </section>
    )
}
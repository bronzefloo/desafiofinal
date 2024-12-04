import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from '../../pages/inicio/Inicio';
import LivrosDoados from '../../pages/livrosdoados/LivrosDoados';
import QueroDoar from '../../pages/queroDoar/QueroDoar';
import logolivro from '../../assets/logolivro.png';
import lupa from '../../assets/lupa.png';
import s from './header.module.scss';

export default function Header(){
    return (
        <BrowserRouter>
        <header className= {s.header}>
        <section className= {s.logoHeader}>
        <img src={logolivro} 
        alt="Imagem de um livro aberto"
        />
         <h1>LIVROS VAI NA WEB</h1>
        </section>
        <nav className= {s.navHeader}>
            <ul>
                <li>
                    <Link className={s.link} to='/'>
                    Início
                    </Link>
                </li>
                <li>
                    <Link className={s.link} to= '/livrosdoados'>
                    Livros Doados
                    </Link>
                </li>
                <li>
                    <Link className={s.link} to='/querodoar'>
                    Quero Doar
                    </Link>
                </li>
            </ul>
        </nav>
        <section className= {s.barradepesquisa}>
            <input type= "search"
            name=""
            id=""
            placeholder= "O que você está procurando?"
            />
            <button>
                <img src= {lupa} alt="Imagem de uma lupa para buscas" />
            </button>
        </section>
        </header>
        <Routes>
        <Route path="/" element= {<Inicio />} />
        <Route path="/livrosdoados" element= {<LivrosDoados />} />
        <Route path="/querodoar" element= {<QueroDoar />} />
      </Routes>
        </BrowserRouter>
    );
}
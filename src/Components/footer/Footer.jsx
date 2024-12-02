import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import s from './footer.module.scss'
export default function Footer() {
    return (
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={facebook} alt="Logo Facebook"/></a>
                    <a href=""><img src={twitter} alt="Logo Twitter"/></a>
                    <a href=""><img src={youtube} alt="Logo Youtube"/></a>
                    <a href=""><img src={linkedin} alt="Logo Linkedin"/></a>
                    <a href=""><img src={instagram} alt="Logo Instagram"/></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}
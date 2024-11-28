import comunidade from '../../assets/comunidade.png'
import leitura from '../../assets/leitura.png'
import transformacao from '../../assets/transformacao.png'
import balanca from '../../assets/balanca.png'

import s from './inicio.module.scss';

export default function Inicio() {
  return(
    <main>
      <section className={s.Sectioninicio}>
        <h2>VENHA FAZER PARTE DESSA REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.PorquedoarSection}>
        <h2>Por que doar?</h2>
        <div className={s.Cardmotivos}>
          <section>
            <img src={comunidade} alt='Icone de círculo social'/>
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>
          <section>
            <img src={leitura} alt="Imagem de uma pessoa lendo"/>
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
            <img src={transformacao} alt="Imagem que gera inspiração" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>
          <section>
            <img src={balanca} alt="Imagem de uma balança de equilíbrio" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>
        </div>
      </section>
    </main>
  )
}



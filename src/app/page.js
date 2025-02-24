  import Image from 'next/image'
  import styles from './page.module.css'
  import Carossel, {Carrosel} from '../components/Carossel'
  import {Cabecalhs} from '../components/cabecalho'

  export default function Home(){
    return <div id="bod">
      <header>
        <Cabecalhs></Cabecalhs>
      </header>
      <div id="bemvin">
      <h1 class="titul">
        Seja Bem Vindo
      </h1>
      <text class="subTit">Meu nome é Alex Tenho 17 anos e estou no último ano do Ensino Médio e do meu curso técnico. Sempre tive interesse em atividades que envolvessem lógica e raciocínio estruturado, o que acabou me levando para a programação
      </text>
      <h1 class="titul">
          Sobre Mim
        </h1>
        <text class="subTit"> Estou no começo da minha jornada na programação, mas sempre estou em busca de aprender e aprimorar minhas habilidades. Ainda estou decidindo o que farei de faculdade, estou entre Ciência da Computação e Engenharia de Software, mas em geral meu objetivo é me aprofundar no desenvolvimento. Gosto de desafios, aprender coisas novas e tirar as ideias do papel e transforma-lás em realidade através da tecnologia
        </text>
        <div class="container-imagem">
            <Image
            src="/alexFoto.jpg"
            width={500}
            height={500}
            alt="Foto"
            id="fotoSbr"
            />
        </div>
      </div>
  






    </div>

  }
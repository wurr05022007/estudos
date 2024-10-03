const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas =document.querySelector(".caixa-perguntas");
const caixaAlternativas =document.querySelector(".caixa-alternativas");
const caixaResultados =document.querySelector(".caixa-resultados");
const textoResultados =document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado:" O estudo é essencial pois através dele que as pessoas desenvolvem habilidades e conhecimentos.Ele é a base para se destacar em muitas profissões que exigem muita dedicação e conhecimento sobre determinado assunto.O estudo também nos ajuda a exercitar nosso cerébro e, melhorar nosso racíocinio e compreensão.
        alternativas: [
            {
                texto: "Os estudos são importantes, para desenvolver o raciocínio lógico e o conhecimento".
            },
            {
                texto: "Não pois exige muito esforço".
            }
        ]
    },
    {
        enunciado: "Os estudos contribuem para que nós possamos nos destacar no mercado de trabalho por exemplo, onde é exigido qualificação e capacitação, claro que isso depende da sua profissão.A sua contribuição envolve a melhoria na condição financeira por que com o seu desempenho auxiliará na sua renda.A contribuição do estudo realmente nos ajuda a termos uma melhor condição financeira?"
        alternativas: [
            {
                texto: "Por que com o estudo, ajuda a entrar em uma profissão que seja gratificante para mim, e que tenha grande relevância à sociedade".
            },
            {
                texto: "Contribui em nada!".
            }
        ]
    },
    {
        enunciado: " O estudo influência no nosso viver, no convívio social e também quando ganhamos a chance de se tornar pessoas melhores.
        alternativas: [
            {
                texto: "Ele nos ajuda a transformar nosso conhecimento"
            },
            {
                texto: "Para tornarmos melhores não precisamos da influencia dos estudos".
            }
        ]
    },
    {
        enunciado: "Quando há esforço, dedicação, força de vontade e perseverança, o estudo nos abre uma porta que nos leva para um futuro repleto de oportunidades.A porta de oportunidades só abre através da nossa dedicação?".
        alternativas: [
            {
                texto: "O único método de desempenhar grandes papéis, é se dedicar estudando".
            },
            {
                texto: "Existem outros métodos ".
            }
        ] 
        let atual = 0;
let perguntaAtual;
let historiaFinal = "O estudo trás grande influencia e importãncia para nós pois com ele podemos desenvolver habilidades, aprimorar nosso conhecimento, transformar a nossa vida.É através dele que podemos compreender a ciência,compreender o ser humano.E também através do nosso esforçoe da nossa perseverança que o estudo se torna muito importante para cada um de nós, tornando-nos cada vez melhores na nossa vida, na sociedade e naquilo que fazemos".

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
        
     

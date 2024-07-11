const chave = "&appid=cebcd482eda57fa9a6714c1c2ba91885"
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="
const linguagem = '&lang=pt_br'
const unidade = '&units=metric'
const urlImagem = ' https://openweathermap.org/img/wn/'

let inputCidade = document.querySelector('#pescidadeTempo')
let btnPesquisa = document.querySelector('#btnPesquisar')
let tituloCidade = document.querySelector('#tituloCidade')
let temperatura = document.querySelector('#temperatura')
let umidade = document.querySelector('#umidade')
let descricaoCeu = document.querySelector('#descriCeu')
let iconCeu = document.querySelector("#iconCeu")
let cidade = document.querySelectorAll('.cidades')







async function buscarCidade(nomecidade) {
    let url = apiWeather + nomecidade + chave + linguagem + unidade 

    const resposta = await fetch(url)
    const objeto = await resposta.json()
    return objeto
    
}

async function montarTela(cidade) {
    let infomacao = await buscarCidade(cidade)

    tituloCidade.innerHTML= `Tempo em ${infomacao.name}`
    temperatura.innerHTML = `Temperatura ${infomacao.main.temp}°C`
    umidade.innerHTML = infomacao.main.humidity + '%'

    descricaoCeu.innerHTML = infomacao.weather[0].description
    iconCeu.src= urlImagem + infomacao.weather[0].icon +'@2x.png'


}

async function pesquisa(){
    let cidade = inputCidade.value
    montarTela(cidade)
}

btnPesquisa.addEventListener('click' ,pesquisa)

cidade.forEach(element => {
    let elmentoCidade = element.value
    element.addEventListener('click' ,()=>{
        montarTela(elmentoCidade)
    })
});

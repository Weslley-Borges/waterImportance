const title = document.getElementById('title')
const body = document.getElementById('body')

const waterFacts = [
  {
    "id": 1,
    "title": "A água em nosso corpo",
    "body": `Aproximadamente 60 à 70% do corpo de um humano adulto é composto por água, em recém-nascidos esta quantidade pode chegar a 80%.`
  },
  {
    "id": 2,
    "title": "Escassez da água #1",
    "body": `Levantamento da consultoria britânica Maplecroft lista os países mais vulneráveis à escassez de água. Esses países são:\nBahrein, Qatar, Kuwait, Líbia, Djibouti, Emirados Árabes, Iêmem, Arábia Saudita, Omã, e Egito.`
  },
  {
    "id": 3,
    "title": "A água e nossa saúde",
    "body": `A ingestão de água tratada e com frequência é um dos fatores mais importantes para a manutenção do nosso corpo, ela ajuda na prevenção de problemas de saúde como o cálculo renal, infecção urinária, pressão arterial alta e baixa, reumatismo, etc.`
  },
  {
    "id": 4,
    "title": "Urina",
    "body": `A água ajuda na eliminação de substâncias químicas do nosso corpo através da urina, que é 95% composta de água, ela leva as substâncias em excesso, ou que não possui função, para fora do nosso corpo`
  },
  {
    "id": 5,
    "title": "Você sabia? #1",
    "body": `Os seres humanos não podem passar mais de 4 dias sem beber água, pois ela é o elemento mais importante do organismo, o principal componente das células e por isso todas as nossas reações químicas internas dependem dela.   `
  },
  {
    "id": 6,
    "title": "Escassez da água #2",
    "body": "Há indícios de que se nada for feito, em cerca de 20 anos a humanidade sofrerá com uma crise muito séria no abastecimento de água potável, semelhante à Crise no Petróleo de 1973 (Em protesto pelo apoio prestado pelos Estados Unidos a Israel durante a Guerra do Yom Kippur, tendo os países árabes organizados na OPEP aumentando o preço do petróleo em mais de 400%. ). "
  },
  {
    "id": 7,
    "title": "Podemos beber água do mar?",
    "body": "Não, pois um ser humano pode ingerir água com, no máximo, 5 g de sal a cada 1 kg de água, e os oceanos têm uma quantidade 7 vezes maior. Se bebermos somente água do mar, morreremos, já que o organismo não tem como eliminar o sal em excesso."
  },
  {
    "id": 8,
    "title": "Você sabia? #2",
    "body": "Podemos usar a água das chuvas para o consumo próprio, para isso, filtre a água com um filtro à vela, depois de filtrar, ferva-a em uma panela por pelo menos 5 minutos. Também podemos utilizar cloro sem cheiro para maior segurança (16 gotas a cada 20 litros de água)"
  },
  {
    "id": 9,
    "title": "A poluição e nossa saúde",
    "body": "Todo o lixo que nós jogamos nos oceanos, lagos, rios e etc, irão voltar para nós alguma hora. Os animais aquáticos consomem o lixo que jogamos e morrem intoxicados pelo plástico ou outros materiais, nós somos infectados por tabela ao consumirmos esses animais."
  },
  {
    "id": 10,
    "title": "Saneamento básico",
    "body": "Cerca de 700 milhões de chineses bebem água contaminada todos os dias, e anualmente, 3,4 milhões de pessoas morrem em decorrência de problemas com a água que consomem . Isso ocorre pelo fato da água estar imprópria para o consumo humano, contendo bactérias, vermes, e vírus causadore de doenças"
  },
  {
    "id": 11,
    "title": "Você sabia #3",
    "body": "Em uma casa média, dois terços de toda a água consumida é usada no banheiro. Como podemos resolver esse problema?"
  },
  {
    "id": 12,
    "title": "Escassez da água #3",
    "body": "Em 2016, o Brasil disperdiçou cerca de 38% da água potável nos sistemas de distribuição, o que equivale a quase 7 mil piscinas olímpicas a cada dia. A perda financeira no ano chegou a mais de R$10.000.000.000 ."
  }
]

getFact()

function getFact() {
  waterFacts.map(fato => {
    var factID = Math.floor((Math.random() * waterFacts.length) + 1)
    if(fato.id == factID){
      title.innerHTML = fato.title
      body.innerHTML = fato.body
      return
    }
  })
}
setInterval(getFact, 5000)

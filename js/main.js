const dados = {
  imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
  name: "Jaqueta Marrom Feminina Tamanho M",
  bestPrice: "49.00",
  sellingPrice: "29.00",
  quantity: 10
}

const items = [
  {
    id: "0",
    name: "Jaqueta Vermelha Feminina Tamanho M",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 1
  },
  {
    id: "1",
    name: "Jaqueta Marrom Feminina Tamanho M",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 10
  },
  {
    id: "2",
    name: "Jaqueta Marrom Feminina Tamanho P",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 0
  },
  {
    id: "3",
    name: "Jaqueta Marrom Feminina Tamanho G",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 5
  },
  {
    id: "4",
    name: "Jaqueta Marrom Masculina Tamanho P",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 1
  },
  {
    id: "5",
    name: "Jaqueta Marrom Masculina Tamanho M",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 4
  },
  {
    id: "6",
    name: "Jaqueta Marrom Masculina Tamanho G",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 0
  },
  {
    id: "7",
    name: "Jaqueta Verde Feminina Tamanho M",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 0
  },
  {
    id: "8",
    name: "Jaqueta Azul Feminina Tamanho M",
    linkURL: "https://avantivtexio.myvtex.com/body-manga-babados-azul-tulipa-0hf71900/p",
    imageURL: "https://avantivtexio.vtexassets.com/arquivos/ids/155508-300-300?width=300&height=300&aspect=true",
    bestPrice: "49.00",
    sellingPrice: "29.00",
    available: 10
  }
]

const iniciarVitrine = () => {

  var containerProdutos = document.getElementById('produtos');
  items.map((val) => {
    if(val.available > 0){
      containerProdutos.innerHTML += `
                      <div class="produto-sozinho">
                      <img src="${val.imageURL}"/>
                      <p class="descricao">${val.name}</p>
                        <div class="precos">
                          <span>${val.bestPrice}
                          </span><span>${val.sellingPrice}</span>
                        </div>
                        <div>
                          <button id="btn_decrementar" type="button">-</button>
                          <span id="contador">0</span>
                          <button id="btn_incrementar" type="button">+</button>
                        </div>
                        <button>Adicionar</button>
                      </div>
                      `;
    } else {
      containerProdutos.innerHTML += `
                    <div class="produto-sozinho">
                    <img src="${val.imageURL}"/>
                    <p class="descricao">${val.name}</p>
                      <div class="precos">
                        <span>${val.bestPrice}
                        </span><span>${val.sellingPrice}</span>
                      </div>
                      <button>Indisponível</button>
                    </div>
      `;
    }
  })
}

iniciarVitrine();


/* funcionalidade de incrementar ou decrementar quantidade de itens do produto */
const btnIncrementar = document.getElementById("btn_incrementar");
const btnDecrementar = document.getElementById("btn_decrementar");
const p = document.getElementById("contador");
let contador = 0;
//p.innerHTML = contador;

btnIncrementar.addEventListener('click', function() {
    p.innerHTML = ++contador;
})

btnDecrementar.addEventListener('click', function() {
    if(contador > 0){
        p.innerHTML = --contador;
    }else {
        return;
    }
})

/* adiciona no carrinho */
const adicionaCarrinho = () => {
  const quantidadeCarrinho = document.querySelector('#contador').innerHTML;
  localStorage.setItem('produto', quantidadeCarrinho);
  readCarrinho();
}

const readCarrinho = () => {
  const span = document.querySelector('#span--carrinho');
  span.innerHTML = localStorage.getItem('produto');
}

readCarrinho();
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
    name: "Macacão Bordado Feminino Tamanho M",
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
      containerProdutos.innerHTML +=
       `
       <!-- Box promoção disponível -->
       <div class="corpo__card">
           <!-- Box imagem promoção disponível -->
           <div class="box--image">
               <img src="${val.imageURL}"/>
           </div>
           <!-- Box desconto -->
           <div class="box--desconto">
               <p>10% off</p>
           </div>
           <!-- Descrição do produto de promoção disponível -->
           <div class="box--descricao">
               <p>${val.name}</p>
           </div>
           <!-- Box de preços da promoção disponível -->
           <div class="box--precos">
               <span class="span--black">R$${val.bestPrice}</span>
               <span class="span--red">R$${val.sellingPrice}</span>
           </div>
           <!-- Box de quantidades de produtos da promoção disponível -->
           <div class="box--contador">
               <!-- botão de diminuir quantidade do produto -->
               <button id="btn_decrementar" type="button">-</button>
               <!-- conteúdo que mostra a quantidade do produto -->
               <span id="contador">0</span>
               <!-- botão de aumentar a quantidade do produto-->
               <button id="btn_incrementar" type="button">+</button>
           </div>
           <!-- botão que adiciona a quantidade de itens no carrinho -->
           <div class="box--botao--adc">
               <button onclick="adicionaCarrinho()">Adicionar</button>
           </div>
       </div>
      `;
    } else {
      containerProdutos.innerHTML += 
      `
        <!-- Box promoção indisponível -->
        <div class="corpo__card">
            <!-- Box imagem promoção indisponível -->
            <div class="box--image">
                <img src="${val.imageURL}"/>
            </div>
            <!-- Box desconto -->
            <div class="box--desconto">
                <p>10% off</p>
            </div>
            <!-- Descrição do produto de promoção indisponível -->
            <div class="box--descricao">
                <p>${val.name}</p>
            </div>
            <!-- Box de preços da promoção indisponível -->
            <div class="box--precos">
                <span class="span--black">R$${val.bestPrice}</span>
                <span class="span--red">R$${val.sellingPrice}</span>
            </div>
            <!-- Botão de promoção indisponível -->
            <div class="box--botao">
                <button >Indisponível</button>
            </div>
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
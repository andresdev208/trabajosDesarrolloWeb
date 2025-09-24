  const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "Laptop", desc: "16GB RAM",price:"2.500.000",img:"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Platinum-001:VP5-1920x600"},
    {titulo: "Mouse", desc: "Inalámbrico",price:"100.000",img:"https://http2.mlstatic.com/D_NQ_NP_603387-MCO92647959523_092025-O.webp"},
    {titulo: "Teclado", desc: "Inalambrico",price:"80.000",img:"https://panamericana.vtexassets.com/arquivos/ids/490884-1200-auto?v=638175177232700000&width=1200&height=auto&aspect=true"},
    {titulo: "Monitor", desc:"20 pulgadas",price:"500.000",img:"https://images.philips.com/is/image/philipsconsumer/3b0fe009e2ce4883b552b0220060489c?wid=700&hei=700&$pnglarge$"},
    {titulo: "Tarjeta Grafica", desc:"3gb",price:"1.000.000",img:"https://cyberteamcr.com/wp-content/uploads/2023/11/tarjeta_grafica-que_es_y_como_funciona.webp"}
  ];
 
  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector("img").src=p.img;
    clon.querySelector("img").title=p.desc;
    clon.querySelector(".price").textContent=p.price;
   

    contenedor.appendChild(clon);
  });

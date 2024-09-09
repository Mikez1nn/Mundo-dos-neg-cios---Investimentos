function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
    // Obtém o texto digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for igual a nada 
        if (campoPesquisa == "") {
            section.innerHTML = "<p>Nenhuma busca encontrada<p/>"
            return
        }
        if (campoPesquisa == " ") {
            section.innerHTML = "<p>Nenhuma busca encontrada<p/>"
            return
        }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            tags = dado.tags.toLowerCase()
    // Se no dado titulo includes o campoPesquisa, então procura tudo
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informaçôes</a>
            </div>
          `;
        }
    }

    // Se a palavra não for encontrada
    if (!resultados) {
        resultados = "<p>Nenhuma busca encontrada<p/>"
    }
  
    // Insere os resultados HTML na seção
    section.innerHTML = resultados;
  }


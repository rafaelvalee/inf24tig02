window.onload = function () {
  fetch('linguagens.xml')
    .then(response => response.text())
    .then(xmlText => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const linguagens = xmlDoc.getElementsByTagName("linguagem");
      const tabela = document.createElement("table");
      tabela.innerHTML = `<thead><tr><th>Dificuldade</th><th>Nome</th><th>Uso</th></tr></thead><tbody></tbody>`;
      const tbody = tabela.querySelector("tbody");

      // Verifica se as duas primeiras têm mesma dificuldade (para aplicar rowspan como exemplo)
      const dificuldade0 = linguagens[0].getElementsByTagName("dificuldade")[0].textContent;
      const dificuldade1 = linguagens[1].getElementsByTagName("dificuldade")[0].textContent;

      if (dificuldade0 === dificuldade1) {
        const nome0 = linguagens[0].getElementsByTagName("nome")[0].textContent;
        const uso0 = linguagens[0].getElementsByTagName("uso")[0].textContent;

        const nome1 = linguagens[1].getElementsByTagName("nome")[0].textContent;
        const uso1 = linguagens[1].getElementsByTagName("uso")[0].textContent;

        // Primeira linha com rowspan
        const row1 = document.createElement("tr");
        row1.innerHTML = `<td rowspan="2">${dificuldade0}</td><td>${nome0}</td><td>${uso0}</td>`;
        tbody.appendChild(row1);

        // Segunda linha sem dificuldade
        const row2 = document.createElement("tr");
        row2.innerHTML = `<td>${nome1}</td><td>${uso1}</td>`;
        tbody.appendChild(row2);

        // Continua do terceiro item
        for (let i = 2; i < linguagens.length; i++) {
          const nome = linguagens[i].getElementsByTagName("nome")[0].textContent;
          const dificuldade = linguagens[i].getElementsByTagName("dificuldade")[0].textContent;
          const uso = linguagens[i].getElementsByTagName("uso")[0].textContent;

          const row = document.createElement("tr");
          row.innerHTML = `<td>${dificuldade}</td><td>${nome}</td><td>${uso}</td>`;
          tbody.appendChild(row);
        }
      } else {
        // Caso não haja dificuldades repetidas no início
        for (let i = 0; i < linguagens.length; i++) {
          const nome = linguagens[i].getElementsByTagName("nome")[0].textContent;
          const dificuldade = linguagens[i].getElementsByTagName("dificuldade")[0].textContent;
          const uso = linguagens[i].getElementsByTagName("uso")[0].textContent;

          const row = document.createElement("tr");
          row.innerHTML = `<td>${dificuldade}</td><td>${nome}</td><td>${uso}</td>`;
          tbody.appendChild(row);
        }
      }

      // Adiciona <tfoot>
      const tfoot = document.createElement("tfoot");
      tfoot.innerHTML = `
        <tr>
          <td colspan="3" style="text-align: center; padding-top: 1rem;">
            Esta tabela foi feita em XML, vê o código 
            <a href="linguagens.xml" download style="font-weight: bold; text-decoration: none; color: #2563eb;">
              AQUI
            </a>.
          </td>
        </tr>
      `;
      tabela.appendChild(tfoot);

      document.getElementById("tabela-linguagens").appendChild(tabela);
    });
};

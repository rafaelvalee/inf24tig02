# Relatório do Projeto  
## Aprender a Programar: Guia Interativo para Iniciantes

---

## 1. Project Presentation – Apresentação do Projeto

### Proposta de Trabalho

O presente projeto foi desenvolvido no âmbito da disciplina de Tecnologias Web e tem como objetivo criar um website educativo dedicado a iniciantes na área da programação. O tema "Ensino" foi concretizado através da criação de uma plataforma simples, intuitiva e interativa, que fornece conteúdos, exemplos práticos e quizes para apoiar o autoestudo e desmistificar os primeiros passos no mundo da programação.

### Descrição Completa

"Aprender a Programar: Guia Interativo para Iniciantes" consiste num website constituído por quatro páginas principais:

- **Início:** Apresentação do projeto e motivação para aprender a programar, com uma introdução amigável e imagem de destaque.
- **Linguagens:** Apresentação das principais linguagens, de forma resumida, incluindo tabela comparativa e exemplos de código.
- **Secção especifica para cada linguagem:** Secção interativa com quizes em JavaScript para consolidar conhecimentos adquiridos, com validação de respostas em tempo real.

O projeto foi pensado para ser visualmente apelativo, responsivo e acessível em qualquer dispositivo, cumprindo os requisitos técnicos do enunciado.

---

## 2. User Interface – Interface com o Utilizador

### Estudo da Interface

#### Wireframe

- **Wireframe :**
  - ![Wireframe](images/wireframe.png)


#### Sitemap

- **Sitemap :**
  - ![Sitemap](images/sitemap.png)



### Apresentação do Resultado Final e Comparação

O resultado final respeita o planeamento inicial, mantendo a simplicidade e coerência visual entre páginas. Foram introduzidos pequenos melhoramentos face ao wireframe, nomeadamente a adição de animações leves em CSS.

---

## 3. Product – Produto

### Descrição do Produto

O produto é um website educativo estático, desenvolvido em **HTML5, CSS3** e **JavaScript**. Oferece conteúdos sobre programação para iniciantes, organizados de forma acessível e com interatividade através de quizes, exemplos em código, recursos em XML e validações JS.

### Ligação para o site do grupo em Netlify

[https://inf24tig02.netlify.app/](https://inf24tig02.netlify.app/)  


### Instruções de Instalação e Configuração

#### Instalação Local

1. Fazer download do repositório a partir do GitHub:
    git clone https://github.com/rafaelvalee/inf24tig02.git
2. Abrir a pasta do projeto com um editor de texto (VS Code recomendado).
3. Executar o ficheiro `index.html` no navegador à escolha.

#### Publicação em Netlify

- O site foi publicado automaticamente através do Netlify, integrando diretamente com o repositório GitHub.
- Basta associar o repositório ao Netlify e este faz o deploy automático em cada atualização.
- Não são necessárias configurações adicionais devido ao carácter estático do site.

### Regras de Utilização

- O acesso é livre, sem necessidade de autenticação.
- O site pode ser usado por qualquer pessoa que pretenda aprender os primeiros conceitos de programação.
- Não existem limitações funcionais, exceto o facto de não permitir contribuições ou comentários dos utilizadores.

### Ajuda à Navegação

- A navegação é feita por menu fixo no topo, visível em todas as páginas.
- Cada página apresenta um título claro para melhor orientação.
- Existem tooltips nos botões de navegação.
- O footer contém atalhos rápidos para as secções principais.
- Os botões do quiz apresentam mensagens de feedback imediato.

### Validações de Formulários

- Os quizes são validados em tempo real com JavaScript, bloqueando respostas vazias e mostrando feedback correto/incorreto.

### Validação do HTML e CSS

- Todo o HTML e CSS foi validado usando os validadores oficiais:
    - [W3C HTML Validator](https://validator.w3.org/)
    - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Todos os ficheiros passaram nos testes sem erros críticos.

### Detalhes de Implementação

- Foram cumpridos todos os requisitos mínimos:
    - min. 4 páginas estáticas
    - Documento XML (`linguagens.xml`) com exemplos de recursos, validado por schema próprio (`linguagens.xsd`)
    - Funcionalidade de quiz interativo em JavaScript
    - Utilização de Flexbox para o layout e animações CSS
    - Responsividade assegurada para desktop, tablet e smartphone
    - Integração de elementos multimédia (vídeo YouTube embutido)
    - Download de ficheiro XML disponível para utilizadores
- Foram adicionadas funcionalidades extra:
    - Animações CSS nos botões e imagens
    - Validação dinâmica de respostas nos quizes
---




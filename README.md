# Portfólio
Portfólio criado para testes relacionado a acessibilidade. A aplicação permite que o usuário encontra algumas informações sobre minha trajetoria profissional, alem de meios de contato.

## Acessibilidade
Desenvolvi a aplicação considerando diferentes formas de navegação e interação, buscando tornar o conteúdo mais acessível para diferentes usuários.

Utilizei HTML semântico, textos alternativos (`alt`) nas imagens, `label` nos campos do formulário e atributos `aria-label` quando necessários. Também implementei navegação por teclado no menu e nos botões de demonstração dos projetos.

O modal dos projetos possui gerenciamento de foco: ao ser aberto, o foco é direcionado para o botão de fechamento e, ao ser fechado, retorna para o elemento que iniciou a interação. Também é possível fechar o modal utilizando a tecla `Esc`.

Esses recursos são importantes porque a acessibilidade não depende apenas da aparência da interface. A utilização correta dos elementos HTML fornece comportamentos de acessibilidade nativos, enquanto o ARIA deve ser utilizado para complementar a semântica quando necessário. A navegação por teclado também é essencial para usuários que não utilizam mouse ou que utilizam tecnologias assistivas.

## SEO e metadados

Também implementei recursos de SEO e metadados para facilitar a identificação e a interpretação da página por mecanismos de busca e melhorar a forma como o conteúdo é apresentado quando compartilhado.

No `index.html`, utilizei `title`, `meta description`, `meta author` e metadados Open Graph. Também adicionei dados estruturados em **JSON-LD**, utilizando **Schema.org**, com informações relacionadas ao meu perfil profissional.

Os dados estruturados fornecem informações padronizadas sobre o conteúdo da página e ajudam mecanismos de busca a entender melhor o que está sendo apresentado. Já os metadados permitem definir informações importantes sobre a página, como título e descrição, que podem ser utilizadas pelos mecanismos de busca e por plataformas que geram prévias de compartilhamento.

Também defini o idioma da página como `pt-BR` e utilizei elementos HTML semânticos para estruturar o conteúdo. Além de contribuírem para acessibilidade, elementos semânticos ajudam a representar de forma mais clara a estrutura e o conteúdo da página.

## Demo
https://dhayananascimento.github.io/frontend-portfolio/

## Tecnologias

-  HTML5
- CSS3
- JavaScript

## Requisitos

- Navegador web

## Como executar
**Para executar este projeto na sua máquina, siga as instruções abaixo**

Rode os seguintes comandos no seu terminal para clonar o projeto:

```
$ git clone https://github.com/dhayananascimento/frontend-portfolio.git
$ cd frontend-portfolio
```

Depois, basta abrir o arquivo `index.html` no navegador.

## Como testar

### Formulário

1. Acesse a seção de contato.
2. Verifique se ao clicar nos títulos dos campos do formulário, o foco é direcionado para o campo de entrada.
3. Preencha os campos de nome, e-mail e mensagem.
4. Tente enviar o formulário.
5. Verifique as validações dos campos.
6. Ao enviar, verifique a mensagem apresentada pela aplicação.

O formulário possui validações nos campos e, atualmente, o envio exibe a mensagem `Em desenvolvimento!`. Implementação em andamento.

### Acessibilidade

1. Navegue pela página utilizando a tecla `Tab` e verifique a ordem de foco dos elementos.
2. Utilize `Enter` ou `Espaço` para interagir com os elementos que possuem suporte a teclado.
3. Teste a abertura das demonstrações dos **projetos** (`Demo`) utilizando o teclado.
4. Ao abrir o modal, verifique se o foco é direcionado para o botão de fechamento.
5. Utilize `Esc`, `Enter` ou `Espaço` para fechar o modal.
6. Verifique se o foco retorna ao elemento que abriu o modal após o fechamento.
7. Teste a navegação em diferentes tamanhos de tela.


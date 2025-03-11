# Forest - Projeto Tailwind CSS

![Projeto Forest](./src/img/cover.png)

## Sobre o Projeto

Forest é um site desenvolvido durante o curso de Tailwind CSS da [Origamid](https://www.origamid.com/). O projeto demonstra a implementação de um design moderno com tema florestal utilizando as classes utilitárias do Tailwind CSS.

## Tecnologias Utilizadas

- [Tailwind CSS](https://tailwindcss.com/) v3.4.17
- HTML5
- JavaScript Vanilla
- Fontes: DM Sans e DM Serif Text (Google Fonts)

## Funcionalidades

- Design responsivo
- Animações personalizadas
- Tema personalizado com paleta de cores verdes
- Componentes customizados via `@layer components`
- Gradientes estilizados

## Customizações do Tailwind

O projeto inclui customizações avançadas do Tailwind CSS:

- Cores personalizadas na paleta de verde
- Fontes customizadas
- Animações e keyframes personalizados
- Plugins customizados para delays de animação
- Componentes estilizados como botões, inputs e efeitos neon

## Estrutura do Projeto

```
forest/
├── src/
│   ├── img/           # Imagens do projeto
│   ├── js/            # Scripts JavaScript
│   ├── video/         # Arquivos de vídeo
│   ├── input.css      # Arquivo de entrada do Tailwind
│   ├── output.css     # CSS compilado
│   └── index.html     # Página principal
├── tailwind.config.js # Configuração do Tailwind
└── package.json       # Dependências
```

## Como Executar o Projeto

1. Clone este repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o build do Tailwind:
   ```
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```
4. Abra o arquivo `src/index.html` em seu navegador

## Aprendizados

Este projeto demonstra várias técnicas do Tailwind CSS:

- Utilização do sistema de classes utilitárias
- Personalização do tema e configurações
- Criação de componentes com @layer
- Animações e transições
- Design responsivo com os breakpoints padrão

## Autor

Desenvolvido por Lyon Müller durante o curso de Tailwind CSS da Origamid, ministrado por André Rafael.

## Licença

Este projeto foi desenvolvido com propósitos educacionais. Design original por Origamid.

---

Projeto construído como parte do curso de Tailwind CSS da [Origamid](https://www.origamid.com/). 
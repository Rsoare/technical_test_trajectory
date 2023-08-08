## Teste Tecnico [Trajetória Consultoria](https://www.trajetoriaconsultoria.com.br/) 

## Introdução
- O projeto foi construído principalmente utilizando [React.js](https://react.dev/) + [Vite](https://vitejs.dev/guide/) + [TypeScript](https://www.typescriptlang.org/) Consulte as documentações oficiais para obter informações detalhadas e orientações específicas, caso necessário.
  - Ducumentação - [React.js](https://react.dev/) 
  - Ducumentação - [vite](https://vitejs.dev/guide/)
  - Ducumentação - [TypeScript](https://www.typescriptlang.org/)

- O projeto consiste em um MVP (Mínimo Produto Viável) de uma aplicação para consulta de informações meteorológicas de várias cidades do Brasil e do mundo, utilizando a API da [Openweathermap](https://openweathermap.org/) . Ao longo desta documentação, detalharei informações importantes sobre o desenvolvimento desta aplicação.


## Acessar a aplicação na Vercel
- Para facilitar o teste da aplicação, foi realizado o seu deploy na Vercel, eliminando assim a necessidade de inicializar a aplicação localmente.
  - Basta accesar este link: https://technical-test-trajectory.vercel.app/

## Inicializando a aplicação localmente

- Para iniciar a aplicação, basta realizar o clone desse repositorio inicie o terminal de comandos e realize sequência de comandos abaixo na raiz do projeto.
 - Instalar as dependências
 - Inicializar a aplicação

### Intalando Dependencias 
```bash
   npm install
```

### Inicializando a aplicação
```bash
   npm run dev
```
## Funcionalidades da aplicação
- Barra de pesquisa
   - Ao digitar o nome da cidade desejada e enviar, será renderizado o card com as informações meteorológicas da cidade desejada
- Renderização dos cards com informações meteorológicas
   - A aplicação permite a renderização de até 5 cards simultaneamente. (Mais informações ao longo desta documentação.)
- Atualização Automática
  -  a aplicação esta configurada para atualizar as informaçoes da dashboard altomaticamente a cada 5 minutos















## Teste Tecnico [Trajetória Consultoria](https://www.trajetoriaconsultoria.com.br/) 

## Introdução
- O projeto foi construído principalmente utilizando [React.js](https://react.dev/) + [Vite](https://vitejs.dev/guide/) + [TypeScript](https://www.typescriptlang.org/) Consulte as documentações oficiais para obter informações detalhadas e orientações específicas, caso necessário.
  - Ducumentação - [React.js](https://react.dev/) 
  - Ducumentação - [vite](https://vitejs.dev/guide/)
  - Ducumentação - [TypeScript](https://www.typescriptlang.org/)

- O projeto consiste em um MVP (Mínimo Produto Viável) de uma aplicação para consulta de informações meteorológicas de várias cidades do Brasil e do mundo, utilizando a API da [Openweathermap](https://openweathermap.org/) . Ao longo desta documentação, detalharei informações importantes sobre o desenvolvimento desta aplicação.

#

## Acessar a aplicação na Vercel
- Para facilitar o teste da aplicação, foi realizado o seu deploy na Vercel, eliminando assim a necessidade de inicializar a aplicação localmente.
  - Basta accesar este link: https://technical-test-trajectory.vercel.app/

#

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

#

## Funcionalidades da aplicação
- Barra de pesquisa
   - Ao digitar o nome da cidade desejada e enviar, será renderizado o card com as informações meteorológicas da cidade desejada
- Renderização dos cards com informações meteorológicas.
   - A aplicação permite a renderização de até 5 cards simultaneamente. (Mais informações ao longo desta documentação.).
- Atualização Automática
  -  a aplicação esta configurada para atualizar as informaçoes da dashboard altomaticamente a cada 5 minutos.
#

## Informações sobre a integração com a APIs.
- Duas APIs da [Openweathermap](https://openweathermap.org/) foram utilizados nesse projeto.
  
### Aviso 
  - A integração dessas APIs foi realizada seguindo a documentação oficial, não utilizando a API integrada por nome de cidade, já que seu suporte foi descontinuado. Isso evita problemas futuros na aplicação.
  - A documentação recomenda o uso da API de geocodificação para obter coordenadas geográficas (lat, lon) e, após isso, utilizar essas informações na API de Dados Meteorológicos Atuais.

### Current weather data API
  - Acessa dados meteorológicos atuais utilizando latitude e longitude como parâmetros de busca.
  - Exemplo da rota utilizada.
    ```
      https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    ```

### Geocoding API
- Permite obter coordenadas geográficas (lat, lon) usando o nome do local (nome da cidade ou nome da área), podendo retornar dados de até 5 locais diferentes
- Exemplo da rota utilizada.
  ```
    https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  ```

# 

## Configuração de limites de cards
- Para alterar o número máximo de cards renderizados, basta acessar a pasta "src > contexts > weather > index.tsx". Nesse arquivo, na linha 22 até 25, você verá o trecho de código correspondente.
  ```
    try {
      const response: AxiosResponse<iGeocoding[]> = await apiGeocoding.get(
      `/direct?q=${data.name}&limit=5&appid=${keyApi}`
    );
  ```
  - Basta alterar o ` limit=5 ` quese refere ao numero de cards a ser exibido
  - Exemplo: limit=1 para exibir no máximo 1 cards.
    














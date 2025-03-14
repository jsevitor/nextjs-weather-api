# SMART CLIMA - Aplicação de Previsão Climática

SMART CLIMA é uma aplicação web desenvolvida para fornecer consultas de previsões climáticas atualizadas para diversas cidades. A plataforma conta com um mapa interativo, que exibe informações sobre o clima de várias capitais brasileiras, além de apresentar gráficos de probabilidade de chuva e de acúmulo de precipitação. O projeto é alimentado por uma API externa de previsão do tempo e oferece uma interface intuitiva, permitindo que os usuários visualizem as informações de forma clara e precisa.

## Demonstração

![image](https://github.com/user-attachments/assets/de306505-e3bd-48d3-b6e2-d412ecc07a80)
![image](https://github.com/user-attachments/assets/a3d22a4c-accb-4465-a430-b98b8cc75b9d)


## Acesso ao Projeto

A aplicação está disponível em: [https://smart-clima.netlify.app/](https://smart-clima.netlify.app/)

## Funcionalidades

- **Previsão Atual**: Exibe a previsão do tempo para o dia atual, incluindo temperatura, descrição do clima, umidade, etc.
- **Previsão para o Próximo Dia**: Mostra a previsão para o dia seguinte, com informações semelhantes à previsão atual.
- **Previsão Semanal**: Exibe as previsões climáticas para os próximos sete dias.
- **Mapa Interativo**: Visualize um mapa com a localização e as condições climáticas de diversas cidades.
- **Gráficos de Probabilidade de Chuva e Acúmulo**: Mostra gráficos para visualização das probabilidades de chuva e previsão de acúmulo de chuva.
- **Mudança de Tema:** Permite ao usuário alternar entre temas claros e escuros para uma experiência personalizada e confortável
  
## Tecnologias Utilizadas

- **Frontend:**
  - React.js com Next.js para a construção da interface do usuário.
  - CSS Modules para estilização isolada dos componentes.
  - Leaflet para mapas interativos.
  - Chart.js para gráficos de probabilidade e acúmulo de chuva.
  - Bootstrap Icons
    
- **Backend:**
  - Integração com a API de previsão do tempo **HG Weather** para obter as informações climáticas.

## Como Executar o Projeto Localmente

1. **Pré-requisitos:**
   - Node.js instalado na máquina.
   - Chave de API válida para o serviço de previsão do tempo.

2. **Passos:**
   - Clone o repositório:
     ```bash
     git clone https://github.com/jsevitor/nextjs-weather-api
     cd nextjs-weather-api
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Configure a chave da API:
     - Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:
       ```
       API_KEY=sua_chave_aqui
       ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```
   - Acesse a aplicação em: `http://localhost:3000`

## Melhorias Futuras
- **Implementação de Autenticação**: Permitir que os usuários salvem suas cidades favoritas e preferências.
- **Suporte a Mais Tipos de Dados Climáticos**: Adicionar mais dados climáticos como velocidade do vento, pressão atmosférica, etc.
- **Suporte a Múltiplos Idiomas**: Implementar tradução para outros idiomas.

## Contribuição
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a MIT License - consulte o arquivo LICENSE para mais detalhes.

## Contato
Caso queira entrar em contato, me encontre em:

- LinkedIn: [linkedin.com/in/josevitoroliveira](https://linkedin.com/in/josevitoroliveira)
- E-mail: [vitorjseo@gmail.com](mailto:vitorjseo@gmail.com)

---
Desenvolvido por **Vitor Oliveira**.

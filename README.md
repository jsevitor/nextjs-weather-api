# Previsão do Tempo - Aplicação de Previsão Climática

Previsão do Tempo é uma aplicação web desenvolvida para fornecer previsões climáticas atualizadas para diversas cidades, além de mostrar gráficos de probabilidade de chuva e acúmulo de chuva. O projeto é alimentado por uma API externa de previsão do tempo, e a interface oferece uma navegação intuitiva para os usuários visualizarem as informações de forma clara e precisa.

Demonstração

Acesse a aplicação ao vivo: https://seulink.com

Funcionalidades
Previsão Atual: Exibe a previsão do tempo para o dia atual, incluindo temperatura, descrição do clima, umidade, etc.
Previsão para o Próximo Dia: Mostra a previsão para o dia seguinte, com informações semelhantes à previsão atual.
Previsão Semanal: Exibe as previsões climáticas para os próximos sete dias.
Mapas Interativos: Visualize um mapa com a localização e as condições climáticas de diversas cidades.
Gráficos de Probabilidade de Chuva e Acúmulo: Mostra gráficos para visualização das probabilidades de chuva e previsão de acúmulo de chuva.
Tecnologias Utilizadas
Frontend:
React.js com Next.js para a construção da interface do usuário.
CSS Modules para estilização isolada dos componentes.
Leaflet para mapas interativos.
Chart.js para gráficos de probabilidade e acúmulo de chuva.
Backend:
Node.js para o servidor e lógica de negócios.
Integração com uma API de previsão do tempo externa para obter as informações climáticas.
Como Executar o Projeto Localmente
Pré-requisitos:
Node.js instalado na máquina.
Chave de API válida para o serviço de previsão do tempo (ex: OpenWeather, WeatherAPI, etc.).
Passos:
Clone o repositório:

bash
Copiar
git clone https://github.com/seu-usuario/previsao-do-tempo.git
cd previsao-do-tempo
Instale as dependências:

bash
Copiar
npm install
Configure a chave da API: Crie um arquivo .env na raiz do projeto e adicione sua chave de API para o serviço de previsão do tempo:

env
Copiar
WEATHER_API_KEY=sua_chave_aqui
Inicie o servidor de desenvolvimento:

bash
Copiar
npm run dev
Acesse a aplicação em: http://localhost:3000

Melhorias Futuras
Implementação de Autenticação: Permitir que os usuários salvem suas cidades favoritas e preferências.
Suporte a Mais Tipos de Dados Climáticos: Adicionar mais dados climáticos como velocidade do vento, pressão atmosférica, etc.
Otimização da Performance: Melhorar o tempo de resposta durante a análise das previsões.
Suporte a Múltiplos Idiomas: Implementar tradução para outros idiomas.
Contribuição
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Colaboradores
José Vitor Oliveira: Desenvolvedor responsável pela implementação da aplicação, integração com a API de previsão do tempo e funcionalidades do frontend.
Licença
Este projeto está licenciado sob a MIT License - consulte o arquivo LICENSE para mais detalhes.

Contato
Caso queira entrar em contato, me encontre em:

LinkedIn: linkedin.com/in/josevitoroliveira
E-mail: vitorjseo@gmail.com

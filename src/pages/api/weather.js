import axios from "axios";

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get(
//       `https://api.hgbrasil.com/weather?format=json-cors&key=b067a519`
//     );
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error("Erro na requisição para a API externa:", error);
//     res.status(500).json({ message: "Erro ao buscar dados da API externa" });
//   }
// }


// pages/api/weather.js
// import axios from "axios";

export default async function handler(req, res) {
  const { city_name } = req.query;
  const apiUrl = "https://api.hgbrasil.com/weather?key=b067a519";

  try {
    // Se o nome da cidade for fornecido, faz a consulta para a cidade específica
    const url = city_name
      ? `${apiUrl}&city_name=${city_name}`
      : apiUrl; // Caso contrário, consulta a previsão para o padrão (sem cidade especificada)

    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro na requisição para a API externa:", error);
    res.status(500).json({ message: "Erro ao buscar dados da API externa" });
  }
}

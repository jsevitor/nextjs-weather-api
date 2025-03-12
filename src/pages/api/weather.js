import axios from "axios";

export default async function handler(req, res) {
  const { city_name } = req.query;
  const apiUrl = "https://api.hgbrasil.com/weather?key=b067a519";

  try {
    const url = city_name ? `${apiUrl}&city_name=${city_name}` : apiUrl;

    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro na requisição para a API externa:", error);
    res.status(500).json({ message: "Erro ao buscar dados da API externa" });
  }
}

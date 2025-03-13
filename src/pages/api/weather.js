import axios from "axios";

export default async function handler(req, res) {
  const { city_name, lat, long } = req.query;
  const apiUrl = "https://api.hgbrasil.com/weather?key=4658826f";

  try {
    let url = apiUrl;

    // Se lat e long forem fornecidos, use-as para a consulta
    if (lat && long) {
      url = `${apiUrl}&lat=${lat}&lon=${long}`;
    } else if (city_name) {
      // Caso contrário, use a cidade fornecida
      url = `${apiUrl}&city_name=${city_name}`;
    }

    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro na requisição para a API externa:", error);
    res.status(500).json({ message: "Erro ao buscar dados da API externa" });
  }
}

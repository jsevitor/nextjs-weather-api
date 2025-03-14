import axios from "axios";
import  dotenv  from "dotenv";

dotenv.config()

export default async function handler(req, res) {
  const { city_name, lat, long } = req.query;

  const API_KEY = process.env.API_KEY
  const apiUrl = `https://api.hgbrasil.com/weather?key=${API_KEY}`;

  try {
    let url = apiUrl;
    if (lat && long) {
      url = `${apiUrl}&lat=${lat}&lon=${long}`;
    } else if (city_name) {
      url = `${apiUrl}&city_name=${city_name}`;
    }

    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro na requisição para a API externa:", error);
    res.status(500).json({ message: "Erro ao buscar dados da API externa" });
  }
}

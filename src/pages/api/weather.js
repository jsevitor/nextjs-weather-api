import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://api.hgbrasil.com/weather?format=json-cors&key=b067a519`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro na requisição para a API externa:", error);
    res.status(500).json({ message: "Erro ao buscar dados da API externa" });
  }
}

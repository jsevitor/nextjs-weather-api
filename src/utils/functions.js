const actualDate = () => {
  const dataAtual = new Date();
  return dataAtual.toLocaleString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export { actualDate };

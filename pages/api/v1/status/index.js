function status(request, response) {
  response.status(200).json({ chave: "mensagem :D" });
}

export default status;

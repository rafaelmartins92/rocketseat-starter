function exibeMensagem(endereco) {
  return (
  "O usúario mora em " + endereco.cidade + 
  " / " + endereco.uf + 
  ", no bairo " + endereco.bairro + 
  ', na rua "'  + endereco.rua +
  '" com número ' + endereco.numero +
  "."
  );
};

var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
}

console.log(exibeMensagem(endereco));
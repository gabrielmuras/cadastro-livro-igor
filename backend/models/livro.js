//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const livroSchema = mongoose.Schema ({
id: {type: String, required: true},
titulo: {type: String, required: true, default: '00000000'},
autor: {type: String, required: true},
paginas: {type: String, required: false, default:'300'}
});

//criamos o modelo associado ao nome Cliente e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Livro', livroSchema);

class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar() {
      let ataque
  
      switch (this.tipo) {
        case "mago":
          ataque = "sua magia"
          break
        case "guerreiro":
          ataque = "sua espada"
          break
        case "monge":
          ataque = "artes marciais"
          break
        case "ninja":
          ataque = "shuriken"
          break
        default:
          ataque = "realizou um ataque desconhecido"
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
  const mago = new Heroi("Merlin", 150, "mago")
  const guerreiro = new Heroi("Arthur", 35, "guerreiro")
  const monge = new Heroi("Chun", 28, "monge")
  const ninja = new Heroi("Hattori", 30, "ninja")
  
  mago.atacar()
  guerreiro.atacar()
  monge.atacar()
  ninja.atacar()
  
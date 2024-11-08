async function objetivosUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/razoes-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const objetivosUso = Object.keys(dados)
  const quantidadeUsuarios = Object.values(dados)
  
  }

  const data = [
    {
      labels: objetivosUso,
      values: quantidadeUsuarios,
      type: 'pie'
    }
  ]
  objetivosUsuarios()
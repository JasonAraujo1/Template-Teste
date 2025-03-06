import React, { useState } from 'react'

export default function Teste1() {
  const [inputText, setInputText] = useState("")

  function handleClick(event) {
    event.preventDefault()//se não tiver a página atualiza ao clicar e perde os dados por causa que o button dentro de um form tem esse comportamento ao ser clicado
    alert(inputText)
  }

  return (
    <div>
      <form action="">
        <input onChange={(event) => setInputText(event.target.value)} type="text" />
        <button onClick={handleClick}>click</button>
      </form>
    </div>
  )
}


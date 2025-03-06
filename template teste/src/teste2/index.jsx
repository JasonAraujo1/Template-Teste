import React, { useState } from 'react'

export default function Teste2() {
    const [inputNumber, setInputNumber] = useState(0)

    function handleClick(event) {
        event.preventDefault()
        alert(inputNumber)
    }

    return (
        <div>
            <form action="">
                <input onChange={(event) => setInputNumber(event.target.value)} type="number" />
                <button onClick={handleClick}>click</button>
            </form>
        </div>
    )
}

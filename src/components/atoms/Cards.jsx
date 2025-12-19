import React, { useState } from 'react'

const Cards = () => {
  const [cards] = useState([
    {
      id: 1,
      phrase: "Frase de prueba 1",
      author: "Autor 1"
    },
    {
      id: 2,
      phrase: "Frase de prueba 2",
      author: "Autor 2"
    },
    {
      id: 3,
      phrase: "Frase de prueba 3",
      author: "Autor 3"
    }
  ])

  return (
    <>
      {
        cards.map((card, index) => (
          <div key={index}>
            <p>{card.phrase}</p>
            <p>{card.author}</p>
          </div>
        ))
      }
    </>
  )
}

export default Cards
import React, { useState } from 'react'

const Cards = () => {
    const [cards, setCards] =useState([
      {
        id:1,
        phrase:"",
        author:""
    },
      {
        id:2,
        phrase:"",
        author:""
      }, 
      { 
        id:3,
        phrase:"",
        author:""
      }  
    ])


  return (
    <>
        { 
            card.map((card,index)=>(
                 <div key={(index)}>
                    <p>{card.phrase}</p>
                    <p>{card.author}</p>
                </div>       
          ))
        }
    </>
    )
    }


export default Cards
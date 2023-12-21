import React from "react"

const Card = (props) => {
  return (
    <div className="handStyles">
      {props.hand.map((card, index) => {
        // Style for the red diamonds
        let cardClass = "cardStyles"
        // Card is the variable iterated over
        if (card.includes("♦️")) {
          cardClass += " red-diamond "
        }

        return (
          <div key={index} className={cardClass}>
            {card}
          </div>
        )
      })}
    </div>
  )
}

export default Card
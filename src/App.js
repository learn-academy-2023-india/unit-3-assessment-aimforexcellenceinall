import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // Get a random card with a random rank and suit
    // 1) The code produces a random card. It picks a random rank from the rank array and a random suit from the suit array. The drawCard data blends with a string via string interpolation (or backticks, aka template literals) to manage a hand of the card deck.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // Check if the draw isn't in the hand
    // 2) If the index is -1, the card isn't in the hand since indexOf() checks if the draw, or drawn card, isn't already present in the hand array. 
    if (hand.indexOf(draw) === -1) {
      // Add the draw to the hand via the spread operator
      // 3) If the draw isn't in the hand, this code line uses a spread operator to add the draw to the hand array and create a new array with the existing cards, now including the new draw. The setHand() method updates the hand state, adding the new `draw` element to the array's end.
      setHand([...hand, draw])
      // 4) If the draw is already in the hand, this code line checks if there are available draws, i.e., the hand has't hit 52, a standard card deck.
    } else if (hand.length !== 52) {
      // Draw again if the draw is available in the hand 
      // 5) The drawCard() function is responsible for a draw.
      drawCard()
      // 6) If a draw was already in the hand, this code line prepares for a full deck.
    } else {
      // If the hand hit 52 cards, alert the player
      // 7) The player is notified that a full deck was reached.
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    // Reset the hand to an empty array
    setHand([])
  }

  return (
    // Wrap the return elements in an enclosing tag.
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App

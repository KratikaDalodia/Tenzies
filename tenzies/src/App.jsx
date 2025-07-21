import Die from "./components/Die"
import React from "react"
import { nanoid } from "nanoid"
export default function App(){

  const [dice, setDice] = React.useState(generateAllDice())

  function generateAllDice(){
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld : false,
      id: nanoid()
    }))
  }

  
  function rollDice(){
    setDice(generateAllDice())
  }
  function hold(id){
    setDice(prevDie => prevDie.map(die => die.id === id ?{
        ...die,
        isHeld : !die.isHeld
    } : die))
  }
  const diceElements = dice.map(num => <Die key={num.id} value={num.value} isHeld={num.isHeld} hold={hold} id={num.id} />)

  return (
    <main className="main-container">
        <div className="grid-container">
          {diceElements}
        </div>

        <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}
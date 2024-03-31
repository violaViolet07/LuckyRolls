import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import LuckyN from "./LuckyN";
import { sum } from "./utils";

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}
function App() {


  return (
    <>
      <h1>A State Demonstration</h1>
      {/*<Counter />
      <Dumbo />
      <ScoreKeeper numPlayers={5} target={5} />
      <EmojiClicker/>
      */}
<LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      />
   
    </>
  )
}

export default App

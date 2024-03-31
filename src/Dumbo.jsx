import { useState } from "react";
function generateGameBoard() {
    console.log("Workingg!!")
   return Array(5000);
}
export default function Dumbo() {
const[board,setBoard]=useState(generateGameBoard());
return (
<button onClick={()=>setBoard("Helloo")}>
    Click to change state</button>
);
}
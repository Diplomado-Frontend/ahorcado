import { useState } from 'react'
import  { letters } from "./helpers/letters"; 
import hangImage from "./components/hangImage"; 
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

    // const onHandledClickLetter = (e) => {
    //     e.preventDefault();    
    // }

  return (
   <div className='text-center'>

      { /* Images */ }

      <hangImage imageNumber={5}/>


      { /* hidden word */ }

      <h3 className="font-bold text-2xl my-4 text-blue-600"> - - - - - - </h3>

      { /* try count */ }

      <h3 className="font-bold text-2xl my-4 text-blue-600"> try: 0 </h3>

      { /* message if lose */ }

      <h3 className="font-bold text-2xl my-4 text-red-600">You are lose!! 😩</h3>

      { /* message if win */ }

      <h3 className="font-bold text-2xl my-4 text-green-700">Congratulations, you are win!! 🥳</h3>

      { /* keyboard */ }

      { letters.map((letter) => (       
        <button className="bg-white p-4 rounded-full shadow-md m-2" 
                key={letter}
                >{letter}</button>
       ))}

      { /* new game's button */ }

      <button className='bg-blue-700 py-4 px-6 rounded-full text-white font-bold text-xl mt-6'>New Game?</button>

   </div>
  )
}

export default App
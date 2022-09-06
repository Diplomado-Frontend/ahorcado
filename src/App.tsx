import { useState, useEffect } from 'react'
import  { letters } from "./helpers/letters"; 
import  { getRandomWords } from "./helpers/getRandomWords"; 
import HangImage from "../src/components/hangImage";
import './App.css'

function App() {

  const [intents, setIntents] = useState(0);
  const [words, setWords] = useState(getRandomWords());
  const [lose, setLose] = useState(false);
  const [wan, setWan] = useState(false);
  const [hideWord, setHideWord] = useState("_ ".repeat(words.length));


  useEffect(() => {
    if (intents === 9) {
      setLose(true);
    }
  }, [intents])
  
  useEffect(() => {
    const currentHideWord = hideWord.split(" ").join("");
    if (currentHideWord === words) {
      setWan(true);
    } 
  }, [hideWord])
  

  //Word's validation
  const validateWords = (letter: string) => {

    if (wan) return;
    if (lose) return;
  
    if(!words.includes(letter)){
      // words+1;
      setIntents(Math.min( intents + 1, 9));
      return;
      // console.log("si existe")
    } 

    const hideWordArray = hideWord.split(" ");

    for (let index = 0; index < words.length; index++) {
      const element = words[index];
  
      console.log(element);
  
      if (words[index] === letter) {
        hideWordArray[index] = letter;
      }
    }
  
    setHideWord(hideWordArray.join(" "));

  };

  
  
  return (
   <div className='text-center'>

      { /* Images */ }
      <div className="mx-auto flex flex-col justify-center items-center">
        <HangImage imageNumber={5}/>
      </div>

      { /* hidden word */ }

      <h3 className="font-bold text-2xl my-4 text-blue-600"> { hideWord } </h3>

      { /* try count */ }

      <h3 className="font-bold text-2xl my-4 text-blue-600"> try: {intents} </h3>

      { /* message if lose */ }

    { lose ? (
      <h3 className="font-bold text-2xl my-4 text-red-600">You are lose!! 😩 your word is: { words }</h3>
    ) : ( "" ) }
    
      { /* message if win */ }
      { wan ? (
      <h3 className="font-bold text-2xl my-4 text-green-700">Congratulations, you are win!! 🥳</h3>
      ) : ( "" ) }

      { /* keyboard */ }

      { letters.map((letter) => (       
        <button className="bg-white p-4 rounded-full shadow-md m-2" 
                key={letter}
                onClick={ () => validateWords(letter)}
                >{letter}</button>
       ))}
       <br />

      { /* new game's button */ }

      <button className='bg-blue-700 py-4 px-6 rounded-full text-white font-bold text-xl mt-6'>New Game?</button>

   </div>
  )
}

export default App

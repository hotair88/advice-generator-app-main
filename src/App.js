import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import '../input.css';
import { useState } from 'react';

function Footer() {
  return (
    <footer className="bottom-8 absolute">
      <div className="text-sm  text-gray-300 font-mono">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"><span className="">Frontend Mentor</span>.</a>
    &nbsp;Coded by <a href="#"><span className="underline">Pawan Ojha</span></a>. </div>
    </footer>
  );
}
function App() {
const clickHere = 'Click here for Advice!', pleaseWait = 'Please, have patience!';
const [buttonClicked, setButtonClicked] = useState(false);
const [adviceID, setAdviceID] = useState('♥');
const [adviceText, setAdviceText] = useState('♥');
// const [buttonText, setButtonText] =useState();

async function fetchAdvice() {
  const apiURL = 'https://api.adviceslip.com/advice';
  try{
    const res = await fetch(apiURL, {cache: 'no-store'});
    const data = await res.json();
    const adviceObject = data["slip"];

    setAdviceID(adviceObject.id);
    setAdviceText(adviceObject.advice);
  }
  catch(error){
    console.error("Error fetching data from advice API: ", error.message);
  }
}
function handleClick() {
  setButtonClicked(true);

  setTimeout(() => {
    setButtonClicked(false);
  }, 3000);
  fetchAdvice();
}

  return (
    <>
    <div className="flex flex-col items-center min-h-screen justify-center bg-dark_blue">
    <div className="sm:p-7 px-5 py-1 gap-y-5 bg-dark_grayish_blue rounded-xl flex items-center justify-center flex-col w-[500px]">
      <div className="text-xs text-neonn">Advice #{adviceID}</div>
      <div className="text-cyann text-base text-center">{adviceText}</div>
      <div className="flex items-center justify-center"><svg src="images/pattern-divider-desktop.svg" className="w-full h-[2px] bg-grayish_blue" alt="divider" /></div>
      <button className={`bg-neonn text-base rounded-lg p-2 -mb-4 cursor-pointer ${buttonClicked ? 'cursor-not-allowed opacity-50' : ' '} active:cursor-not-allowed active:opacity-50`}
      onClick={handleClick}>
      {buttonClicked ? pleaseWait : clickHere}
      </button>
    </div>
    <Footer />
    </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import React, { useEffect, useState } from 'react';


export default function AdviceTiles() {
    console.log("1 AdviceTiles Componant Start");
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);
    console.log("2 AdviceTiles Componant" + " advice:" + advice + " count:" + count);
    async function getAdvice(){
        console.log("1 4 AdviceTiles getAdvice Start");
        const res= await fetch("https://api.adviceslip.com/advice");
        console.log("2 4 await AAAA");
        const data= await res.json();
        console.log("3 4 await BBBB");
        await Promise.resolve();
        setAdvice(data.slip.advice);
        await Promise.resolve();
        console.log("4 4 await CCCC");
        setCount((c)=>c+1);
        console.log("5 4 await DDDD");
        console.log("6 6 AdviceTiles getAdvice Stop");
        
    }

    async function getAdvice1(){
      const res= await fetch("https://api.adviceslip.com/advice");
      const data= await res.json(); 
      return data;
    }

    function getAdvice2(){
      const data2 = getAdvice1().then((d)=> console.log("THEN wala codegetAdvice2 called data2=>", d.slip.advice));
      console.log("getAdvice2 called data2=>", data2);
      //console.log("getAdvice2 called data2=>", data2.slip.advice);
    }

    useEffect(()=>{
        console.log("3 AdviceTiles useEffect Start");
        getAdvice();
        console.log("5 AdviceTiles useEffect Stop");
    },[]);

  return (
    <div>
      <p><strong>Advice text :</strong> {advice}</p>
      <button onClick={getAdvice}>Get Advice1</button>
      <p>You have read {count} piece of Advice</p>
      <p><strong>Advice text 1 :</strong> {advice}</p>
      <button onClick={getAdvice2}>Get Advice 2</button>
    </div>
  )

  console.log(" AdviceTiles Componant Stop");
}

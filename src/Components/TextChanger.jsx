import React from 'react'
import {useState, useEffect} from 'react'

const TextChanger = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = ["Hello, I'm Fatima", "Welcome to my Portfolio", "This is my first ReactJS Work"];
  const [curntText, setCurntText] = useState("");
  const [endValue, setendValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (isForward) {
        if(endValue<= texts[index].length){
          setCurntText(texts[index].substring(0, endValue));
          setendValue((prev) => prev + 1);
        }
        else{
          setIsForward(false);
        }
      } else {
        if(endValue >= 0){
          setCurntText(texts[index].substring(0, endValue));
          setendValue((prev) => prev - 1);
        }
        else{
          setIsForward(true);
          setIndex((prev) => (prev + 1)% texts.length)
          setendValue(0)
        }
      }
    }, 100);
    return () => clearTimeout(intervalId);
  }, [endValue,index,texts,isForward]);

  return <div className="transition ease duration-300">{curntText}</div>;
};

export default TextChanger

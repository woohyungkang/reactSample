import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function Hello(){
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  },[])
  useEffect(function(){
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    }
  },[])
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setshowing] = useState(false);
  const onClick = () => setshowing(prev => !prev);
  return (<div>
    <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    {showing ? <Hello/> : null}
  </div>
  );

 /* const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  const iRunOnlyOnce = () =>{
    console.log('i run only once.');
  }

  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);

  useEffect(() => {
      console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter changes.");
}, [keyword, counter]);

  return (
    <div>
      <input value={keyword}  onChange={onChange} type="text" placeholder="Search here..."/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );*/

}

export default App;

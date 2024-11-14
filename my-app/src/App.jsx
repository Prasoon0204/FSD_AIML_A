import qBank from "./qBank"
function App() {
  const {id, question, option1, option2, option3, option4, Ans} = qBank;
  return (
    <>
    <div className="quiz">
      <h1>My Quiz Application</h1>
      <br />
      Question {id}.{question} <br />
      <input id="opt" type="radio" name="opt" value={option1}/>{option1} <br />
      <input id="opt" type="radio" name="opt" value={option2}/>{option2} <br />
      <input id="opt" type="radio" name="opt" value={option3} />{option3} <br />
      <input id="opt" type="radio" name="opt" value={option4}/>{option4} <br />
      <div id="temp"></div>
      <button onClick={()=>{
        const ans  = document.getElementsByName("opt");
        for (let i = 0; i < ans.length; i++) {
          if(ans[i].checked){
            if (ans[i].value == qBank.Ans)
              document.getElementById("temp").innerText = "correct ans";
           }
           else{
            document.getElementById("temp").innerText = "Wrong ans";
           }
          }
      }}>ans</button>
      <button onClick={()=>{
        document.getElementById("temp").innerText = "";
      }}>clear</button>
      <button onClick={()=>{
        document.getElementById("temp").innerText = qBank.Ans;
      }}>show ans</button>
      <div className="btn">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
    </>
  )
}

export default App

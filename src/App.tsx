import { ChangeEvent, useState } from "react"
import "./App.css"

function App() {
  const [text, setText] = useState("")

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const sayUppercase = () => {
    const msg = new SpeechSynthesisUtterance()
    msg.text = "uppercase"
    window.speechSynthesis.speak(msg)
  }

  const sayLowerCase = () => {
    const msg = new SpeechSynthesisUtterance()
    msg.text = "lowercase"
    window.speechSynthesis.speak(msg)
  }

  const containsSpecialCharacters = (str: string) => {
    var regex = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g
    return regex.test(str)
  }

  const is_number = (char: string) => {
    return !isNaN(parseInt(char))
  }

  const readText = () => {
    for (let char of text.split("")) {
      if (!is_number(char) && !containsSpecialCharacters(char)) {
        if (char === char.toUpperCase()) {
          sayUppercase()
        } else {
          sayLowerCase()
        }
      }
      const msg = new SpeechSynthesisUtterance()
      msg.text = char
      window.speechSynthesis.speak(msg)
    }
  }
  return (
    <div className="App">
      <h1>Hi Mom</h1>
      <p className="comic">Paste text here:</p>
      <textarea
        id="textarea"
        name="story"
        rows={3}
        cols={33}
        value={text}
        onChange={onChange}
      />

      <p className="comic">{text}</p>
      <button onClick={readText}>
        <p className="buttonText">Read Text</p>
      </button>
    </div>
  )
}

export default App

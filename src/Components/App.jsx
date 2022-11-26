import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import { useState, useEffect } from "react";
import mobileBg from "../Images/bg-mobile-light.jpg"
import desktopBg from "../Images/bg-desktop-light.jpg"
import MatchMediaWrapper from "../js/MatchMediaWrapper";

function App() {

  const mobileBackground = (<img src={mobileBg} alt="mobile-bg" className="absolute top-0 left-0 right-0 -z-10 w-full" />)
  const desktopBackground = (<img src={desktopBg} alt="Desktop-bg" className="absolute top-0 left-0 right-0 -z-10 w-full" />)

  const savedTodo = localStorage.getItem('todos')
  const [inputValue, setInputValue] = useState('')
  const [todo, setTodo] = useState(savedTodo ? JSON.parse(savedTodo) : [])
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo))
  }, [todo])
  useEffect(() => {
    if (theme === 'light') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}, [theme])

  return (
    <div className="font-josefin relative">
      <div className="max-w-screen-md mx-auto pt-5 px-5 md:px-14">
        <Header inputValue={inputValue} setInputValue={setInputValue} setTodo={setTodo} theme={theme} setTheme={setTheme} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
      <div className="layout">
        <MatchMediaWrapper mobileBackground={mobileBackground} desktopBackground={desktopBackground} />
      </div>
      <div className="bg-white-body dark:bg-dark-bg transition ease-in-out duration-300 h-screen w-full absolute top-0 left-0 right-0 -z-20">
      </div>
    </div>
  );
}

export default App;

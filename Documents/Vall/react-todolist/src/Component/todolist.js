import { useState } from "react";
import Account from "./Account.js";
import Card from "./card";
import { tambahData } from "../reducer/actions.js";
import { useDispatch } from "react-redux";

function Todolist() {
    const [inputUser, setInputUser] = useState("")

    function handleInput(e) {
        setInputUser(e.target.value)
    }

    // memanggil function tambahData
    const dispatch = useDispatch()

    function handleTambahData() {
        dispatch(tambahData(inputUser))
    }

    return (
        <div className="w-full">
            <Account />
            <div className="inputTodo flex full justify-center mt-[4vh]">
                <input 
                    type="text" 
                        className="inputUser INTER h-[5vh] rounded-full px-[3vw] py-[1vh] outline-none mt-[1vh] w-1/2" 
                        placeholder="add your actvity ...."        
                        onChange={handleInput}
                    />
                <button 
                    onClick={handleTambahData}
                    className="logoTambah text-red-500 "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
            </div>

            <Card />
        </div>
    )
}

export default Todolist;
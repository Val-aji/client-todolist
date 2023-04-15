import { useState, useEffect } from 'react'
import Todolist from './Component/todolist.js'
import { connect, useSelector } from 'react-redux';
import { login, tambahData } from './reducer/actions.js';
import { useDispatch } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-dark h-[100vh]">
        <Todolist />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { 
    tasks: state.tasks, 
    data: state.data 
  };
};

export default connect(mapStateToProps, {login, tambahData})(App);

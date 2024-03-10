import React ,{useState} from 'react'
import styles from './Appboard.module.css'
// import Board from '../Board/Board'
// import {Layers} from 'react-feather'
// import Card from '../Card/Card'
import Backlog from '../Backlog/Backlog'
import Todo from '../Todo/Todo'
import Inprogress from '../Inprogress/Inprogress'
import Done from '../Done/Done'
import Addtodo from '../Addtodo/Addtodo';

function AppBoard() {
    const [openPopup, setOpenPopup] = useState(false);

    // const onAddtodo = (data) => {
    //     setOpenPopup(data)
    //     console.log("clcik", data);
    // }

  return (
    <div className={styles.AppBoard}>
        <div className={styles.navbar}>
            <h2>Welcome Kumar</h2>
            <h1>Board</h1>
        </div>
       <div  className={styles.boards_outer}>

          <Backlog/>
          <Todo setOpenPopup={setOpenPopup}  openPopup={openPopup}/>
          <Inprogress/>
          <Done/>

        </div>
        {/* <div className={styles.group_tab}> 
       {openPopup && <Addtodo/>}
       </div> */}

    </div>
  )
}

export default AppBoard
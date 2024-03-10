import {React,useState} from 'react'
import styles from './todo.module.css'
import {Layers , Plus} from 'react-feather'
import Card from '../Card/Card'
import Addtodo from '../Addtodo/Addtodo';

function Todo({setOpenPopup , openPopup}) {

  const onClose = () => {
    setOpenPopup(false);
  }
  const HandlePopup =(e)=>{
    e.preventDefault()
    setOpenPopup(!openPopup)
  }

  return (
    <> 
 <div className={styles.boards_inner}>
    {/* <Board/> */}

<div className={styles.Board}>
  <div  className={styles.board_top}>
      <p className={styles.board_top_title}> To Do </p>
      <div className={styles.icons}> 
         <Plus className={styles.plus} onClick={() => {setOpenPopup(!openPopup)}}/>
         <Layers/>
       </div>
 </div>
<div className={styles.card}>
    {/* apply loop or map func here and suplly props to card so that multiple card details fetches  */}
     <Card/>  
     {/* <Card/>  
    <Card/>   */}
</div>
</div>
</div>
 { openPopup && <div className={styles.group_tab} onClick={(e) =>HandlePopup(e)}> 
       {openPopup && <Addtodo onClose={onClose}/>}
       </div> 
       }
  </>
  )
}

export default Todo
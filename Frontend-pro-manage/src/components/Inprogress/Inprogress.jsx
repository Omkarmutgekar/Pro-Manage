import React from 'react'
import styles from './inprogress.module.css'
import {Layers} from 'react-feather'
import Card from '../Card/Card'

function Inprogress() {
  return (
    <div className={styles.boards_inner}>
    {/* <Board/> */}

<div className={styles.Board}>
  <div  className={styles.board_top}>
      <p className={styles.board_top_title}> In progress </p>
       <Layers/>
 </div>
<div className={styles.card}>
    {/* apply loop or map func here and suplly props to card so that multiple card details fetches  */}
     <Card/>  
     {/* <Card/>  
    <Card/>   */}
</div>
</div>

</div>
  )
}

export default Inprogress
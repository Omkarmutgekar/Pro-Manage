import React from 'react'
import styles from './done.module.css'
import {Layers} from 'react-feather'
import Card from '../Card/Card'
function Done() {
  return (
    <div className={styles.boards_inner}>
    {/* <Board/> */}

<div className={styles.Board}>
  <div  className={styles.board_top}>
      <p className={styles.board_top_title}> Done </p>
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

export default Done
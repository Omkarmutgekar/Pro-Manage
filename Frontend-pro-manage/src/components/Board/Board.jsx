import React from 'react'
import styles from './board.module.css'
import {Layers} from 'react-feather'
import Card from '../Card/Card'

function Board() {
  return (
    <div className={styles.Board}>
        <div  className={styles.board_top}>
            <p className={styles.board_top_title}> To Do </p>
            <Layers/>
        </div>
        <div className={styles.card}>
             <Card/>  
             <Card/>  
             <Card/>  
        </div>
    </div>
  )
}

export default Board
import React from 'react'
import styles from './analytics.module.css'

function Analytics() {
  return (
    <div className={styles.card_main}>
        <h5 className={styles.card_title}>Analytics</h5>

        <div className={styles.cards}> 
        <ul className={styles.left_card}>
          <li className={styles.list}>
            <div className={styles.list_item}>
            <p>Backlog tasks</p>
            <p>16</p>
            </div>
          </li>
          <li className={styles.list}>
          <div className={styles.list_item}>
            <p>Todo tasks</p>
            <p>16</p>
            </div>

          </li>
          <li className={styles.list}>
          <div className={styles.list_item}>
            <p>In-progress tasks</p>
            <p>16</p>
            </div>

          </li>
          <li className={styles.list}>
          <div className={styles.list_item}>
            <p>Completed tasks</p>
            <p>16</p>
            </div>

          </li>
        </ul>


        <ul className={styles.right_card}>
          <li className={styles.list}>
        <div className={styles.list_item}>
            <p>Low priority</p>
            <p>16</p>
            </div>

          </li>
          <li className={styles.list}>
          <div className={styles.list_item}>
            <p>Moderate priority</p>
            <p>16</p>
            </div>
          </li>
          <li className={styles.list}>
          <div className={styles.list_item}>
            <p>High priority </p>
            <p>16</p>
            </div>
          </li>
          <li className={styles.list}>
          <div className={styles.list_item}>
            <p>Due Date tasks</p>
            <p>16</p>
            </div>
          </li>
        </ul>
        </div>
          
    </div>
  )
}

export default Analytics
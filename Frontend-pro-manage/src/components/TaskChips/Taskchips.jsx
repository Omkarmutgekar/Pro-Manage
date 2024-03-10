import {React , useState} from 'react'
import styles from  './Taskchips.module.css'

function Taskchips() {

    const [items, setItems] = useState([
        { name: 'Backlog', checked: false }, 
        { name: 'progress', checked: false },   
        { name: 'Done', checked: false },   
        // { name: 'Todo', checked: false },   

      ]);

  return (
    <div className={styles.task_chips} >
      {items.map((item, index) => (
        <div key={index} className={styles.chips_outer}> 
        <span  className={styles.chips}>
            {item.name}
        </span>
        </div>
        ))}
    </div>
  )
}

export default Taskchips
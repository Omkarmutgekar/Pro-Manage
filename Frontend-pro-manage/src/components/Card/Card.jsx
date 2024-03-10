import {React, useState} from 'react'
import styles from './card.module.css'
import { MoreHorizontal , ChevronDown } from 'react-feather'
import Checklist from '../Checklist/Checklist'
import Taskchips from '../TaskChips/Taskchips'
// import Calendar from '../Calendar/calendar'
import Calendar from '../Calendar/calendar'


// const HandleChecklist(e) =>{
//     e.prevent.default()
// }


function Card() {
  const [toggleList , setToggleList ] = useState(true);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const HandleChecklist = (e) => {
    e.preventDefault();
    setToggleList(!toggleList);
  };

  const handleCalendarClick = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setCalendarVisible(false);
  };

  return (
    <div className={styles.board_cards}>
      <div className={styles.card_top}> 
        <div className={styles.card_label}>
          <div className={styles.card_priority_label}>
            <span className={styles.card_priority_label_color} />
            <h6>High Priority</h6>
          </div>
          <MoreHorizontal/>
        </div>
        <div className={styles.card_title}>
          <h3 >Hero Section</h3>
        </div>
        <div className={styles.checklist_header}>
          <p className={styles.checklist_info}>Checklist (0/3) </p>
          <ChevronDown onClick={(e) =>HandleChecklist(e) }/>
        </div>
        <div className={styles.checklists}>
          { toggleList && <Checklist/>}
        </div>
        <div className={styles.chips}>
          <div className={styles.calender} onClick={handleCalendarClick}>
            <p>{selectedDate || 'Select Date'}</p>
            {calendarVisible && <Calendar onSelect={handleDateSelect} />}
          </div>
          <Taskchips/>   
        </div>
      </div>
    </div>
  );
}
export default Card
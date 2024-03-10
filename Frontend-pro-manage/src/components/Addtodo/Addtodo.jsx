// import React, { useState } from 'react'
// // import {nanoid} from '@reduxjs/toolkit'
// import './addtodo.css'


// const ColorOptions = [
//   { name: 'Color-1', color: '#B38BFA' },
//   { name: 'Color-2', color: '#FF79F2' },
//   { name: 'Color-3', color: '#43E6FC' },
//   { name: 'Color-4', color: '#F19576' },
//   { name: 'Color-5', color: '#0047FF' },
//   { name: 'Color-6', color: '#6691FF' },
// ];


// const Addtodo = ({onClose , groupNamesParent , setGroupNamesParent , grpNote , activeGroup}) => {

//   const [groupName, setGroupName] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [id , setId] = useState('')
//   const [initials, setInitials] = useState('');
  

//   const handleInputChange = (e) =>{
//         setId(nanoid())
//         setGroupName(e.target.value)

//         setInitials(e.target.value
//           .split(" ")
//           .map((word) => word.charAt(0))
//           .join("")
//           .toUpperCase()
//           )
//   }

//   const handleColorSelection = (color) => {
//     setSelectedColor(color)
//   }


//   const addGroupHandler = (e) => {
//         e.preventDefault();
//         setGroupName('')
//         setSelectedColor('')
//         onClose()


//         const newGroup = { id: id , name: groupName, initials:initials, color: selectedColor };
//         setGroupNamesParent([...groupNamesParent, newGroup]);
   
//         localStorage.setItem("groupNames",  JSON.stringify([...groupNamesParent, newGroup]));
        
//         const newNote = {id:activeGroup, note:''}
//         {grpNote.length == 0 ? localStorage.setItem("Notes" , JSON.stringify([...grpNote,newNote])) : ''} 

//   }


//   return (
//     <form onSubmit={addGroupHandler} onClick={(e) => {e.stopPropagation()}}>
//     <div className='newGroup'>
//         <div className='inner-grp'>
//         <div className="grp-head">
//         <p>Title</p>
//         </div>
//         <div className="group-input">
//          <input className='grp-input'
//          placeholder="Enter task title " 
//            type="text"
//            id="groupName"
//            value={groupName}
//            onChange={handleInputChange}
//            required 
//            />
//         </div>

//         <div className="color">
//         <p>select priority</p>

//         <div className="color-opt">
//         {ColorOptions.map((colorOption, index) => ( 
//           <div className={`color ${
//               selectedColor === colorOption.color ? `highlight` : null
//             }`}
//           key={index}
//           onClick={() => handleColorSelection(colorOption.color)}
//           style={{
//             backgroundColor: colorOption.color,
//             width: '25px',
//             height: '25px',
//             borderRadius: '50%',
//             cursor: 'pointer',
//           }}

//           />
//           ))}
//          </div>
//         </div>
//         <label>checklist (1/3)  </label>
//         <button type="submit" className='create-grp-btn'>Create</button>
//         </div>
//     </div>
//     </form>
//   )
// }

// export default Addtodo












import React, { useState } from 'react';
import styles from './addtodo.module.css'
import {Trash2} from 'react-feather'



const Addtodo = ({onClose}) => {
  const [priority, setPriority] = useState('HIGH PRIORITY');
  const [checklistItems, setChecklistItems] = useState([]);

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleAddChecklistItem = () => {
    setChecklistItems([...checklistItems, { text: '', isCompleted: false }]);
  };

  const handleChecklistItemChange = (index, event) => {
    const newChecklistItems = [...checklistItems];
    newChecklistItems[index].text = event.target.value;
    setChecklistItems(newChecklistItems);
  };

  const handleChecklistItemToggle = (index) => {
    const newChecklistItems = [...checklistItems];
    newChecklistItems[index].isCompleted = !newChecklistItems[index].isCompleted;
    setChecklistItems(newChecklistItems);
  };

  const handleRemoveChecklistItem = (index) => {
    const newChecklistItems = [...checklistItems];
    newChecklistItems.splice(index, 1);
    setChecklistItems(newChecklistItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // your submit logic here
  };

  const handleCancel = () => {
    onClose();
  };
  return (
    <div className={styles.todo_container} onClick={(e) => {e.stopPropagation()}}> 
    <form className={styles.todo_form}  onSubmit={handleSubmit}>
      <div className={styles.todo_title}>
        <p>Title *</p>
        <input field="required" placeholder='Enter task title' type="text" />
      </div>

      <div className={styles.todo_priority}>
        <div className={styles.priority_label} htmlFor="priority">Select Priority *</div>
        <ul field="required" className={styles.priority} value={priority} onChange={handlePriorityChange}>
          <li value="HIGH PRIORITY">HIGH PRIORITY</li>
          <li value="MODERATE PRIORITY">MODERATE PRIORITY</li>
          <li value="LOW PRIORITY">LOW PRIORITY</li>
        </ul>
      </div>

      <div className={styles.checklist_field}>
        <div className={styles.checklist_title} htmlFor="checklist">Checklist (1/3) * </div>
       
        {checklistItems.map((item, index) => (
          <div key={index} className={styles.checklist_tasks}>
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => handleChecklistItemToggle(index)}
            />
            <div className={styles.task_namefield}> 
            <input
              type="text"
              placeholder='Add a task'
              field="required" 
              value={item.text}
              onChange={(event) => handleChecklistItemChange(index, event)}
            />
              <Trash2 style={{cursor:'pointer'}} className={styles.trash} onClick={() => handleRemoveChecklistItem(index)} />
            </div>
          </div>
        ))}
         <button className={styles.checklist_btn} onClick={handleAddChecklistItem}>
          + Add New
        </button>
      </div>

      <div className={styles.footer_buttons}>
        <button className={styles.calender_btn} type="submit">calender</button>
        <div className={styles.right_buttons}>
        <button className={styles.cancel_btn} onClick={handleCancel}>Cancel</button>
        <button className={styles.submit_btn} type="submit" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </form>
    </div>

  );
};

export default Addtodo;
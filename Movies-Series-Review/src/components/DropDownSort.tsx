import React , {useState,useEffect, useDeferredValue, ReactNode} from 'react';
import "./styles/DropDownSort.css"


function DropDownSort() {
  const [DropTitle,SetDropTitle] = useState("Sort by Name");
  const changeTitle = (title:string) => {
    SetDropTitle(title);
  }
  const OpenList = (title:string) => {
    SetDropTitle(title);
  }
  return (
    <div className="dropdown">
        <div className='dropdown-select' onClick={() => {}}>
          <span className='dropdown-title'>{DropTitle}</span>
          <span className="material-icons">
            arrow_drop_down
          </span>
          <div className='dropdown-list'>
            <div onClick={() => {changeTitle("Sort by Name")}}> Sort by Name</div>
            <div onClick={() => {changeTitle("Sort by Date")}}> Sort by Date</div>
          </div>
        </div>
        
    </div>
  );
}

export default DropDownSort;
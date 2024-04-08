import React, {useState} from 'react';

const ToDoList = () => {
    const [lists, setlists] = useState([]);
    const [newList, setNewList] = useState('');

    function inputChange(event) {
        setNewList(event.target.value);
    }

    function addList(){

        if(newList.trim() != ''){
            setlists([...lists, newList]);
            setNewList('');
        }   
    }
    const completeList= (index) => {
        document.getElementsByName("textList")[index].style.textDecoration="line-through";
    }
    const deleteList= (index) => {
        // let deletelists = lists;
        // for(let i=0; i< lists.length; i++) {
        //     if(i === index) {
        //         deletelists = deletelists.splice(i, 1);
                
        //         i--;
                
        //     }
        // }
        // setlists(deletelists);
        
        const deletelists = lists.filter((element, i) => i !== index);
        setlists(deletelists);
    }
    function moveListUp(index) {
        if(index > 0) {
            const movelistsU = [...lists];
            [movelistsU[index], movelistsU[index-1]] = [movelistsU[index-1], movelistsU[index]]; 
            setlists(movelistsU);
        }
    }
    function moveListDown(index) {
        if(index < lists.length - 1) {
            const movelistsD = [...lists];
            [movelistsD[index], movelistsD[index+1]] = [movelistsD[index+1], movelistsD[index]];
            setlists(movelistsD);
        }

    }
    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div className='inputBox'>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요!"
                    value={newList}
                    onChange={inputChange}/>
                <button
                    className='add-button'
                    onClick={addList}>
                    추가
                </button>
            </div>

            <ol>
                {lists.map((item, index)=>
                    <li key={index} className='lists'>
                        <span className='text' name="textList" onClick={() => completeList(index)}>{item}</span>
                        <button
                            className='delete-button'
                            onClick={() => deleteList(index)}>
                            삭제
                        </button>
                        <button
                            className='move-button'
                            onClick={() => moveListUp(index)}>
                            👆위로
                        </button>
                        <button
                            className='move-button'
                            onClick={() => moveListDown(index)}>
                            👇아래로
                        </button>
                        
                    </li>
            )}
            </ol>
        </div>
    );
};

export default ToDoList;
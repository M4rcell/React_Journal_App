import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploadImg } from '../../actions/notes';

export const NotesAppbar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)

    const handleSave = ()=>{
         //console.log(active);
        dispatch(startSaveNote(active));

    }

    const handlePictureClick=()=>{
        document.querySelector('#fileSelector').click();
               
    }
    const handleFileChange=(e)=>{

       const file =  e.target.files[0];

       if (file) {
           dispatch(startUploadImg(file));
           
       }
    }

    return (
        <div className="notes__appbar">
            <span> 28 de agosto  2020</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{display:'none'}}
                onChange={handleFileChange}

            />

            <div>

                <button  
                     className="btn"
                     onClick={handlePictureClick}
                     >
                    Picture

                </button>

                <button 
                    className="btn"
                    onClick={handleSave}              
                >
                    Save

                </button>
            </div>
        </div>
    )
}

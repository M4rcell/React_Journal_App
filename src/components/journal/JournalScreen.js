import React from 'react'
import { Sidebar } from './Sidebar'
import { NotesScreen } from '../notes/NotesScreen'
import { useSelector } from 'react-redux'
import { NothingSelected } from './NothingSelected'
 
export const JournalScreen = () => {

    const state = useSelector(state => state.notes)

    const {active} = state;
    //console.log('active: ',active); 

    return (
        <div className="jounal__main-content">
            <Sidebar/>

            <main>

                {
                    (active) //si la nota tiene algo entonces
                    ?( <NotesScreen/> ) //SI
                    :(<NothingSelected/>)//NO
                    
                }


            </main>

        </div>
    )
}

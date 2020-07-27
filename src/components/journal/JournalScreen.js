import React from 'react'
import { Sidebar } from './Sidebar'
import { NotesScreen } from '../notes/NotesScreen'
/* import { NothingSelected } from './NothingSelected'
 */
export const JournalScreen = () => {
    return (
        <div className="jounal__main-content">
            <Sidebar/>

            <main>
                {/* <NothingSelected/> */}

                <NotesScreen/>
            </main>

        </div>
    )
}

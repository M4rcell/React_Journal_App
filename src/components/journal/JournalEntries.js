import React from 'react'
import { JournalEntry } from './JournalEntry';
import { useSelector } from 'react-redux';

export const JournalEntries = () => {

    const state = useSelector(state => state.notes);
    const {notes} = state;

    //console.log(notes);

    return (
        <div className="journal__entries">
            {
                notes.map((note) => (
                    <JournalEntry 
                        key={note.id}
                        {...note}
                        
                    />

                ))
            }
        </div>
    )
}

import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import SearchInput from "./SearchInput";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchTerm: "",
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearcHandler = this.onSearcHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState(( prevState ) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),

                    }
                ]
            }
        });
    }

    onSearcHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render(){
        const filteredNotes = this.state.notes.filter(note =>
            note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())  
        );
        return (
            <div className="note-app">
                <h2>Add Note</h2>
                <NoteInput addNote={this.onAddNoteHandler}/>
                <h2>Note List</h2>
                <SearchInput searchTerm={this.state.searchTerm} onSearch={this.onSearcHandler} />

                {filteredNotes.length === 0 ? (
                    <p className="display-message">No Notes Found....</p>
                ) : (
                    <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} />
                 )}
             </div>
        )
    }
}




export default NoteApp;

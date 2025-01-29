import React from "react";

class NoteInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTitleChange(event){
        if(event.target.value.length <= 50){
            this.setState({title: event.target.value});
        }
    }

    onBodyChange(event){
        this.setState({body: event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }
    render(){
        return (
            <form className="note-input" onSubmit={this.onSubmit}>
                <p>Sisa Karakter {50 - this.state.title.length}</p>
                <input type="text" placeholder="Title...."  value={this.state.title} onChange={this.onTitleChange}/>
                <textarea  placeholder="Add Note...." value={this.state.body} onChange={this.onBodyChange}></textarea>
                <button type="submit">Save</button>
            </form>
        )
    }
}

export default NoteInput;
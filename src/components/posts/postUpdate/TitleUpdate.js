import React from "react";

export default class TitleUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.onSaveClick = this.onSaveClick.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onSaveClick() {
        const inputVal = document.querySelector("input").value;
        this.props.onSaveClick(this.props.id, inputVal);
    }
    onHandleChange(event) {
        const value = event.target.value;
        this.props.onSaveClick(value);
    }

    render() {
        return (
            <>
                <input className="titleText" type="text" placeholder="Enter new title"></input>
                <button className="save" onClick={this.onSaveClick}> Save </button>
                <button className="cancel" onClick={this.props.onCancelClick}> Cancel </button>
            </>
        );
    }
}
import React from "react";

export default class PostDelete extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onDeleteClick(this.props.id);
    }

    render() {
        return (
            <button className="delete-post" onClick={this.onClick}>
                Delete
            </button>
        );
    }
}
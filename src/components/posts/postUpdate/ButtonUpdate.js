import React from "react";

export default class ButtonUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.onUpdateClick = this.onUpdateClick.bind(this);
    }

    onUpdateClick() {
        this.props.onUpdateClick(this.props.id);
    }

    render() {
        return (
            <button className="update-title" onClick={this.onUpdateClick}> Update Title </button>
        );
    }
}
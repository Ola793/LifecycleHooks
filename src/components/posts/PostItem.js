import React from "react";
import "../../App.css";

export default class PostItem extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="post-title">{this.props.title}</div>;
    }
}
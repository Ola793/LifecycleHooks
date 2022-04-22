import React from "react";
import "../../App.css";

export default class PostItem extends React.Component {
    render() {
        return <div className="post-title">{this.props.title}</div>;
    }
}

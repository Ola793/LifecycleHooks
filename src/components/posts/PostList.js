import React from "react";
import axios from "axios";
import PostItem from "./PostItem";
import PostDelete from "./PostDelete";
import TitleUpdate from "./postUpdate/TitleUpdate";
import ButtonUpdate from "./postUpdate/ButtonUpdate";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: [],
            updateId: null,
        };

        this.onUpdateClick = this.onUpdateClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    static API = `https://jsonplaceholder.typicode.com/posts`;

    getPosts() {
        return axios
            .get(`${PostList.API}`)
            .then((response) => response.data)
            .catch((e) => alert("Plese,check your enternet connection"));
    }

    componentDidMount() {
        this.getPosts().then((r) =>
            this.setState({
                loading: false,
                posts: r,
            })
        );
    }

    updatePosts(id, data) {
        return axios.put(`${PostList.API}/${id}`, data);
    }

    onUpdateClick(id) {
        this.setState({ updateId: id });
    }

    onSaveClick(id, value) {
        const newPosts = this.state.posts.map((post) => {
            if (post.id === id) {
                post.title = value;
            }
            return post;
        });
        this.setState({ posts: newPosts, updateId: null }, () => {
            this.updatePosts(id, value);
        });
    }

    onCancelClick() {
        this.setState({ updateId: null });
    }

    deletePosts(id, data) {
        return axios.delete(`${PostList.API}/${id}`, data);
    }

    onDeleteClick(id) {
        this.deletePosts(id);
        const newPosts = this.state.posts.filter((post) => post.id !== id);
        this.setState({ posts: newPosts });
    }

    renderPostItems() {
        return this.state.posts.map((post) => {
            let inputTitle = null;
            if (this.state.updateId === post.id) {
                inputTitle = (
                    <TitleUpdate
                        onSaveClick={this.onSaveClick}
                        onCancelClick={this.onCancelClick}
                        id={post.id}
                    />
                );
            }
            return (
                <div key={post.id} className="post-item" id={post.id}>
                    <PostItem title={post.title} id={post.id} />
                    <ButtonUpdate
                        onUpdateClick={this.onUpdateClick}
                        id={post.id}
                    />
                    {inputTitle}
                    <PostDelete
                        onDeleteClick={this.onDeleteClick}
                        id={post.id}
                    />
                </div>
            );
        });
    }
    
    renderLoading() {
        return <h1>Loading...</h1>;
    }

    render() {
        return this.state.loading ? this.renderLoading() : this.renderPostItems();
    }
}
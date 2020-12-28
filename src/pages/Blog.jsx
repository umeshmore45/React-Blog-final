import { Component } from "react";
import { blogUrl, fetchData } from "../apiCall/FetchData";

class Blog extends Component {
  state = {
    blog: [],
  };

  componentDidMount = () => {
    let id = this.props.match.params.id;
    try {
      fetchData(`${blogUrl}/${id}`)
        .then((data) => {
          this.setState({ blog: data });
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  render() {
    console.log(this.state.blog);
    let { title, imageUrl, content } = this.state.blog;
    return (
      <div>
        <h1>{title}</h1>
        <div>
          <img src={imageUrl} alt={"blog" + title} />
        </div>
        <p>{content}</p>
      </div>
    );
  }
}

export default Blog;

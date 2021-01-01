import { React, Component } from "react";
import { blogUrl, fetchData } from "../apiCall/FetchData";
import BlogCard from "../component/BlogCard";

class Home extends Component {
  state = {
    blog: [],
  };

  componentDidMount = () => {
    fetchData(blogUrl)
      .then((data) => {
        let blogData = data;

        this.setState({ blog: [...blogData] });
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  render() {
    console.log(this.state.blog);
    return (
      <div>
        {this.state.blog.map((blog) => {
          return <BlogCard key={blog.id} {...blog} />;
        })}
      </div>
    );
  }
}

export default Home;

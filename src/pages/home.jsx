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
        <h1>Home Page</h1>
        {this.state.blog.map((blog) => {
          return <BlogCard key={blog.id} {...blog} />;
        })}
      </div>
    );
  }
}

export default Home;

// navigatePage = (event) => {
//   this.props.history.push("/aboutus");
// };

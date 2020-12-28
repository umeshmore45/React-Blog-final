import { React, Component } from "react";
import { Link } from "react-router-dom";

class BlogCard extends Component {
  render() {
    let { imageUrl, title, author, id } = this.props;
    return (
      <div>
        <div>
          <img src={imageUrl} alt={"blog" + title} />
        </div>
        <Link
          to={{
            pathname: `blog/${id}`,
            state: { id: id },
          }}
        >
          {title}
        </Link>

        <p>{author}</p>
      </div>
    );
  }
}

export default BlogCard;

import { React, Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import style from "./BlogCard.module.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
  Typography,
} from "@material-ui/core";

const styles = (theme) => ({
  divCard: {
    marginTop: "5%",
  },

  card: {
    height: "50vh",
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 600,
  },
});

class BlogCard extends Component {
  render() {
    let { imageUrl, title, author, id, classes, content } = this.props;
    return (
      <div className={classes.divCard}>
        <CardActionArea>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Link
                  to={{
                    pathname: `blog/${id}`,
                    state: { id: id },
                  }}
                  className={style["Link"]}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary" component="p">
                  {" "}
                  {author}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {" "}
                  {content}
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={imageUrl}
                title={"blog" + title}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BlogCard);

import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import "./FlipCard.css";

export default class FlipCard extends Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Paper elevation={3} style={{ height: "300px" }}>
              <Card className={{ maxWidth: 34 }} style={{ height: "350px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="image"
                    height="200"
                    image={this.props.imageUrl}
                    title="image"
                    width="140"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {this.props.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {this.props.children}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    {this.props.buttonTitle}
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </div>
          <div className="flip-card-back">
            <h1>Let's Find out</h1>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
            />
            <Button
              variant="outlined"
              color="secondary"
              style={{     
                paddingLeft:"0.9em",
                paddingRight:"0.9em",
                fontWeight:700,
                fontSize:"1.5em",
                margin: "3em",
                paddingTop:"0.2em",
                paddingBottom:"0.2em"

            
            }}
            >
              SEARCH
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export class MovieItem extends React.Component {

    constructor(){
        super();

        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete: "+this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
        .then(()=>{
            //then when the movie is deleted, reload the data
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <Card.Title><img src={this.props.movie.poster} width="200" height="200"></img></Card.Title>
                        <Card.Text>
                            {this.props.movie.year}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
                <br />

            </div>
        );
    }
}
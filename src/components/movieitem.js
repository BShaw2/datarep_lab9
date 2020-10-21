import React from 'react'
import Card from 'react-bootstrap/Card'

export class MovieItem extends React.Component {

    render() {
        return (
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <Card.Title><img src={this.props.movie.Poster} width="200" height="200"></img></Card.Title>
                        <Card.Text>
                            {this.props.movie.Year}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />

            </div>
        );
    }
}
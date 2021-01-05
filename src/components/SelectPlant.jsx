import React, {useState} from 'react'
import {Card, CardDeck, ListGroup, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import '../styles/SelectPlant.css';

export default function SelectPlant(props) {

    return (
        <>
            <div>
                <h1 id="selectPlantTitle" class="text-center">Choose a plant from our selection</h1>
                <CardDeck>
                {props.plants.map((plant)=>(
                    <Card style={{width:'18rem' }} key={plant.id}>
                        <Card.Title class="card-header text-center"><h5><b>{plant.commonName}</b></h5><em>{plant.scientificName}</em></Card.Title>
                        <ListGroup variant='flush' class="text-center">
                            <ListGroup.Item><b>Light:</b><br></br> {plant.recommendedLight}</ListGroup.Item>
                            <ListGroup.Item><b>Water:</b><br></br> {plant.recommendedWater}</ListGroup.Item>
                        </ListGroup>
                        <Card.Footer class="text-center">
                        <NavLink to="/AddPlant">
                        <Button class="btn btn-primary text-center" variant="primary" onClick={() => {
                      props.setAddPlant(plant);
                    }}>Add to collection</Button>
                        </NavLink>
                        </Card.Footer>
                    </Card>
                ))}
                </CardDeck>
            </div>
        </>
    )
}

import React, {useEffect} from 'react'
import firebase from '../services/firebase'
import {Card, CardDeck, ListGroup, Button} from 'react-bootstrap'
import schedule from 'node-schedule'


export default function UserCollection(props) {

    const increment = firebase.firestore.FieldValue.increment(1);
    // const decrement = firebase.firestore.FieldValue.increment(-1);

    useEffect(()=>{
        schedule.scheduleJob({hour: 23, minute: 59, second: 59}, () =>  { 
            props.userPlants.forEach((plant)=>{
                firebase.firestore().collection("userPlants")
                .doc(plant.id)
                .update({ waterAgo: firebase.firestore.FieldValue.increment(1)})
            })
        });
    },[])
 
    function deletePlant(plant) {
        firebase.firestore().collection("userPlants")
        .doc(plant.id)
        .delete()
        .catch((err) => {
          console.error(err);
        });
      }


    function waterPlant(plant) {
        firebase.firestore().collection("userPlants")
        .doc(plant.id)
        .update({ waterAgo: 0 });
      }


    return (
        <>
        <div>
            <h1 id="userCollectionTitle" class="text-center">This is your collection !</h1>
            <CardDeck>
            {props.userPlants.map((plant)=>(
                <Card style={{width:'18rem' }} key={plant.id}>
                    <Card.Title class="card-header text-center"><h4><b>{plant.plantsurname}</b></h4><b>{plant.commonName}</b><br></br><em>{plant.scientificName}</em></Card.Title>
                    <ListGroup variant='flush' class="text-center">
                        <ListGroup.Item class="text-center"><b>Light:</b><br></br> {plant.recommendedLight}</ListGroup.Item>
                        <ListGroup.Item class="text-center"><b>Water:</b><br></br> {plant.recommendedWater}</ListGroup.Item>
                        <ListGroup.Item class="text-center"><b>Watered {plant.waterAgo} days ago</b></ListGroup.Item>
                        <ListGroup.Item class="text-center"><Button class="btn btn-primary text-center" variant="primary" onClick={() => waterPlant(plant)}>Water your plant</Button></ListGroup.Item>
                        <ListGroup.Item class="text-center"><Button class="btn btn-primary text-center" variant="primary" onClick={() => deletePlant(plant)}>Remove from collection</Button></ListGroup.Item>

                    </ListGroup>
                    
                    
                </Card>
            ))}
            </CardDeck>
        </div>
        </>
    )
}

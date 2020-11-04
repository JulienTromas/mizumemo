import React from 'react'
import firebase from '../services/firebase'

export default function UserCollection(props) {

    function deletePlant(plant) {
        firebase.firestore().collection("userPlants")
        .doc(plant.id)
        .delete()
        .catch((err) => {
          console.error(err);
        });
      }

    return (
        <>
        <div>
            <h1 id="selectPlantTitle">This is your collection !</h1>
            {/* <div class="card-deck"> */}
            {props.userPlants.map((plant)=>(
                <div class="card" style={{width: '18rem'}} key={plant.id}>
                      <div class="card-header">
                      <h4 class="card-title text-center"><b>{plant.plantsurname}</b></h4>
                      <p class="card-text text-center"><b>{plant.commonName}</b></p>
                        <p class="card-text text-center"><em>{plant.scientificName}</em></p>
                        {/* <p class="card-text"><b>{plant.boughtDate}</b></p> */}
                        </div>
                    {/* <img class="card-img-top" src="..."></img> */}
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center"><b>Light:</b><br></br> {plant.recommendedLight}</li>
                        <li class="list-group-item text-center"><b>Water:</b><br></br> {plant.recommendedWater}</li>
                        <li class="list-group-item text-center color:green" ><b>Watered {plant.waterAgo} days ago</b></li>
                    </ul> 
                    <button onClick={() => deletePlant(plant)}>Remove from collection</button>
                </div>
            ))}
            {/* </div> */}
        </div>
        </>
    )
}

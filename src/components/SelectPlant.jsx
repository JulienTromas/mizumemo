import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function SelectPlant(props) {

    


    return (
        <>
        <div>
            <h1 id="selectPlantTitle">Choose a plant from our selection</h1>
            <div class="card-deck">
            {props.plants.map((plant)=>(
                <div class="card" style={{width: '18rem'}} key={plant.id}>
                      <div class="card-header text-center">
                      <h5 class="card-title "><b>{plant.commonName}</b></h5>
                        <p class="card-text"><em>{plant.scientificName}</em></p>
                        </div>
                    {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                    {/* <div class="card-body">
                        <h5 class="card-title"><b>{plant.commonName}</b></h5>
                        <p class="card-text"><em>{plant.scientificName}</em></p>
                    </div> */}
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center"><b>Light:</b><br></br> {plant.recommendedLight}</li>
                        <li class="list-group-item text-center"><b>Water:</b><br></br> {plant.recommendedWater}</li>
                    </ul>
                        <div class="card-body text-center" style={{height: '5rem'}}>        <NavLink to="/AddPlant">
                        <button class="btn btn-primary center"                 onClick={() => {
                  props.setAddPlant(plant);
                }}>Add to collection</button>
        </NavLink>
                        </div>    

                </div>
            ))}
            </div>
        </div>
        </>
    )
}

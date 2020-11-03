import React, {useState} from 'react'
import PlantCard from "./PlantCard";
import {db} from "../services/firebase"

export default function SelectPlant(props) {

    return (
        <>
        <div>
            <h1 id="selectPlantTitle">Choose a plant from our selection</h1>
            {props.plants.map((plant)=>(
                <div key={plant.id}>
                    <h2>{plant.commonName}</h2>
                    <p><em>{plant.scientificName}</em></p>
                    <p>{plant.recommendedLight}</p>
                    <p>{plant.recommendedWater}</p>
                </div>
            ))}
        </div>
        </>
    )
}

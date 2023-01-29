import { useState, useEffect } from "react"
import PokeCard from "./PokeCard"
import { DotSpinner } from '@uiball/loaders'
import Loading from "./Loading"



export default function PokemonList({busqueda, setPokemonData, pokemonData, loading, infoPokemon, setUrl, nextUrl, prevUrl}) {
    
    console.log(pokemonData.length)
    return(
        <div className="PokeList">
        {!busqueda && <div className="btn-group">
                { prevUrl && <button onClick={()=>{
                    setPokemonData([])
                    setUrl(prevUrl)}}>Previous</button>}
                <button onClick={()=>{
                    setPokemonData([])
                    setUrl(nextUrl)}}>Next</button>
            </div>}
        <div className="card-list-pokemon container">

            {!loading && pokemonData.length <20 ? <><Loading/></> : pokemonData.map((pk, i)=>{
                return <PokeCard
                     infoPokemon={infoPokemon}
                key={pk.id}
                name={pk.name}
                id={pk.id}
                img={pk.sprites.front_default}
                types={pk.types}
                pk={pk}
                />
        
            })}
        </div>
        {!busqueda && <div className="btn-group">
                { prevUrl && <button onClick={()=>{
                    setPokemonData([])
                    setUrl(prevUrl)}}>Previous</button>}
                <button onClick={()=>{
                    setPokemonData([])
                    setUrl(nextUrl)}}>Next</button>
            </div>}
        </div>
    )
}












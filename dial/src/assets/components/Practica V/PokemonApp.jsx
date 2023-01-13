import { useState, useEffect } from "react"
import "./pokeStyles.css"
import PokemonList from "./PokemonList";
import PokeHeader from "./PokeHeader";
import axios from "axios";
import PokemonPage from "./PokemonPage";


function PokemonApp(){

    const [img, setImg] = useState([
        {
          url:"https://wallpaper.dog/large/749981.jpg"
        },
        {
          url: "https://wallpaper.dog/large/20352460.jpg"
        },
        {
            url: "https://wallpapers.com/images/hd/pikachu-with-pokemon-friends-uxxa8pvbvsqj0v3h.jpg"
          }
      ])

    const[pokemonData, setPokemonData] = useState([]);
    const[pokeDex,setPokeDex]=useState();
    const[url,setUrl]= useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    const[nextUrl,setNextUrl]=useState()
    const[prevUrl,setPrevUrl]=useState()
    const[loading,setLoading]=useState(true)
    const[allPokemons, setAllPokemons] = useState([])
    const [modal, setModal] = useState(false);
    const[fondo, setFondo] = useState(img[0].url)
    const [busqueda, setBusqueda] = useState(false)

  const toggleModal = () => {
    setModal(!modal);
  };

    const loadData = async ()=>{
        const resp = await axios.get(`${url}`);
                setNextUrl(resp.data.next)
                setPrevUrl(resp.data.previous)
                getPokemon(resp.data.results)
                setLoading(false)
                console.log(pokemonData)
    }

    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result = await axios.get(item.url)
            setPokemonData(state=>{
                let hash = {};
                state=[...state,result.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                state = state.filter(o => hash[o.id] ? false : hash[o.id] = true);
                return state
            })
        })
    }

    const loadAllData = async ()=>{
        const resp = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
                
        getAllPokemon(resp.data.results)
                
                
    }

    const getAllPokemon=async(res)=>{
        res.map(async(item)=>{
            const result = await axios.get(item.url)
            setAllPokemons(state=>{
                let hash = {};
                state=[...state,result.data]
                state = state.filter(o => hash[o.id] ? false : hash[o.id] = true);
                return state
            })
        })
    }

    const backgroundChange = ()=>{
        const backGround = document.getElementById("pokeBody")
        setInterval(()=>{

            const num = img[Math.floor(Math.random()*img.length)]
            setFondo(num.url)
            
        },10000)
    }

    useEffect(()=>{
    
        loadData();
        backgroundChange()

    },[url])

 
    useEffect(()=>{
    
        loadAllData();
       

    },[url])
    

    const [find, setfind] = useState();

    const handleFind = (e)=>{
        setfind(e.target.value)
        if(find != undefined){console.log(`el valor escrito es: ${find}`)}
      };


    const submitFind = (e)=>{
        e.preventDefault()
        if(find != undefined){
        console.log(`el valor enviado es: ${find}`)
        }
        
    }

 

    return(
        
        <div id="pokeBody" className="pokeBody" style={{ background: `url(${fondo})`}}>
        <PokeHeader 
        handleFind={handleFind}
        submitFind={submitFind}
        find={find}
        />
        {!modal && <PokemonList 
        pokemonData={pokemonData} 
        loading={loading} 
        infoPokemon={poke=>{setPokeDex(poke)
            toggleModal()}} 
        pokeDex={pokeDex}
        setUrl={setUrl}
        prevUrl={prevUrl}
        nextUrl={nextUrl}
        setPokemonData={setPokemonData}/>}
        {modal && <PokemonPage data={pokeDex} setPokeDex={()=>{
            setPokeDex("")
            toggleModal()}}/>}
        </div>
        
    )
}


export default PokemonApp



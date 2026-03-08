import { useEffect, useState } from "react"
import "./MemeList.css"; 
import axios from "axios";

function MemeList() {

  const [memes, setMemes] = useState([]);

  const HTMLMemes = memes.map((meme) => {
    return (
      <li key={meme.id} className="meme-item">
        <h2> {meme.name} </h2>
        <img src={meme.url} alt="meme img" className="meme-img"/>
      </li>
    )
  })

  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data.memes);
  //       setMemes(data.data.memes)
  //     })
  // }, [])

  useEffect(()=>{
    axios.get("https://api.imgflip.com/get_memes").then((response)=>{
      console.log(response.data);
      setMemes(response.data.data.memes)
    })
  }, [])
  
// No necesita el paso de transformación (response.json()) sino que podemos utilizar los datos que nos devuelve
// la petición (axios + url) directamente para pintarlos
  return (
    <ul className="meme-list">
      {HTMLMemes}
    </ul>
  )
}

export default MemeList
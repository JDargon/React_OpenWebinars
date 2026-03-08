import dog from "../assets/dog.jpg";
import bird from "../assets/bird.jpg";
import pig from "../assets/pig.jpg";

function AnimalList() {

    const animals = [
        {
            id: 1,
            name: "dog",
            img: dog 
        },
        {
            id: 2,
            name: "bird",
            img: bird
        },
        {
            id: 3,
            name: "pig",
            img: pig
        }
    ];

    const HTMLAnimals = animals.map((animal)=>{
        return (
            <li key={animal.id}>
                <h3>{animal.name}</h3>
                <img src={animal.img} width={200}  alt="Animal picture" />
            </li>
        )
    })

    return (

        <section>
            <h2>Animals:</h2>
            <ul>
                {HTMLAnimals}
            </ul>
        </section>

    )
}

export default AnimalList

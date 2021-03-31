import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Algorithms = () => {
    const [allAlgos, setAllAlgos] = useState([]);
    const [algo, setAlgo] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/algos")
            .then(response => {
                console.log(response.data);
                setAllAlgos(response.data.results)
                setAlgo(allAlgos[5]);
            })
            .catch(err => console.log("Error retrieving algos", err))
    }, [])
    const setRandomAlgo = () => {
        console.log("Button was clicked!");
        let rand = Math.floor(Math.random() * allAlgos.length)
        setAlgo(allAlgos[rand]);
    }
    return (
        <div>
            <div className="container">
                <h5 className="text-center">At Coding Dojo, we solved hundreds of algorithms. Let's see how you do!</h5>
                <div className="row">
                    <div className="col-sm-6 border p-2">
                        <h3 className="text-center">Algorithm of the Day!</h3>
                        {
                            algo !== undefined ?
                            <div>
                                <h5>Problem Title: {algo.title}</h5>
                                <h5>Description:</h5>
                                <p>{algo.description}</p>
                                <h5>Sample input: </h5>
                                <p>{algo.sampleInput}</p>
                                <h5>Sample output: </h5>                                
                                <p>{algo.sampleOutput}</p>
                                <button className="btn btn-primary" onClick={setRandomAlgo}>New Algo</button>
                            </div> : 
                            <button className="btn btn-primary" onClick={setRandomAlgo}>Load Algo</button>
                        }

                    </div>
                    <div className="col-sm-6 border p-2">
                        <h3 className="text-center">Craft a Node.JS Solution</h3>
                        <textarea name="code" id="" cols="60" rows="10"></textarea><br/>
                        <button className="btn btn-primary">Run Code</button>
                        <button className="btn btn-success float-right">Post your solution!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Algorithms

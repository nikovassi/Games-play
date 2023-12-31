import {useState, useEffect} from 'react';
import * as gameService from './serveces/gameService';

const GameDetails = ({
    id,
}) => {
    const [game, setGame] = useState({});

    useEffect(()=> {
        gameService.getOne(id)
            .then(result => {
                setGame(result)
                console.log(result);
            })
    }, []);

    return (
<section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.img} />
                <h1>{game.title}</h1>
                <span className="levels">{game._createdOn}</span>
                <p className="type">Action, Crime, Fantasy</p>
            </div>

            <p className="text">{game.description}</p>

         
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                   
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
                
                <p className="no-comment">No comments.</p>
            </div>

           
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

       
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    </section>
    )
}

export default GameDetails;
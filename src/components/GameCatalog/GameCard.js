
const GameCard = ({
    game,
    navigationChangeHandler,
}) => {
    const onDetailsClick = (e) => {
        e.preventDefault();

        navigationChangeHandler(`/details/${game._id}`)
    }

    return(
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.img} />
                <h6>{game.title}</h6>
                <h2>{game.title}</h2>
                <a href={`/details/${game._id}`} onClick={onDetailsClick} className="details-button">Details</a>
            </div>

        </div>
    )
}

export default GameCard;
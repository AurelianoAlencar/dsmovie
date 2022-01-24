
import MovieStars from "components/MovieStars";
import { type } from "os";
import './styles.css';


type Props = {

    score : number;
    count : number;
}



function MovieScore({score , count } : Props) {

    

    return (



        <div className="dsmovie-score-container">

                  
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>    // caminho caso não tenha avalição, ficará mostrando um traço.
            <MovieStars  score ={score}/>                                                 // se score maior que zero score.toFixed, mostra casa decimal 
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>


    );
}

export default MovieScore;
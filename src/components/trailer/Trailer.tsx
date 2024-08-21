import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./Trailer.scss";

export default function Trailer() {
    const { ytTrailerId: key } = useParams();

    return (
        <div className="react-player-container">
            {key !== null ? (
                <ReactPlayer
                    controls={true}
                    playing={true}
                    url={`https://www.youtube.com/watch?v=${key}`}
                    width="100%"
                    height="100%"
                />
            ) : null}
        </div>
    );
}

import './Signet.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';

export default function signet(props) {

    return (
        <li className={"Signet "+ props.couleur}>
            <div className="sortIcon"><SortIcon style={{fontSize: 40}} /></div>
            <div className="image">
                <img src={'img/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="modif">Modifié: {props.modif}</p>
            </div>
            <div className="MoreVert"><MoreVertIcon style={{fontSize: 40}} /></div>
        </li>
    );
}
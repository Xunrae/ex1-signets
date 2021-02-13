import './ListeSignets.scss';
import Signet from './Signet';
import tabSignets from './data/signets.json';

export default function ListeSignets(props) {
    return (
        <div className="ListeSignets">
          <ul>
            {tabSignets.map((prd) => (
              <Signet
                key={prd.id}
                id={prd.id}
                nom={prd.titre}
                modif={prd.dateModif}
                couleur={prd.couleur}
              />
            ))}
          </ul>
        </div>
      );
}
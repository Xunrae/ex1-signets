import './Appli.scss';
import PiedDePage from './PiedDePage';
import Entete from './Entete';
import ListeSignets from './ListeSignets';

export default function Appli() {

  return (
    <div className="Page">
      <Entete />
      <section className="contenuPrincipal">
        <ListeSignets />
      </section>
      <PiedDePage />
    </div>
  );
}

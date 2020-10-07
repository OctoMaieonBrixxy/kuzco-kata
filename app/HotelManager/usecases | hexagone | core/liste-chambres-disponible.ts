import {ChambreRepository} from "../domain | hexagone | core/interfaces | contrats | ports/chambre-repository";
import {DemandeDeReservation} from "../domain | hexagone | core/models/demande-de-reservation";

export class ListeDesChambresDisponibleUsecase {
    constructor(private chambreRepository: ChambreRepository) {
    }

    handle(demandeDeReservation: DemandeDeReservation) {
        const listeDesChambres =  this.chambreRepository.getChambres();
        const listeDesChambresDisponible = listeDesChambres.filter(chambre => demandeDeReservation.nombreDePersonne <= chambre.capacite);

        return listeDesChambresDisponible;
    }
}

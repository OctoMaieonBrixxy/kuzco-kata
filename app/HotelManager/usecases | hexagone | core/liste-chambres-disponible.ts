import {ChambreRepository} from "../domain | hexagone | core/interfaces | contrats | ports/chambre-repository";
import {DemandeDeReservation} from "./__tests__/hotel-manager.test";

export class ListeDesChambresDisponibleUsecase {
    constructor(private chambreRepository: ChambreRepository) {
    }

    handle(demandeDeReservation: DemandeDeReservation) {
        const listeDesChambres =  this.chambreRepository.getChambres();
        const listeDesChambresDisponible = listeDesChambres.filter(chambre => demandeDeReservation.nombreDePersonne <= chambre.capacite);

        return listeDesChambresDisponible;
    }
}

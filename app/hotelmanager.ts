import { RecupererToutesLesChambres } from "./HotelManager/usecases | hexagone | core/recuperer-toutes-les-chambres"
import {LoggerInterface} from "./HotelManager/domain | hexagone | core/interfaces | contrats | ports/logger-interface";
import {ChambreRepository} from "./HotelManager/domain | hexagone | core/interfaces | contrats | ports/chambre-repository";
import {DemandeDeReservation} from "./HotelManager/domain | hexagone | core/models/demande-de-reservation";
import {Chambre} from "./HotelManager/domain | hexagone | core/models/chambres";
import {ListeDesChambresDisponibleUsecase} from "./HotelManager/usecases | hexagone | core/liste-chambres-disponible";

export class HotelManager {

    constructor(private logger: LoggerInterface, private chambreRepository: ChambreRepository) {
    }

    afficherToutesLesChambres() {
        const chambres = new RecupererToutesLesChambres(this.chambreRepository).handle()

        let print = '[ etage ::: numero-de-chambre ::: description ::: capacite ]\n';

        for (let i = 0; i < chambres.length; i++) {
            let chambre = chambres[i];
            print+= `|  ${chambre.etage}  :::: ${chambre.numero} :::: ${chambre.description} :::: ${chambre.capacite} |\n`
        }

        print+= '|______________________________________________________________|';

        this.logger(print);
    }

    getChambresDisponible(demandeDeReservation: DemandeDeReservation) {
        const listeDesChambresDisponibleUsecase = new ListeDesChambresDisponibleUsecase(this.chambreRepository);

        return listeDesChambresDisponibleUsecase.handle(demandeDeReservation);
    }


}

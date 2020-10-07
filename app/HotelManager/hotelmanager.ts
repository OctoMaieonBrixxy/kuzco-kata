import { RecupererToutesLesChambres } from "./usecases/recuperer-toutes-les-chambres"
import { ChambreRepository } from "../domain/interfaces/chambre-repository"
import { LoggerInterface } from"../domain/interfaces/logger-interface"

export class HotelManager {

    constructor(private logger: LoggerInterface, chambreRepository: ChambreRepository) {
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

/*          getAvailableRooms(demandeDeReservation : DemandeDeReservation) {
             const availableRooms: Chambre[] = [];

             this.chambres.forEach(chambre => {
                 if (demandeDeReservation.nombreDePersonne <= chambre.capacite ) {
                     availableRooms.push(chambre)
                 }
             });

             return availableRooms;
         } */

}

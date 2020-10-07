import { Chambre } from "../hotelmanager"
import { ChambreRepository } from "../domain/interfaces/chambre-repository"

export class RecupererToutesLesChambres{

        contructor(chambresRepository: ChambreRepository){}

        handle() {
            return this.chambresRepository.getChambres()
        }

}

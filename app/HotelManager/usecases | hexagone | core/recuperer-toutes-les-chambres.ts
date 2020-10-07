import { ChambreRepository } from "../domain | hexagone | core/interfaces | contrats | ports/chambre-repository"

export class RecupererToutesLesChambres {
        constructor(private chambresRepository: ChambreRepository){}

        handle() {
            return this.chambresRepository.getChambres()
        }

}

import {ChambreRepository} from "../domain | hexagone | core/interfaces | contrats | ports/chambre-repository";

export class ListeChambreEtDescriptifsUsecase {
    constructor(private chambreRepository: ChambreRepository) {
    }

    handle() {
        return this.chambreRepository.getChambres();
    }
}

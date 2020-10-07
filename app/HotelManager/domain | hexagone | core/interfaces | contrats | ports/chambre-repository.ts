import {Chambre} from "../models/chambres";

export interface ChambreRepository{
    getChambres(): Chambre[]
}

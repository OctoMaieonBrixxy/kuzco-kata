import { HotelManager } from "./HotelManager/hotelmanager"
import { InMemoryChambreRepository } from "./HotelManager/infrastructure/in-memory-chambre-repository"
const chambreRepository = new InMemoryChambreRepository()
new HotelManager((value: any) => console.log(value), chambreRepository).afficherToutesLesChambres()
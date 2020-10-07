import { HotelManager } from "./hotelmanager"
import { InMemoryChambreRepository } from "./HotelManager/infrastructure | adapters/in-memory-chambre-repository"


const chambreRepository = new InMemoryChambreRepository()
const hotelManager = new HotelManager((value: any) => console.log(value), chambreRepository)

hotelManager.afficherToutesLesChambres()

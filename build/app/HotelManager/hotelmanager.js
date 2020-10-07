Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManager = void 0;
const trouver_les_chambres_disponibles_1 = require("./usecases/trouver-les-chambres-disponibles");
class HotelManager {
    constructor(logger) {
        this.logger = logger;
    }
    printRooms() {
        const chambres = new trouver_les_chambres_disponibles_1.TrouverLesChambresDisponibles().handle();
        let print = '[ etage ::: numero-de-chambre ::: description ::: capacite ]\n';
        for (let i = 0; i < chambres.length; i++) {
            let chambre = chambres[i];
            print += `|  ${chambre.etage}  :::: ${chambre.numero} :::: ${chambre.description} :::: ${chambre.capacite} |\n`;
        }
        print += '|______________________________________________________________|';
        this.logger(print);
    }
}
exports.HotelManager = HotelManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWxtYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL0hvdGVsTWFuYWdlci9ob3RlbG1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrR0FBMkY7QUFlM0YsTUFBYSxZQUFZO0lBRXJCLFlBQW9CLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFDcEMsQ0FBQztJQUVELFVBQVU7UUFDTixNQUFNLFFBQVEsR0FBRyxJQUFJLGdFQUE2QixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUE7UUFFN0QsSUFBSSxLQUFLLEdBQUcsZ0VBQWdFLENBQUM7UUFFN0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEtBQUssSUFBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLFVBQVUsT0FBTyxDQUFDLE1BQU0sU0FBUyxPQUFPLENBQUMsV0FBVyxTQUFTLE9BQU8sQ0FBQyxRQUFRLE1BQU0sQ0FBQTtTQUNqSDtRQUVELEtBQUssSUFBRyxrRUFBa0UsQ0FBQztRQUUzRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FjSjtBQWhDRCxvQ0FnQ0MifQ==
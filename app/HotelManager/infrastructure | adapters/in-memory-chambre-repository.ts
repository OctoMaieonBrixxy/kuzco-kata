import { Chambre } from "../domain | hexagone | core/models/chambres"
import { ChambreRepository } from "../domain | hexagone | core/interfaces | contrats | ports/chambre-repository"

export class InMemoryChambreRepository implements ChambreRepository {
        private chambres: Chambre[] = [
            {
                etage: 1,
                numero: 101,
                description: '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible',
                capacite: 2
            },
            {
                etage: 1,
                numero: 102,
                description: '1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible',
                capacite: 2
            },
            {
                etage: 1,
                numero: 103,
                description: '3 single beds - A/C - Wi-Fi - private bathroom - wheelchair accessible',
                capacite: 3
            },
            {
                etage: 2,
                numero: 201,
                description: '1 king size bed - A/C - Wi-Fi - private bathroom',
                capacite: 2
            },
            {
                etage: 2,
                numero: 202,
                description: '1 queen size bed - Wi-Fi - private bathroom',
                capacite: 2
            },
            {
                etage: 2,
                numero: 203,
                description: '1 king size bed + 3 single beds - A/C - Wi-Fi - private bathroom',
                capacite: 5
            },
            {
                etage: 2,
                numero: 204,
                description: '1 single bed - Wi-Fi - shared bathroom',
                capacite: 1,
            },
            {
                etage: 2,
                numero: 205,
                description: '2 single beds - A/C - Wi-Fi - shared bathroom',
                capacite: 2,
            },
            {
                etage: 3,
                numero: 301,
                description: '1 queen size bed - A/C - private bathroom',
                capacite: 2,
            },
            {
                etage: 3,
                numero: 302,
                description: '2 single beds - A/C - private bathroom',
                capacite:	2
            },
            {
                etage: 3,
                numero: 303,
                description: '3 single beds - A/C - shared bathroom',
                capacite:	3 },
            {
                etage: 3,
                numero: 304,
                description: '2 single beds - shared bathroom',
                capacite:	2
            }
        ];

        getChambres(){
            return this.chambres;
        }
}

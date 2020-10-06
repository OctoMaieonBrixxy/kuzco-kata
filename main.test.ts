// @ts-ignore
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';

import sinon from 'sinon';

chai.use(sinonChai)
chai.use(dirtyChai);

export type Chambre = Readonly<{
    description: string;
    etage: number;
    capacite: number;
    numero: number;
}>

export type DemandeDeReservation = Readonly<{
    dateDebut: Date;
    dateFin: Date;
    nombreDePersonne: number;
}>

export class HotelManager {
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
            capacite:	2 }
    ];

    getRooms(): Chambre[] {
        return this.chambres;
    }

    constructor(private logger: Function) {
    }

    printRooms() {
        let print = '[ etage ::: numero-de-chambre ::: description ::: capacite ]\n';

        for (let i = 0; i < this.chambres.length; i++) {
            let chambre = this.chambres[i];
            print+= `|  ${chambre.etage}  :::: ${chambre.numero} :::: ${chambre.description} :::: ${chambre.capacite} |\n`
        }

        print+= '|______________________________________________________________|';

        this.logger(print);
    }

    getAvailableRooms(demandeDeReservation : DemandeDeReservation) {
        const availableRooms: Chambre[] = [];

        this.chambres.forEach(chambre => {
            if (demandeDeReservation.nombreDePersonne <= chambre.capacite ) {
                availableRooms.push(chambre)
            }
        });

        return availableRooms;
    }

}

describe('Hotel Manager', () => {
    it('affiche les chambres et leurs descriptifs', () => {
        const listeDeChambresAttendues = [
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
            { etage: 3,	numero: 302,	description: '2 single beds - A/C - private bathroom', capacite:	2 },
            { etage: 3,	numero: 303,	description: '3 single beds - A/C - shared bathroom', capacite:	3 },
            { etage: 3,	numero: 304,	description: '2 single beds - shared bathroom', capacite:	2 }
        ];
        // given
        const hotelManager = new HotelManager(() => null);
        // when
        const tableauDesChambres = hotelManager.getRooms();

        // then
        expect(tableauDesChambres).to.deep.equal(listeDeChambresAttendues)

    })
    it('imprime en console', () => {
        const afficher = sinon.stub();
        const messageAttendu = '[ etage ::: numero-de-chambre ::: description ::: capacite ]\n' +
            '|  1  :::: 101 :::: 1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible :::: 2 |\n' +
            '|  1  :::: 102 :::: 1 king size bed - A/C - Wi-Fi - private bathroom - wheelchair accessible :::: 2 |\n' +
            '|  1  :::: 103 :::: 3 single beds - A/C - Wi-Fi - private bathroom - wheelchair accessible :::: 3 |\n' +
            '|  2  :::: 201 :::: 1 king size bed - A/C - Wi-Fi - private bathroom :::: 2 |\n' +
            '|  2  :::: 202 :::: 1 queen size bed - Wi-Fi - private bathroom :::: 2 |\n' +
            '|  2  :::: 203 :::: 1 king size bed + 3 single beds - A/C - Wi-Fi - private bathroom :::: 5 |\n' +
            '|  2  :::: 204 :::: 1 single bed - Wi-Fi - shared bathroom :::: 1 |\n' +
            '|  2  :::: 205 :::: 2 single beds - A/C - Wi-Fi - shared bathroom :::: 2 |\n' +
            '|  3  :::: 301 :::: 1 queen size bed - A/C - private bathroom :::: 2 |\n' +
            '|  3  :::: 302 :::: 2 single beds - A/C - private bathroom :::: 2 |\n' +
            '|  3  :::: 303 :::: 3 single beds - A/C - shared bathroom :::: 3 |\n' +
            '|  3  :::: 304 :::: 2 single beds - shared bathroom :::: 2 |\n' +
            '|______________________________________________________________|';
        const hotelManager = new HotelManager(afficher);

        hotelManager.printRooms()

        // @ts-ignore
        expect(afficher.getCall(0)).to.have.been.calledWith(messageAttendu)

    })
    it('permet de voir les chambres disponnibles pour 3 personnes ou plus',() => {
        //given
        const listeDeChambresAttendues = [
            {
                etage: 1,
                numero: 103,
                description: '3 single beds - A/C - Wi-Fi - private bathroom - wheelchair accessible',
                capacite: 3
            },
            {   etage: 3,	
                numero: 303,	
                description: '3 single beds - A/C - shared bathroom', 
                capacite:	3 
            },
            {
                etage: 2,
                numero: 203,
                description: '1 king size bed + 3 single beds - A/C - Wi-Fi - private bathroom',
                capacite: 5
            },
        ];
        const hotelManager = new HotelManager(() => null);
        const demandeDeReservation:DemandeDeReservation = {
            dateDebut: new Date('2020-02-02'),
            dateFin: new Date('2020-02-09'),
            nombreDePersonne: 3,
        }

        //when 
        const chambresDisponnible = hotelManager.getAvailableRooms(demandeDeReservation)

        //then 
        expect(chambresDisponnible).to.deep.include.members(listeDeChambresAttendues)
    })
})




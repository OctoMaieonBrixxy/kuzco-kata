Object.defineProperty(exports, "__esModule", { value: true });
exports.TrouverLesChambresDisponibles = void 0;
class TrouverLesChambresDisponibles {
    constructor() {
        this.chambres = [
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
                capacite: 2
            },
            {
                etage: 3,
                numero: 303,
                description: '3 single beds - A/C - shared bathroom',
                capacite: 3
            },
            {
                etage: 3,
                numero: 304,
                description: '2 single beds - shared bathroom',
                capacite: 2
            }
        ];
    }
    handle() {
        return this.chambres;
    }
}
exports.TrouverLesChambresDisponibles = TrouverLesChambresDisponibles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJvdXZlci1sZXMtY2hhbWJyZXMtZGlzcG9uaWJsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9hcHAvSG90ZWxNYW5hZ2VyL3VzZWNhc2VzL3Ryb3V2ZXItbGVzLWNoYW1icmVzLWRpc3BvbmlibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBYSw2QkFBNkI7SUFBMUM7UUFFb0IsYUFBUSxHQUFjO1lBQzFCO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFdBQVcsRUFBRSwwRUFBMEU7Z0JBQ3ZGLFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRDtnQkFDSSxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsR0FBRztnQkFDWCxXQUFXLEVBQUUsMEVBQTBFO2dCQUN2RixRQUFRLEVBQUUsQ0FBQzthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsV0FBVyxFQUFFLHdFQUF3RTtnQkFDckYsUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNEO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFdBQVcsRUFBRSxrREFBa0Q7Z0JBQy9ELFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRDtnQkFDSSxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsR0FBRztnQkFDWCxXQUFXLEVBQUUsNkNBQTZDO2dCQUMxRCxRQUFRLEVBQUUsQ0FBQzthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsV0FBVyxFQUFFLGtFQUFrRTtnQkFDL0UsUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNEO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRDtnQkFDSSxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsR0FBRztnQkFDWCxXQUFXLEVBQUUsK0NBQStDO2dCQUM1RCxRQUFRLEVBQUUsQ0FBQzthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7Z0JBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsUUFBUSxFQUFFLENBQUM7YUFDZDtZQUNEO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFFBQVEsRUFBRSxDQUFDO2FBQ2Q7WUFDRDtnQkFDSSxLQUFLLEVBQUUsQ0FBQztnQkFDUixNQUFNLEVBQUUsR0FBRztnQkFDWCxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxRQUFRLEVBQUUsQ0FBQzthQUFFO1lBQ2pCO2dCQUNJLEtBQUssRUFBRSxDQUFDO2dCQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFFBQVEsRUFBRSxDQUFDO2FBQUU7U0FDcEIsQ0FBQztJQUtkLENBQUM7SUFITyxNQUFNO1FBQ0YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7Q0FDUjtBQTlFRCxzRUE4RUMifQ==
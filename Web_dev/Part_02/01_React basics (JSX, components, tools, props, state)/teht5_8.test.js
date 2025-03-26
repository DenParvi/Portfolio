import { fireEvent, render, screen, within  } from '@testing-library/react';
import { Lista, Rivi, Taulukko, Otsikko, TauluRivi, Teht6  } from './teht5_8'

describe("Tehtävä 5, Lista-elementti", () => {
  test('Tehtävä 5, Lista-elementti', () => {
    render(<Lista />);
    const lista = screen.getByRole("list");
    const { getAllByRole } = within(lista)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(4)
  });

  test('Tehtävä 5, Rivi-elementti', () => {
    render(<Rivi etunimi="Maija" sukunimi="Opiskelija" aloitusvuosi="2013" />);
    const li = screen.getByRole("listitem");
    expect(li).toHaveTextContent("Maija, Opiskelija, 2013")
  });

})

const otsikot = { nimi: "Etunimi", osoite : "Lähiosoite", aloitusvuosi : "Aloitusvuosi"}
const opiskelijat = [
    { nimi : "Maija", osoite : "Microkatu 1", aloitusvuosi : 2001},
    { nimi : "Liisa", osoite : "Opistotie 2", aloitusvuosi : 1999},
    { nimi : "Leena", osoite : "Kauppakatu 7 a 2", aloitusvuosi : 1997},
    { nimi : "Kaisa", osoite : "Wilman polku 9", aloitusvuosi : 2012},
    { nimi : "Sirpa", osoite : "Kotipolku 8", aloitusvuosi : 2021}
];

describe("Tehtävä 6, Taulukko-elementti", () => {  

    test('Tehtävä 6, Taulukko-elementti', () => {
        const { debug } = render(<Taulukko data={opiskelijat} otsikot={otsikot}/>)
        
        const lohkot = screen.getAllByRole("rowgroup");
        // Pitäisi olla 2 lohkoa, toinen otsikoille (thead), toinen riveille (tbody)
        expect(lohkot.length).toBe(2);

        // Käsitellään ensin thead
        const { getAllByRole } = within(lohkot[0])
        const rows = getAllByRole("row")
        expect(rows.length).toBe(1);
        const th = getAllByRole("columnheader")
        expect(th.length).toBe(3);

        // Sitten tbody
        //const { getAllByRole } = within(lohkot[1])
        const data_rows = within(lohkot[1]).getAllByRole("row")
        expect(data_rows.length).toBe(5);        
        const td = within(data_rows[0]).getAllByRole("cell");
        expect(td.length).toBe(3);
        expect(td[0]).toHaveTextContent("Maija")
        expect(td[1]).toHaveTextContent("Microkatu 1")
        expect(td[2]).toHaveTextContent("2001")

        // for(let i=0; i < lohkot.length; i++){
        //     const { getAllByRole } = within(lohkot[i])
        //     const rows = getAllByRole("row")
        //     debug(rows)
        // }
    });

    test('Tehtävä 6, TauluRivi-elementti', () => {
        const table = document.createElement('table')
        const { debug } = render(<TauluRivi rivit={opiskelijat}/>, {
            container: document.body.appendChild(table)
        });
        const tbody = screen.getByRole("rowgroup");
        const { getAllByRole } = within(tbody)
        const items = getAllByRole("row")
        expect(items.length).toBe(5)
        //debug(tbody)
    });


    test('Tehtävä 6, Otsikko-elementti', () => {
        const table = document.createElement('table')
        const { debug } = render(<Otsikko otsikot={otsikot}/>, {
            container: document.body.appendChild(table)
        });

        const thead = screen.getByRole("rowgroup");
        const { getAllByRole } = within(thead)
        const items = getAllByRole("columnheader")
        expect(items.length).toBe(3)
    });  
  })
  
  describe("Tehtävä 7, 2 erillistä taulukkoa", () => {  
  
    test('Tehtävä 7, 2 taulukkoa', () => {
        const { debug } = render(<Teht6 />)

        const tables = screen.getAllByRole("table");
        expect(tables.length).toBe(2);
    });
})

describe("Tehtävä 8, Piilota-nappi", () => {  
  
    test('Tehtävä 8, Piilota-nappi', () => {
        const { debug } = render(<Teht6 />)

        const tables = screen.getAllByRole("table");
        expect(tables.length).toBe(2);

        const piilotaNappi = screen.getByText(/Piilota/i);
        // Piilotetaan taulukot
        fireEvent.click(piilotaNappi);
        const tables_h = screen.queryAllByRole("table");
        expect(tables_h.length).toBe(0);

        // Laitetaan taulukot taas näkyviin
        fireEvent.click(piilotaNappi);
        const tables_again = screen.queryAllByRole("table");
        expect(tables_again.length).toBe(2);

    });
})
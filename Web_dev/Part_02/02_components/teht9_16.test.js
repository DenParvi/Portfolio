import { fireEvent, render, screen, within  } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Cars, Info  } from './teht9_10'
import { ListForm, Error, ErrorMessage} from './teht11_13'
import {Professional} from './teht14_16'

describe("Tehtävä 9 Cars-komponentti", () => {
  test('Tehtävä 9, Cars-komponentti', () => {
    render(<Cars />);
    for(let i=0; i < 6; i++){
        userEvent.type(screen.getByRole('textbox'), 'Volvo')
        const save = screen.getByText(/Save/i);
        fireEvent.click(save)

        const lista = screen.getByRole("list");
        const { getAllByRole } = within(lista)
        const items = getAllByRole("listitem")
        let input = screen.getByRole('textbox')
        expect(input).toHaveTextContent('')
        expect(items.length).toBe(i+1)
    }
  });
});

describe("Tehtävä 10 Info-komponentti", () => {

    test('Tehtävä 10, Info-komponentti', () => {
        render(<Info count={6}></Info>);
        let h2 = screen.getByRole("heading");
        expect(h2).toHaveTextContent("Ainakin 5 nimeä on jo syötetty")
    });

  test('Tehtävä 10, lisätään väh. 5 autoa', () => {
    render(<Cars />);
    for(let i=0; i < 6; i++){
        userEvent.type(screen.getByRole('textbox'), 'Volvo')
        const save = screen.getByText(/Save/i);
        fireEvent.click(save)

        const lista = screen.getByRole("list");
        const { getAllByRole } = within(lista)
        const items = getAllByRole("listitem")
        let input = screen.getByRole('textbox')
        expect(input).toHaveTextContent('')
        expect(items.length).toBe(i+1)
    }

    let h2 = screen.getByRole("heading");
    expect(h2).toHaveTextContent("Ainakin 5 nimeä on jo syötetty")
  });
})

describe("Tehtävä 11, ListForm-komponentti", () => {
    test('Tehtävä 11, ListForm-komponentti', () => {
        const { debug } = render(<ListForm />);

        for(let i=0; i < 5; i++){
            let nimiInput = screen.getByLabelText(/Nimi/i);
            let osoiteInput = screen.getByLabelText(/Osoite/i);
            let vuosiInput = screen.getByLabelText(/vuosi/i);
            userEvent.type(nimiInput, 'Maija ' + i)
            userEvent.type(osoiteInput, 'Opistotie ' + i)
            userEvent.type(vuosiInput, '198' + i)
            const save = screen.getByText(/Add/i);
            fireEvent.click(save)
    
            const lista = screen.getByRole("list");
            const { getAllByRole } = within(lista)
            const items = getAllByRole("listitem")
            expect(nimiInput).toHaveTextContent('')
            expect(osoiteInput).toHaveTextContent('')
            expect(vuosiInput).toHaveTextContent('')
            expect(items.length).toBe(i+1)
            expect(items[i]).toHaveTextContent(`Maija ${i},Opistotie ${i},198${i}`)

        }
        //debug();
    });
});

describe("Tehtävä 12, Error-komponentti", () => {
    test('Tehtävä 12, virheviestit', () => {
        const { debug } = render(<ListForm />);

        let nimiInput = screen.getByLabelText(/Nimi/i);
        let osoiteInput = screen.getByLabelText(/Osoite/i);
        let vuosiInput = screen.getByLabelText(/vuosi/i);
        userEvent.type(nimiInput, 'Mai')
        userEvent.type(osoiteInput, 'Opi')
        userEvent.type(vuosiInput, '198')
        const save = screen.getByText(/Add/i);
        fireEvent.click(save)

        let errortext = screen.getByText(/Virheelliset kentät/i);
        expect(errortext).toHaveTextContent("Virheelliset kentät: nimi,osoite,vuosi")
        userEvent.clear(nimiInput);
        userEvent.type(nimiInput, 'Maija')
        fireEvent.click(save)

        errortext = screen.getByText(/Virheelliset kentät/i);
        expect(errortext).toHaveTextContent("Virheelliset kentät: osoite,vuosi")

        userEvent.clear(osoiteInput);
        userEvent.type(osoiteInput, 'Opistotie 2')
        fireEvent.click(save)

        errortext = screen.getByText(/Virheelliset kentät/i);
        expect(errortext).toHaveTextContent("Virheelliset kentät: vuosi")
    });

    test('Tehtävä 12, Error-komponentti, virheelliset syötteet', () => {
        render(<Error nimi="Tep" osoite="Kau" vuosi="198" />)
        let errortext = screen.getByText(/Virheelliset kentät/i);
        expect(errortext).toHaveTextContent("Virheelliset kentät: nimi,osoite,vuosi")        
    });

    test('Tehtävä 12, Error-komponentti, oikeat syötteet', () => {
        render(<Error nimi="Teppo" osoite="Kauppakatu" vuosi="1987" />)
        let errortext = screen.queryByText(/Virheelliset kentät/i);
        expect(errortext).toBe(null);
    });

});

describe("Tehtävä 13, tarkistetaan onko nimi jo syötetty", () => {
    test('Tehtävä 13, virheviestit', () => {
        const { debug } = render(<ListForm />);

        let nimiInput = screen.getByLabelText(/Nimi/i);
        let osoiteInput = screen.getByLabelText(/Osoite/i);
        let vuosiInput = screen.getByLabelText(/vuosi/i);
        userEvent.type(nimiInput, 'Maija')
        userEvent.type(osoiteInput, 'Opistotie')
        userEvent.type(vuosiInput, '1980')
        const save = screen.getByText(/Add/i);
        fireEvent.click(save)

        userEvent.clear(nimiInput);
        userEvent.clear(osoiteInput);
        userEvent.clear(vuosiInput);

        userEvent.type(nimiInput, 'Maija')
        userEvent.type(osoiteInput, 'Opistotie')
        userEvent.type(vuosiInput, '1980')
        fireEvent.click(save);

        let errortext = screen.getByText(/Nimi Maija on jo syötetty/i);
        expect(errortext).toHaveTextContent("Nimi Maija on jo syötetty")        

        userEvent.clear(nimiInput);
        userEvent.clear(osoiteInput);
        userEvent.clear(vuosiInput);

        userEvent.type(nimiInput, 'Liisa')
        userEvent.type(osoiteInput, 'Opistotie')
        userEvent.type(vuosiInput, '1980')
        fireEvent.click(save);

        errortext = screen.queryByText(/Nimi Maija on jo syötetty/i);
        expect(errortext).toBe(null);
    });

    test('Tehtävä 13, ErrorMessage-komponentti, virheelliset syötteet', () => {
        render(<ErrorMessage message="Tämä on virheviesti" />)
        let errortext = screen.getByText("Tämä on virheviesti");
        expect(errortext).toHaveTextContent("Tämä on virheviesti")
        expect(errortext).toHaveStyle("color: red");        
    });
});

const ammatit = [{koodi: '-1', selite: '--Valitse--'}, {koodi: 'teacher', selite: 'Opettaja'}, {koodi: 'police', selite: 'Poliisi'}, {koodi: 'doctor', selite: 'Lääkäri'}, {koodi: 'player', selite: 'Pelaaja'}]

const testTable = (nimi, ammatti, tutkinto_suoritettu, tutkinto) => {

    const lohkot = screen.getAllByRole("rowgroup");
    // Pitäisi olla 2 lohkoa, toinen otsikoille (thead), toinen riveille (tbody)
    expect(lohkot.length).toBe(2);

    // Käsitellään ensin thead
    const { getAllByRole } = within(lohkot[0])
    const rows = getAllByRole("row")
    expect(rows.length).toBe(1);
    const th = getAllByRole("columnheader")
    expect(th.length).toBeGreaterThanOrEqual(2)

    // Sitten tbody
    const data_rows = within(lohkot[1]).getAllByRole("row")
    expect(data_rows.length).toBe(1);        
    const td = within(data_rows[0]).getAllByRole("cell");
    expect(td.length).toBeGreaterThanOrEqual(2)
    expect(td[0]).toHaveTextContent(nimi)
    expect(td[1]).toHaveTextContent(ammatti)

    if ( tutkinto_suoritettu )
        expect(td[2]).toHaveTextContent(tutkinto_suoritettu)
    if ( tutkinto )
        expect(td[3]).toHaveTextContent(tutkinto)

}


describe("Tehtävä 14, Professional komponentti", () => {

    test('Tehtävä 14, syötetään nimi ja ammatti', () => {
        const { debug } = render(<Professional ammatit={ammatit} />);
        let nimiInput = screen.getByLabelText(/Nimi/i);
        let ammattiSelect = screen.getByLabelText(/Ammatti/i);
        const insert = screen.getByText(/Insert/i);
    
        userEvent.type(nimiInput, 'Maija')
        fireEvent.change(ammattiSelect, {target : {value:'police'}})
        fireEvent.click(insert)
        
        testTable("Maija", "police");
        //debug();
    });
})

describe("Tehtävä 15", () => {

    test('Tehtävä 15, syötetään tutkinto suoritettu', () => {
        const { debug } = render(<Professional ammatit={ammatit} />);
        let nimiInput = screen.getByLabelText(/Nimi/i);
        let ammattiSelect = screen.getByLabelText(/Ammatti/i);
        const insert = screen.getByText(/Insert/i);
    
        let tutkinto_suoritettu = screen.getByLabelText(/Tutkinto suoritettu:/i)
        userEvent.type(nimiInput, 'Maija')
        fireEvent.change(ammattiSelect, {target : {value:'police'}})
        fireEvent.click(tutkinto_suoritettu);        
        fireEvent.click(insert)

        //debug();
        testTable("Maija", "police", "Tutkinto suoritettu");
    });
})

describe("Tehtävä 16, syötetään tutkinto", () => {
    test('Tehtävä 16, syötetään tutkinto', () => {
        const { debug } = render(<Professional ammatit={ammatit} />);
        let nimiInput = screen.getByLabelText(/Nimi/i);
        let ammattiSelect = screen.getByLabelText(/Ammatti/i);
        const insert = screen.getByText(/Insert/i);
    
        let tutkinto_suoritettu = screen.getByLabelText(/Tutkinto suoritettu:/i)
        userEvent.type(nimiInput, 'Maija')
        fireEvent.change(ammattiSelect, {target : {value:'police'}})
        fireEvent.click(tutkinto_suoritettu);

        let tutkinto = screen.getByLabelText(/Tutkinto:/i)   
        userEvent.type(tutkinto, 'FM')        
        fireEvent.click(insert)

        //debug();
        testTable("Maija", "police", "Tutkinto suoritettu", "FM");
    });
});

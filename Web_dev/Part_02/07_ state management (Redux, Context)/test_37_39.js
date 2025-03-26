import { fireEvent, render, screen, within  } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Teht37, TableRow, store } from './teht37'
import { Provider } from "react-redux"; // Tarvitaan ReduxApp:n kanssa

// ÄLÄ aja tätä tiedostoa JEST:llä

export const renderTeht37 = (max_rows) => {

  render(
    <Provider store={store}>
    <Teht37 />
    </Provider>
    );

  for(let i=0; i < max_rows; i++){

      userEvent.type(screen.getByLabelText('Id'), i.toString())
      userEvent.type(screen.getByLabelText('Nimi'), "Maija_" +i)
      userEvent.type(screen.getByLabelText('Aloitusvuosi'), (2000 + i).toString())
      const lisaa = screen.getByText(/^Lisää$/);
      fireEvent.click(lisaa)

      userEvent.clear(screen.getByLabelText('Id'))
      userEvent.clear(screen.getByLabelText('Nimi'))
      userEvent.clear(screen.getByLabelText('Aloitusvuosi'))
  }

}

export const testTeht37_a = () => {
  render(
    <Provider store={store}>
    <Teht37 />
    </Provider>
    );
  
    const max_rows = 6;
    for(let i=0; i < max_rows; i++){
  
        userEvent.type(screen.getByLabelText('Id'), i.toString())
        userEvent.type(screen.getByLabelText('Nimi'), "Maija_" +i)
        userEvent.type(screen.getByLabelText('Aloitusvuosi'), (2000 + i).toString())
        const lisaa = screen.getByText(/^Lisää$/);
        fireEvent.click(lisaa)
  
        userEvent.clear(screen.getByLabelText('Id'))
        userEvent.clear(screen.getByLabelText('Nimi'))
        userEvent.clear(screen.getByLabelText('Aloitusvuosi'))
    }
  
    const lohkot = screen.getAllByRole("rowgroup");
    // Pitäisi olla 2 lohkoa, toinen otsikoille (thead), toinen riveille (tbody)
    expect(lohkot.length).toBe(2);
  
    // Käsitellään ensin thead
    const { getAllByRole } = within(lohkot[0])
    const rows = getAllByRole("row")
    expect(rows.length).toBe(1);
    const th = within(rows[0]).getAllByRole("cell");
    expect(th[0]).toHaveTextContent("Nr");
    expect(th[1]).toHaveTextContent("Name");
    expect(th[2]).toHaveTextContent("Starting year");
  
    // Sitten tbody
    const data_rows = within(lohkot[1]).getAllByRole("row")
    expect(data_rows.length).toBe(max_rows);        
  
    for(let i=0; i < max_rows; i++){
      // 
      const td = within(data_rows[i]).getAllByRole("cell");
  
      expect(td[0]).toHaveTextContent(i.toString());
      expect(td[1]).toHaveTextContent("Maija_" + i);
      expect(td[2]).toHaveTextContent((2000 + i).toString());
    }
  }
  
  export const testTeht37_b = () => {
    render(<table>
      <tbody>
      <TableRow id="34" nimi="Maija" aloitusvuosi="2024" />
      </tbody>
      </table>)
  
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(1);
    const tr = within(rows[0]).getAllByRole("cell");
    expect(tr[0]).toHaveTextContent("34");
    expect(tr[1]).toHaveTextContent("Maija");
    expect(tr[2]).toHaveTextContent("2024");
  }
  

export const renderTeht39 = (max_rows) => {

  render(
    <Provider store={store}>
    <Teht37 />
    </Provider>
    );

  for(let i=100; i < 100+max_rows; i++){

      userEvent.type(screen.getByLabelText('Oid'), i.toString())
      userEvent.type(screen.getByLabelText('Onimi'), "Tietotekniikka_" +i)
      userEvent.type(screen.getByLabelText('Olaajuus'), i + "op")
      const lisaa = screen.getByText(/^Lisää jakso$/);
      fireEvent.click(lisaa)

      userEvent.clear(screen.getByLabelText('Oid'))
      userEvent.clear(screen.getByLabelText('Onimi'))
      userEvent.clear(screen.getByLabelText('Olaajuus'))
  }

}


  export const testTeht38 = () => {
    const max_rows = 6;
    renderTeht37(max_rows);

    const lohkot = screen.getAllByRole("rowgroup");
  
    // tbody
    const data_rows = within(lohkot[1]).getAllByRole("row")

    const td = within(data_rows[2]).getAllByRole("cell");

    expect(td[3]).toHaveTextContent(/Poista 2/);

    const poista = screen.getByText(/Poista 2/);
    fireEvent.click(poista)

    // Nyt pitäisi hävitä tekstit näytöltä
    expect(screen.queryByText(/Poista 2/)).not.toBeInTheDocument();
  }

  export const testTeht39 = () => {
    const max_rows = 6;
    renderTeht39(max_rows);

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(max_rows);

    expect(screen.getByRole('option', {name : 'Tietotekniikka_104,104op'})).toBeInTheDocument();
    // screen.debug(options);
  }

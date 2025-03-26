import {
  fireEvent,
  render,
  screen,
  within,
  waitFor
} from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { Asiakas } from "./teht17"
import userEvent from '@testing-library/user-event'
let confirmSpy

const nimiSearchInput = "Alexis Barrera"
const osoiteSearchInput = "Colonial Court 71"

const roleOptions = {timeout:5000};
jest.setTimeout(10000);

function handleFullTable(data, minLength, row) {
  const data_rows = within(data[1]).getAllByRole("row")
  expect(data_rows.length).toBeGreaterThanOrEqual(minLength)
  const td = within(data_rows[row]).getAllByRole("cell")
  return td
}
function checkTableLength(data, length, row) {
  let data_rows = within(data[1]).getAllByRole("row")
  expect(data_rows.length).toBe(length)
  const td = within(data_rows[row]).getAllByRole("cell")
  return td
}

describe("Tehtävä 18, Asiakas haku", () => {
  test("Tehtävä 18, Nappia painamalla haetaan kaikki", async () => {
    render(<Asiakas />)
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions);

    const nameData = await screen.findByText("Mullen Duke", {}, roleOptions)
    expect(nameData).toBeInTheDocument()
    
    let td = handleFullTable(data, 15, 0)
    expect(td[3]).toHaveTextContent("81300")
    td = handleFullTable(data, 15, 6)
    expect(td[5]).toHaveTextContent("(934) 537-3209")
  })

  test("Tehtävä 18, Hakuehdot toimivat nimellä", async () => {
    render(<Asiakas />)
    const searchButton = screen.getByTestId("searchButton")
    const nameInput = screen.getByTestId("nameInput")
    fireEvent.change(nameInput, {
      target: { value: nimiSearchInput },
    })

    screen.debug();
    fireEvent.click(searchButton)
    
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    screen.debug();

    const td = checkTableLength(data, 1, 0)
    expect(data[0]).toBeInTheDocument()
    expect(td[4]).toHaveTextContent("Matthews")

  })

  test("Tehtävä 18, Hakuehdot toimivat osoitteella", async () => {
    render(<Asiakas />)
    const searchButton = screen.getByTestId("searchButton")
    const addressInput = screen.getByTestId("addressInput")
    fireEvent.change(addressInput, {
      target: { value: osoiteSearchInput },
    })
    fireEvent.click(searchButton)
    let osoiteText = await screen.findByText(osoiteSearchInput, {}, roleOptions)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)

    let td = checkTableLength(data, 1, 0)
    expect(osoiteText).toBeInTheDocument()
    expect(td[6]).toHaveTextContent("3")
  })
  test("Tehtävä 18, Hakuehdot toimivat yhdessä", async () => {
    render(<Asiakas />)
    const searchButton = screen.getByTestId("searchButton")
    const nameInput = screen.getByTestId("nameInput")
    const addressInput = screen.getByTestId("addressInput")
    fireEvent.change(addressInput, {
      target: { value: "Middleton Street 69" },
    })
    fireEvent.change(nameInput, {
      target: { value: nimiSearchInput },
    })
    fireEvent.click(searchButton)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const td = checkTableLength(data, 1, 0)
    expect(data[0]).toBeInTheDocument()
    expect(td[4]).toHaveTextContent("Matthews")
  })
})

describe("Tehtävä 19, Asiakas tyyppi", () => {
  test("Tehtävä 19, Asiakastyyppien haku elementti", async () => {
    render(<Asiakas />)
    let customertypeOption = null;

    await waitFor(() => customertypeOption = screen.getAllByTestId("customertypeOption"), roleOptions);
    //customertypeOption = screen.getAllByTestId("customertypeOption", roleOptions);
    const customertypeSelect = screen.getByTestId("customertypeSelect", roleOptions)

console.log("customertypeOption:", customertypeOption);
console.log("customertypeOption[1]:", customertypeOption[1]);

    expect(customertypeSelect).toBeInTheDocument()
    expect(customertypeOption[1]).toBeInTheDocument()
    expect(customertypeOption.length).toBeGreaterThanOrEqual(3)
  })

  test("Tehtävä 19, Asiakastyypillä haku", async () => {
    render(<Asiakas />)
    const searchButton = screen.getByTestId("searchButton")
    let customertypeOption = null;
    await waitFor(() => customertypeOption = screen.getAllByTestId("customertypeOption"), roleOptions);
    const customertypeSelect = screen.getByTestId("customertypeSelect")

    expect(customertypeSelect).toBeInTheDocument()
    expect(customertypeOption[1]).toBeInTheDocument()
    expect(customertypeOption.length).toBeGreaterThanOrEqual(3)
    fireEvent.change(customertypeSelect, {
      target: { value: customertypeOption[1].value },
    })
    fireEvent.click(searchButton)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions);
    const data_rows = within(data[1]).getAllByRole("row")
    expect(data_rows.length).toBeLessThanOrEqual(16)
  })
})

describe("Tehtävä 20, Haun aikainen 'loading'", () => {
  test("Tehtävä 20, Haun aikainen 'Loading' teksti", () => {
    render(<Asiakas />)
    fireEvent.click(screen.getByTestId("searchButton"))
    const loading = screen.getByTestId("loading")
    expect(loading).toBeInTheDocument()
  })

  test("Tehtävä 20, Tekstin häviäminen ja tietojen näyttäminen", async () => {
    render(<Asiakas />)
    fireEvent.click(screen.getByTestId("searchButton"))
    const loading = screen.getByTestId("loading")
    expect(loading).toBeInTheDocument()
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions);

    expect(loading).not.toBeInTheDocument()
  })
})

describe("Tehtävä 21, Ei löytynyt dataa", () => {
  test("Tehtävä 21, Väärällä haulla ei löydy tablea", async () => {
    render(<Asiakas />)
    const nameInput = screen.getByTestId("nameInput")
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.change(nameInput, {
      target: { value: "" },
    })
    fireEvent.click(searchButton)

    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const data_rows = within(data[1]).getAllByRole("row")
    expect(data_rows[0]).toBeInTheDocument()
    
    fireEvent.change(nameInput, {
      target: { value: "Aku Ankka" },
    })
    fireEvent.click(searchButton)

//    await new Promise((r) => setTimeout(r, 1000));

    expect(data_rows[0]).not.toBeInTheDocument()
  })

  test("Tehtävä 21, Tablen tilalla näytettävä teksti", async () => {
    render(<Asiakas />)
    const nameInput = screen.getByTestId("nameInput")
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.change(nameInput, {
      target: { value: "" },
    })
    fireEvent.click(searchButton)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const data_rows = within(data[1]).getAllByRole("row")
    expect(data_rows[0]).toBeInTheDocument()


    fireEvent.change(nameInput, {
      target: { value: "Aku Ankka" },
    })
    
    fireEvent.click(searchButton)
    expect(data_rows[0]).not.toBeInTheDocument()
    let notFound = null; 
    await waitFor(() => notFound = screen.getByTestId("notFound"), roleOptions);
    expect(notFound).toBeInTheDocument()
  })
})


describe("Tehtävä 22, Ei löytynyt dataa 2s", () => {
  test("Tehtävä 22, 'Ei löytynyt dataa vain 2s näkyvillä'", async () => {
    

    render(<Asiakas />)
    const nameInput = screen.getByTestId("nameInput")
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.change(nameInput, {
      target: { value: "" },
    })

    fireEvent.click(searchButton)
    
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions);
    const data_rows = within(data[1]).getAllByRole("row")
    expect(data_rows[0]).toBeInTheDocument()
    fireEvent.change(nameInput, {
      target: { value: "Aku Ankka" },
    })

    fireEvent.click(searchButton)
    let notFound = null;
    await waitFor(() => notFound = screen.getByTestId("notFound"), roleOptions);
    expect(data[0]).not.toBeInTheDocument()
console.log("notfound visible")
    expect(notFound).toBeInTheDocument()
console.log("notfound visible II")

    //await act(async () => {await new Promise((r) => setTimeout(r, 3000))})
    await new Promise((r) => setTimeout(r, 2000));

console.log("notfound NOT visible")

    expect(notFound).not.toBeInTheDocument()
  })
})

describe("Tehtävä 23, Käyttäjän poistaminen", () => {
  test("Tehtävä 23, Poista nappi löytyy jokaiselta tulokselta, ja nimetty oikein", async () => {
    render(<Asiakas />)
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions);
    const data_rows = within(data[1]).getAllByRole("row")
    expect(data_rows[0]).toBeInTheDocument()
    const deleteButtonArray = screen.getAllByTestId("deleteButton")
    expect(deleteButtonArray).toHaveLength(data_rows.length)
    const deleteBt = within(data_rows[0]).getByTestId("deleteButton")
    expect(deleteBt).toHaveTextContent(/Poista 5/i)
  })

  test("Tehtävä 23, Poista nappi toimii", async () => {
    render(<Asiakas />)
    //Varmistetaan että testi menee läpi vaikka olisi tehty confirm window
    //window.confirm = jest.fn(() => true) // always click 'yes'
    
    //Itse testit alkavat
    confirmSpy = jest.spyOn(window, "confirm")
    confirmSpy.mockImplementation(jest.fn(() => true))
    
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions);
    const data_rows = within(data[1]).getAllByRole("row")
    const lastRow = data_rows[data_rows.length - 1]
    
    screen.debug(lastRow)

    expect(lastRow).toBeInTheDocument()
    const deleteButtonArray = screen.getAllByTestId("deleteButton")
    const lastDeleteBt = deleteButtonArray[deleteButtonArray.length - 1]
    fireEvent.click(lastDeleteBt)

    // Pakko laittaa odottamaan hetkeksi että DELETE ehditään suorittamaan
    await act(async () => {
      await new Promise((r) => setTimeout(r, 2000))
    })

    //fireEvent.click(searchButton)
    
    data = await screen.findAllByRole("rowgroup", {}, roleOptions);
    //screen.debug(data)
    
    expect(lastRow).not.toBeInTheDocument()
  })
})

describe("Tehtävä 24, Poistamisen varmistus", () => {
  
  test("Tehtävä 24, confirm funktio", async () => {
    render(<Asiakas />)

    confirmSpy = jest.spyOn(window, "confirm")
    confirmSpy.mockImplementation(jest.fn(() => false))
    
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const data_rows = within(data[1]).getAllByRole("row")
    const lastRow = data_rows[data_rows.length - 1]
    expect(lastRow).toBeInTheDocument()
    const deleteButtonArray = screen.getAllByTestId("deleteButton")
    const lastDeleteBt = deleteButtonArray[deleteButtonArray.length - 1]

    fireEvent.click(lastDeleteBt)
    fireEvent.click(searchButton)
    data = await screen.findAllByRole("rowgroup", {}, roleOptions);
    
    //Tarkistetaan että window.confirm on kutstuttu kerran
    expect(confirmSpy).toBeCalled()
    expect(data_rows.length).toBe(within(data[1]).getAllByRole("row").length)

    confirmSpy.mockRestore();
  })

  /*
  test("Tehtävä 24, 'Haluatko varmasti poistaa asiakkaan X'", async () => {
    render(<Asiakas />)

    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions);
    const data_rows = within(data[1]).getAllByRole("row")
    const lastRow = within(data_rows[data_rows.length - 1]).getAllByRole(
      "cell"
    )

    const deleteButtonArray = screen.getAllByTestId("deleteButton")
    const lastDeleteBt = deleteButtonArray[deleteButtonArray.length - 1]
    
    //Nimen poistetavan nimen saa kiinni, mutta confirm window muuttujan tarkistus ei onnistunut
    const lastRowName = lastRow[1]
    console.log(lastRowName.textContent)
    fireEvent.click(lastDeleteBt)
    //expect(???).toHaveTextContent(lastRowName)
  })
*/

  test("Tehtävä 24, Confirm OK toimii", async () => {
    render(<Asiakas />)
    confirmSpy = jest.spyOn(window, "confirm")
    confirmSpy.mockImplementation(jest.fn(() => true))
    
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const data_rows = within(data[1]).getAllByRole("row")
    const lastRow = data_rows[data_rows.length - 1]
    expect(lastRow).toBeInTheDocument()
    const deleteButtonArray = screen.getAllByTestId("deleteButton")
    const lastDeleteBt = deleteButtonArray[deleteButtonArray.length - 1]
    fireEvent.click(lastDeleteBt)
    expect(confirmSpy).toBeCalled()

    fireEvent.click(searchButton)
    data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    expect(lastRow).not.toBeInTheDocument()

    confirmSpy.mockRestore();
  })

  test("Tehtävä 24, Confirm cancel toimii", async () => {
    render(<Asiakas />)
    
    confirmSpy = jest.spyOn(window, "confirm")
    confirmSpy.mockImplementation(jest.fn(() => false))
    
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const data_rows = within(data[1]).getAllByRole("row")
    const lastRow = data_rows[data_rows.length - 1]
    expect(lastRow).toBeInTheDocument()
    const deleteButtonArray = screen.getAllByTestId("deleteButton")
    const lastDeleteBt = deleteButtonArray[deleteButtonArray.length - 1]

    fireEvent.click(lastDeleteBt)
    fireEvent.click(searchButton)
    //Tarkistetaan että window.confirm on kutstuttu kerran
    expect(confirmSpy).toBeCalled()

    data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    expect(data_rows.length).toBe(within(data[1]).getAllByRole("row").length)

    confirmSpy.mockRestore();
  })
})

describe("Tehtävä 25, Uuden asiakkaan lisääminen", () => {
  test("Tehtävä 25, Lisää uusi nappi-> piilota kaikki muut napit", async () => {
    render(<Asiakas />)
    const addButton = screen.getByTestId("addButton")
    const searchButton = screen.getByTestId("searchButton")
    const nameInput = screen.getByTestId("nameInput")
    const addressInput = screen.getByTestId("addressInput")
    const customertypeSelect = screen.getByTestId("customertypeSelect")

    fireEvent.click(searchButton)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)

    fireEvent.click(addButton)
    expect(searchButton).not.toBeInTheDocument()
    expect(nameInput).not.toBeInTheDocument()
    expect(addressInput).not.toBeInTheDocument()
    expect(customertypeSelect).not.toBeInTheDocument()
    expect(data[1]).not.toBeInTheDocument()
  })
  test("Tehtävä 25, Näytä form oikeilla kentillä", async () => {
    render(<Asiakas />)
    const addButton = screen.getByTestId("addButton")
    fireEvent.click(addButton)

    const nameEdit = screen.getByTestId("nameEdit")
    const addressEdit = screen.getByTestId("addressEdit")
    const phoneEdit = screen.getByTestId("phoneEdit")
    const saveButtonEdit = screen.getByTestId("saveButton")
    const cancelEdit = screen.getByTestId("cancelButton")
    let customertypeOption
    await waitFor(() => customertypeOption = screen.getAllByTestId("customertypeOption"), roleOptions);
    
    const customertypeSelectEdit = screen.getByTestId("customertypeSelectEdit")

    expect(nameEdit).toBeInTheDocument()
    expect(addressEdit).toBeInTheDocument()
    expect(phoneEdit).toBeInTheDocument()
    expect(customertypeSelectEdit).toBeInTheDocument()
    expect(saveButtonEdit).toBeInTheDocument()
    expect(cancelEdit).toBeInTheDocument()
    expect(customertypeOption[1]).toBeInTheDocument()
  })
  test("Tehtävä 25, Asiakkaan lisääminen REST-rajapintaan", async () => {
    render(<Asiakas />)
    const addButton = screen.getByTestId("addButton")
    let searchButton = screen.getByTestId("searchButton")
    let nameInput = screen.getByTestId("nameInput")
    fireEvent.change(nameInput, {
      target: { value: "Combs Francis" },
    })
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    let data_rows = within(data[1]).getAllByRole("row")
    let dataRowLength = data_rows.length
    console.log(data_rows.length)
    fireEvent.click(addButton)

    const nameEdit = screen.getByTestId("nameEdit")
    const addressEdit = screen.getByTestId("addressEdit")
    const phoneEdit = screen.getByTestId("phoneEdit")
    let customertypeOption
    await waitFor(() => customertypeOption = screen.getAllByTestId("customertypeOption"), roleOptions)
    
    const customertypeSelectEdit = screen.getByTestId("customertypeSelectEdit")
    const saveButtonEdit = screen.getByTestId("saveButton")

    fireEvent.change(nameEdit, {
      target: { value: "Combs Francis" },
    })
    fireEvent.change(addressEdit, {
      target: { value: "Uusi osoite" },
    })
    fireEvent.change(phoneEdit, {
      target: { value: "Uusi puhelinnumero" },
    })
    fireEvent.change(customertypeSelectEdit, {
      target: { value: customertypeOption[1].value },
    })

    fireEvent.click(saveButtonEdit)
    fireEvent.change(nameInput, {
      target: { value: "Combs Francis" },
    })
    searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    data_rows = within(data[1]).getAllByRole("row")

    console.log(data_rows.length)
    expect(dataRowLength).toBeLessThan(data_rows.length)
  })
  test("Tehtävä 25, Cancel nappi toimii", async () => {
    render(<Asiakas />)
    const addButton = screen.getByTestId("addButton")
    const searchButton = screen.getByTestId("searchButton")
    let nameInput = screen.getByTestId("nameInput")
    fireEvent.change(nameInput, {
      target: { value: "Combs Francis" },
    })
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    let data_rows = within(data[1]).getAllByRole("row")
    let dataRowLength = data_rows.length
    fireEvent.click(addButton)

    const nameEdit = screen.getByTestId("nameEdit")
    const addressEdit = screen.getByTestId("addressEdit")
    const phoneEdit = screen.getByTestId("phoneEdit")

    const cancelButtonEdit = screen.getByTestId("cancelButton")

    fireEvent.change(nameEdit, {
      target: { value: "Combs Francis" },
    })
    fireEvent.change(addressEdit, {
      target: { value: "Uusi osoite" },
    })
    fireEvent.change(phoneEdit, {
      target: { value: "Uusi puhelinnumero" },
    })

    fireEvent.click(cancelButtonEdit)
    fireEvent.change(nameInput, {
      target: { value: "Combs Francis" },
    })
    fireEvent.click(searchButton)
    data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    data_rows = within(data[1]).getAllByRole("row")

    //Asiakkaan lisääminen ei onnistu, joten tämä ei mene läpi.
    //Kun asiakkaan lisääminen tietokantaan mene läpi, pitäisi tämänkin testin mennä
    expect(dataRowLength).toBe(data_rows.length)
  })
  test("Tehtävä 25, Asiakkaiden uudelleen haku", async () => {
    render(<Asiakas />)
    const addButton = screen.getByTestId("addButton")
    fireEvent.click(addButton)
    const nameEdit = screen.getByTestId("nameEdit")
    const addressEdit = screen.getByTestId("addressEdit")
    const phoneEdit = screen.getByTestId("phoneEdit")
    const saveButtonEdit = screen.getByTestId("saveButton")
    let customertypeOption
    await waitFor(() => customertypeOption = screen.getAllByTestId("customertypeOption"), roleOptions);
    
    const customertypeSelectEdit = screen.getByTestId("customertypeSelectEdit")

    fireEvent.change(nameEdit, {
      target: { value: "Combs Francis" },
    })
    fireEvent.change(addressEdit, {
      target: { value: "Uusi osoite" },
    })
    fireEvent.change(phoneEdit, {
      target: { value: "Uusi puhelinnumero" },
    })
    fireEvent.change(customertypeSelectEdit, {
      target: { value: customertypeOption[1].value },
    })

    fireEvent.click(saveButtonEdit)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const data_rows = within(data[1]).getAllByRole("row")
    expect(data_rows[0]).toBeInTheDocument()
    //Asiakkaan lisääminen ei onnistu, joten tämä ei mene läpi.
    //Kun asiakkaan lisääminen tietokantaan mene läpi, pitäisi tämänkin testin mennä
    console.log(data_rows.length)

  })
})

describe("Tehtävä 26, Asiakkaan muokkaaminen", () => {
  test("Tehtävä 26, Muokkaa nappi löytyy", async () => {
    render(<Asiakas />)
    
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const data_rows = within(data[1]).getAllByRole("row")

    const editButtonArray = screen.getAllByTestId("editButton")
    expect(editButtonArray[0]).toBeInTheDocument()
    expect(editButtonArray.length).toBe(data_rows.length)
  })

  test("Tehtävä 26, Muokkaa nappia painamalla näytetään form", async () => {
    render(<Asiakas />)
    
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    const data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    const data_rows = within(data[1]).getAllByRole("row")
    const editButtonArray = screen.getAllByTestId("editButton")
    fireEvent.click(editButtonArray[data_rows.length-1])
    let customertypeOption
    await waitFor(() => customertypeOption = screen.getAllByTestId("customertypeOption"), roleOptions)
    
    const customertypeSelectEdit = screen.getByTestId("customertypeSelectEdit")
    
    await screen.findByTestId("saveEditButton")
    expect(screen.getByTestId("nameEdit")).toBeInTheDocument()
    expect(screen.getByTestId("addressEdit")).toBeInTheDocument()
    expect(screen.getByTestId("phoneEdit")).toBeInTheDocument()
    expect(customertypeSelectEdit).toBeInTheDocument()
    
    // Muokattava rivi
    screen.debug(data_rows[data_rows.length-1])

    expect(screen.getByTestId("saveEditButton")).toBeInTheDocument()
    expect(screen.getByTestId("cancelEditButton")).toBeInTheDocument()
    expect(customertypeOption[1]).toBeInTheDocument()
    expect(searchButton).not.toBeInTheDocument()

  })
  
  test("Tehtävä 26, Asiakkaan muuttaminen menee tietokantaan", async () => {
    render(<Asiakas />)
    let searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    let data_rows = within(data[1]).getAllByRole("row")
    const dataRowLength = data_rows.length
    const editButtonArray = screen.getAllByTestId("editButton")
    let lastRow = within(data_rows[data_rows.length - 3]).getAllByRole(
      "cell"
    )

      // screen.debug(lastRow)

    fireEvent.click(editButtonArray[data_rows.length-3])
    let customertypeOption = null;
    await waitFor( () => customertypeOption = screen.getAllByTestId("customertypeOption"), roleOptions)

    // Odotetaan että Tallenna muutos nappi on näkyvissä -> muutettava data on haettu
    await screen.findByTestId("saveEditButton")
    
    const customertypeSelectEdit = screen.getByTestId("customertypeSelectEdit")
    const nameEdit = screen.getByTestId("nameEdit")
    const addressEdit = screen.getByTestId("addressEdit")
    const phoneEdit = screen.getByTestId("phoneEdit")
    let saveEditButton = screen.getByTestId("saveEditButton")
    // console.log(nameEdit.value)
    
    //await screen.findByAltText(lastRowName)
    fireEvent.change(nameEdit, {
      target: { value: "Muutettu nimi" },
    })
    fireEvent.change(addressEdit, {
      target: { value: "Muutettu osoite" },
    })
    fireEvent.change(phoneEdit, {
      target: { value: "Muutettu puhelinnumero" },
    })
    fireEvent.change(customertypeSelectEdit, {
      target: { value: customertypeOption[2].value },
    })

    // screen.debug(saveEditButton)

    //fireEvent.click(saveEditButton)
    userEvent.click(saveEditButton);
    //await(screen.getByTestId("searchButton").toBeInTheDocument)

    // Pakko laittaa odottamaan hetkeksi että PUT ehditään suorittamaan
    await act(async () => {
      await new Promise((r) => setTimeout(r, 1200))
    })

    searchButton = await screen.findByTestId("searchButton", {}, roleOptions)
    // screen.debug(searchButton)
  
    fireEvent.click(searchButton)
    
    data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    data_rows = within(data[1]).getAllByRole("row")
    expect(dataRowLength).toBe(data_rows.length)
    lastRow = within(data_rows[data_rows.length - 3]).getAllByRole(
      "cell"
    )
    const lastRowName = lastRow[1]
    expect(lastRowName).toHaveTextContent("Muutettu nimi")
    
  })

  test("Tehtävä 26, Muutetun asiakkaan hakeminen", async () => {
    render(<Asiakas />)
    const searchButton = screen.getByTestId("searchButton")
    const nameInput = screen.getByTestId("nameInput")
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    let data_rows = within(data[1]).getAllByRole("row")
    let lastRow = within(data_rows[data_rows.length-1]).getAllByRole(
      "cell"
    )
    let lastRowName = lastRow[1].textContent
    console.log(lastRowName)
    fireEvent.change(nameInput, {
      target: { value: lastRowName },
    })
    fireEvent.click(searchButton)
    data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    data_rows = within(data[1]).getAllByRole("row")
    
    const editButtonArray = screen.getAllByTestId("editButton")
    lastRow = within(data_rows[data_rows.length - 1]).getAllByRole(
      "cell"
    )
      //Asiakkaan muokkaamisen formi ei ehdi jostain syystä renderöitä, 
      //vaikka buttonin hakemisessa sekä otsikossa olisi await
    fireEvent.click(editButtonArray[data_rows.length-1])
    let customertypeOption
    await waitFor(() => customertypeOption = screen.getAllByTestId("customertypeOption"), roleOptions)
    
    await screen.findByTestId("saveEditButton")
    const customertypeSelectEdit = screen.getByTestId("customertypeSelectEdit")
    const nameEdit = screen.getByTestId("nameEdit")
    const addressEdit = screen.getByTestId("addressEdit")
    const phoneEdit = screen.getByTestId("phoneEdit")
    const saveEditButton = screen.getByTestId("saveEditButton")
    
    //await screen.findByAltText(lastRowName)
    fireEvent.change(nameEdit, {
      target: { value: lastRowName },
    })
    fireEvent.change(addressEdit, {
      target: { value: "Uudelleen muutettu osoite" },
    })
    fireEvent.change(phoneEdit, {
      target: { value: "0441234567" },
    })
    fireEvent.change(customertypeSelectEdit, {
      target: { value: customertypeOption[2].value },
    })
    fireEvent.click(saveEditButton)
    await act(async () => {
      await new Promise((r) => setTimeout(r, 2200))
    })
    data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    data_rows = within(data[1]).getAllByRole("row")
    lastRow = within(data_rows[data_rows.length - 1]).getAllByRole(
      "cell"
    )
    const lastRowAddress = lastRow[2]
    expect(lastRowAddress).toHaveTextContent("Uudelleen muutettu osoite")

  })
  test("Tehtävä 26, Cancel nappi toimii", async () => {
    render(<Asiakas />)
    const searchButton = screen.getByTestId("searchButton")
    fireEvent.click(searchButton)
    let data = await screen.findAllByRole("rowgroup", {}, roleOptions)
    let data_rows = within(data[1]).getAllByRole("row")
    const editButtonArray = screen.getAllByTestId("editButton")
      //Asiakkaan muokkaamisen formi ei ehdi jostain syystä renderöitä, 
      //vaikka buttonin hakemisessa sekä otsikossa olisi await
    fireEvent.click(editButtonArray[data_rows.length-1])
    const saveButton = await screen.findByTestId("saveEditButton")
    const cancelButton = await screen.findByTestId("cancelEditButton")
    expect(saveButton).toBeInTheDocument()
    fireEvent.click(cancelButton)
    await screen.findAllByRole("rowgroup", {}, roleOptions)
    await screen.findByTestId("nameInput")
    expect(screen.getByTestId("searchButton")).toBeInTheDocument()
  })
})

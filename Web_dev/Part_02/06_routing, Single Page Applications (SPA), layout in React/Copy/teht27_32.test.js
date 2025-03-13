import { findByText, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import {NavLink, MemoryRouter as Router, BrowserRouter, MemoryRouter} from 'react-router-dom'

import {Spa, Error, Kirjaudu, Aika, Autot, Details, Koti } from './teht27_32'

// import { configure, shallow, mount } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe("Tehtävä 27", () => {  

    test('Tehtävä 27, testataan Koti-linkki', async () => {
      const history = createMemoryHistory()
      render(
        
        <Router location={history.location} navigator={history}>
          <Spa />
        </Router>,
      )
    
      //const k = screen.getByText("Koti");
      const k = screen.getByRole('link', { name: 'Koti' });
      // screen.debug(k);
      
      const leftClick = {button: 0}
      userEvent.click(k, leftClick)
      
      // screen.debug();

      await screen.findByText(/Savonia AMK/i)

      // HUOM! Lopullisessa testissä tullaan testaamaan että näytöllä lukee teksti oikeassa muodossa! 
      expect(screen.getByText(/päivä/i)).toBeInTheDocument()
    });

    test('Tehtävä 27, testataan Koti-komponentti', () => {

      render(<Koti />);
      expect(screen.getByText(/Savonia AMK/i)).toBeInTheDocument()

      // HUOM! Lopullisessa testissä tullaan testaamaan että näytöllä lukee teksti oikeassa muodossa! 
      expect(screen.getByText(/päivä/i)).toBeInTheDocument()
    });


    test('Tehtävä 27, testataan Aika-komponentti', () => {
      render(<Aika />);
      expect(screen.getByText(/päivä/i)).toBeInTheDocument()        
    });  
  })

describe("Tehtävä 28",  () => {  

    test('Tehtävä 28, testataan Autot linkki, renderöidään vain lista autoista', async () => {

      const history = createMemoryHistory()

      render(
        <Router location={history.location} navigator={history}>
          <Spa />
        </Router>,
      )
    
      fireEvent.click(screen.getByText("Autot"));

      // HUOM! Jos on tehty tehtävä 29, on samalla tehty myös tehtävä 28
      // Tässä testataan ensin löytyykö kirjautumissivu -> jos löytyy, oletetaan että tehtävä 28 on tehty

      // Löytyykö Kirjautumis-sivu
      try{
        let nimiInput = screen.getByLabelText(/Etunimi/i);
        // Testi ok
        expect(1).toBe(1);
      }
      catch {
        console.log("KIRJAUTMINEN")
        // Ei löydy Kirjautumissivua -> pitäisi löytyä Autot-lista
        const lista = await screen.findByRole("list");
        const { findAllByRole } = within(lista)
  
        const items = await findAllByRole("listitem")    
        expect(items.length).toBeGreaterThan(5)        
  
      }
    });
});


describe("Tehtävä 29",  () => {  

    test('Tehtävä 29, testataan Autot linkki, löytyy kirjautumissivu', async () => {

      const history = createMemoryHistory()

      render(
        <Router location={history.location} navigator={history}>
          <Spa />
        </Router>,
      )
    
      fireEvent.click(screen.getByText("Autot"));

      // Ensin pitäisi löytyä Kirjautumis-sivu
      let nimiInput = screen.getByLabelText(/Etunimi/i);
      let nroInput = screen.getByLabelText(/Henkilönumero/i);
      const kirjaudu = screen.getByText(/Kirjaudu/i);
  
      userEvent.type(nimiInput, 'Maija')
      userEvent.type(nroInput, '12345')
      fireEvent.click(kirjaudu);

      // Nyt pitäisi näkyä kirjautuneen käyttäjän tiedot h3-elementissä
      const userdata = await screen.findByText("Maija,12345");

    });

    test('Tehtävä 29, testataan Autot linkki, kirjautumisen jälkeen siirrytään Autot sivulle', async () => {

      jest.mock('react-router-dom', () => {
        return {
          Redirect: jest.fn(({ to }) => `Sivulle to ${to}`),
        };
      });

      const history = createMemoryHistory()

      render(
        <Router location={history.location} navigator={history}>
          <Spa />
        </Router>,
      )
    
      fireEvent.click(screen.getByText("Autot"));

      // Ensin pitäisi löytyä Kirjautumis-sivu
      let nimiInput = screen.getByLabelText(/Etunimi/i);
      let nroInput = screen.getByLabelText(/Henkilönumero/i);
      const kirjaudu = screen.getByText(/Kirjaudu/i);
  
      userEvent.type(nimiInput, 'Maija')
      userEvent.type(nroInput, '12345')
      fireEvent.click(kirjaudu);

      // Siirrytään automatic Autot-sivulle, jolla on lista
      //await screen.findByText(/Cars/i);

      //screen.debug();

      const lista = await screen.findByRole("list");
      const { findAllByRole } = within(lista)

      const items = await findAllByRole("listitem")    
      expect(items.length).toBeGreaterThan(5)        
    });
  })

  describe("Tehtävä 30, testataan navigointilinkit", () => {  

    // beforeAll( () => {
    //   configure({ adapter: new Adapter() });
    // });

    test('Tehtävä 30, alleviivaus puuttuu', async () => {

      const history = createMemoryHistory()

      const view = render(<Router location={history.location} navigator={history}> <Spa /></Router>).container;
      
      const linkki = view.querySelector("a");
      expect(linkki).toHaveStyle('text-decoration:none');
      expect(linkki).toHaveStyle('font-size:20px');
      expect(linkki).toHaveStyle('height:100px');

    });

    /*
    test('Tehtävä 30, alleviivaus puuttuu', () => {

      const wrapper = mount(<Spa />)
      /*
      const autot = wrapper.findWhere(node => {
        return node.text() == "Autot"; 
      })/
      const autot = wrapper.find(NavLink)
      //.findWhere(n => n.text() == "Autot");
      // .findWhere(node => {
      //   return node.props.to == "/autot"
      // })
      console.log("SPA:", wrapper.html());
      console.log("A:", autot.first().html());
      
      //const style = autot.first().prop

      //expect(autot.first()).toHaveProperty('text-decoration', 'none')
      expect(autot.first()).toHaveStyle('text-decoration', 'none')
    });
*/

  })


  describe("Tehtävä 31", () => {  

    test('Tehtävä 31, navigoidaan väärälle sivulle', async () => {
      const history = createMemoryHistory()
      history.push('/some_bad_route')

      render(
        <Router location={history.location} navigator={history}>
          <Spa />
        </Router>
      )

      // Navigoidaan ensin Koti-sivulle
      // fireEvent.click(screen.getByText("Koti"));
      // screen.debug();

      // history.push('/some_bad_route')
      screen.debug();

      //await screen.findByText('Yritit navigoida sivulle: /some_bad_route')
      const t = await screen.findByText(/Yritit navigoida sivulle:/i)
    });

    test('Tehtävä 31, Error-komponentti', async () => {
        
      const history = createMemoryHistory()
      render(
        <Router location={history.location} navigator={history}>
          <Error />
        </Router>)

        await screen.findByText(/Yritit navigoida sivulle/i)
        screen.getByRole("button")
        screen.getByText("Koti-sivulle")
    });


    test('Tehtävä 31, Error-komponentissa on Koti-sivulle nappi', async () => {
        
      const history = createMemoryHistory()
      history.push('/some_bad_route')

      render(
        <Router location={history.location} navigator={history}>
          <Spa />
        </Router>,
      )

      await screen.findByText(/Yritit navigoida sivulle/i)
      screen.getByRole("button")
      const kotiButton = screen.getByText("Koti-sivulle")
      // screen.debug(kotiButton);

      fireEvent.click(kotiButton);
      // screen.debug();

      expect(await screen.findByText(/Savonia AMK/i)).toBeInTheDocument()

    });
  })

  describe("Tehtävä 32", () => {  

    test('Tehtävä 32, testataan auton linkki', async () => {
      jest.mock('react-router-dom', () => {
        return {
          Redirect: jest.fn(({ to }) => `Sivulle to ${to}`),
        };
      });

      const history = createMemoryHistory()

      render(
        <Router location={history.location} navigator={history}>
          <Spa />
        </Router>,
      )
    
      fireEvent.click(screen.getByText("Autot"));

      // Ensin pitäisi löytyä Kirjautumis-sivu
      let nimiInput = screen.getByLabelText(/Etunimi/i);
      let nroInput = screen.getByLabelText(/Henkilönumero/i);
      const kirjaudu = screen.getByText(/Kirjaudu/i);
  
      userEvent.type(nimiInput, 'Maija')
      userEvent.type(nroInput, '12345')
      fireEvent.click(kirjaudu);

      // Siirrytään automatic Autot-sivulle, jolla on lista
      //await screen.findByText(/Cars/i);

      //screen.debug();

      const lista = await screen.findByRole("list");
      const { findAllByRole } = within(lista)

      const items = await findAllByRole("listitem")    
  //screen.debug(items);

      const {findByText } = within(items[2]);
      const linkki = await findByText("Lada,Niva")
      screen.debug(linkki);

      // Klikkaa Lada,Niva
      fireEvent.click(linkki);

      // Siirrytään automatic Details-sivulle, jolla on auton tiedot
      //await screen.findByText(/Details/i);
      await screen.findByText(/Lada,Niva/i);

      // screen.debug();

    });
  })

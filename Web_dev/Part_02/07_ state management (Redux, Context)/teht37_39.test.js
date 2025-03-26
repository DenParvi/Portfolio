import {testTeht37_a, testTeht37_b, testTeht38, testTeht39} from './test_37_39'

// HUOM! Aja tämä tiedosto JEST:llä!!!

// HUOM! Testaa kukin tehtävä erikseen laittamalla describe-sanan jälkeen .only
// Ts. describe.only
// Tämä sen takia että Redux jättää muistiin edelliset objektit ja tästä aiheutuu testien välillä hankaluuksia!
// Tarvittaessa lopeta testiskriptit testien välillä ja käynnistä testi uudelleen (ja aja aina vain yksi testi)

describe("Tehtävä 37", () => {  

    test('Tehtävä 37, testataan lisääminen', () => {
        testTeht37_a();
    });

    // test('Tehtävä 37, testataan TableRow-komponentti', () => {
    //   testTeht37_b();
    // });
  })

describe("Tehtävä 38", () => {  

    test('Tehtävä 38, testataan Poista nappi', () => {
      testTeht38();
    });

  });

describe("Tehtävä 39", () => {  

    test('Tehtävä 39, Lisätään opintojakso', () => {
        testTeht39();
    });
  });

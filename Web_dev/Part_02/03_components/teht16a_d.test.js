import { fireEvent, render, screen } from '@testing-library/react';
import { Laskuri, Arvo } from './teht16a_d'


describe("Tehtävä 16a, kasvata nappi", () => {
  test('Tehtävä 16a', () => {
    render(<Laskuri />);
    expect(new Laskuri()).not.toBeInstanceOf(Function) 
    const laskuriElement = screen.getByText(/Laskuri on/i);
    expect(laskuriElement).toHaveTextContent('Laskuri on 0');

    const kasvataNappi = screen.getByText(/Kasvata/i);
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 1');
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 2');
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 11');
  });
})

describe("Tehtävä 16b, nollaa nappi", () => {
  test('Tehtävä 16b', () => {
    render(<Laskuri />);
    expect(new Laskuri()).not.toBeInstanceOf(Function) 
    const laskuriElement = screen.getByText(/Laskuri on/i);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 2');
    const nollaaNappi = screen.getByText(/Nollaa/i);
    fireEvent.click(nollaaNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 0');
  })
})

describe("Tehtävä 16c, laskurin arvo punaisella", () => {
  test('Tehtävä 16c', () => {
    render(<Laskuri />);
    expect(new Laskuri()).not.toBeInstanceOf(Function) 
    const laskuriElement = screen.getByText(/Laskuri on/i);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    for(let i=0; i < 12; i++)
      fireEvent.click(kasvataNappi)

    expect(laskuriElement).toHaveTextContent('Laskuri on 12');
    const nollaaNappi = screen.getByText(/Nollaa/i);
    expect(laskuriElement).toHaveStyle('color : red')
  })
})

describe("Tehtävä 16d, Arvo-komponentin testaaminen", () => {
  test('Tehtävä 16d', () => {
    render(<Arvo arvo="34" />);
    expect(new Arvo()).not.toBeInstanceOf(Function)

    const laskuriElement = screen.getByText(/Laskuri on/i);

    expect(laskuriElement).toHaveTextContent('Laskuri on 34');
    expect(laskuriElement).toHaveStyle('color : red')
  })
})

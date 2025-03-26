import { fireEvent, render, screen } from '@testing-library/react';
import { Laskuri, Arvo } from './teht1_4'


describe("Tehtävä 1, kasvata nappi", () => {
  test('Tehtävä 1', () => {
    render(<Laskuri />);
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

describe("Tehtävä 2, nollaa nappi", () => {
  test('Tehtävä 2', () => {
    render(<Laskuri />);
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

describe("Tehtävä 3, laskurin arvo punaisella", () => {
  test('Tehtävä 3', () => {
    render(<Laskuri />);
    const laskuriElement = screen.getByText(/Laskuri on/i);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    for(let i=0; i < 12; i++)
      fireEvent.click(kasvataNappi)

    expect(laskuriElement).toHaveTextContent('Laskuri on 12');
    const nollaaNappi = screen.getByText(/Nollaa/i);
    expect(laskuriElement).toHaveStyle('color : red')
  })
})

describe("Tehtävä 4, Arvo-komponentin testaaminen", () => {
  test('Tehtävä 4', () => {
    render(<Arvo arvo="34" />);
    const laskuriElement = screen.getByText(/Laskuri on/i);

    expect(laskuriElement).toHaveTextContent('Laskuri on 34');
    expect(laskuriElement).toHaveStyle('color : red')
  })
})

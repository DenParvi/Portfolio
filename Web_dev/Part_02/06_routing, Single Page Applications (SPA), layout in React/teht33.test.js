import { fireEvent, render, screen, within  } from '@testing-library/react';
import { Teht33, Header, LeftSide, Center, RightSide, Footer,   } from './teht33'

describe("Tehtävä 33", () => {  

  test('Tehtävä 33, testataan Header', async () => {

    render(<Header />)
    await screen.findByText(/Welcome to main page of Savonia AMK/i)
    
  })

  test('Tehtävä 33, testataan LeftSide', async () => {

    render(<LeftSide />)
    await screen.findByText(/Please log in/i)
  })

  test('Tehtävä 33, testataan Center', async () => {

    render(<Center />)
    await screen.findByText(/Introduction of our company/i)
  })

  test('Tehtävä 33, testataan RightSide', async () => {

    render(<RightSide />)
    await screen.findByText(/Lot's of info about our company/i)
  })

  test('Tehtävä 33, testataan Footer', async () => {

    render(<Footer />)
    await screen.findByText(/Copyright by ktkoiju@Savonia/i)
  })

});  

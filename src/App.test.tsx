import { describe } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App';

describe('App', () => { 

    describe('Dui IU', () => {
 
  it('Posee el boton con el texto Validar', () =>{ 
    render(<input className='rounded p-2 w-full'> </input>);
    
  })

  it('Render', () =>{ 
    
    render(<App/>);
  })


  it('El dui es valido?', () =>{ 
   render(<h1 className='text-5xl font-bold'>Mi DUI es valido?</h1>);
    
  })

  it('Input texto', () =>{ 
    render(<button className='bg-blue-700 text-white w-auto py-2 px-3 rounded'>Validar</button>);
     
   })

   
})

})







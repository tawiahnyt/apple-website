import React from 'react'
import { appleImg } from '../utils'

const Navbar = () => {
  return (
      <header>
          <nav>
              <img src={appleImg} alt='Apple' height={18} width={14} />

              <div>
                  {['Phones', 'Macbooks', 'iPads', 'Accessories'].map((nav, i) => (
                      <div key={nav}>
                          {nav}
                      </div>
                  ))}
              </div>

              <div>
                  
              </div>
          </nav>
      </header>
  )
}

export default Navbar




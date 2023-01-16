import React from 'react';
import Hade from './Hade';
import Search from './Search';
import Navber from './Navber';
const Hader = ({searchFilter}) => {
  return (
    <>
     <Hade/>
     <Search searchFilter={searchFilter}/>
     <Navber/>
    </>
  )
}

export default Hader

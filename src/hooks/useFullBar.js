import React, { useContext } from 'react';
import BarContext from '../context/BarContext';

export const useFullBar = () => {

    const {isFull , setIsFull} = useContext(BarContext)

    return {isFull, setIsFull}
}
 

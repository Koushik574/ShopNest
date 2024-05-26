import { useContext } from 'react';
import CartContext from '../context/CartContext';

export const useCustomCartContext = () => {
    return useContext(CartContext);
}
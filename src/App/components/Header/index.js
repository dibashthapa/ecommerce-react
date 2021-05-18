import React from 'react';
import {
   Menu,
   MenuItem,
   MenuButton,
   Button,
   MenuList,
   MenuGroup,
   MenuDivider,
} from '@chakra-ui/react';
import { KeyboardArrowDown } from '@material-ui/icons';
// import PersonIcon from '../../../Assets/Icons/ic-actions-user.png';
// import ShoppingBasketIcon from '../../../Assets/Icons/ic-ecommerce-basket.png';
// import SearchIcon from '../../../Assets/Icons/ic-actions-search.png';
import './index.css';
import { HeaderContainer } from './index.style';
import { connect } from 'react-redux';

const Header = (props) => {
   return (
      <HeaderContainer>
         <Menu>
            <MenuButton as={Button} rightIcon={<KeyboardArrowDown />}>
               Dibash Thapa
            </MenuButton>
            <MenuList>
               <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Payments</MenuItem>
               </MenuGroup>
               <MenuDivider />

               <Button colorScheme="red" width="100" marginLeft="10px">
                  Logout
               </Button>
            </MenuList>
         </Menu>
      </HeaderContainer>
   );
};

// connect the action:
const mapStateToProps = (state) => {
   return {
      cartProduct: state.products.cartProduct,
   };
};

export default connect(mapStateToProps, null)(Header);

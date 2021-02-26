import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './index.style';
import { connect } from 'react-redux';
import { ProductActions } from '../../../Dashboard/pages/Dashboard/store';

const PaginationPage = (props) => {
   const { totalPage } = props;
   const classes = useStyles();
   const paginate = (event, page) => {
      props.getProducts(page);
   };
   return (
      <div className={classes.root}>
         <Pagination count={totalPage ? totalPage : 0} onChange={paginate} />
      </div>
   );
};
const mapDispatchToProps = (dispatch) => ({
   getProducts: (page) => dispatch(ProductActions.getProducts(page)),
});

export default connect(null, mapDispatchToProps)(PaginationPage);

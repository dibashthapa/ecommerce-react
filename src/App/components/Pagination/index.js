import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './index.style';

const PaginationPage = (props) => {
   const { totalPage } = props;
   const classes = useStyles();
   const paginate = (event, page) => {
      props.getProducts(page);
   };
   return (
      <div className={classes.root}>
         <Pagination
            count={totalPage ? totalPage : 0}
            onChange={paginate}
            showFirstButton
            showLastButton
            shape="rounded"
         />
      </div>
   );
};
export default PaginationPage;

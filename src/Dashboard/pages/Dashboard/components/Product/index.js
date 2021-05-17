import React, { useEffect } from 'react';
import AppProduct from '../../../../../App/components/Product';
import { ProductActions } from '../../store';
import { connect } from 'react-redux';
import Pagination from '../../../../../App/components/Pagination';
import Loading from '../../../../../App/components/Loading';
import { Row, Col, Container } from 'react-bootstrap';
const Product = (props) => {
   useEffect(() => {
      props.getProducts(1);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <Container>
            <Row>
               {props.loading ? (
                  <Loading open={true} />
               ) : (
                  props.products?.map(({ _id, name, price, imgUrl, description }) => (
                     <Col md={3}>
                        <AppProduct
                           img_url={imgUrl}
                           name={name}
                           price={price}
                           description={description}
                           id={_id}
                        />
                     </Col>
                  ))
               )}
            </Row>

            <Pagination
               totalPage={props.totalProduct.totalPages}
               getProducts={props.getProducts}
            />
         </Container>
      </>
   );
};

const mapDispatchToProps = (dispatch) => ({
   getProducts: (page) => dispatch(ProductActions.getProducts(page)),
});

const mapStateToProps = (state) => {
   return {
      success: state.products.success,
      totalProduct: state.products.products,
      loading: state.products.loading,
      products: state.products.filteredProducts,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

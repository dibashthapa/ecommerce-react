import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   productWrapper: {
      position: 'relative',
      '&:hover .icons': {
         opacity: 1,
      },
      '& .icons': {
         position: 'absolute',
         zIndex: 1,
         top: 5,
         right: 5,
         transition: '.2s',
         alignItems: 'center',
         opacity: 0,

         '& .imgWrapper': {
            padding: 5,
            boxShadow: ' 0 4px 4px rgb(0 0 0 / 5%)',
            borderRadius: '17px',
            display: 'flex',
            alignItems: 'center',
            '&:hover .quickView': {
               display: 'block',
            },
            '&:hover img': {
               transform: 'rotateX(180deg)',
            },
         },
         '& .quickView': {
            display: 'none',
            transition: '.2s',
            fontSize: 14,
         },
         '& img': {
            height: 20,
            transition: '.2s',
         },
      },
   },
   imageWrapper: {
      '& img': {
         height: 320,
         width: '100%',
      },
   },
   infoWrapper: {
      '& p': {
         textAlign: 'center',
      },
      '& p:last-child': {
         fontWeight: 600,
      },
   },
}));

export default useStyles;

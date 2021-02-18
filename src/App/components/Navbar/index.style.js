import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   container: {
      width: '100%',
      backgroundColor: '#F9F9F9',
      '& ul ': {
         display: 'flex',
         justifyContent: 'center',
         alignContent: 'center',
         '& li': {
            listStyle: 'none',
            margin: ' 15px 40px',
            fontSize: '20px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
         },
         '& span': {
            display: 'flex',
         },
      },
   },
}));
export default useStyles;

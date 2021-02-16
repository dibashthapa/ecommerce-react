import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      '& .spinner-grow': {
         display: 'inline-block',
         width: '2rem',
         height: '2rem',
         verticalAlign: 'text-bottom',
         backgroundColor: 'currentColor',
         borderRadius: '50%',
         opacity: 0,
         '-webkit-animation': 'spinner-grow 1s linear infinite',
         animation: 'spinner-grow .75s linear infinite',
      },

      '& .sr-only': {
         position: 'absolute',
         width: '1px',
         height: '1px',
         padding: 0,
         margin: '-1px',
         overflow: ' hidden',
         clip: 'rect(0,0,0,0)',
         whiteSpace: 'nowrap',
         border: 0,
      },
   },
}));

export default useStyles;

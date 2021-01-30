import { makeStyles } from "@material-ui/core";
import theme from '../../App/theme/theme'

const useStyles = makeStyles(theme => ({
    topbar__action_btn: {
        display: 'inline',
        margin: `0px ${theme.spacing(2)}px`,
        cursor: 'pointer',


    },
    topbar__link_btn: {
        display: 'inline',
        margin: `0px ${theme.spacing(2)}px`,
        cursor: 'pointer',


    },
    topbar__wrapping__container: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px `,
        borderBottom: '2px solid #f5f5f5'
    }
}))

export { useStyles }
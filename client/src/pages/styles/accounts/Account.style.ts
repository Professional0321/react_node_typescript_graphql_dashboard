import { makeStyles } from '@material-ui/core';
import { ColorScheme } from '../../../utils/theme';

export const useAccountStyles = makeStyles({
    root: {
        margin: '0 auto',
        marginTop: 24,
    },
    accountBalance: {
        fontSize: 28,
        textAlign: 'center',
    },
    accountInfo: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '240px',
        margin: '0 auto',
        marginTop: 12,
        alignItems: 'center',
    },
    accountButtonsSection: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '0 auto',
        width: '480px',
        marginTop: 24,
    },
    accountButton: {
        backgroundColor: ColorScheme.PRIMARY,
        color: ColorScheme.WHITE,
        '&:hover, &.Mui-focusVisible': { backgroundColor: ColorScheme.HOVER },
        width: 32,
        height: 32,
    },
    accountButtonSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    accountButtonText: {
        marginTop: 12,
        fontSize: 14,
        color: ColorScheme.INFO,
    },
    transactions: {
        marginTop: 12,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        width: 480,
        color: ColorScheme.INFO,
    },
    transactionsHeader: {
        marginTop: 12,
        display: 'flex',
    },
    transactionCards: {
        marginTop: 8,
    },
});
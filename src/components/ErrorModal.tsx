import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

export default class ErrorModal extends React.Component {
    handleClose = () => {
        let { actions }: any = this.props;
        actions.showAppError({
            open: false,
            errorMessage: ''
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    Transition = () => {
        return <Slide direction="up" />;
    }

    render() {
        const errorModal = {
            open: false,
            errorMessage: ''
        };
        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={errorModal.open}
                keepMounted
                onClose={this.handleClose}
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {'Warning'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" style={{ color: 'rgba(255, 0, 0, 0.97)' }}>
                        {errorModal.errorMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleClose()} color="primary">
                        Close
              </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

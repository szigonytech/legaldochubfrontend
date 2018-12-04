import * as React from 'react';
import { TextField } from '@material-ui/core';

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@material-ui/core';
const style = {
    uploadFile: {
        width: '560px',
        height: '64px',
        border: 'dashed 2px rgba(38, 98, 246, 0.72)',
        color: 'rgba(38, 98, 246, 0.72)',
        cursor: 'pointer'
    },
    btn: {
        width: '110px',
        height: '36px',
        backgroundColor: '#f1f1f1',
        color: 'rgba(0, 0, 0, 0.38)'
    }
};
class NewProjectModal extends React.Component<any, any> {
    timer: any = null;
    state = {
        name: ''
    };

    componentDidMount() {
        this.setState({ name: '' });
    }
    closeModal() {
        this.props.handleClose();
    }
    handleUpload() {
        if (this.state.name) {
            this.props.createProject(this.state.name);
            this.closeModal();
        }
    }
    render() {
        const { open } = this.props;
        return (
            <Dialog
                open={open}
                keepMounted
                onClose={() => this.closeModal()}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <div>New Project</div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className="fnarmal h5 black-87" id="alert-dialog-slide-description">
                        <div>Project name</div>
                        <div>
                            <TextField
                                id="standard-full-width"
                                style={{ margin: 8, width: '30rem' }}
                                placeholder="Enter your project name."
                                fullWidth
                                margin="normal"
                                onChange={(e) => this.setState({ name: e.target.value })}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.closeModal()} style={style.btn}>
                        CANCEL
                    </Button>
                    <Button
                        onClick={() => this.handleUpload()}
                        style={{ ...style.btn, ...{ color: this.state.name ? '#3ec83e' : '' } }}
                        disabled={this.state.name ? false : true}
                    >
                        CREATE
                    </Button>
                </DialogActions>
            </Dialog >
        );
    }
}

export default NewProjectModal;
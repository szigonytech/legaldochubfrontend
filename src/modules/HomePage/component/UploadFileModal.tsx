import * as React from "react";
import { LinearProgress } from "@material-ui/core";
import { Done } from "@material-ui/icons";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core";
const style = {
    uploadFile: {
        width: "560px",
        height: "64px",
        border: "dashed 2px rgba(38, 98, 246, 0.72)",
        color: "rgba(38, 98, 246, 0.72)",
        cursor: "pointer"
    },
    btn: {
        width: "110px",
        height: "36px",
        backgroundColor: "#f1f1f1",
        color: "rgba(0, 0, 0, 0.38)"
    }
};
class UploadFileModal extends React.Component<any, any> {
    timer: any = null;
    state = {
        completed: 0,
        buffer: 10,
        files: "",
        name: ""
    };
    componentDidMount() {
        if (this.props.linearLoader) {
            this.timer = setInterval(this.progress, 500);
        }
    }
    componentWillUnmount() {
        if (this.props.linearLoader) {
            clearInterval(this.timer);
        }
    }

    progress = () => {
        const { completed } = this.state;
        if (completed > 100) {
            this.setState({ completed: 0, buffer: 10 });
        } else {
            const diff = Math.random() * 10;
            const diff2 = Math.random() * 10;
            this.setState({ completed: completed + diff, buffer: completed + diff + diff2 });
        }
    };
    closeModal() {
        this.props.handleClose();
        const file: any = document.getElementById("file-input");
        file.value = null;
        this.setState({ files: "", name: "" });

    }
    handleUpload() {
        let { match: { params } }: any = this.props;
        if (this.state.files) {
            this.props.fileUpload(params.id, this.state.files, () => this.closeModal());
        }
    }
    render() {
        const { open, title } = this.props;
        const file: any = document.getElementById("file-input");
        return (
            <Dialog
                open={open}
                keepMounted
                onClose={() => this.closeModal()}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <LinearProgress
                    style={{ backgroundColor: "#fff" }}
                    variant="determinate"
                    value={this.state.completed}
                />
                <DialogTitle id="alert-dialog-slide-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className="fnarmal h5 black-87" id="alert-dialog-slide-description">
                        <div
                            id="dropZone"
                            className="center"
                            style={style.uploadFile}
                            onClick={(e) => file.click()}
                        >
                            {this.state.name ? this.state.name.replace(/^.*[\\\/]/, "") : "+ Upload doc File"}
                        </div>
                        {this.state.files &&
                            <div className="center" style={{ color: "#3ec83e" }}><Done /> Success...!</div>}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.closeModal()} style={style.btn}>
                        CANCEL
                    </Button>
                    <Button
                        onClick={() => this.handleUpload()}
                        style={{ ...style.btn, ...{ color: this.state.files ? "#3ec83e" : "" } }}
                        disabled={this.state.files ? false : true}
                    >
                        UPLOAD
                    </Button>
                </DialogActions>
                <input
                    onChange={(e) => this.setState({ files: e.target.files, name: e.target.value })}
                    id="file-input"
                    type="file"
                    style={{
                        position: "absolute",
                        display: "none",
                        zIndex: 999, width: "4rem", height: "32px", borderRadius: "0 4rem 4rem 0"
                    }}
                />
            </Dialog >
        );
    }
}

export default UploadFileModal;
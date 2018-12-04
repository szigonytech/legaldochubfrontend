import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme: any) => ({
  close: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3,
  },
});

class SimpleSnackbar extends React.Component<any> {
  render() {
    const { classes, options, handleClose } = this.props;
    return (
      <div className="commonToast">
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={options.open}
          autoHideDuration={100000}
          onClose={() => handleClose()}
          message={<span id="message-id" >{options.message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SimpleSnackbar);

import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogOut from '@material-ui/icons/SettingsPower';
// import * as cookie from '../../app/utils/cookie';

export default class AppHeader extends React.Component<any> {
    state = {
        anchorEl: null,
        openNote: null
    };
    handleProfileClick = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleProfileClose = () => {
        this.setState({ anchorEl: null });
    };
    renderHeaderMenu(props: any) {
        const { anchorEl }: any = this.state;
        return (
            <div className="col col-12">
                <div className="col col-2 h3 px2 center bg-white">
                    <div className="col center" style={{ height: '64px', color: '#3b76ff' }}>
                        DOC HUB
                    </div>
                </div>
                <div className="col col-10">
                    <div className="col col-12" style={{ height: '64px' }}>
                        <div className="right">
                            <Avatar
                                aria-owns={anchorEl ? 'simple-menu' : 'null'}
                                aria-haspopup="true"
                                className="profile_Avatar clickable"
                                alt="Profile"
                                style={{ backgroundColor: '#fff' }}
                                onClick={(event: any) => this.handleProfileClick(event)}
                            />
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl ? anchorEl : undefined}
                                open={Boolean(anchorEl)}
                                onClose={(e: any) => this.setState({ anchorEl: null })}
                            >
                                <MenuItem onClick={this.handleProfileClose}>
                                    <ListItemIcon>
                                        <LogOut />
                                    </ListItemIcon>
                                    <ListItemText inset primary="Logout" />
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="Header-nav ">
                {this.renderHeaderMenu(this.props)}
            </div>
        );
    }
}
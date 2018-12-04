import * as React from 'react';
import { GlobalState } from 'src/model';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindDispatch } from 'src/app/utils/redux';
import { history } from 'src/store';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import { disablePageScroll, enablePageScroll } from 'src/app/utils/uiHelpers';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import AppHeader from './AppHeader';
import SideMenu from './SideMenu';
import { ErrorModal } from 'src/components';
// import * as cookie from 'src/app/utils/cookie';
import * as _ from 'lodash';
import 'basscss/css/basscss.css';
// import registerServiceWorker from 'src/registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

let notInclude = [
  '',
  'register',
  'login'
];

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { name: 'Pachi' };
  }

  componentWillMount() {
    let { actions } = this.props;
    actions.fetchProjects();
    // let pathName = history.location.pathname;

    // if (cookie.get(cookie.USER_LOGIN_ID)) {
    //   actions.updateMaster();
    //   actions.fetchPriceChangeCount();
    //   if (pathName === '/') {
    //     history.push(`/${(cookie.get(cookie.USER_TYPE)).toLocaleLowerCase()}/dashboard`);
    //   }
    //   // registerServiceWorker();
    // } else {
    //   return history.push('/');
    // }
  }
  // componentDidMount() {
  //   let { actions } = this.props;
  //   let pathName = history.location.pathname;
  //   if (cookie.get(cookie.USER_LOGIN_ID)) {
  //     actions.updateMaster();
  //   } else {
  //     return history.push(pathName);
  //   }
  // }

  renderHeader() {
    return (
      <div>
        <AppHeader {...this.props} />
      </div>
    );
  }
  renderSideMenu() {
    return (
      <div>
        <SideMenu {...this.props} />
      </div>
    );
  }
  // renderErrorModal() {
  //   return (
  //     <div>
  //       <ErrorModal {...this.props} />
  //     </div>
  //   );
  // }
  isAppBusy() {
    // let { app } = this.props;
    // app.isBusy ? disablePageScroll() : enablePageScroll();
    return false;
  }

  render() {
    const { children } = this.props, currentPath = history.location.pathname;
    const splitPath: string[] = currentPath.split('/');
    console.log(this.props, 'layouus');
    return (
      <MuiThemeProvider theme={theme}>  
        <ErrorModal {...this.props} />
        {/* <Toastify options={app.toast} handleClose={() => actions.handleToast({ open: false, message: '' })} /> */}
        {!_.includes(notInclude, splitPath[1]) && this.renderHeader()}
        <div
          className="col col-12"
        >
          {!_.includes(notInclude, splitPath[1]) &&
            <div className="col col-2 sidemenu">
              {this.renderSideMenu()}
            </div>}
          <div className="col col-10">
            <div className="m2">{children}</div>
          </div>
        </div>
      </MuiThemeProvider >
    );
  }
}

const selector: any = createSelector(
  (state: GlobalState) => state.app,
  (state: GlobalState) => state.dochub,
  (app, dochub) => ({ app, dochub }));

export default connect(selector, bindDispatch)(Layout);

import * as React from 'react';
import { history } from 'src/store';
import * as routePath from '../app/utils/routePath';
const styles = {
  empty: {
    height: '96px',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.54)'
  }
};

const UrlNotFound = ({ location }: any) => (
  <div
    className="not-found-ui center"
    style={styles.empty}
  >
    <div className="">
      <div> No match for
      <code style={{ color: 'blue' }} onClick={() => history.push(routePath.rootRoute)}> {location.pathname}</code>,
           sorry.  Are you sure you typed in the correct URL?
    </div>
    </div>

  </div>
);

export default UrlNotFound;
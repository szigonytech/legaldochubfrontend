import * as React from 'react';
import { GlobalState } from 'src/model';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindDispatch } from 'src/app/utils/redux';
import HomePageView from '../component';
import UploadFileModal from '../component/UploadFileModal';
import NewProjectModal from '../component/NewProjectModal';
import DocumentViewer from '../component/DocumentViewer';

class HomePage extends React.Component<any> {
  componentWillMount() {
    this.props.actions.fetchProjects();
  }

  onRowOptionClick(compare: any, docDetails: any) {
    this.props.actions.getDocument(compare, docDetails);
  }
  render() {
    let {
      actions,
      dochub: { openNewProjectModal, fileUploadModal, renderDocView }
    }: any = this.props;
    return (
      <div>
        {openNewProjectModal && (
          <NewProjectModal
            open={openNewProjectModal}
            title={'Upload File'}
            handleClose={() => actions.handleNewProjectModal(false)}
            createProject={(value: any) => actions.saveProjects(value)}
          />
        )}
        {!renderDocView && (
          <UploadFileModal
            open={fileUploadModal}
            title={'Upload File'}
            handleClose={() => actions.handleUploadFiles(false)}
            fileUpload={(projectId: number, files: any, callback: Function) =>
              actions.fileUpload(projectId, files, callback)
            }
            {...this.props}
          />
        )}
        <div className="col col-12 p2">
          {!renderDocView ? (
            <HomePageView
              onRowOptionClick={(compare: any, docDetails: any) =>
                this.onRowOptionClick(compare, docDetails)
              }
              {...this.props}
            />
          ) : (
            <DocumentViewer {...this.props} />
          )}
        </div>
      </div>
    );
  }
}

const selector: any = createSelector(
  (state: GlobalState) => state.app,
  (state: GlobalState) => state.dochub,
  (app, dochub) => ({ app, dochub })
);

export default connect(
  selector,
  bindDispatch
)(HomePage);

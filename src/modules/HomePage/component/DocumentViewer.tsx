import * as React from 'react';

export default class DocumentViewer extends React.Component<any, any> {
  render() {
    console.log(this.props);
    return (
      <div className="col col-12">
        <div
          className="col col-1"
          style={{ fontWeight: "bold", color: "blue", cursor: "pointer" }}
          onClick={() => this.props.actions.backClick()}
        >
          Back
        </div>
        {this.props.dochub.viewFileDetails && (
          <div
            className="col col-12"
            style={{
              wordWrap: "break-word",
              height: "75vh",
              overflowX: "hidden",
              overflow: "hidden",
              overflowY: "scroll"
            }}
            dangerouslySetInnerHTML={{
              __html: this.props.dochub.viewFileDetails
            }}
          />
        )}
      </div>
    );
  }
}

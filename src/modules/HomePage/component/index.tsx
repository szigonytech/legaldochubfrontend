import * as React from 'react';
import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import TableHeader from './TabelHeader';
import TableBody from './TabelBody';
import EmptyMessage from './EmptyMessage';
import * as  _ from 'lodash';
export default class HomePageView extends React.Component<any, any> {
    componentWillMount() {
        let { actions, match: { params } }: any = this.props;
        console.log(params.id);
        actions.fetchProjectFiles(params.id);
    }
    renderFormHeader() {
        let { actions }: any = this.props;
        return (
            <div className="right">
                <Button variant="outlined" color="primary" onClick={() => actions.handleUploadFiles(true)}>
                    <NavigationIcon />
                    Upload File
                </Button>
            </div>
        );
    }
    renderTabele() {
        let { dochub: { projectFiles } }: any = this.props;
        if (_.isEmpty(projectFiles)) {
            return <EmptyMessage />;
        }
        return (
            <div className="col col-12 py2">
                <TableHeader />
                <TableBody
                    rowList={projectFiles}
                    i={0}
                    onHover={() => console.log()}
                    onRowOptionClick={
                       (compare: any, docDetails: any) =>
                       this.props.onRowOptionClick(compare, docDetails)
                    }
                    handleMouseHover={() => console.log()}
                    handleMouseLeave={() => console.log()}
                />
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.renderFormHeader()}
                {this.renderTabele()}
            </div>
        );
    }
}

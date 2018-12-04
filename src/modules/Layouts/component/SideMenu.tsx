import * as React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import { history } from 'src/store';

const styles = {
    projects: {
        color: '#333333',
        height: '36px',
    }
};
export default class SideMenu extends React.Component {

    state = {
        activeId: -1,
        search: '',
        projects: [],
    };

    handleLeave() {
        this.setState({ activeId: -1 });
    }
    handleHover(id: number) {
        this.setState({ activeId: id });
    }
    
    filterProjects = () => {
        // let projects = [{name: 'project1', id: 0}, {name: 'hai', id: 0 } ], arr: any[] = [];
        let { dochub: { projects } }: any = this.props, arr: any[] = [];
        const {search} = this.state;
        if ( search.length !== 0) {
                projects.forEach(function(item: any) {
                if (item.name.toLowerCase().includes(search)) {
                    arr.push(item);
                }
                });
            } else {
                arr = projects;
            }

        // tslint:disable-next-line:align
        return  arr;
    }

    handleClick(project: any) {
        let { actions }: any = this.props;
        actions.fetchProjectFiles(project.id);
        history.push(`/home/${project.name}/${project.id}`);
    }
    render() {
        let { actions }: any = this.props;
        return (
            <div className="">
                <div className="col col-12 py1 center">
                    <Input
                        style={{ width: '216px' }}
                        placeholder="search"
                        id="input-with-icon-adornment"
                        onChange={(e) => this.setState({search: e.target.value})}
                        startAdornment={
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        }
                    />
                </div>
                <div className="col col-12 center py1">
                    <div>
                        <Button
                            color="primary"
                            onClick={() => actions.handleNewProjectModal(true)}
                            style={{
                                fontSize: '12px',
                                textTransform: 'capitalize'
                            }}
                        >
                            <Add />
                            New Project
                        </Button>
                    </div>
                </div>
                <div className="col col-12">
                    {this.filterProjects().map((project: any, i: number) =>
                        <div
                            className="px3 v-align href"
                            style={{
                                ...styles.projects,
                                // ...{ backgroundColor: params.id === project.id ? 'rgba(0, 0, 0, 0.08)' : '' },
                                ...{ backgroundColor: this.state.activeId === project.id ? 'rgba(0, 0, 0, 0.08)' : '' }
                            }}
                            key={i}
                            onMouseOver={() => this.handleHover(project.id)}
                            onMouseLeave={() => this.handleLeave()}
                            onClick={() => this.handleClick(project)}
                        >
                            {project.name}
                        </div>)
                    }
                </div>
            </div >
        );
    }
}
import { getProjects } from 'src/app/client/api';

export const LAYOUT_ONCHANGE = 'LAYOUT_ONCHANGE';
export const LAYOUT_ONOUTERCHANGE = 'LAYOUT_ONOUTERCHANGE';

export const onChange = (name: string, value: any ) => {
    return { type: LAYOUT_ONCHANGE, payload: {'name': name, 'value': value } };
};

export const onOuterChange = (name: string, value: any) => {
    return { type: LAYOUT_ONOUTERCHANGE, payload: { 'name': name, 'value': value}};
};

export const getProjectList = () => {
    return async(dispatch: any, getState: any) => {
        let { data } = await getProjects();
        console.log(data);
        dispatch(onOuterChange('projects', data));
        dispatch(onOuterChange('displayProjects', getState().layout_distributor.projects));
    };
};

export const fiterProjectName = ( filterText: string ) => {
    return async(dispatch: any, getState: any) => {
        let projects: any[] = [ {name: 'project1'}, {name: 'project2'}], arr: any[] = [];

        if (filterText !== '') {
            projects.forEach(function(item: any) {
            if (item.name.toLowerCase().includes(filterText)) {
                arr.push(item);
            }
            });
        } else {
            arr = projects;
        }
        dispatch(onOuterChange( 'displayProjects', arr ));
    };
};
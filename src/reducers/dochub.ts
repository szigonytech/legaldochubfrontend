import { DocHub } from '../model';
import { createNewProject, getProjects, getProjectFiles, uploadFile, getFiles } from '../app/client/api';

const initialState: DocHub = {
    projects: [],
    projectFiles: [],
    openNewProjectModal: false,
    fileUploadModal: false,
    viewFileDetails: null,
    renderDocView: false,
    selectedFile: null,
};

const VIEW_FILE_DETAILS = 'dochob/VIEW_FILE_DETAILS';
const SELECTED_FILE = 'dochob/SELECTED_FILE';
const RENDER_DOC_VIEW = 'dochob/RENDER_DOC_VIEW';
const PROJECTS = 'app/PROJECTS';
const PROJECTFILES = 'app/PROJECTFILES';
const OPENNEWPROJECTMODAL = 'app/OPENNEWPROJECTMODAL';
const UPLOADFILE = 'app/UPLOADFILE';
const RESET = 'app/RESET';

export const reset = (payload: any) => ({ type: RESET, payload });
export const handleViewFileDetails = (payload: any) => ({
  type: VIEW_FILE_DETAILS,
  payload
});
export const updateSelectedFile = (payload: any) => ({
  type: SELECTED_FILE,
  payload
});
export const handleDocView = (payload: any) => ({
  type: RENDER_DOC_VIEW,
  payload
});
export function handleNewProjectModal(payload: boolean) {
  return { type: OPENNEWPROJECTMODAL, payload: payload };
}
export function handleUploadFiles(payload: boolean) {
  return { type: UPLOADFILE, payload: payload };
}
export function handleProjects(payload: boolean) {
  return { type: PROJECTS, payload: payload };
}
export function handleProjectFiles(payload: boolean) {
    return { type: PROJECTFILES, payload: payload };
}

export function backClick() {
  return async (dispatch: any, getState: any) => {
    const { dochub } = getState();
    await dispatch(
      reset({
        ...dochub,
        viewFileDetails: null,
        renderDocView: false,
        selectedFile: null
      })
    );
  };
}
export function fetchProjects() {
  return async (dispatch: any, getState: any) => {
    try {
      let { data } = await getProjects();
      dispatch(handleProjects(data));
    } catch (err) {
      if (err.response) {
        let { data } = err.response;
        console.log(data);
      }
    }
  };
}
export function fetchProjectFiles(id: number) {
    return async (dispatch: any, getState: any) => {
        try {
            let { data } = await getProjectFiles(id);
            dispatch(handleProjectFiles(data));
        } catch (err) {
            if (err.response) {
                let { data } = err.response;
                console.log(data);
            }
        }
    };
}
export function saveProjects(value: string) {
  return async (dispatch: any, getState: any) => {
    try {
      await createNewProject({ name: value });
      dispatch(fetchProjects());
    } catch (err) {
      if (err.response) {
        let { data } = err.response;
        console.log(data);
      }
    }
  };
}
export function fileUpload(projectId: number, files: any, calback: Function) {
    return async (dispatch: any) => {
        try {
            let formData = new FormData();
            for (let file of files) {
                formData.append('file', file);
            }
            await uploadFile(projectId, formData);
            dispatch(fetchProjectFiles(projectId));
            calback();
        } catch (err) {
            if (err.response) {
                let { data } = err.response;
                console.log(data);
            }
        }
    };
}

export function getDocument(compare: any, docDetail: any) {
  return async (dispatch: any, getState: any) => {
    try {
      const path = !compare ?
      `/project/files/${docDetail.id}/view` :
      `/project/files/${docDetail.id}/compare`;
      // const path = !compare
      //   ? `/project/files/1/view`
      //   : `/project/files/1/compare`;
      const { data } = await getFiles(path);
      await dispatch(handleViewFileDetails(data));
      await dispatch(handleDocView(true));
      await dispatch(updateSelectedFile(docDetail));
    } catch (err) {
      if (err.response) {
        let { data } = err.response;
        console.log(data);
      }
    }
  };
}

type Action = { type: String; payload: any };

export default function rootReducer(state: any = initialState, action: Action) {
    switch (action.type) {
        case PROJECTS:
            return { ...state, projects: action.payload };
        case PROJECTFILES:
            return { ...state, projectFiles: action.payload };
        case OPENNEWPROJECTMODAL:
            return { ...state, openNewProjectModal: action.payload };
        case UPLOADFILE:
            return { ...state, fileUploadModal: action.payload };
         case VIEW_FILE_DETAILS:
             return { ...state, viewFileDetails: action.payload };
         case RENDER_DOC_VIEW:
             return { ...state, renderDocView: action.payload };
         case RESET:
             return { ...state, ...action.payload };
        default:
            return state;
    }
}

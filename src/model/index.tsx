export interface GlobalState {
    app: App;
    layout_distributor: Layout;
    login_distributor: Login;
    register_distributor: Register;
    dochub: DocHub;
}
export interface App {
    isBusy: boolean;
}

export interface Login {
    form: {
        email: string;
        password: string;
    };
    errors: any;
    isValid: boolean;
    isPassword: boolean;
}

export interface Layout {
    isVerified: boolean;
    filerText: string;
    projects: any[];
    displayProjects: any[]; 
}

export interface Register {
    form: {
    firstname: string;
    lastname: string;
    confirmPassword: string;
    contactNo: string;
    password: string;
    email: string;
    };
    errors: any;
    isValid: boolean;
    isPassword: boolean;
    isConfirmPassword: boolean;
}
export interface DocHub {
    projects: any[];
    projectFiles: any[];
    openNewProjectModal: boolean;
    fileUploadModal: boolean;
    viewFileDetails: any;
    renderDocView: any;
    selectedFile: any;
}

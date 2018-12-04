import * as React from 'react';

const TableHeader = (props: any) => {
    return (
        <div
            className="col col-12 v-align px2"
            style={{ background: '#71b5ec', 
                            height: '60px', 
                            color: '#ffffff', 
                            borderRadius: '4px 4px 0 0',
                             borderBottom: '1px solid rgb(224, 224, 224)'  }}
        >
            <div className="col col-12  h4 medium roboto">
                Documents
            </div>
        </div>
    );
};
export default TableHeader;
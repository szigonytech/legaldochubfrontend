import * as React from 'react';

const EmptyMessage = () => {
    return (
        <div
            className="col col-12 p2 my2"
            style={{
                color: '#a3a3a3',
                backgroundColor: '#f0ffed',
                border: '1px solid #e1d8d8',
                fontSize: '14px'
            }}
        >
            There is no files Available in this Project. Click on Upload File Button to add your files.
        </div>
    );
};
export default EmptyMessage;
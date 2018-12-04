import * as React from 'react';
import '../style.scss';

const TableBody = ({
    rowList,
    onRowOptionClick
}: any) => {
    return (
        <div>
            {
                rowList.map((item: any, index: number) => {
                        return (
                            <div
                                className="col col-12 pl2 pr2 py1 v-align clickable black-72 activeRow-homepage"
                                style={{
                                    height: '60px',
                                    fontSize: '14px',
                                    position: 'relative',
                                    borderBottom: '1px solid rgb(224, 224, 224)'
                                }}
                                // onMouseEnter={() => handleMouseHover(row.id)}
                                // onMouseLeave={() => handleMouseLeave()}
                                key={index}
                            >
                            <div className="col col-8 h5  medium roboto " >
                                <span className="col ">
                                    {item.fileName}
                                </span>
                            </div>
                            <div className="col col-2 actions" onClick={() => onRowOptionClick(false, item)}>
                                    view file
                            </div>
                            <div className="col col-2 actions" onClick={() => onRowOptionClick(true, item)}>
                                    compare file
                            </div>
                            </div>
                        );
                })
            }
        </div>
    );
};
export default TableBody;

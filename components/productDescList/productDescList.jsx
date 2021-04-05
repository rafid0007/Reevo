import React from "react";

import listStyles from './productDescList.module.scss';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const ProductDescList = ({descriptions}) => {
    return (
            <div className={listStyles.descList}>
                {
                    descriptions.map((item,i) => (
                        <React.Fragment key={i}>
                            <div className={listStyles.descListItemKey}>
                                <FiberManualRecordIcon style={{fontSize:10}}/>
                                <h3> &nbsp; &nbsp; {item.key.toUpperCase()}</h3>
                            </div>
                            <div className={listStyles.descListItemValue}>
                                {item.value}
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
    );
};

export default ProductDescList;
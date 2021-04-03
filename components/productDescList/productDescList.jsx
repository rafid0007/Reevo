import listStyles from './productDescList.module.scss';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const ProductDescList = ({item}) => {
    return (
            <>
                <div className={listStyles.descListItemKey}>
                    <FiberManualRecordIcon style={{fontSize:10}}/>
                    <h3> &nbsp; &nbsp; {item.key}</h3>
                </div>
                <div className={listStyles.descListItemValue}>
                    {item.value}
                </div>
            </>
    );
};

export default ProductDescList;
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import sortBoxStyles from './sortBox.module.scss';

const SortBox = () => (
    <div className={sortBoxStyles.sortBox}>
        <span>Relevance</span>
        <ExpandMoreIcon/>
    </div>
);

export default SortBox;
import Button from "@material-ui/core/Button";
import {Sort} from "@material-ui/icons";
import {Menu, MenuItem} from "@material-ui/core";
import {useContext} from "react";
import {SortContex} from "../../../providers/sort/sort.provider";

const SortBox = () => {

    const {
        anchorEl,
        handleClick, handleClose,
        handleSortByRelevance,
        handleSortByHighToLow,
        handleSortByLowToHigh
    } = useContext(SortContex);

    return (
    <>
        <Button onClick={handleClick} startIcon={<Sort />}>
              <h4>Sort by</h4>
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleSortByRelevance}>Relevance</MenuItem>
              <MenuItem onClick={handleSortByHighToLow}>Price high to low</MenuItem>
              <MenuItem onClick={handleSortByLowToHigh}>Price low to high</MenuItem>
            </Menu>
    </>
)
};

export default SortBox;
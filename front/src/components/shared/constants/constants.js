import React from 'react';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Info from '@material-ui/icons/Info';
import CloudDownload from '@material-ui/icons/CloudDownload';
import CloudUpload from '@material-ui/icons/CloudUpload';
import Description from '@material-ui/icons/Description';

export const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Info: forwardRef((props, ref) => <Info {...props} ref={ref} />),
    CloudUpload: forwardRef((props, ref) => <CloudUpload {...props} ref={ref} />),
    CloudDownload: forwardRef((props, ref) => <CloudDownload {...props} ref={ref} />),
    Description: forwardRef((props, ref) => <Description {...props} ref={ref} />)
};

/* system configuration */
export const TOKEN_KEY = "@cfg";
export const COMPANY = 'DINAMICA';
export const WEBGROUP = 'DEV';

/* export files */
export const FILE_BREAK_LINE = '\r\n';
export const FILE_BREAK_COL = '|';
export const FILE_EXT = '.csv';
export const FILE_NAME_PACK = '_PACK_';
export const FILE_NAME_DWG = 'DWG';
export const FILE_NAME_NOTE = '_NOTE';
export const FILE_NAME_SHEET = '_SHEET';
export const FILE_NAME_COMPONENT_LIST = '_COMPONENT_LIST';
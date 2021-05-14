import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { baseBackURL } from '../../services/api';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function DownloadMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const downloadTemplateFile = (filename) => {    
    window.open(baseBackURL + 'file/download/' + filename, '_blank');
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"        
        onClick={handleClick}
      >          
        Templates
        <KeyboardArrowDownIcon fontSize="small" />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>          
          <ListItemText primary="Create DWG/PN" onClick={() => downloadTemplateFile('ROBOT_CREATE_DWG_PN.xlsx')} />
        </StyledMenuItem>        
        <StyledMenuItem>          
          <ListItemText primary="Edit Part List (PSA/Revision)" onClick={() => downloadTemplateFile('ROBOT_EDIT_PART_LIST.xlsx')} />
        </StyledMenuItem>
        <StyledMenuItem>          
          <ListItemText primary="Release DWG" onClick={() => downloadTemplateFile('ROBOT_AUDIT_RELEASE_DWG.xlsx')} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
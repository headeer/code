import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import icon from '../../assets/images/listIcon.png';
import Image from "./image";
import {Popover, Typography} from "@material-ui/core";
import infoIcon from '../../assets/images/Icon feather-info.png';
import standard from '../../assets/images/Group 4513.png';
import professional from '../../assets/images/Group 4516.png';
import enterprise from '../../assets/images/Group 5431.png';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
        boxShadow: 'none'
    },
});

function createData(title, info, ticked, include, isTrue) {
    return {title, info, ticked, include, isTrue};
}

const useStylesNote = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
        background: '#4B42AD',
        width: '250px',
        color: 'white'
    },
}));
const rows = [
    createData('Core Features', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Sed magna enim', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Bibendum a quam eu\n', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Eu dolor luctus sagittis ', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Sed magna enim\n', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Bibendum a quam eu', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
];
const rows2 = [
    createData('Sed magna enim', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Commodo consectetur ', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Eu dolor luctus sagittis', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Sed magna enim\n', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
    createData('Bibendum a quam eu', 'Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.', true, true, true),
];
export default function Pricing() {
    const classes = useStylesNote();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <TableContainer component={Paper} className="table-pricing">
            <div className="title">
                <h5 className="text">
                    Features & Solutions
                </h5>
                <h2 className="section-text">
                    Sed magna enim, bibendum a quam eu, commodo consectetur quam. Morbi pellentesque eu dolor luctus sagittis. Praesent  commodo velit eget urna mollis dignissim.
                </h2>
            </div>
            <div className="pricing">
                <div className="blank">

                </div>
                <div className="pricing-details">
                    <Image img={standard}></Image>
                    <p>Standard</p>
                    <button className='button'> Select This Plan ></button>
                </div>
                <div className="pricing-details">
                    <Image img={professional}></Image>
                    <p>Standard</p>
                    <button className='button'> Select This Plan ></button>
                </div>
                <div className="pricing-details">
                    <Image img={enterprise}></Image>
                    <p>Standard</p>
                    <button className='button'> Select This Plan ></button>
                </div>
            </div>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Core Features</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.title}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right" className='popup'><div className="button" onClick={handleClick}>
                                <Image img={infoIcon}></Image>
                            </div>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Typography className={classes.typography}>{row.info}.</Typography>
                                </Popover></TableCell>
                            <TableCell className='icons' align="right">{row.ticked ?
                                <Image img={icon}></Image> : '---'}</TableCell>
                            <TableCell className='icons' align="right">{row.include ?
                                <Image img={icon}></Image> : '---'}</TableCell>
                            <TableCell className='icons' align="right">{row.isTrue ?
                                <Image img={icon}></Image> : '---'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Team Support</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map((row) => (
                        <TableRow key={row.title}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right"  className='popup'>
                                <div className="button" onClick={handleClick}>
                                    <Image img={infoIcon}></Image>
                                </div>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <Typography className={classes.typography}>{row.info}.</Typography>
                                </Popover>
                            </TableCell>
                            <TableCell className='icons' align="right">{row.ticked ?
                                <Image img={icon}>
                                </Image> : '---'}
                            </TableCell>
                            <TableCell className='icons' align="right">{row.include ?
                                <Image img={icon}>
                                </Image> : '---'}
                            </TableCell>
                            <TableCell className='icons' align="right">{row.isTrue ?
                                <Image img={icon}>
                                </Image> : '---'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="pricing pricing-bottom">
                <div className="blank">
                </div>
                <div className="pricing-details">
                    <p>$100/month</p>
                    <button className='button'> Select This Plan ></button>
                </div>
                <div className="pricing-details">
                    <p>$2000/month</p>
                    <button className='button'> Select This Plan ></button>
                </div>
                <div className="pricing-details">
                    <p>$3,500/month</p>
                    <button className='button'> Select This Plan ></button>
                </div>
            </div>
        </TableContainer>
    );
}



import React from 'react';
import { Title, PaymentWrapper, StyledButton, CardsWrapper } from './StyledPaymentPage';
import SVG from '../SVG/SVG';
import SVGPayPall from '../SVG/SVGPayPall';
import SVGMaestro from '../SVG/SVGMaestro';
import PaymentModal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Container } from '@mui/system';

const PaymentPage = () => {
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const monthChange = (event) => {
		setMonth(event.target.value);
	};
	const yearChange = (event) => {
		setYear(event.target.value);
	};

	return (
		<Container
			maxWidth="lg"
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<PaymentWrapper>
				<Title>Please select your payment method</Title>
				<p className="total-payment">Total payment amount</p>
				<CardsWrapper>
					<SVG />
					<SVGPayPall />
					<SVGMaestro/>
				</CardsWrapper>
				<div className="flex-block">
					<span className="info">Card number</span>
					<TextField variant="standard" />
				</div>
				<div className="flex-block">
					<span className="info">Card holder name</span>
					<TextField variant="standard" />
				</div>

				<div className="flex-select">
					<span className="info"> Card Expiry Date </span>
					<Select value={month} onChange={monthChange}>
						{/* <MenuItem value={01}>01</MenuItem> */}
						<MenuItem value={'02'}>02</MenuItem>
						<MenuItem value={'03'}>03</MenuItem>
						<MenuItem value={'04'}>04</MenuItem>
						<MenuItem value={'05'}>05</MenuItem>
						<MenuItem value={'06'}>06</MenuItem>
						<MenuItem value={'07'}>07</MenuItem>
						<MenuItem value={'08'}>08</MenuItem>
						<MenuItem value={'09'}>09</MenuItem>
						<MenuItem value={'10'}>10</MenuItem>
						<MenuItem value={'11'}>11</MenuItem>
						<MenuItem value={'12'}>12</MenuItem>
					</Select>{' '}
					/
					<Select value={year} onChange={yearChange}>
						<MenuItem value={'2023'}>2023</MenuItem>
						<MenuItem value={'2024'}>2024</MenuItem>
						<MenuItem value={'2025'}>2025</MenuItem>
						<MenuItem value={'2026'}>2026</MenuItem>
						<MenuItem value={'2027'}>2027</MenuItem>
						<MenuItem value={'2028'}>2028</MenuItem>
						<MenuItem value={'2029'}>2029</MenuItem>
						<MenuItem value={'2030'}>2030</MenuItem>
						<MenuItem value={'2031'}>2031</MenuItem>
						<MenuItem value={'2032'}>2032</MenuItem>
						<MenuItem value={'2033'}>2033</MenuItem>
						<MenuItem value={'2034'}>2034</MenuItem>
						<MenuItem value={'2035'}>2035</MenuItem>
					</Select>
				</div>

				<div className="cvv">
					<span className="info">CVC/CVV/CID </span>
					<TextField
						variant="standard"
						sx={{
							width: '50px',
							paddingRight: '60px',
						}}
					/>

					<Link>what is cvv</Link>
				</div>
				<StyledButton onClick={handleOpen}>Pay</StyledButton>
				{open && <PaymentModal open={open}   />}
			</PaymentWrapper>
		</Container>
	);
};

export default PaymentPage;
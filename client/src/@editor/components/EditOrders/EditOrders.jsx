import { Container } from '@mui/material';
import React from 'react';
import { MainContent, Header } from './StyledOrders';

function EditOrders() {
	return (
		<Container maxWidth="lg">
			<Header>Orders</Header>
			<MainContent></MainContent>
		</Container>
	);
}

export default EditOrders;
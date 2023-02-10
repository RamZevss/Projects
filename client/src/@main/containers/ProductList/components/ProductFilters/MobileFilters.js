import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

import ProductFilterCategories from './ProductFilterCategories';
import ProductFilterColors from './ProductFilterColors';
import ProductFilterPrice from './ProductFilterPrice';

import { StyledTypography, FiltersButton, StyledCrossIcon, StyledBoxTypography } from './ProductFilters.styles';

function MobileFilter() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	return (
		<>
			{/* THis is for header menu !!! <Toolbar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}/> */}
			<FiltersButton onClick={handleOpen}>Filters</FiltersButton>
			<Drawer
				anchor='top'
				open={open}
				onClose={handleClose}
				>
				<Toolbar/>
				<StyledBoxTypography>
					<StyledTypography variant='h5' >
						Filters
					</StyledTypography>
					<StyledCrossIcon onClick={handleClose} />
				</StyledBoxTypography>
				<Divider sx={{ backgroundColor: '#3F3D3D'}}/>
				{/* Add buttons above: Reset & Apply */}
				<List sx={{ height: '100vw' }}>
					<ProductFilterCategories />
					<ProductFilterColors />
					<ProductFilterPrice />
				</List>
			</Drawer>
		</>
	);
}

export default MobileFilter;

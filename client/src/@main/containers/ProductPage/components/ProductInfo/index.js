import { Box, Button, IconButton, Typography, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { removeFavorite, addFavorite } from '../../../../../actions/favoriteActions';
import { removeCart, addCart } from "../../../../../actions/cartActions";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {
	ActionsWrapper,
	ProductInfoHeader,
	ProductHeader,
	ListStyled,
	ListItemButtonStyled,
	ColorIcon,
	ListItemIconColor,
	ColorList,
	SizeList,
} from './ProductInfo.styles';

function ProductInfo({ name, productUrl, currentPrice, color, sizes, productDetails, productDelivery }) {
	const dispatch = useDispatch();
	const isFavorite = useSelector((state) => state.favorites.includes(productUrl));
	const isCart = useSelector((state) => state.cart.includes(productUrl));

	const handleClickCart = () => {
        if(isCart) {
            dispatch(removeCart(productUrl));
        } else {
			dispatch(addCart(productUrl));
        }
    };

	const handleClickFavorite = () => {
        if(isFavorite) {
            dispatch(removeFavorite(productUrl));
        } else {
			dispatch(addFavorite(productUrl));
        }
    };

	return (
		<Box maxWidth="390px" margin="auto">
			<ProductInfoHeader>
				<ProductHeader>
					<Typography variant="h3">{name}</Typography>
					<Typography variant="h3">{currentPrice} $</Typography>
				</ProductHeader>
				<Typography variant="overline">REF: {productUrl}</Typography>
			</ProductInfoHeader>
			<ColorList>
				<Typography variant="subtitle2">Color</Typography>
				<ListStyled>
					{/* {colors.map(({ id, color, colorHash }) => (
						<ListItemButtonStyled key={id}>
							<ListItemIconColor>
								<ColorIcon backgroundColor={colorHash} />
							</ListItemIconColor>
							<ListItemText primary={color} />
						</ListItemButtonStyled>
					))} */}
					<ListItemButtonStyled >
						<ListItemIconColor>
							<ColorIcon backgroundColor={color} />
						</ListItemIconColor>
						<ListItemText primary={color} />
					</ListItemButtonStyled>
				</ListStyled>
			</ColorList>
			<SizeList>
				<Typography variant="subtitle2">Size</Typography>
				<ListStyled>
					{/* {size.map((item) => (
						<ListItemButtonStyled key={item}>
							<ListItemText primary={item} />
						</ListItemButtonStyled>
					))} */}
					<ListItemButtonStyled>
						<ListItemText primary={sizes} />
					</ListItemButtonStyled>
				</ListStyled>
				{/* todo: SizeGuide link and information */}
				<Typography variant="caption">Size guide</Typography>
			</SizeList>
			<ActionsWrapper>
				<Button color="primary" variant="contained" onClick={handleClickCart}>
					{!isCart ? "Add to busket" : "Delete"}
				</Button>
				<IconButton
					onClick={handleClickFavorite}
					sx={{ color: isFavorite ? "#E01515" : "#fff"}}>
						<FavoriteBorderIcon />
				</IconButton>
			</ActionsWrapper>
			<Box sx={{ pb: '20px' }}>
				<Typography variant="subtitle2">Details</Typography>
				<Typography variant="body1">{productDetails}</Typography>
				<Typography mt={1} variant="body1">
					{productDelivery}
				</Typography>
			</Box>
		</Box>
	);
}

ProductInfo.propTypes = {
	title: PropTypes.string.isRequired,
	productUrl: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	colors: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			color: PropTypes.string.isRequired,
			colorHash: PropTypes.string.isRequired,
		}),
	).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
	productDetails: PropTypes.string.isRequired,
	productDelivery: PropTypes.string.isRequired,
};

export default ProductInfo;

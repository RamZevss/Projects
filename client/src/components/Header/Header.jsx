import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Container } from '@mui/material';

import Search from './components/Search';
import ShoppingBag from './components/ShoppingBag';
import ManMenu from './components/ManMenu';
import WomanMenu from './components/WomenMenu';
import Accessory from './components/Accessory';
import DropdownRegister from './components/DropdownRegister';

import {
	LinkItem,
	Logo,
	ContainerWrapper,
	ContentWrapper,
	ButtonItem,
	BoxTechnical,
	ButtonGroup,
	ItemButton,
} from './StyledHeader';

import { useState } from 'react';

function Header() {
	const rootEl = useRef(null);

	const [isShoppingBag, setIsShoppingBag] = useState(false);
	const [dataMenu, setDataMenu] = useState(null);

	const [searchBox, setSearchBox] = useState(false);
	const [mensCategory, setMenCategory] = useState(false);
	const [womenCategory, setWomenCategory] = useState(false);
	const [accessoryCategory, setAccessoryCategory] = useState(false);
	const [registrationBox, setRegistrationBox] = useState(false);

	useEffect(() => {
		const onClick = (e) =>
			rootEl.current.contains(e.target) ||
			setMenCategory(false) ||
			setWomenCategory(false) ||
			setAccessoryCategory(false) ||
			setSearchBox(false) ||
			setRegistrationBox(false);
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, []);

	return (
		<ContainerWrapper ref={rootEl}>
			<Container maxWidth="lg">
				<ContentWrapper>
					<div>
						<Link to="/">
							<ButtonItem
								data-menu="menuMen"
								aria-expanded={mensCategory !== 0}
								aria-controls="example-panel"
								onClick={(e) => {
									setMenCategory(!mensCategory);
									setDataMenu(e.target.dataset.menu);
								}}
							>
								MAN
							</ButtonItem>
						</Link>
						<Link to="/">
							<ButtonItem
								data-menu="menuWomen"
								aria-expanded={womenCategory !== 0}
								aria-controls="example-panel"
								onClick={(e) => {
									setWomenCategory(!womenCategory);
									setDataMenu(e.target.dataset.menu);
								}}
							>
								WOMEN
							</ButtonItem>
						</Link>
						<Link to="/">
							<ButtonItem
								data-menu="menuAccessory"
								aria-expanded={accessoryCategory !== 0}
								aria-controls="example-panel"
								onClick={(e) => {
									setAccessoryCategory(!accessoryCategory);
									setDataMenu(e.target.dataset.menu);
								}}
							>
								ACCESSORY
							</ButtonItem>
						</Link>
					</div>
					<div>
						<Logo to="/">Originalité</Logo>
					</div>
					<BoxTechnical>
						<ButtonGroup
							data-menu="menuSearch"
							aria-expanded={searchBox !== 0}
							aria-controls="example-panel"
							onClick={(e) => {
								setSearchBox(!searchBox);
								setDataMenu(e.target.dataset.menu);
							}}
						>
							<SearchOutlinedIcon sx={{ mr: 0.4 }} fontSize="medium" />
							<ItemButton>Search</ItemButton>
						</ButtonGroup>
						<ButtonGroup
							data-menu="menuRegistration"
							aria-expanded={registrationBox !== 0}
							aria-controls="example-panel"
							onClick={(e) => {
								setRegistrationBox(!registrationBox);
								setDataMenu(e.target.dataset.menu);
							}}
						>
							<PermIdentityOutlinedIcon sx={{ mr: 0.4 }} fontSize="medium" />
							{/* <LinkItem to="/account/profile">Sign Up / Log In</LinkItem> */}
							<ItemButton>Sign Up / Log In</ItemButton>
						</ButtonGroup>
						<ButtonGroup onClick={() => setIsShoppingBag(!isShoppingBag)}>
							<ShoppingBagOutlinedIcon sx={{ mr: 0.4 }} fontSize="medium" />
							<ItemButton>Shopping Bag</ItemButton>
						</ButtonGroup>
					</BoxTechnical>
					<DropdownRegister
						active={registrationBox && dataMenu === 'menuRegistration' ? 'auto' : 0}
						closeFormPages={() => setRegistrationBox(!registrationBox)}
					/>
				</ContentWrapper>

				<ManMenu active={mensCategory && dataMenu === 'menuMen' ? 'auto' : 0} />
				<WomanMenu active={womenCategory && dataMenu === 'menuWomen' ? 'auto' : 0} />
				<Accessory active={accessoryCategory && dataMenu === 'menuAccessory' ? 'auto' : 0} />
				<Search active={searchBox && dataMenu === 'menuSearch' ? 240 : 0} />
				<ShoppingBag isShoppingBag={isShoppingBag} closeShoppingBag={() => setIsShoppingBag(!isShoppingBag)} />
			</Container>
		</ContainerWrapper>
	);
}

export default Header;

import { Routes, Route } from 'react-router-dom';

import Profile from "../containers/Profile/";
import AddressBook from "../containers/AddressBook/";
import MyProfile from "../containers/MyProfile/";
import Wishlist from "../containers/Wishlist/";
import PurchaseHistory from "../containers/PurchaseHistory/";
import MyAccount from '../MyAccount/MyAccount';
function ProfileRoutes() {
	return (
		<Routes>
			<Route path="/profile" element={<Profile />} />
			<Route path="/profile/my-profile" element={<MyProfile />} />
			<Route path="/profile/my-wishlist" element={<Wishlist />} />
			<Route path="/profile/address-book" element={<AddressBook />} />
			<Route path="/profile/purchase-history" element={<PurchaseHistory />} />
			<Route path="/profile/myAccount" element={<MyAccount />} />
		
		</Routes>
	);
}

export default ProfileRoutes;

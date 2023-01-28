import { Routes, Route } from 'react-router-dom';
import LoginOverlayPage from '../components/Login_overlay/LoginOverlayPage/LoginOverlayPage';
import UserRegistration from '../components/UserRegistration/UserRegistration';
import UserProfile from './containers/UserProfile/UserProfile';

function Profile() {
	return (
		<div>
			<Routes>
				<Route path="/login" element={<LoginOverlayPage />} />
				<Route path="/registration" element={<UserRegistration />} />
				<Route path="/user-profile" element={<UserProfile />} />
				{/* <Route path="/user-profile" element={<UserProfile />} /> */}
			</Routes>
		</div>
	);
}

export default Profile;

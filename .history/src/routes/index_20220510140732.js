import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
//Public Route
const publicRoute = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

// Private Route
const privateRoute = [];
export { publicRoute, privateRoute };

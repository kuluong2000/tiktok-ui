import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
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
];

// Private Route
const privateRoute = [];
export { publicRoute, privateRoute };

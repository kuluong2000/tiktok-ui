import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import { HeaderOnly } from '~/Layout';
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
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

// Private Route
const privateRoute = [];
export { publicRoute, privateRoute };

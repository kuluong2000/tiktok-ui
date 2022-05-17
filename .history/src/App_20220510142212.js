import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes/index';
import { DefaultLayout } from '~/Layout';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            const Page = route.component;
            // nếu có route.layout thì nó sẽ lấy route.lay còn không thì nó sẽ lấy DefaultLayout
            const Layout = route.layout || DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

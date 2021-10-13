import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Sidebar, Container } from './components';
import Home from './Home';
import GithubSearch from './apps/github-search/GithubSearch';
import Todo from './apps/todo/Todo';
import ImageSearch from './apps/image-search/ImageSearch';
import FetchPosts from './apps/fetch-posts/FetchPosts';

function App() {
  return (
    <Router>
      <div className="dark">
        <section>
          <Sidebar />
          <div className="main">
            <Container>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/github-search">
                  <GithubSearch />
                </Route>
                <Route exact path="/todo-list">
                  <Todo />
                </Route>
                <Route exact path="/posts-fetch">
                  <FetchPosts />
                </Route>
                <Route exact path="/image-search">
                  <ImageSearch />
                </Route>
              </Switch>
            </Container>
          </div>
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AuthProvider from './components/AuthProvider';
import AuthRequired from "./components/AuthRequired";
import Layout from "./components/Layout";
import Explore from "./components/Explore";
import Search from "./components/Search";
import ArticleCreate from "./components/ArticleCreate";
import ArticleView from "./components/ArticleView";
import Comments from "./components/Comments";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Accounts from "./components/Accounts";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <AuthRequired>
              <Layout />
            </AuthRequired>
          }>
            <Route index element={<Feed />} />
            <Route path="articles" element={<Explore />} />
            <Route path="search" element={<Search />} />
            <Route path="create" element={<ArticleCreate />} />
            <Route path="article/:articleId">
              <Route index element={<ArticleView />} />
              <Route path="comments" element={<Comments />} />
            </Route>
            <Route path="profile/:username" element={<Profile />} />
            <Route path="accounts/edit" element={<Accounts />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;

import React, { useState, useEffect, useRef, useContext, createContext, useMemo, useCallback, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, useParams, Navigate, useNavigate, useLocation } from "react-router-dom";

const AuthProvider = lazy(() => import("./components/AuthProvider"));
const AuthRequired = lazy(() => import("./components/AuthRequired.js"));

const SignUp = lazy(() => import("./components/SignUp"));
const Login = lazy(() => import("./components/Login"));

const Layout = lazy(() => import("./components/Layout"));
const Feed = lazy(() => import("./components/Feed"));
const Explore = lazy(() => import("./components/Explore"));
const Search = lazy(() => import("./components/Search"));
const ArticleView = lazy(() => import("./components/ArticleView"));
const ArticleCreate = lazy(() => import("./components/ArticleCreate"));
const Comments = lazy(() => import("./components/Comments"));

const Profile = lazy(() => import("./components/Profile"));
const Accounts = lazy(() => import("./components/Accounts"));
const FollowersList = lazy(() => import("./components/FollowersList"));
const FollowingList = lazy(() => import("./components/FollowingList"));

const Test = lazy(() => import("./components/Test"));
const NotFound = lazy(() => import("./components/NotFound"));

export default function App() {
  return (
    <Suspense fallback={<p>fetching app...</p>}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthRequired layout={<Layout />} />}>
            <Route index element={<Feed />} />
            <Route path="explore" element={<Explore />} />
            <Route path="search" element={<Search />} />
            <Route path="create" element={<ArticleCreate />} />
            <Route path="profiles/:username">
              <Route index element={<Profile />} />
              <Route path="followers" element={<FollowersList />} />
              <Route path="following" element={<FollowingList />} />
            </Route>
            <Route path="accounts/edit" element={<Accounts />} />
            <Route path="/p/:articleId">
              <Route index element={<ArticleView />} />
              <Route path="comments" element={<Comments />} />
            </Route>
          </Route>

          <Route path="/accounts/login" element={<Login />} />
          <Route path="/accounts/signup" element={<SignUp />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Suspense>
  )
}






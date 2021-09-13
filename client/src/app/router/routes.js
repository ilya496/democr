import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage";
import MinigamesPage from "../pages/private/MinigamesPage";
import ErrorPage from "../pages/public/ErrorPage";
import RegistrationPage from "../pages/public/RegistrationPage";
import SuggestNewsPage from "../pages/private/SuggestNewsPage";
import AdminPage from "../pages/admin/AdminPage";
import AccountPage from "../pages/private/AccountPage";
import SuggestedArticlesPage from "../pages/admin/SuggestedArticlesPage";

export const adminRoutes = [
  { path: "/admin", exact: true, component: AdminPage },
  { path: "/admin/suggest", exact: true, component: SuggestedArticlesPage },
];

export const privateRoutes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/minigames", exact: true, component: MinigamesPage },
  { path: "/suggest", exact: true, component: SuggestNewsPage },
  { path: "/account/:id", exact: true, component: AccountPage },
  { path: "", component: ErrorPage },
];
export const publicRoutes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/login", exact: true, component: LoginPage },
  { path: "/signup", component: RegistrationPage },
  { path: "", component: ErrorPage },
];

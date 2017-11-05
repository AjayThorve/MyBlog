import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserComponent} from './components/user/user.component';
import {AddBlogComponent} from "./components/blogs/add-blog/add-blog.component";
import {ViewBlogComponent} from "./components/blogs/view-blog/view-blog.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent},
  { path: 'dashboard', component: UserComponent},
  { path: 'dashboard/add', component: AddBlogComponent},
  { path: 'dashboard/view', component: ViewBlogComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

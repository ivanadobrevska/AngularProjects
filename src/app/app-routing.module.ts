import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

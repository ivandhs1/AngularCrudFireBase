import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './pages/delete/delete.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateMoneyComponent } from './pages/update-money/update-money.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'register', component: RegisterComponent},
  { path : 'update', component: UpdateComponent },
  { path : 'delete', component: DeleteComponent},
  { path : 'updateMoney', component: UpdateMoneyComponent },
  { path : '**', pathMatch: 'full', redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

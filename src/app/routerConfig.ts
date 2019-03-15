import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Page1Component } from './components/page1/page1.component';
import { OtpPageComponent } from './components/otp-page/otp-page.component';
import { OtpPage2Component } from './components/otp-page2/otp-page2.component';
import { RoleselectionComponent } from './components/roleselection/roleselection.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
export const appRoutes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'otp',
    component: OtpPageComponent
  },
  { path: 'verify otp',
    component: OtpPage2Component
  }
  ,
  { path: 'roleSelection',
    component: RoleselectionComponent
  },
  { path: 'dashboard',
    component: DashboardComponent
  }
  ,
  { path: 'page1',
    component: Page1Component
  }
  ,
  {path:'maps',
component:GooglemapsComponent
}
];
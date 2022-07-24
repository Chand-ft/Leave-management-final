import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-staff_dashboardComponent
import { staff_dashboardComponent } from '../components/staff/staff_dashboard.component';
//CORE_REFERENCE_IMPORT-all_leaveComponent
import { all_leaveComponent } from '../components/admin/leave/all_leave.component';
//CORE_REFERENCE_IMPORT-staff_portalComponent
import { staff_portalComponent } from '../components/admin/staff/staff_portal.component';
//CORE_REFERENCE_IMPORT-admin_departmentComponent
import { admin_departmentComponent } from '../components/admin/admin_department.component';
//CORE_REFERENCE_IMPORT-admin_dashboardComponent
import { admin_dashboardComponent } from '../components/admin/admin_dashboard.component';
//CORE_REFERENCE_IMPORT-admin_landingComponent
import { admin_landingComponent } from '../components/admin/admin_landing.component';
//CORE_REFERENCE_IMPORT-staff_landingComponent
import { staff_landingComponent } from '../components/staff/staff_landing.component';
//CORE_REFERENCE_IMPORT-base_layoutComponent
import { base_layoutComponent } from '../components/aa_base/base_layout.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-staff_dashboardComponent
  staff_dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-all_leaveComponent
  all_leaveComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-staff_portalComponent
  staff_portalComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-admin_departmentComponent
  admin_departmentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-admin_dashboardComponent
  admin_dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-admin_landingComponent
  admin_landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-staff_landingComponent
  staff_landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-base_layoutComponent
  base_layoutComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: base_layoutComponent,
    children: [
      {
        path: 'admin',
        component: admin_landingComponent,
        children: [
          { path: 'dashboard', component: admin_dashboardComponent },
          { path: 'department', component: admin_departmentComponent },
          { path: 'staff-portal', component: staff_portalComponent },
          { path: 'all-leave', component: all_leaveComponent },
        ],
      },
      {
        path: 'staff',
        component: staff_landingComponent,
        children: [{ path: 'dashboard', component: staff_dashboardComponent }],
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END

/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-admin_landing',
  templateUrl: './admin_landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class admin_landingComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_df1uvHWRCoVHJhSx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_df1uvHWRCoVHJhSx(bh) {
    try {
      bh = this.sd_VaDuQyGiksH1Dl2c(bh);
      //appendnew_next_sd_df1uvHWRCoVHJhSx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_df1uvHWRCoVHJhSx');
    }
  }

  //appendnew_flow_admin_landingComponent_start

  sd_VaDuQyGiksH1Dl2c(bh) {
    try {
      this.page.dataInfoBoxes = [];
      this.page.employees = undefined;
      this.page.adminStaff = undefined;
      this.page.regularStaff = undefined;
      bh = this.sd_1S0ZEdQMsZJlW4Pv(bh);
      //appendnew_next_sd_VaDuQyGiksH1Dl2c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VaDuQyGiksH1Dl2c');
    }
  }

  sd_1S0ZEdQMsZJlW4Pv(bh) {
    try {
      const page = this.page;
      page.dataInfoBoxes = [
        {
          number: 7,
          text: 'Total Staff',
          icon: 'person',
          colour: 'white',
        },
        {
          number: 3,
          text: 'Approved Leave',
          icon: 'thumb_up',
          colour: 'green',
        },
        {
          number: 1,
          text: 'Pending leave',
          icon: 'hourglass_empty',
          colour: 'yellow',
        },
        {
          number: 0,
          text: 'Rejected leave',
          icon: 'thumb_down',
          colour: 'red',
        },
      ];

      bh = this.employeesAttempt(bh);
      //appendnew_next_sd_1S0ZEdQMsZJlW4Pv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1S0ZEdQMsZJlW4Pv');
    }
  }

  employeesAttempt(bh) {
    try {
      const page = this.page;
      page.employees = [
        {
          heading: 'Admin',
          staffDetails: [
            {
              image: '/Web/Downloaded images/userIcon.png',
              name: 'Hilton',
              email: 'hilton@testemail.com',
              role: 'Line Manager',
            },
            {
              image: '/Web/Downloaded images/userIcon.png',
              name: 'Mark',
              email: 'mark@testemail.com',
              role: 'Operations Manager',
            },
            {
              image: '/Web/Downloaded images/userIcon.png',
              name: 'Disability',
              email: 'ramya@testemail.com',
              role: 'Head of Sales',
            },
          ],
        },
        {
          heading: 'Staff',
          staffDetails: [
            {
              image: '/Web/Downloaded images/userIcon.png',
              name: 'BK',
              email: 'bk@testemail.com',
              role: 'Disability',
            },
            {
              image: '/Web/Downloaded images/userIcon.png',
              name: 'Prince',
              email: 'prince@testemail.com',
              role: 'Disability',
            },
            {
              image: '/Web/Downloaded images/userIcon.png',
              name: 'Neo',
              email: 'neo@testemail.com',
              role: 'Disability',
            },
            {
              image: '/Web/Downloaded images/userIcon.png',
              name: 'Moon',
              email: 'moon@testemail.com',
              role: 'Disability',
            },
          ],
        },
      ];
      bh = this.admin(bh);
      //appendnew_next_employeesAttempt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y6Cj1FNKTN1UfVDk');
    }
  }

  admin(bh) {
    try {
      const page = this.page;
      page.adminStaff = [
        {
          image: '/Web/Downloaded images/userIcon.png',
          name: 'Hilton',
          email: 'hilton@testemail.com',
          role: 'Line Manager',
        },
        {
          image: '/Web/Downloaded images/userIcon.png',
          name: 'Mark',
          email: 'mark@testemail.com',
          role: 'Operations Manager',
        },
        {
          image: '/Web/Downloaded images/userIcon.png',
          name: 'Disability',
          email: 'ramya@testemail.com',
          role: 'Head of Sales',
        },
      ];
      bh = this.regStaff(bh);
      //appendnew_next_admin
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SJhKdpoyLqIYODrl');
    }
  }

  regStaff(bh) {
    try {
      const page = this.page;
      page.regularStaff = [
        {
          image: '/Web/Downloaded images/userIcon.png',
          name: 'BK',
          email: 'bk@testemail.com',
          role: 'Junior Dev',
        },
        {
          image: '/Web/Downloaded images/userIcon.png',
          name: 'Prince',
          email: 'prince@testemail.com',
          role: 'Junior Dev',
        },
        {
          image: '/Web/Downloaded images/userIcon.png',
          name: 'Neo',
          email: 'neo@testemail.com',
          role: 'Junior Dev',
        },
        {
          image: '/Web/Downloaded images/userIcon.png',
          name: 'Moon',
          email: 'moon@testemail.com',
          role: 'Junior Dev',
        },
      ];

      //appendnew_next_regStaff
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kddRfvH63yJ9wHEn');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_admin_landingComponent_Catch
}

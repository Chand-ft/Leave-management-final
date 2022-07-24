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
      //appendnew_next_sd_1S0ZEdQMsZJlW4Pv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1S0ZEdQMsZJlW4Pv');
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

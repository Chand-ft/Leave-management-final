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
  selector: 'bh-leave_history',
  templateUrl: './leave_history.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class leave_historyComponent {
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
      this.sd_000AEBD8c1h3IEb7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_000AEBD8c1h3IEb7(bh) {
    try {
      bh = this.sd_ZfgtkgIvHOwETYix(bh);
      //appendnew_next_sd_000AEBD8c1h3IEb7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_000AEBD8c1h3IEb7');
    }
  }

  //appendnew_flow_leave_historyComponent_start

  sd_ZfgtkgIvHOwETYix(bh) {
    try {
      this.page.dataInfoBoxes = [];
      this.page.employees = undefined;
      this.page.adminStaff = undefined;
      this.page.regularStaff = undefined;
      bh = this.sd_jdKMKuZo1zPasPgT(bh);
      //appendnew_next_sd_ZfgtkgIvHOwETYix
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZfgtkgIvHOwETYix');
    }
  }

  sd_jdKMKuZo1zPasPgT(bh) {
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

      //appendnew_next_sd_jdKMKuZo1zPasPgT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jdKMKuZo1zPasPgT');
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
  //appendnew_flow_leave_historyComponent_Catch
}

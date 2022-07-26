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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialog_box_detailsComponent } from '../../aa_base/dialog_box_details.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-leave_details',
  templateUrl: './leave_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class leave_detailsComponent {
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
      this.sd_th9hT1g1AkAyQ8EO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_th9hT1g1AkAyQ8EO(bh) {
    try {
      bh = this.sd_TMNYHUroK496qQ7S(bh);
      //appendnew_next_sd_th9hT1g1AkAyQ8EO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_th9hT1g1AkAyQ8EO');
    }
  }

  openDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kLjXsyUDSIXYeAN2(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OxorjoDqoqIfxR4m');
    }
  }

  //appendnew_flow_leave_detailsComponent_start

  sd_TMNYHUroK496qQ7S(bh) {
    try {
      //appendnew_next_sd_TMNYHUroK496qQ7S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TMNYHUroK496qQ7S');
    }
  }

  sd_kLjXsyUDSIXYeAN2(bh) {
    try {
      const dialog_box_detailsDialog = this.__page_injector__.get(MatDialog);
      const dialog_box_detailsDialogRef = dialog_box_detailsDialog.open(
        dialog_box_detailsComponent,
        { data: bh.input.data, minWidth: '500px' }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kLjXsyUDSIXYeAN2');
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
  //appendnew_flow_leave_detailsComponent_Catch
}

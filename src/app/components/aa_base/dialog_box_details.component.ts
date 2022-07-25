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
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatDialogRef } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dialog_box_details',
  templateUrl: './dialog_box_details.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dialog_box_detailsComponent {
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
      this.sd_P9F7jrS1LRtWSkwx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_P9F7jrS1LRtWSkwx(bh) {
    try {
      bh = this.sd_BuYHc2lqz8yoPEoP(bh);
      //appendnew_next_sd_P9F7jrS1LRtWSkwx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_P9F7jrS1LRtWSkwx');
    }
  }

  closeDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_3MmqxfdtNQx5vmh2(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9VE1vBoD2eygLtRW');
    }
  }

  //appendnew_flow_dialog_box_detailsComponent_start

  sd_BuYHc2lqz8yoPEoP(bh) {
    try {
      this.page.approveOrRejectOptions = undefined;
      this.page.approveOrReject = undefined;
      this.page.dialog = undefined;
      bh = this.sd_cal6C4thUHrcEbfF(bh);
      //appendnew_next_sd_BuYHc2lqz8yoPEoP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BuYHc2lqz8yoPEoP');
    }
  }

  sd_cal6C4thUHrcEbfF(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_QYEA2HFrFTh03Abs(bh);
      //appendnew_next_sd_cal6C4thUHrcEbfF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cal6C4thUHrcEbfF');
    }
  }

  sd_QYEA2HFrFTh03Abs(bh) {
    try {
      const page = this.page;
      page.approveOrReject = new FormGroup({
        option: new FormControl('', [Validators.required]),
      });

      bh = this.sd_xNkOv97YCML0LCkg(bh);
      //appendnew_next_sd_QYEA2HFrFTh03Abs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QYEA2HFrFTh03Abs');
    }
  }

  sd_xNkOv97YCML0LCkg(bh) {
    try {
      const page = this.page;
      page.approveOrRejectOptions = [
        { option: 'Approve' },
        { option: 'Reject' },
      ];
      //appendnew_next_sd_xNkOv97YCML0LCkg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xNkOv97YCML0LCkg');
    }
  }

  sd_3MmqxfdtNQx5vmh2(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.dialog);

      //appendnew_next_sd_3MmqxfdtNQx5vmh2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3MmqxfdtNQx5vmh2');
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
  //appendnew_flow_dialog_box_detailsComponent_Catch
}

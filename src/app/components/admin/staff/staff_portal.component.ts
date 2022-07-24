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
  ValidationErrors,
  FormBuilder,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-staff_portal',
  templateUrl: './staff_portal.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class staff_portalComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_aji0HHGuJ6polKrp(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_aji0HHGuJ6polKrp(bh) {
    try {
      bh = this.sd_RdXzT1EHkJOYVvbJ(bh);
      //appendnew_next_sd_aji0HHGuJ6polKrp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aji0HHGuJ6polKrp');
    }
  }

  //appendnew_flow_staff_portalComponent_start

  sd_RdXzT1EHkJOYVvbJ(bh) {
    try {
      this.page.staffPortal = undefined;
      bh = this.sd_lyCaDDByBvNH1VcN(bh);
      //appendnew_next_sd_RdXzT1EHkJOYVvbJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RdXzT1EHkJOYVvbJ');
    }
  }

  sd_lyCaDDByBvNH1VcN(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_70yAfmrucPHyczcr(bh);
      //appendnew_next_sd_lyCaDDByBvNH1VcN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lyCaDDByBvNH1VcN');
    }
  }

  sd_70yAfmrucPHyczcr(bh) {
    try {
      const page = this.page;
      page.staffPortal = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required]),
        address: new FormControl('', [Validators.required]),
        departmentName: new FormControl('', [Validators.required]),
        staffLeaveDays: new FormControl('', [Validators.required]),
        userRole: new FormControl('', [Validators.required]),
      });
      console.log('form', page.staffPortal);

      //appendnew_next_sd_70yAfmrucPHyczcr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_70yAfmrucPHyczcr');
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
  //appendnew_flow_staff_portalComponent_Catch
}

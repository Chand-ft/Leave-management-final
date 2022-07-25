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
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_MRQIvXym13VkPHVq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_MRQIvXym13VkPHVq(bh) {
    try {
      bh = this.sd_bvSGgqWZbMRQOzjJ(bh);
      //appendnew_next_sd_MRQIvXym13VkPHVq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MRQIvXym13VkPHVq');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_bvSGgqWZbMRQOzjJ(bh) {
    try {
      this.page.leaveApplication = undefined;
      bh = this.sd_RMkJzywlcLbhzt0c(bh);
      //appendnew_next_sd_bvSGgqWZbMRQOzjJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bvSGgqWZbMRQOzjJ');
    }
  }

  sd_RMkJzywlcLbhzt0c(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_z8oP01rZM7rpzjtr(bh);
      //appendnew_next_sd_RMkJzywlcLbhzt0c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RMkJzywlcLbhzt0c');
    }
  }

  sd_z8oP01rZM7rpzjtr(bh) {
    try {
      const page = this.page;
      page.leaveApplication = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      });
      console.log('form', page.leaveApplication);

      //appendnew_next_sd_z8oP01rZM7rpzjtr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z8oP01rZM7rpzjtr');
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
  //appendnew_flow_loginComponent_Catch
}

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
  selector: 'bh-admin_leave_application',
  templateUrl: './admin_leave_application.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class admin_leave_applicationComponent {
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
      this.sd_d171dWQ2trfJQmYW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_d171dWQ2trfJQmYW(bh) {
    try {
      bh = this.sd_h2UcNOWDuufZSIMp(bh);
      //appendnew_next_sd_d171dWQ2trfJQmYW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d171dWQ2trfJQmYW');
    }
  }

  //appendnew_flow_admin_leave_applicationComponent_start

  sd_h2UcNOWDuufZSIMp(bh) {
    try {
      this.page.leaveApplication = undefined;
      bh = this.sd_F8gxvanXzorFzozQ(bh);
      //appendnew_next_sd_h2UcNOWDuufZSIMp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h2UcNOWDuufZSIMp');
    }
  }

  sd_F8gxvanXzorFzozQ(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_WEzogK28bdZKknZ2(bh);
      //appendnew_next_sd_F8gxvanXzorFzozQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F8gxvanXzorFzozQ');
    }
  }

  sd_WEzogK28bdZKknZ2(bh) {
    try {
      const page = this.page;
      page.leaveApplication = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        leaveType: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        reasons: new FormControl('', [Validators.required]),
      });
      console.log('form', page.leaveApplication);

      //appendnew_next_sd_WEzogK28bdZKknZ2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WEzogK28bdZKknZ2');
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
  //appendnew_flow_admin_leave_applicationComponent_Catch
}

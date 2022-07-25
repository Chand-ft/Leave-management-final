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
  selector: 'bh-new_staff',
  templateUrl: './new_staff.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class new_staffComponent {
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
      this.sd_M9O72w0OC1ooeNbX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_M9O72w0OC1ooeNbX(bh) {
    try {
      bh = this.sd_iWr4E6EB5MkXPjnT(bh);
      //appendnew_next_sd_M9O72w0OC1ooeNbX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_M9O72w0OC1ooeNbX');
    }
  }

  //appendnew_flow_new_staffComponent_start

  sd_iWr4E6EB5MkXPjnT(bh) {
    try {
      this.page.addStaff = undefined;
      bh = this.sd_gduIFD4519oYrDrz(bh);
      //appendnew_next_sd_iWr4E6EB5MkXPjnT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iWr4E6EB5MkXPjnT');
    }
  }

  sd_gduIFD4519oYrDrz(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_bsJFpsynbRJMhxBF(bh);
      //appendnew_next_sd_gduIFD4519oYrDrz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gduIFD4519oYrDrz');
    }
  }

  sd_bsJFpsynbRJMhxBF(bh) {
    try {
      const page = this.page;
      page.addStaff = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required]),
        role: new FormControl('', [Validators.required]),
        physicalAddress: new FormControl('', [Validators.required]),
      });
      console.log('form', page.addStaff);

      //appendnew_next_sd_bsJFpsynbRJMhxBF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bsJFpsynbRJMhxBF');
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
  //appendnew_flow_new_staffComponent_Catch
}

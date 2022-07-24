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
  selector: 'bh-admin_department',
  templateUrl: './admin_department.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class admin_departmentComponent {
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
      this.sd_5TwCriUHQVW6kYwo(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_5TwCriUHQVW6kYwo(bh) {
    try {
      bh = this.sd_1l9cjf7dVetbG575(bh);
      //appendnew_next_sd_5TwCriUHQVW6kYwo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5TwCriUHQVW6kYwo');
    }
  }

  //appendnew_flow_admin_departmentComponent_start

  sd_1l9cjf7dVetbG575(bh) {
    try {
      this.page.newDepartment = undefined;
      bh = this.sd_gsdQh1LpemIivVBS(bh);
      //appendnew_next_sd_1l9cjf7dVetbG575
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1l9cjf7dVetbG575');
    }
  }

  sd_gsdQh1LpemIivVBS(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_olHeDt0TWdK4p40L(bh);
      //appendnew_next_sd_gsdQh1LpemIivVBS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gsdQh1LpemIivVBS');
    }
  }

  sd_olHeDt0TWdK4p40L(bh) {
    try {
      const page = this.page;
      page.newDepartment = new FormGroup({
        depName: new FormControl('', [Validators.required]),
        depShortName: new FormControl('', [Validators.required]),
      });
      console.log('form', page.newDepartment);

      //appendnew_next_sd_olHeDt0TWdK4p40L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_olHeDt0TWdK4p40L');
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
  //appendnew_flow_admin_departmentComponent_Catch
}

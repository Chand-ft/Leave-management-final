/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class client_service {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_client_service

  async dynamicApiCall(
    path = '',
    body: any = undefined,
    method = '',
    ...others
  ) {
    try {
      var bh: any = {
        input: {
          path: path,
          body: body,
          method: method,
        },
        local: {
          results: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_z4jbsmvaM7cPy7YW(bh);
      //appendnew_next_dynamicApiCall
      return (
        // formatting output variables
        {
          input: {},
          local: {
            results: bh.local.results,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e3SpyZ5sB2xLCtH4');
    }
  }

  async logout(...others) {
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dMSxC8Sc7nUo4DVc(bh);
      //appendnew_next_logout
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lfXMojbQs2cZ7eaf');
    }
  }

  //appendnew_flow_client_service_start

  async sd_z4jbsmvaM7cPy7YW(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = await this.createUrl(bh);
      //appendnew_next_sd_z4jbsmvaM7cPy7YW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z4jbsmvaM7cPy7YW');
    }
  }

  async createUrl(bh) {
    try {
      bh.input.url = bh.ssdUrl + bh.input.path;
      bh = await this.sd_MjTUNTeWz2niYQRb(bh);
      //appendnew_next_createUrl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aBTKs47bdxD8R6e0');
    }
  }

  async sd_MjTUNTeWz2niYQRb(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: bh.input.method,
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.results = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_MjTUNTeWz2niYQRb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MjTUNTeWz2niYQRb');
    }
  }

  async sd_dMSxC8Sc7nUo4DVc(bh) {
    try {
      sessionStorage.clear();
      bh = await this.sd_MYHl1wlbVcilPcgp(bh);
      //appendnew_next_sd_dMSxC8Sc7nUo4DVc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dMSxC8Sc7nUo4DVc');
    }
  }

  async sd_MYHl1wlbVcilPcgp(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.router.navigate(
        [this.sdService.formatPathWithParams(path, undefined)],
        {
          queryParams: Object.assign(qprm, ''),
        }
      );
      //appendnew_next_sd_MYHl1wlbVcilPcgp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MYHl1wlbVcilPcgp');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_client_service_Catch
}

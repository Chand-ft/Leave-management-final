//append_imports_start

import * as sd_MSma9GJuXg98ZzJs from 'app/sd-services/client_service'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_MSma9GJuXg98ZzJs: sd_MSma9GJuXg98ZzJs.client_service
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}

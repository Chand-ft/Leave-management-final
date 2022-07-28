let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class lms_ssd {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'lms_ssd';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new lms_ssd(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_lms_ssd_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: lms_ssd');

    //appendnew_flow_lms_ssd_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: lms_ssd');

    if (!this.swaggerDocument['paths']['/addUser']) {
      this.swaggerDocument['paths']['/addUser'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addUser']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addUser`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_3rh7SVvWFeiruUVZ(bh);
          //appendnew_next_sd_0Syh3067rWlIoXgn
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0Syh3067rWlIoXgn');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_hL2RkgGoZAgh8CO7(bh);
          //appendnew_next_sd_b1VdN8MY9SCbxX3x
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_b1VdN8MY9SCbxX3x');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/storeLeaveRequest']) {
      this.swaggerDocument['paths']['/storeLeaveRequest'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/storeLeaveRequest']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/storeLeaveRequest`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_3qo5kOxOMV3nwsif(bh);
          //appendnew_next_sd_KRWdZE4xzQDp6Vr1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KRWdZE4xzQDp6Vr1');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getLeaveRequests']) {
      this.swaggerDocument['paths']['/getLeaveRequests'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getLeaveRequests']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/getLeaveRequests`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_jjWVmFtS14Krgsnx(bh);
          //appendnew_next_sd_4idFbGiJMmBSEPIv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4idFbGiJMmBSEPIv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getLeaveDays/{owner}']) {
      this.swaggerDocument['paths']['/getLeaveDays/{owner}'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getLeaveDays/{owner}']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getLeaveDays/:owner`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_qWihIfR9hMZaRAp5(bh);
          //appendnew_next_sd_aI9Yc6k28v5LwvP2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aI9Yc6k28v5LwvP2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getSecondLeaveRequests/{owner}']) {
      this.swaggerDocument['paths']['/getSecondLeaveRequests/{owner}'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getSecondLeaveRequests/{owner}']['get'] =
        {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        };
    }
    this.app['get'](
      `${this.serviceBasePath}/getSecondLeaveRequests/:owner`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_6ctnNu5rO0Aq7wAd(bh);
          //appendnew_next_sd_Dnv6Q9uIvmqpYm82
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Dnv6Q9uIvmqpYm82');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getPendingRequests']) {
      this.swaggerDocument['paths']['/getPendingRequests'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getPendingRequests']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/getPendingRequests`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_u197CuK67Qm6zbY6(bh);
          //appendnew_next_sd_bjo2Qg3AJG8FwrnD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_bjo2Qg3AJG8FwrnD');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateLeaveRequest']) {
      this.swaggerDocument['paths']['/updateLeaveRequest'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/updateLeaveRequest']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/updateLeaveRequest`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_BgJfeMQEJLBjhLP3(bh);
          //appendnew_next_sd_l465WHPwrfY4gcwD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l465WHPwrfY4gcwD');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/get-users']) {
      this.swaggerDocument['paths']['/get-users'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/get-users']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/get-users`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_ZkQdY1IZaeS0aVve(bh);
          //appendnew_next_sd_wPiobFQZgOXzvege
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wPiobFQZgOXzvege');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getAllLeaveRequests']) {
      this.swaggerDocument['paths']['/getAllLeaveRequests'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getAllLeaveRequests']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/getAllLeaveRequests`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_tCd9ZICQaNTDi4VC(bh);
          //appendnew_next_sd_l8AP2apZ7HVv3dct
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_l8AP2apZ7HVv3dct');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_lms_ssd_HttpIn
  }
  //   service flows_lms_ssd

  //appendnew_flow_lms_ssd_start

  async sd_3rh7SVvWFeiruUVZ(bh) {
    try {
      bh.input.body['leaveBalance'] = 20;

      bh.input.query = { email: bh.input.body.email };
      bh = await this.checkIfUserAlreadyExist(bh);
      //appendnew_next_sd_3rh7SVvWFeiruUVZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3rh7SVvWFeiruUVZ');
    }
  }

  async checkIfUserAlreadyExist(bh) {
    try {
      bh.local.foundUsers = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'users',
        bh.input.query,
        {}
      );
      bh = await this.sd_p7SEMNhJOxgF17XS(bh);
      //appendnew_next_checkIfUserAlreadyExist
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HAbJfZdv7WxXYUtW');
    }
  }

  async sd_p7SEMNhJOxgF17XS(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['lt'](
          bh.local.foundUsers.length,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7C2tV4P4IA2pHcnX(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1Fom6fsrcSI1JiR5(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p7SEMNhJOxgF17XS');
    }
  }

  async sd_7C2tV4P4IA2pHcnX(bh) {
    try {
      bh.local.results = await MongoPersistance.getInstance().insertOne(
        'sd_2nvaxbLqUVsRQhHb',
        'users',
        bh.input.body,
        {}
      );
      await this.sd_U8YGsa6VND3EoSTd(bh);
      //appendnew_next_sd_7C2tV4P4IA2pHcnX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7C2tV4P4IA2pHcnX');
    }
  }

  async sd_U8YGsa6VND3EoSTd(bh) {
    try {
      bh.web.res
        .status(200)
        .send({ message: 'User successfully added', status: 200 });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U8YGsa6VND3EoSTd');
    }
  }

  async sd_1Fom6fsrcSI1JiR5(bh) {
    try {
      bh.web.res.status(400).send({ message: 'User already exists' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1Fom6fsrcSI1JiR5');
    }
  }

  async sd_hL2RkgGoZAgh8CO7(bh) {
    try {
      bh.input.query = {
        email: bh.input.body.email,
        // password: bh.input.body.password
      };
      bh = await this.checkIfUserIsRegistered(bh);
      //appendnew_next_sd_hL2RkgGoZAgh8CO7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hL2RkgGoZAgh8CO7');
    }
  }

  async checkIfUserIsRegistered(bh) {
    try {
      bh.local.foundUser = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'users',
        bh.input.query,
        {}
      );
      bh = await this.sd_ng9wwZHrNT9xoF5j(bh);
      //appendnew_next_checkIfUserIsRegistered
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wlJqh6C6efzg3JgW');
    }
  }

  async sd_ng9wwZHrNT9xoF5j(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['lt'](
          bh.local.foundUser.length,
          1,
          undefined,
          undefined
        )
      ) {
        bh = await this.userNotFound(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9XV9vd7v66uBNtJV(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ng9wwZHrNT9xoF5j');
    }
  }

  async userNotFound(bh) {
    try {
      bh.web.res.status(400).send({ message: 'User not found!' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8iwcWuxrpZA6RoQK');
    }
  }

  async sd_9XV9vd7v66uBNtJV(bh) {
    try {
      bh.web.res.status(200).send(bh.local.foundUser);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9XV9vd7v66uBNtJV');
    }
  }

  async sd_3qo5kOxOMV3nwsif(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_2nvaxbLqUVsRQhHb',
        'leaveRequests',
        bh.input.body,
        {}
      );
      await this.sd_9gVY7F5LzchhERGV(bh);
      //appendnew_next_sd_3qo5kOxOMV3nwsif
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3qo5kOxOMV3nwsif');
    }
  }

  async sd_9gVY7F5LzchhERGV(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9gVY7F5LzchhERGV');
    }
  }

  async sd_jjWVmFtS14Krgsnx(bh) {
    try {
      // Check if email matches the user OR if reporting manager is equals to user
      console.log(7777777, bh);
      bh.input.query = { reportingManager: bh.input.body.email };
      bh = await this.sd_3QkwjMIe9fv33fzZ(bh);
      //appendnew_next_sd_jjWVmFtS14Krgsnx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jjWVmFtS14Krgsnx');
    }
  }

  async sd_3QkwjMIe9fv33fzZ(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'leaveRequests',
        bh.input.query,
        {}
      );
      await this.sd_KBnO0iQCurjKJLJy(bh);
      //appendnew_next_sd_3QkwjMIe9fv33fzZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3QkwjMIe9fv33fzZ');
    }
  }

  async sd_KBnO0iQCurjKJLJy(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KBnO0iQCurjKJLJy');
    }
  }

  async sd_qWihIfR9hMZaRAp5(bh) {
    try {
      console.log(bh.input);
      bh = await this.sd_fPCHC4CVGuEU1Ke6(bh);
      //appendnew_next_sd_qWihIfR9hMZaRAp5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qWihIfR9hMZaRAp5');
    }
  }

  async sd_fPCHC4CVGuEU1Ke6(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'leaveDays',
        bh.input.params,
        {}
      );
      await this.sd_RkongtXPiseyiOBN(bh);
      //appendnew_next_sd_fPCHC4CVGuEU1Ke6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fPCHC4CVGuEU1Ke6');
    }
  }

  async sd_RkongtXPiseyiOBN(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RkongtXPiseyiOBN');
    }
  }

  async sd_6ctnNu5rO0Aq7wAd(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'getLeaveRequests',
        bh.input.query,
        {}
      );
      await this.sd_oeXTXx0YaUaEw4vI(bh);
      //appendnew_next_sd_6ctnNu5rO0Aq7wAd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6ctnNu5rO0Aq7wAd');
    }
  }

  async sd_oeXTXx0YaUaEw4vI(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oeXTXx0YaUaEw4vI');
    }
  }

  async sd_u197CuK67Qm6zbY6(bh) {
    try {
      bh.input.query = { owner: bh.input.body.email };
      bh = await this.sd_ceRj3DhfF1k5ZiId(bh);
      //appendnew_next_sd_u197CuK67Qm6zbY6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_u197CuK67Qm6zbY6');
    }
  }

  async sd_ceRj3DhfF1k5ZiId(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'leaveRequests',
        bh.input.query,
        {}
      );
      await this.sd_IsXyveyMwigsW4kK(bh);
      //appendnew_next_sd_ceRj3DhfF1k5ZiId
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ceRj3DhfF1k5ZiId');
    }
  }

  async sd_IsXyveyMwigsW4kK(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IsXyveyMwigsW4kK');
    }
  }

  async sd_BgJfeMQEJLBjhLP3(bh) {
    try {
      bh.input.filter = {
        owner: bh.input.body.owner,
        textArea: bh.input.body.textArea,
      };
      bh.input.updateStatus = {
        $set: {
          status: bh.input.body.status,
        },
      };

      // console.log('hi', bh.input)

      bh = await this.updateLRStatus(bh);
      //appendnew_next_sd_BgJfeMQEJLBjhLP3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BgJfeMQEJLBjhLP3');
    }
  }

  async updateLRStatus(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_2nvaxbLqUVsRQhHb',
        'leaveRequests',
        bh.input.filter,
        bh.input.updateStatus,
        {}
      );
      bh = await this.sd_MJXH3Gc7KhoXWU4s(bh);
      //appendnew_next_updateLRStatus
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_immIm90604CsxQBD');
    }
  }

  async sd_MJXH3Gc7KhoXWU4s(bh) {
    try {
      bh.input.filter = {
        owner: bh.input.body.owner,
      };

      bh = await this.getLDbyOwner(bh);
      //appendnew_next_sd_MJXH3Gc7KhoXWU4s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MJXH3Gc7KhoXWU4s');
    }
  }

  async getLDbyOwner(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'leaveDays',
        bh.input.filter,
        {}
      );
      bh = await this.sd_hfW9a2hxOgJItRFb(bh);
      //appendnew_next_getLDbyOwner
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s0V1JpPwpZ48eREX');
    }
  }

  async sd_hfW9a2hxOgJItRFb(bh) {
    try {
      console.log('input', bh.input);
      var leaveReq = bh.input.body;

      var numberOfDays = datediff(leaveReq.startDate, leaveReq.endDate);
      console.log(numberOfDays);

      var leaveDays = bh.local.result[0];
      leaveDays[leaveReq.leaveType] =
        Number(leaveDays[leaveReq.leaveType]) - numberOfDays;

      console.log(leaveDays);

      //differenece btwn start and end date
      function datediff(date1, date2) {
        date1 = Date.parse(date1);
        date2 = Date.parse(date2);
        // The number of milliseconds in one day
        const ONE_DAY = 1000 * 60 * 60 * 24;

        // Calculate the difference in milliseconds
        const differenceMs = Math.abs(date1 - date2);

        // Convert back to days and return
        return Math.round(differenceMs / ONE_DAY);
      }

      //prepare mongodb obects

      bh.input.filter = {
        owner: bh.input.body.owner,
      };
      bh.input.updateDays = {
        $set: {
          [leaveReq.leaveType]: leaveDays[leaveReq.leaveType],
        },
      };
      bh = await this.updateLeaveTypeNumber(bh);
      //appendnew_next_sd_hfW9a2hxOgJItRFb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hfW9a2hxOgJItRFb');
    }
  }

  async updateLeaveTypeNumber(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_2nvaxbLqUVsRQhHb',
        'leaveDays',
        bh.input.filter,
        bh.input.updateDays,
        {}
      );
      await this.sd_NsAap1u98eBctIHb(bh);
      //appendnew_next_updateLeaveTypeNumber
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rxTuovZkQw2xb0L8');
    }
  }

  async sd_NsAap1u98eBctIHb(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NsAap1u98eBctIHb');
    }
  }

  async sd_ZkQdY1IZaeS0aVve(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'users',
        bh.input.query,
        {}
      );
      await this.sd_R1TQ3lEVE0Jyuvph(bh);
      //appendnew_next_sd_ZkQdY1IZaeS0aVve
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZkQdY1IZaeS0aVve');
    }
  }

  async sd_R1TQ3lEVE0Jyuvph(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_R1TQ3lEVE0Jyuvph');
    }
  }

  async sd_tCd9ZICQaNTDi4VC(bh) {
    try {
      // Check if email matches the user OR if reporting manager is equals to user

      bh.input.query = {};
      bh = await this.sd_9dhS1NzXsfNG2wKH(bh);
      //appendnew_next_sd_tCd9ZICQaNTDi4VC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tCd9ZICQaNTDi4VC');
    }
  }

  async sd_9dhS1NzXsfNG2wKH(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_2nvaxbLqUVsRQhHb',
        'leaveRequests',
        bh.input.query,
        {}
      );
      await this.sd_XTBvnyOAFVEdxNfY(bh);
      //appendnew_next_sd_9dhS1NzXsfNG2wKH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9dhS1NzXsfNG2wKH');
    }
  }

  async sd_XTBvnyOAFVEdxNfY(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XTBvnyOAFVEdxNfY');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_lms_ssd_Catch
}

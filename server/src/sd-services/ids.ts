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
import * as sd_sEYuUazYgJi81ngr from './idsutil'; //_splitter_
//append_imports_end
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_qsvArOMOoLH8ey3U(bh);
          //appendnew_next_sd_8k7MbcykiUlPcWM1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8k7MbcykiUlPcWM1');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_CHEXWqFaGQrYycqP(bh);
          //appendnew_next_sd_lmHAz3Y9TmxLK6q2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lmHAz3Y9TmxLK6q2');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
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
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
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
          bh = await this.sd_Hg8unw01BApxXp8Q(bh);
          //appendnew_next_sd_cKmCXTPi9LDfPCZC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cKmCXTPi9LDfPCZC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
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
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_cptTHJuc0beVYMmm(bh);
          //appendnew_next_sd_KD0hbp6BljcHl39F
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KD0hbp6BljcHl39F');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
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
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
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
          bh = await this.sd_t5MTEWzdVDI0GGDk(bh);
          //appendnew_next_sd_cwtqqOdCBjYHCjyx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cwtqqOdCBjYHCjyx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
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
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_OM7wGR8Yg3uXCuRN(bh);
          //appendnew_next_sd_GftJ79vHiJ39h6nu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_GftJ79vHiJ39h6nu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
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
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_qSg9Y3OXvgBkB1p6(bh);
          //appendnew_next_sd_iUodptajaAWY2wvv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_iUodptajaAWY2wvv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_Hg8unw01BApxXp8Q(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_VxZzctC2aaT4LlDa(bh);
      //appendnew_next_sd_Hg8unw01BApxXp8Q
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hg8unw01BApxXp8Q');
    }
  }

  async sd_VxZzctC2aaT4LlDa(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_3tN482jLo2cRiDl1(bh);
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
        bh = await this.sd_zySGuMDuOyXKG9Od(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VxZzctC2aaT4LlDa');
    }
  }

  async sd_3tN482jLo2cRiDl1(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      bh = await this.sd_KdjMghuPfb5G94Iw(bh);
      //appendnew_next_sd_3tN482jLo2cRiDl1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3tN482jLo2cRiDl1');
    }
  }

  async sd_KdjMghuPfb5G94Iw(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_DiKiT1gJCGWP64Mn(bh);
      //appendnew_next_sd_KdjMghuPfb5G94Iw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KdjMghuPfb5G94Iw');
    }
  }

  async sd_DiKiT1gJCGWP64Mn(bh) {
    try {
      const sd_sEYuUazYgJi81ngrInstance: sd_sEYuUazYgJi81ngr.idsutil =
        sd_sEYuUazYgJi81ngr.idsutil.getInstance();
      let outputVariables =
        await sd_sEYuUazYgJi81ngrInstance.getIDSClientInstance(undefined);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_p7VBMKKj74pnJ6Af(bh);
      //appendnew_next_sd_DiKiT1gJCGWP64Mn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DiKiT1gJCGWP64Mn');
    }
  }

  async sd_p7VBMKKj74pnJ6Af(bh) {
    try {
      const sd_sEYuUazYgJi81ngrInstance: sd_sEYuUazYgJi81ngr.idsutil =
        sd_sEYuUazYgJi81ngr.idsutil.getInstance();
      let outputVariables =
        await sd_sEYuUazYgJi81ngrInstance.getAuthorizationParams(undefined);
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_zygKyXSgMtJYMYH1(bh);
      //appendnew_next_sd_p7VBMKKj74pnJ6Af
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_p7VBMKKj74pnJ6Af');
    }
  }

  async sd_zygKyXSgMtJYMYH1(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      await this.sd_thoPa5niXtAUvuei(bh);
      //appendnew_next_sd_zygKyXSgMtJYMYH1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zygKyXSgMtJYMYH1');
    }
  }

  async sd_thoPa5niXtAUvuei(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_thoPa5niXtAUvuei');
    }
  }

  async sd_zySGuMDuOyXKG9Od(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      await this.sd_8MVwpOazbOZMR2sg(bh);
      //appendnew_next_sd_zySGuMDuOyXKG9Od
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zySGuMDuOyXKG9Od');
    }
  }

  async sd_8MVwpOazbOZMR2sg(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8MVwpOazbOZMR2sg');
    }
  }

  async sd_qsvArOMOoLH8ey3U(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_cAn6hJ3YBUamzhWw(bh);
      //appendnew_next_sd_qsvArOMOoLH8ey3U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qsvArOMOoLH8ey3U');
    }
  }

  async sd_cAn6hJ3YBUamzhWw(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cAn6hJ3YBUamzhWw');
    }
  }

  async sd_cptTHJuc0beVYMmm(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_gTrNswkQ6e8UYSWQ(bh);
      //appendnew_next_sd_cptTHJuc0beVYMmm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cptTHJuc0beVYMmm');
    }
  }

  async sd_gTrNswkQ6e8UYSWQ(bh) {
    try {
      const sd_sEYuUazYgJi81ngrInstance: sd_sEYuUazYgJi81ngr.idsutil =
        sd_sEYuUazYgJi81ngr.idsutil.getInstance();
      let outputVariables =
        await sd_sEYuUazYgJi81ngrInstance.getIDSClientInstance(undefined);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_aVRRFjx6uIVrYp87(bh);
      //appendnew_next_sd_gTrNswkQ6e8UYSWQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gTrNswkQ6e8UYSWQ');
    }
  }

  async sd_aVRRFjx6uIVrYp87(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_jgesqOWrvN2u6M1s(bh);
      //appendnew_next_sd_aVRRFjx6uIVrYp87
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aVRRFjx6uIVrYp87');
    }
  }

  async sd_jgesqOWrvN2u6M1s(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_oXTYsLeLH52qqJuX(bh);
      //appendnew_next_sd_jgesqOWrvN2u6M1s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jgesqOWrvN2u6M1s');
    }
  }

  async sd_oXTYsLeLH52qqJuX(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jlfYoA5d2samumKh(bh);
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
        bh = await this.sd_EAUnbnIcYMpCAIY3(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oXTYsLeLH52qqJuX');
    }
  }

  async sd_jlfYoA5d2samumKh(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_IBLOkHaNhtX2h4NX(bh);
      //appendnew_next_sd_jlfYoA5d2samumKh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jlfYoA5d2samumKh');
    }
  }

  async sd_IBLOkHaNhtX2h4NX(bh) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IBLOkHaNhtX2h4NX');
    }
  }

  async sd_EAUnbnIcYMpCAIY3(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      await this.sd_AST3N28QMxT55ks7(bh);
      //appendnew_next_sd_EAUnbnIcYMpCAIY3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EAUnbnIcYMpCAIY3');
    }
  }

  async sd_AST3N28QMxT55ks7(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AST3N28QMxT55ks7');
    }
  }

  async sd_t5MTEWzdVDI0GGDk(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_HAcoBrIjNqKCwcpO(bh);
      //appendnew_next_sd_t5MTEWzdVDI0GGDk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t5MTEWzdVDI0GGDk');
    }
  }

  async sd_HAcoBrIjNqKCwcpO(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HAcoBrIjNqKCwcpO');
    }
  }

  async sd_8F1L2FWZya4lhs4O(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_8F1L2FWZya4lhs4O
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8F1L2FWZya4lhs4O');
    }
  }

  async sd_OM7wGR8Yg3uXCuRN(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_loV4SxJU7itMNCDE(bh);
      //appendnew_next_sd_OM7wGR8Yg3uXCuRN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OM7wGR8Yg3uXCuRN');
    }
  }

  async sd_loV4SxJU7itMNCDE(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_0ngYMr3jwcFdpuor(bh);
      //appendnew_next_sd_loV4SxJU7itMNCDE
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_loV4SxJU7itMNCDE');
    }
  }

  async sd_0ngYMr3jwcFdpuor(bh) {
    try {
      const sd_sEYuUazYgJi81ngrInstance: sd_sEYuUazYgJi81ngr.idsutil =
        sd_sEYuUazYgJi81ngr.idsutil.getInstance();
      let outputVariables =
        await sd_sEYuUazYgJi81ngrInstance.getIDSClientInstance(undefined);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_iSz4VQptjllgOHJB(bh);
      //appendnew_next_sd_0ngYMr3jwcFdpuor
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0ngYMr3jwcFdpuor');
    }
  }

  async sd_iSz4VQptjllgOHJB(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Q2c2RtIANEnSJGeV(bh);
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
        bh = await this.sd_26qh4ybCJIt1pTdg(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iSz4VQptjllgOHJB');
    }
  }

  async sd_Q2c2RtIANEnSJGeV(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      //appendnew_next_sd_Q2c2RtIANEnSJGeV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Q2c2RtIANEnSJGeV');
    }
  }

  async sd_26qh4ybCJIt1pTdg(bh) {
    try {
      bh.local.res = {
        sessionExists: false,
      };
      await this.sd_KnrUTFr7J3p2TTnj(bh);
      //appendnew_next_sd_26qh4ybCJIt1pTdg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_26qh4ybCJIt1pTdg');
    }
  }

  async sd_KnrUTFr7J3p2TTnj(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KnrUTFr7J3p2TTnj');
    }
  }

  async sd_qSg9Y3OXvgBkB1p6(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_ItYJugnUHfnzrSr3(bh);
      //appendnew_next_sd_qSg9Y3OXvgBkB1p6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qSg9Y3OXvgBkB1p6');
    }
  }

  async sd_ItYJugnUHfnzrSr3(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_kiXVfO3scTLxq1QT(bh);
      //appendnew_next_sd_ItYJugnUHfnzrSr3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ItYJugnUHfnzrSr3');
    }
  }

  async sd_kiXVfO3scTLxq1QT(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_bCnWrstRE0Cxd7Vu(bh);
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
        bh = await this.sd_usp4hiStoIzhAUK6(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kiXVfO3scTLxq1QT');
    }
  }

  async sd_bCnWrstRE0Cxd7Vu(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_PihhomZXelr81vZ5(bh);
      //appendnew_next_sd_bCnWrstRE0Cxd7Vu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bCnWrstRE0Cxd7Vu');
    }
  }

  async sd_PihhomZXelr81vZ5(bh) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PihhomZXelr81vZ5');
    }
  }

  async sd_usp4hiStoIzhAUK6(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      await this.sd_zqgyT51Zm8BOKoEv(bh);
      //appendnew_next_sd_usp4hiStoIzhAUK6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_usp4hiStoIzhAUK6');
    }
  }

  async sd_zqgyT51Zm8BOKoEv(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zqgyT51Zm8BOKoEv');
    }
  }

  async sd_CHEXWqFaGQrYycqP(bh) {
    try {
      bh.local = {};
      bh = await this.sd_sbOJd0ATGRSDBqKP(bh);
      //appendnew_next_sd_CHEXWqFaGQrYycqP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CHEXWqFaGQrYycqP');
    }
  }

  async sd_sbOJd0ATGRSDBqKP(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_1HElpgsogJ2BXJRp(bh);
      //appendnew_next_sd_sbOJd0ATGRSDBqKP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sbOJd0ATGRSDBqKP');
    }
  }

  async sd_1HElpgsogJ2BXJRp(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_itIq0ZDt4W8bA36l(bh);
      //appendnew_next_sd_1HElpgsogJ2BXJRp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1HElpgsogJ2BXJRp');
    }
  }

  async sd_itIq0ZDt4W8bA36l(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_s0jOneLcvGRkCcT3(bh);
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
        bh = await this.sd_Dvh3BTlX2aiVtLpj(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_itIq0ZDt4W8bA36l');
    }
  }

  async sd_s0jOneLcvGRkCcT3(bh) {
    try {
      const sd_sEYuUazYgJi81ngrInstance: sd_sEYuUazYgJi81ngr.idsutil =
        sd_sEYuUazYgJi81ngr.idsutil.getInstance();
      let outputVariables = await sd_sEYuUazYgJi81ngrInstance.handleTokenExpiry(
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_SfmGigYYJwYnj3eM(bh);
      //appendnew_next_sd_s0jOneLcvGRkCcT3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s0jOneLcvGRkCcT3');
    }
  }

  async sd_SfmGigYYJwYnj3eM(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_AvvVBDNGQKRvqYOO(bh);
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
        bh = await this.sd_P5Je0V9TuXbg6OsA(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SfmGigYYJwYnj3eM');
    }
  }

  async sd_AvvVBDNGQKRvqYOO(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_NgvFIa6pB3kDCneT(bh);
      //appendnew_next_sd_AvvVBDNGQKRvqYOO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AvvVBDNGQKRvqYOO');
    }
  }

  async sd_NgvFIa6pB3kDCneT(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      await this.sd_9LMS4Qc46JOqRJ5D(bh);
      //appendnew_next_sd_NgvFIa6pB3kDCneT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NgvFIa6pB3kDCneT');
    }
  }

  async sd_9LMS4Qc46JOqRJ5D(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9LMS4Qc46JOqRJ5D');
    }
  }

  async sd_P5Je0V9TuXbg6OsA(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_oL5bu1Btmaf7zBAK(bh);
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
        bh = await this.sd_mbAKc28VHsRTCSJG(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P5Je0V9TuXbg6OsA');
    }
  }

  async sd_oL5bu1Btmaf7zBAK(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_48cWgMf0ADskDFS1(bh);
      //appendnew_next_sd_oL5bu1Btmaf7zBAK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oL5bu1Btmaf7zBAK');
    }
  }

  async sd_48cWgMf0ADskDFS1(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_mbAKc28VHsRTCSJG(bh);
      //appendnew_next_sd_48cWgMf0ADskDFS1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_48cWgMf0ADskDFS1');
    }
  }

  async sd_mbAKc28VHsRTCSJG(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mbAKc28VHsRTCSJG');
    }
  }

  async sd_Dvh3BTlX2aiVtLpj(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NITj8gv20rHZjdtd(bh);
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
        bh = await this.sd_4dxelaD1dGvhj4Mo(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Dvh3BTlX2aiVtLpj');
    }
  }

  async sd_NITj8gv20rHZjdtd(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_9LMS4Qc46JOqRJ5D(bh);
      //appendnew_next_sd_NITj8gv20rHZjdtd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NITj8gv20rHZjdtd');
    }
  }

  async sd_4dxelaD1dGvhj4Mo(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_9LMS4Qc46JOqRJ5D(bh);
      //appendnew_next_sd_4dxelaD1dGvhj4Mo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4dxelaD1dGvhj4Mo');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_vInEFfYqKnr1SFYS(bh)) ||
      (await this.sd_ITX2dqFbONMvNlHS(bh))
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
  async sd_vInEFfYqKnr1SFYS(bh) {
    const nodes = [
      'sd_p7VBMKKj74pnJ6Af',
      'sd_KD0hbp6BljcHl39F',
      'sd_gTrNswkQ6e8UYSWQ',
      'sd_aVRRFjx6uIVrYp87',
      'sd_cptTHJuc0beVYMmm',
      'sd_oXTYsLeLH52qqJuX',
      'sd_jlfYoA5d2samumKh',
      'sd_EAUnbnIcYMpCAIY3',
      'sd_IBLOkHaNhtX2h4NX',
      'sd_AST3N28QMxT55ks7',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_8F1L2FWZya4lhs4O(bh);
      //appendnew_next_sd_vInEFfYqKnr1SFYS
      return true;
    }
    return false;
  }
  async sd_ITX2dqFbONMvNlHS(bh) {
    const nodes = ['sd_s0jOneLcvGRkCcT3'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_NgvFIa6pB3kDCneT(bh);
      //appendnew_next_sd_ITX2dqFbONMvNlHS
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}

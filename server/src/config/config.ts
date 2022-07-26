export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'KLUti3x_loQSZAyJ-1Y4x',
    client_secret:
      'dcxSLs2R7OaZcs9KD4nReevALDBaAR_m9IhpCXJ6HpjyiyJYqpIw_HneFw7q7m0zie1zAsbVr_2hvKu-pOXL4Q',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};

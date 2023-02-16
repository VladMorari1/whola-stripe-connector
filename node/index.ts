import {PaymentProviderService} from '@vtex/payment-provider'

import {
    method,
} from '@vtex/api'

import WholaStripeProvider from './connector'
import {clients} from './clients'
import {inboundRequest, cancelPayment} from './handlers/paymentApp'


export default new PaymentProviderService({
    connector: WholaStripeProvider,
    clients,
    routes: {
        paymentApp: method({
            POST: [inboundRequest],
        }),
        cancelPayment: method({
            POST: [cancelPayment],
        }),
    },
})

import {ClientsConfig, IOClients} from '@vtex/api'

import Provider from './provider'

export class Clients extends IOClients {
    public get provider() {
        return this.getOrSet('provider', Provider)
    }
}

const EIGHT_SECONDS = 8000

export const clients: ClientsConfig<Clients> = {
    implementation: Clients,
    options: {
        default: {
            retries: 2,
            timeout: EIGHT_SECONDS,
        },
    },
}
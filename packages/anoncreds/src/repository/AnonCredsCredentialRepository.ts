import type { AgentContext } from '@aries-framework/core'

import { Repository, InjectionSymbols, StorageService, EventEmitter, injectable, inject } from '@aries-framework/core'

import { AnonCredsCredentialRecord } from './AnonCredsCredentialRecord'

@injectable()
export class AnonCredsCredentialRepository extends Repository<AnonCredsCredentialRecord> {
  public constructor(
    @inject(InjectionSymbols.StorageService) storageService: StorageService<AnonCredsCredentialRecord>,
    eventEmitter: EventEmitter
  ) {
    super(AnonCredsCredentialRecord, storageService, eventEmitter)
  }

  public async getByCredentialDefinitionId(agentContext: AgentContext, credentialDefinitionId: string) {
    return this.getSingleByQuery(agentContext, { credentialDefinitionId })
  }

  public async findByCredentialDefinitionId(agentContext: AgentContext, credentialDefinitionId: string) {
    return this.findSingleByQuery(agentContext, { credentialDefinitionId })
  }

  public async getByCredentialId(agentContext: AgentContext, credentialId: string) {
    return this.getSingleByQuery(agentContext, { credentialId })
  }

  public async findByCredentialId(agentContext: AgentContext, credentialId: string) {
    return this.findSingleByQuery(agentContext, { credentialId })
  }
}

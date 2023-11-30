import { cast } from '@deepkit/type'
import type { UserBannedEvent } from '../dto/user-banned.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class BannedUserInstance extends BaseInstance<UserBannedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<UserBannedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise BannedUserInstance',
        cause: err,
      })
    }
  }
}
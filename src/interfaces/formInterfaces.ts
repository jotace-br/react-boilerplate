import { Moment } from 'moment'

export interface FormValue {
  topMessage?: string
  topRangepicker: Moment[] | Date[]
  topFinalMessageEmote?: string
  topFive: TopFiveInterface[]
  outplays: DiscordInterface[]
}

export interface TopFiveInterface extends DiscordInterface {
  receivedRole: string
}

export interface DiscordInterface {
  discordLink: string
  discordUser: string
  roleMessage: string
}

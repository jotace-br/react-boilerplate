import React from 'react'
import { FormValue } from 'interfaces/formInterfaces'
import moment from 'moment'

interface FormatToMessageInterface {
  values: FormValue
}

export const FormatToMessage = ({ values }: FormatToMessageInterface) => {
  const {
    topMessage,
    topRangepicker,
    topFinalMessageEmote,
    topFive,
    outplays
  } = values

  const topMessageFormatted = `${topMessage} *(${moment(
    topRangepicker[0]
  ).format('DD/MM')}-${moment(topRangepicker[1]).format(
    'DD/MM'
  )})* ${topFinalMessageEmote}`

  const topFivePlaysFormatted = topFive?.map((item, idx) => {
    const { discordLink, discordUser, roleMessage, receivedRole } = item
    const ordinalNumber = moment.localeData().ordinal(idx + 1)
    let emoteByOrdinalNumber

    switch (idx + 1) {
      case 1:
        emoteByOrdinalNumber = '🥇'
        break
      case 2:
        emoteByOrdinalNumber = '🥈'
        break
      case 3:
        emoteByOrdinalNumber = '🥉'
        break
      default:
        emoteByOrdinalNumber = ''
        break
    }

    return (
      <>
        {emoteByOrdinalNumber} {ordinalNumber} ({discordLink.trim()}) *Made by:*{' '}
        {discordUser.trim()}. {roleMessage.trim()}. You received:{' '}
        {receivedRole.trim()}.
        <br />
      </>
    )
  })

  const outplaysFormatted = outplays?.map(
    ({ discordLink, discordUser, roleMessage }) => (
      <>
        {discordUser.trim()} ({roleMessage.trim()}): {discordLink.trim()}
        <br />
      </>
    )
  )

  const durationRole = moment(topRangepicker[1]).add(7, 'days').format('DD/MM')

  return (
    <div id="generated-div">
      <p>{topMessageFormatted}</p>
      {topFivePlaysFormatted}
      <br />
      <p>
        **Bonus:** Managed to outplay people (Everyone in this list received
        @Get outplayed, noob!):
      </p>
      {outplays?.length && outplaysFormatted}
      <br />
      <p>
        Your **new roles will remain until Saturday** *{durationRole}*, so
        congrats to everyone! :SGezreal:
      </p>
    </div>
  )
}

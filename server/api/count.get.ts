import { useSession } from 'h3'

const sessionPassword = 'nuxt3sessionnuxt3sessionnuxt3sessionnuxt3session'

export default eventHandler(async (event) => {
  const session = await useSession(event, {
    password: sessionPassword,
  })

  session.update((data) => ({ count: (+data.count ?? 0) + 1 }))
  return session.data.count
})

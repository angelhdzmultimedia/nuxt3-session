export default eventHandler(async (event) => {
  const session = await useSession(event, {
    password: 'asdasdasdasdfdsfdsfsdfsdfsdfsdfsdfsdfsd',
  })
  session.update((data) => ({ count: (+data.count ?? 0) + 1 }))

  return session.data.count
})

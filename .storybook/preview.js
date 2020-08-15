import GlobalStyles from '../src/styles/global'

export const Decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

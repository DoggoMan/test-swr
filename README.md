## Simple project for testing swr npm package.

Note that the src/client/index.tsx file is not included, but is formatted like below:

```tsx
import { AuthenticationContext, runWithAdal } from 'react-adal'

const authContext = new AuthenticationContext({
  tenant: 'REDACTED', // Tenant ID
  clientId: 'REDACTED', // Application Id
  endpoints: {
    api: 'REDACTED', // Application Id
  },
  cacheLocation: 'localStorage',
})

runWithAdal(
  authContext,
  () => {
    require('./react')
  },
  process.env.NODE_ENV === 'development' // Turn off login in development
)
```

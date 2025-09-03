import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {apolloClient} from '../shared/graphql/client'
import {ApolloProvider} from '@apollo/client/react'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={apolloClient}>
            <App/>
        </ApolloProvider>
    </StrictMode>,
)
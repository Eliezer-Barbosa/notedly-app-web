import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import GlobalStyle from "./components/GlobalStyle";

import Pages from "./pages";

// configure our API URI & cache
const uri = process.env.API_URI;
const cache = new InMemoryCache();

// configure Apollo Client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
}

export default App;

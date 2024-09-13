import "./App.css";
// requiring from apollo/client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
//instantiate client to use to access data in the server
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // adding apolloprovider that allow all childern inside to access data from the server
    <ApolloProvider client={client}>
      <>
        <Navbar />
        <Outlet />
      </>
    </ApolloProvider>
  );
}

export default App;

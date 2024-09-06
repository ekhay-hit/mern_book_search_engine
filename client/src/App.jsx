import "./App.css";

// requiring from apollo/client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

//instantiate client to use to access data in the server
const client = new ApolloClient({
  uri: "/graphql",
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

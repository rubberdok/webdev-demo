import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { TodoPage } from "./TodoPage";

const graphqlClient = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={graphqlClient}>
      <TodoPage />
    </ApolloProvider>
  );
};

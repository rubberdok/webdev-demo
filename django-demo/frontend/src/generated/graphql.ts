import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthorType = {
  __typename?: 'AuthorType';
  id: Scalars['ID'];
  name: Scalars['String'];
  todos: Array<TodoType>;
};

export type CreateAuthor = {
  __typename?: 'CreateAuthor';
  author?: Maybe<AuthorType>;
  ok?: Maybe<Scalars['Boolean']>;
};

export type CreateAuthorInput = {
  name: Scalars['String'];
};

export type CreateTodo = {
  __typename?: 'CreateTodo';
  ok?: Maybe<Scalars['Boolean']>;
  todo?: Maybe<TodoType>;
};

export type CreateTodoInput = {
  authorId: Scalars['ID'];
  text: Scalars['String'];
};

export type Mutations = {
  __typename?: 'Mutations';
  createAuthor?: Maybe<CreateAuthor>;
  createTodo?: Maybe<CreateTodo>;
};


export type MutationsCreateAuthorArgs = {
  authorData: CreateAuthorInput;
};


export type MutationsCreateTodoArgs = {
  todoData: CreateTodoInput;
};

export type Queries = {
  __typename?: 'Queries';
  authors?: Maybe<Array<Maybe<AuthorType>>>;
  todos?: Maybe<Array<Maybe<TodoType>>>;
};

export type TodoType = {
  __typename?: 'TodoType';
  author: AuthorType;
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type CreateTodoMutationVariables = Exact<{
  todoData: CreateTodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutations', createTodo?: { __typename?: 'CreateTodo', todo?: { __typename?: 'TodoType', id: string, text: string, author: { __typename?: 'AuthorType', id: string, name: string } } | null } | null };

export type CreateAuthorMutationVariables = Exact<{
  authorData: CreateAuthorInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutations', createAuthor?: { __typename?: 'CreateAuthor', author?: { __typename?: 'AuthorType', id: string, name: string } | null } | null };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Queries', todos?: Array<{ __typename?: 'TodoType', id: string, text: string, author: { __typename?: 'AuthorType', id: string, name: string } } | null> | null };


export const CreateTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"todoData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateTodoMutation, CreateTodoMutationVariables>;
export const CreateAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAuthorInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authorData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const TodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<TodosQuery, TodosQueryVariables>;
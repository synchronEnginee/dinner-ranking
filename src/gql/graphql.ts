/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** DateTime */
  DateTime: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
};

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The id of the document. */
  id: Scalars['String']['output'];
  /** The language of the document. */
  lang: Scalars['String']['output'];
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']['output']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']['output']>;
  /** The type of the document. */
  type: Scalars['String']['output'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allRecipes: RecipeConnectionConnection;
  recipe?: Maybe<Recipe>;
};


export type Query_AllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortDocumentsBy>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryAllRecipesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  fulltext?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after?: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before?: InputMaybe<Scalars['DateTime']['input']>;
  similar?: InputMaybe<Similar>;
  sortBy?: InputMaybe<SortRecipey>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  where?: InputMaybe<WhereRecipe>;
};


export type QueryRecipeArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type Recipe = _Document & _Linkable & {
  __typename?: 'Recipe';
  _linkType?: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['Json']['output']>;
  image?: Maybe<Scalars['Json']['output']>;
};

/** A connection to a list of items. */
export type RecipeConnectionConnection = {
  __typename?: 'RecipeConnectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RecipeConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type RecipeConnectionEdge = {
  __typename?: 'RecipeConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Recipe;
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String']['output'];
  /** The language of the document. */
  lang: Scalars['String']['output'];
  /** The type of the document. */
  type: Scalars['String']['output'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']['output']>;
};

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortRecipey {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export type WhereRecipe = {
  category?: InputMaybe<Scalars['String']['input']>;
  category_fulltext?: InputMaybe<Scalars['String']['input']>;
  /** description */
  description_fulltext?: InputMaybe<Scalars['String']['input']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  _linkType?: Maybe<Scalars['String']['output']>;
  height: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']['output']>;
};

export type Similar = {
  documentId: Scalars['String']['input'];
  max: Scalars['Int']['input'];
};

export type AllRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRecipesQuery = { __typename?: 'Query', allRecipes: { __typename?: 'RecipeConnectionConnection', totalCount: any, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean }, edges?: Array<{ __typename?: 'RecipeConnectionEdge', node: { __typename?: 'Recipe', image?: any | null, category?: string | null, description?: any | null, _meta: { __typename?: 'Meta', id: string, uid?: string | null, type: string, tags: Array<string>, firstPublicationDate?: any | null, lastPublicationDate?: any | null } } } | null> | null } };


export const AllRecipesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allRecipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRecipes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<AllRecipesQuery, AllRecipesQueryVariables>;
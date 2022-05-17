export type InternalError = {
  message: string;
  internalCode: string;
};

export interface ErrorDefinition {
  [errorType: string]: (message: string) => InternalError;
}

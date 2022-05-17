import { ErrorDefinition } from './utils/types';

enum InternalCodes {
  DEFAULT_ERROR = 'default_error',
  DATABASE_ERROR = 'database_error',
  INVALID_PARAMS_ERROR = 'invalid_params_error',
  UNIQUE_EMAIL_ERROR = 'unique_email_error',
  CREDENTIALS_ERROR = 'credentials_error',
  AUTHORIZATION_ERROR = 'authorization_error',
}

const ERROR_TYPES: ErrorDefinition = {
  defaultError: (message) => ({
    message,
    internalCode: InternalCodes.DEFAULT_ERROR,
  }),
  databaseError: (message) => ({
    message,
    internalCode: InternalCodes.DATABASE_ERROR,
  }),
  invalidParamsError: (message) => ({
    message,
    internalCode: InternalCodes.INVALID_PARAMS_ERROR,
  }),
  credentialsError: (message) => ({
    message,
    internalCode: InternalCodes.CREDENTIALS_ERROR,
  }),
};

export { ERROR_TYPES, InternalCodes };

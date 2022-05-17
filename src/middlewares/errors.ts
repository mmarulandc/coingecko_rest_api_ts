import { InternalCodes } from '../errors';
import { ErrorRequestHandler } from '../utils/types';
const DEFAULT_STATUS_CODE = 500;

type StatusCode = number;

interface StatusCodeMap {
  [internalCode: string]: StatusCode;
}
const statusCodes: StatusCodeMap = {
  [InternalCodes.DATABASE_ERROR]: 503,
  [InternalCodes.AUTHORIZATION_ERROR]: 401,
  [InternalCodes.CREDENTIALS_ERROR]: 401,
  [InternalCodes.INVALID_PARAMS_ERROR]: 400,
  [InternalCodes.DEFAULT_ERROR]: DEFAULT_STATUS_CODE,
};

const handleError: ErrorRequestHandler = (error, _, res, next) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    // Unrecognized error, notifying it to rollbar.
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  return res.send({
    message: error.message,
    internal_code: error.internalCode,
  });
};

export { handleError };

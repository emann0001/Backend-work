// utils/ApiError.js

/**
 * Custom error class for API errors.
 * This helps in sending standardized error responses.
 */
class ApiError extends Error {
    constructor(statusCode, message = 'Something went wrong', isOperational = true, stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = isOperational;

        // Set specific error properties for common codes
        if (statusCode === 401) this.message = message || 'Unauthorized access. Please log in.';
        if (statusCode === 403) this.message = message || 'Forbidden. You do not have permission to perform this action.';
        if (statusCode === 404) this.message = message || 'Resource not found.';
        if (statusCode === 400) this.message = message || 'Bad Request. Check your request body.';

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;
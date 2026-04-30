class AppError extends Error {
    constructor(message, statusCode) {
        super(message); // calls Error constructor
        this.statusCode = statusCode;

        // Optional but useful
        this.isOperational = true;
    }
}

module.exports = AppError;
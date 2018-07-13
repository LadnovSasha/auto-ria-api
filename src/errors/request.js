module.exports = class RequestError extends Error {
	constructor(status, message, ...args) {
		super(message, ...args);
		this.status = status;
	}
}

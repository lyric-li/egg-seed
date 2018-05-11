class ServiceError extends Error {
  constructor(errors) {
    super(errors);
    this.name = 'ServiceError';
    this.errors = errors;
  }
}

module.exports = ServiceError;
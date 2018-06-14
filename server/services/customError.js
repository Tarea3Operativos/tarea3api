const GlobalServices = {

  createCustomError (status, message) {
    // Create mail object to send
    return {
      error_code : status,
      message    : message,
    };
  },
};

export default GlobalServices;

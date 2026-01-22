
export const API_BASE_URL = 'https://staging.tbim.appbkk.com/wp-json';

export const API_ENDPOINTS = {
  // Validation Endpoints
  VALIDATE_EMAIL: `${API_BASE_URL}/validate/check-email/`,
  VALIDATE_PHONE: `${API_BASE_URL}/validate/check-phone/`,
  VALIDATE_TAX_ID: `${API_BASE_URL}/validate/check-tax-id/`,

  // Registration Endpoints
  REGISTER_LOCAL: `${API_BASE_URL}/memberlocal/register`,
  REGISTER_FOREIGN: `${API_BASE_URL}/memberforeign/register`,
  REGISTER_CORPORATE: `${API_BASE_URL}/membercorporate/register`,
};

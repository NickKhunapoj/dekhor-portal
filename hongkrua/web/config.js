const NEXT_PUBLIC_BASE_DOMAIN_WITH_PROTOCOL = process.env.NEXT_PUBLIC_BASE_DOMAIN_WITH_PROTOCOL;
const NEXT_PUBLIC_BASE_SERVER_PATH = process.env.NEXT_PUBLIC_BASE_SERVER_PATH || '/api/eats';
const NEXT_PUBLIC_BASE_WEB_PATH = process.env.NEXT_PUBLIC_BASE_WEB_PATH || '/eats';
exports.NEXT_PUBLIC_BASE_WEB_PATH = NEXT_PUBLIC_BASE_WEB_PATH;
exports.NEXT_PUBLIC_BASE_API_URL = `${NEXT_PUBLIC_BASE_DOMAIN_WITH_PROTOCOL}${NEXT_PUBLIC_BASE_SERVER_PATH}`;
import { withDefaults, json } from 'howard';
import config from '.';

const api = withDefaults({
  url: config.apiHost,
});

const apiFetch = (path, options = {}) => json(api(path, options));

export default apiFetch;

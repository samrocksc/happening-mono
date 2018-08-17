import { withDefaults, json } from 'howard';

const api = withDefaults({
  url: 'http://localhost:9000/api/v1',
});

const apiFetch = (path, options = {}) => json(api(path, options));

export default apiFetch;

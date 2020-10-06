import apiKeys from '../var/apiKeys';
import functionsToLoad from '../functions/functionsToLoad';

const loadAutocompleteCDN = () => {
  const autocompleteScript = document.createElement('script');
  autocompleteScript.src = (`https://maps.googleapis.com/maps/api/js?key=${apiKeys.AUTOCOMPLETE_KEY}&libraries=places`);
  document.body.appendChild(autocompleteScript);
  autocompleteScript.type = 'text/javascript';
  autocompleteScript.addEventListener('load', functionsToLoad());
};

export default loadAutocompleteCDN;

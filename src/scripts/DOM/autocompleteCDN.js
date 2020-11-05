import apiKeys from '../var/apiKeys';
import condForLoading from '../functions/condForLoading';

const loadAutocompleteCDN = () => {
  const autocompleteScript = document.createElement('script');
  autocompleteScript.src = (`https://maps.googleapis.com/maps/api/js?key=${apiKeys.AUTOCOMPLETE_KEY}&libraries=places`);
  document.body.appendChild(autocompleteScript);
  autocompleteScript.type = 'text/javascript';
  condForLoading();
};

export default loadAutocompleteCDN;

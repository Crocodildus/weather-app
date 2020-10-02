import apiKeys from '../var/apiKeys';

const loadAutocompleteCDN = () => {
  const autocompleteScript = document.createElement('script');
  autocompleteScript.src = (`https://maps.googleapis.com/maps/api/js?key=${apiKeys.AUTOCOMPLETE_KEY}&libraries=places`);
  document.body.appendChild(autocompleteScript);
  autocompleteScript.type = 'text/javascript';
};

export default loadAutocompleteCDN;

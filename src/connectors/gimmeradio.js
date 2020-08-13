'use strict';

Connector.playerSelector = '.hjxFdN';

Connector.artistSelector = '.kFfdBo';

Connector.trackSelector = '.fZIbtd';

Connector.onReady = Connector.onStateChanged;

Connector.isScrobblingAllowed = () => {
	return !(
		Connector.getArtist().includes('Gimme Country') ||
		Connector.getArtist().includes('Gimme Radio')
	);
};

import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

import './App.css';
import { ImageDetailsPage } from './ImageDetailsPage';

export function App() {
	const [data, setData] = useState(null);
	const [selectedArtwork, setSelectedArtwork] = useState(null);
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/api.js
		searchArtworks(query).then((json) => {
			setData(json.data);
		});
	}

	function onSelectArtwork(artwork) {
		setSelectedArtwork(artwork);
	}

	function onBackClick() {
		setSelectedArtwork(null);
	}

	return (
		<div className="App">
			{selectedArtwork ? (
				<ImageDetailsPage
					imageDetails={selectedArtwork}
					onBackClick={onBackClick}
				/>
			) : (
				<>
					<h1>TCL Career Lab Art Finder</h1>
					<SearchForm onSearchSubmit={onSearchSubmit} />

					{data && (
						<div>
							{data.length === 0 ? (
								<p>No results found.</p>
							) : (
								<ul>
									{data.map((artwork) => (
										<li key={artwork.image_id}>
											<button
												className="link"
												onClick={() => onSelectArtwork(artwork)}
											>
												{artwork.title} by {artwork.artist_title ?? 'Unknown'}
											</button>
										</li>
									))}
								</ul>
							)}
						</div>
					)}
					<Footer />
				</>
			)}
		</div>
	);
}

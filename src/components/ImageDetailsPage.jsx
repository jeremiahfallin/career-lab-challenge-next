import './ImageDetailsPage.css';

export const ImageDetailsPage = ({ imageDetails, onBackClick }) => {
	const { title, artist_title, thumbnail, image_id } = imageDetails;

	return (
		<article className="ImageDetails">
			<div className="title">
				<span className="title-text">
					<h1 className="artwork-name">{title}</h1> by{' '}
					{artist_title ?? 'Unknown'}
				</span>
				<button onClick={onBackClick}>Back</button>
			</div>

			<img
				alt={thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
			/>
		</article>
	);
};

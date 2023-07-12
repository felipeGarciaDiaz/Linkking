import React from 'react';
import { Grid, TextField } from '@mui/material';
function SocialMediaInput(props) {
	return (
		<React.Fragment>
			{' '}
			<br />
			<Grid item xs={12} align="center">
				<TextField
					color="error"
					id="social-media-links"
					label="social media"
					variant="outlined"
					size="medium"
				/>{' '}
			</Grid>
		</React.Fragment>
	);
}

export default SocialMediaInput;

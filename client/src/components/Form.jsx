import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import SocialMediaInput from './childComponent/SocialMediaInput';
function Form(props) {
	let [socialMediaInputs, setSocialMediaInputs] = useState([
		<SocialMediaInput key={0} />,
	]);
	let addMoreContent = (e) => {
		e.preventDefault();
		setSocialMediaInputs([
			...socialMediaInputs,
			<SocialMediaInput key={socialMediaInputs.length} />,
		]);
	};
	return (
		<React.Fragment>
			<form>
				<Grid item xs={12} align="center">
					<TextField
						color="error"
						id="username"
						label="Username"
						variant="outlined"
						size="medium"
					/>
					<TextField
						InputLabelProps={{
							shrink: true,
							htmlFor: 'profile-pic',
						}}
						inputProps={{
							accept: 'image/*',

							title: 'Profile Picture',
						}}
						color="error"
						id="profile-pic"
						variant="outlined"
						type="file"
						size="medium"
					/>
				</Grid>
				{socialMediaInputs}
				<br />
				<Grid item xs={12} align="center">
					<Button
						id="add-more-content"
						variant="contained"
						onClick={addMoreContent}
					>
						+
					</Button>
				</Grid>
			</form>
		</React.Fragment>
	);
}

export default Form;

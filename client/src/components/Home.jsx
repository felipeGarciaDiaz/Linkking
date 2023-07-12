import React from 'react';
import { Grid, Typography } from '@mui/material';
import Form from './Form';
function Home(props) {
	return (
		<React.Fragment>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item xs={10} sm={10} md={8} lg={4} xl={4} id="main-block">
					<Typography align="center">
						<h1 id="title">Blinker</h1>
						<hr id="title-underline" />
						<h4 id="subtitle">
							Create your own custom blink room, to share all your
							social media accounts with your followers.
						</h4>
					</Typography>

					<Form />
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

export default Home;

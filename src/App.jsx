import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from 'emotion';
import Avatar from './component/profile/Avatar';
import GeneralInfo from './component/generalInfo/GeneralInfo';

const mainPage = css({
	padding: '10px 25%',
	backgroundColor: 'lightgray',
	height: '100%'
});

const Title = styled.h1({
	textAlign: 'center',
	marginTop: 0
});

const Info = styled.div({
	display: 'flex'
})

const DetailBlock = css({
    marginLeft: '5%'
})

class App extends Component {
	render() {
		return (
			<div className={mainPage}>
					<Title>Resume</Title>
					<Info>
						<Avatar />
                        <GeneralInfo
                            className={DetailBlock}
                        />
					</Info>
			</div>
		);
	}
}

export default App;

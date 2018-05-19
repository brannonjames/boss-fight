import React from 'react';
import classNames from 'classnames';
import '../styles/BossCard.css';
import PowerDisplay from './PowerDisplay';


class BossCard extends React.Component {


	render(){
		const {photo, name, offense, toggleCard, selected, showing, isPlayer, isBot, newPower} = this.props;
		const cardStyle = classNames({
			BossCard: true,
			playerCard: isPlayer,
			botCard: isBot,
			playerFocus: selected && isPlayer,
			botFocus: selected && isBot
		})
		return (
			<div
				onClick={toggleCard}
				className={cardStyle}
			>
				{!showing ? <div className="card-back"></div> : null}
				<h3>{name}</h3>
				<img src={photo} alt={name} />
				<PowerDisplay
					power={offense}
					newPower={newPower}
				/>
			</div>
		)
	}


}



export default BossCard;

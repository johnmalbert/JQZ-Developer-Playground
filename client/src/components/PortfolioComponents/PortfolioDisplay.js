import React from 'react'
import LinksToDocs from './LinksToDocs';
import PortfolioAwards from './PortfolioAwards';
import PortfolioBanner from './PortfolioBanner';
import PortfolioBody from './PortfolioBody';

const PortfolioDisplay = props => {
    const { guy, portfolio } = props;
    //portfolio components: award1, award2, award3, linkedIn, github, facebook, instagram, bio
    return (
        <div>
            <h1 className="text-center"> Hi, My Name is {portfolio.name}</h1>
            <PortfolioBanner /> 
            <div className="row p-5">
                <div className="col-sm-2">
                    <LinksToDocs 
                        linkedIn = {portfolio.linkedIn}
                        instagram = {portfolio.instagram}
                        facebook = {portfolio.facebook}
                        github = {portfolio.github}
                    />
                </div>
                <div className="col-sm-8">
                    <PortfolioBody guy={guy} bio={portfolio.bio} id={portfolio._id} portfolio={portfolio}/>
                </div>
                <div className="col-md-2">
                    <PortfolioAwards award1={portfolio.award1} award2={portfolio.award2} award3={portfolio.award3}/>
                </div>
            </div>
        </div>
    )
}

export default PortfolioDisplay

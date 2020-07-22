import React from 'react';
import BigText from '../component/BigText';

class Home extends React.Component {
    render() {

        const { search } = this.props.location;
        return(
        <div>
            <BigText>홈</BigText>
            { search }
        </div>
        )
    }
}
export default Home;
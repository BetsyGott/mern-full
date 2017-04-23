import React from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';

export class Container extends React.Component {

    render (){
        const style = {
            width: '100vw',
            height: '100vh'
        };

        return (
           <div style={style}>
                Hello from the container!
               <Map google={this.props.google}/>
           </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAZatIWSbRdGzkcJ0nGsb3cPWN1xs3vv-Y"
})(Container);
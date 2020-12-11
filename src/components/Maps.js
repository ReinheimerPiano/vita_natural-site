import React from 'react'
import GoogleMapReact from 'google-map-react'
import loc from "../img/loc.svg";


const defaultProps = {
    center: {
        lat: -15.8041264,
        lng: -47.9012000,
    },
    zoom: 18,
}

const AnyReactComponent = ({ text }) => <div className="column h-100 is-flex is-hcentered" style={{ flexDirection: "column" }}>
    <section className='is-flex is-vcentered' style={{ flexDirection: "row", width: "20rem" }}>
        <img src={loc}
            className="h-70 pr-2"
            style={{ height: "2.7rem", marginTop: "2rem" }}
            alt='locIcon' />
        <div style={{width: "20rem", fontSize: "0.8rem"}}>
            <h2 className='title is-4 mb-1' style={{ color: "#00b0c4" }}><b>{text}</b></h2>
            <p style={{ color: "gray" }}>SEPS EQ.705/905 Edifício Mont Blanc</p>
            <p style={{ color: "gray" }}>Bloco C - Sala 204. CEP: 70390-055 - Brasília DF.</p>
        </div></section></div>

const GoogleMap = () => (
    <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBkFlKP3IHFQUAGHyVm8IEhZK1U6167oaQ' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <AnyReactComponent
                lat={-15.8041264}
                lng={-47.9019025}
                text={'Vita Natural'}
            />
        </GoogleMapReact>
    </div>
)

export default GoogleMap

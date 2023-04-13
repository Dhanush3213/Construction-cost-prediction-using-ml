import React from 'react'
import {
    Map,
    BasemapContainer,
    ContextMenu,
    Controls,
    LayerPanel,
    Popup,
    loadDataLayer
} from '@bayer/ol-kit'

const Mapp = () => {
    const onMapInit = async map => {
        console.log('we got a map!', map)
        // nice to have map set on the window while debugging
        window.map = map

        // find a geojson or kml dataset (url or file) to load on the map
        const data = 'https://data.nasa.gov/api/geospatial/7zbq-j77a?method=export&format=KML'
        const dataLayer = await loadDataLayer(map, data)
        // set the title on the layer to show in LayerPanel
        dataLayer.set('title', 'NASA Data')
    }

    return (
        <Map onMapInit={this.onMapInit} fullScreen>
            <BasemapContainer />
            <ContextMenu />
            <Controls />
            <LayerPanel />
            <Popup />
        </Map>
    )
}

export default Mapp
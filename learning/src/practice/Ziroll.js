import React from 'react'

import Props from "./ZirollFiles/Props"
import EventState from "./ZirollFiles/EventState"
import CondRender from './ZirollFiles/CondRender'
import Forms from './ZirollFiles/Forms'
import ArrayTrick from "./ZirollFiles/ArrayTrick"
import Travel from "./ZirollFiles/Travel"
import data from "./ZirollFiles/TravelData"
import monkey from "./images/karamja.png"

export const Ziroll = {
    App() {

        const [isNumComponents, setIsNumComponents] = React.useState(0)

        const travels = data.map(location => {
            return (
                <Travel
                    key={location.id}
                    location={location}
                    class="hidden"
                />
            )
        })
        return(
            <div>
                <Props 
                    img={monkey}
                    name="Karamja Monka"
                    class="hidden"
                    alt="hello world"
                />
                <ArrayTrick 
                    class="hidden"
                />
                {travels}
                <EventState
                    class="hidden"
                    numComponents={isNumComponents}
                    setNumComponents={setIsNumComponents}
                />
                <CondRender
                    class="hidden"
                />
                <Forms
                    class="visible"
                />

            </div>
        )
    }
}
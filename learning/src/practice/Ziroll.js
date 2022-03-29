import Props from "./ZirollFiles/Props"
import Event from "./ZirollFiles/Event"
import ArrayTrick from "./ZirollFiles/ArrayTrick"
import Travel from "./ZirollFiles/Travel"
import data from "./ZirollFiles/TravelData"
import monkey from "./images/karamja.png"

export const Ziroll = {
    App() {
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
                <Event
                    class="visible"
                />
            </div>
        )
    }
}
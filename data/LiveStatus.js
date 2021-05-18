import LiveStatusBC from '../comps/LiveStatusBC'
import LiveStatusCA from '../comps/LiveStatusCA'
import LiveStatusON from '../comps/LiveStatusON'
import LiveStatusAB from '../comps/LiveStatusAB'
import LiveStatusQC from '../comps/LiveStatusQC'
import World from '../comps/WorldStatus'
import Last from '../comps/InfoEnd';

export const info = {
    zero: {
        head:"",
        text: "",
        component: <World />,
        bgcolor1:"#FF7A00",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },

    one: {
        head:"Covid-19 Daily Statistics",
        text: "Canada",
        component:<LiveStatusCA/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },
    two: {
        head:"Covid-19 Daily Statistics",
        text: "British Columnbia",
        component:<LiveStatusBC/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },
    three: {
        head:"Covid-19 Daily Statistics",
        text: "Ontario",
        component:<LiveStatusON/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#FF7A00",
        bgcolor5:"#9A9999",
        bgcolor6:"#9A9999",
    },
    four: {
        head:"Covid-19 Daily Statistics",
        text: "Quebec",
        component:<LiveStatusQC/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#FF7A00",
        bgcolor6:"#9A9999",
    },
    five: {
        head:"Covid-19 Daily Statistics",
        text: "Alberta",
        component:<LiveStatusAB/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",
        bgcolor4:"#9A9999",
        bgcolor5:"#9A9999",
        bgcolor6:"#FF7A00",
    },
    six: {
        head:"End of Section",
        text:"",
        component:<Last QuizRoute="../dashboard" />
    }
}
import Last from '../comps/InfoEnd';
import ImageCompGP1 from '../comps/ImageCompGP1'
import ImageCompGP1_2 from '../comps/ImageCompGP1_2'
import ImageCompGP2 from '../comps/ImageCompGP2'
import ImageCompGP2_2 from '../comps/ImageCompGP2_2'
import ImageCompGP2_3 from '../comps/ImageCompGP2_3'
import ImageCompGP3 from '../comps/ImageCompGP3'
import ImageCompGP3_2 from '../comps/ImageCompGP3_2'
import ImageCompGP3_3 from '../comps/ImageCompGP3_3'
export const info = {
    one: {
        head:"1.Indoor & outdoor gatherings",
        text: "No indoor social gatherings of any size at your residence with anyone other than your household .For example: Do not invite friends or extended family inside your residence or vacation accommodationand  host a party or event inside your house",
        component:<ImageCompGP1/>,
        display:"none",
        bgcolor1:"#FF7A00",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",

    },
    two: {
        head:"1.Indoor & outdoor gatherings",
        text: "Up to 10 people can gather outdoors. For example: Up to 10 people can gather at a park,  beach and backyard of a residence.Do not gather with several groups of new people.Continue to use COVID-19 layers of protection and maintain physical distancing. Patios and outdoor areas at restaurants, pubs and bars are not included.",
        component:<ImageCompGP1_2/>,
        display:"none",
        bgcolor1:"#FF7A00",
        bgcolor2:"#9A9999",
        bgcolor3:"#9A9999",

    },
    
    three: {
        head:"2. Mask requirements in public indoor settings",
        text: "Subject to a $230 violation ticket if you: 1.Do not wear a mask in an indoor public setting, unless you are exempt.",
        component:<ImageCompGP2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",

    },
    four: {
        head:"2. Mask requirements in public indoor settings",
        text: "Subject to a $230 violation ticket if you: 2.Refuse to comply with the direction of an enforcement officer.",
        component:<ImageCompGP2_2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",

    },
    five: {
        head:"2. Mask requirements in public indoor settings",
        text: "Subject to a $230 violation ticket if you: 3.Engage in abusive or belligerent behaviour in relation to the face coverings order.",
        component:<ImageCompGP2_3/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#FF7A00",
        bgcolor3:"#9A9999",

    },
    six: {
        head:"3. Restrictions on travel between regions of the province",
        text: "Travel into and out of the regions for non-essential reasons is not allowed and is now prohibited by law. The regions are: 1.Lower Mainland and Fraser Valley (Fraser Health and Vancouver Coastal Health)",
        component:<ImageCompGP3/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",

    },
    seven: {
        head:"3. Restrictions on travel between regions of the province",
        text: "2.Northern/Interior (Northern Health and Interior Health, including Bella Coola Valley, the Central Coast and Hop) Residents from the Hope area can travel to Chilliwack for essential goods and supplies.",
        component:<ImageCompGP3_2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",

    },
    eight: {
        head:"3. Restrictions on travel between regions of the province",
        text: "2.Northern/Interior (Northern Health and Interior Health, including Bella Coola Valley, the Central Coast and Hope) Residents from the Bella Coola Valley and Central Coast area can travel to Port Hardy for essential goods and supplies.",
        component:<ImageCompGP3_2/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",

    },
    nine: {
        head:"3. Restrictions on travel between regions of the province",
        text: "Travel into and out of the regions for non-essential reasons is not allowed and is now prohibited by law. The regions are:3.Vancouver Island (Vancouver Island Health)",
        component:<ImageCompGP3_3/>,
        display:"none",
        bgcolor1:"#9A9999",
        bgcolor2:"#9A9999",
        bgcolor3:"#FF7A00",

    },
    ten: {
        head:"End of Section",
        text:"",
        component:<Last QuizRoute="../GQ3" />
    }



}
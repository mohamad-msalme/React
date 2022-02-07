import React from "react";
// import AccordionWidget from "./accordionwidget/AccordionWidget";
import WikipadiaWidget from "./wikipediawidget/dashboard/WikipadiaWidget";
export default function App(props) {


    return (
        <div>
            <WikipadiaWidget defaultSearchTearm = 'Java Script'/>
        </div>
    );
}

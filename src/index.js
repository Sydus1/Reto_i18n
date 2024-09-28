import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";

const language = navigator.language || navigator.userLanguage;

let messages;
if (language.startsWith('es')) {
    messages = localeEsMessages;
} else {
    messages = localeEnMessages;
}

ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
        <JobsList />
    </IntlProvider>,
    document.getElementById("root")
);

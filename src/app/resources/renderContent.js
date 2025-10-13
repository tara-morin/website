import { person, newsletter, social, home, about, machine_learning, ux, web_dev, resume } from './content';
import { createI18nContent } from './content-i18n';
import { i18n } from './config';

const renderContent = (t) => {
    if ( i18n ) {
        return createI18nContent(t);
    } else {
        return {
            person,
            social,
            newsletter,
            home,
            machine_learning,
            ux,
            web_dev,
            resume
        }
    }
};

export { renderContent };
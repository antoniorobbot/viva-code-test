import { browser, by, element } from 'protractor';

export class PropertiesPage {
    navigateTo() {
        return browser.get('/properties');
    }

    enterNumberBed(beds) {
        element(by.id('bedsInput')).sendKeys(beds);
    }

    enterNumberBaths(baths) {
        element(by.id('bathsInput')).sendKeys(baths);
    }

    getPropertiesList() {
        return element(by.id('properties-list'));
    }



}

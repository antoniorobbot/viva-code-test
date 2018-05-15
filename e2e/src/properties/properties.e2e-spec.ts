import { browser } from 'protractor';
import { PropertiesPage } from './properties.po';

describe('properties', () => {
    let properties: PropertiesPage;

    beforeEach(() => {
        properties = new PropertiesPage();
    });

    it('should display correct title', function () {
        expect(browser.getTitle()).toEqual('VivaFront');
    });

    it('should filter properties by beds', async function () {
        properties.navigateTo();
        properties.enterNumberBed(1);
        expect(properties.getPropertiesList().isPresent()).toBeTruthy();
    });

    it('should filter properties by baths', async function () {
        properties.navigateTo();
        properties.enterNumberBaths(2);
        expect(properties.getPropertiesList().isPresent()).toBeTruthy();
    });
});


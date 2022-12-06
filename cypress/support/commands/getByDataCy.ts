import { DataCy } from './typings/dataCy'
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * 
             * @param input data-cy text value
             * @example
             * //this command
             * cy.getByDataCy('email')
             */
            getByDataCy(input: DataCy): Chainable<any>
        }
    }
}
Cypress.Commands.add('getByDataCy', (input: DataCy) => {
    return cy.get(`[data-cy=${input}]`)
})
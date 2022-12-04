import * as lists from '../fixtures/list.json' 
describe('Tests with TS',()=>{
    it('Playing with TS',()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Log in').should('be.visible')
        cy.get('[data-cy=board-item]').trigger('mouseover').invoke('text').should('contain','groceries')
        cy.get('[data-cy=board-item]').realHover()
    })
    it('Playing with data',()=>{
        cy.intercept('POST','/api/lists')
        .as('listCreate')
        cy.visit('http://localhost:3000/board/1')
        lists.forEach(list => {
            cy.get('[data-cy=add-list]')
            .type(`${list.name}{enter}`)
            cy.wait('@listCreate')
            .its('response.body.order')
            .should('eq',list.order)
        
        });
       
    })
})

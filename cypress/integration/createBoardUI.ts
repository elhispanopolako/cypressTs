it('Create new board', () => {
    cy.visit('/')
    cy.getByDataCy('create-board')
    cy.getByDataCy('board-item')
})
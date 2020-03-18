describe ('Test App', () => {

  it ('testing app', () => {
    cy.visit ('/');
    cy.get('[data-cy=test1]').should('contain', 'What Equipment Do You Have?');
  });
});
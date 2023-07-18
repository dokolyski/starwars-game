export function testGameLogic() {
  cy.getByDataCy('next-turn-btn').should('be.disabled');
  // 1) both cards hidden
  cy.getByDataCy('left-card').within(() =>
    cy.getByDataCy('card').should('have.class', 'card__rotate')
  );
  cy.getByDataCy('right-card').within(() =>
    cy.getByDataCy('card').should('have.class', 'card__rotate')
  );
  // 2) left card visible, right hidden
  cy.getByDataCy('left-card').within(() =>
    cy.getByDataCy('card').should('not.have.class', 'card__rotate')
  );
  cy.getByDataCy('right-card').within(() =>
    cy.getByDataCy('card').should('have.class', 'card__rotate')
  );
  // 3) both cards visible
  cy.getByDataCy('left-card').within(() =>
    cy.getByDataCy('card').should('not.have.class', 'card__rotate')
  );
  cy.getByDataCy('right-card').within(() =>
    cy.getByDataCy('card').should('not.have.class', 'card__rotate')
  );
}

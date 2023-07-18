// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    getByDataCy(dataCy: string): Chainable<JQuery<HTMLElement>>;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('getByDataCy', (dataCy) => {
  return cy.get(`[data-cy=${dataCy}]`);
});

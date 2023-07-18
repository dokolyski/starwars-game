import { testGameLogic } from '../support/app.po';

describe('starwars-game', () => {
  beforeEach(() => cy.visit('/'));

  it('should go through the whole gameplay', () => {
    // navigate to resource selection
    cy.getByDataCy('to-resource-selection-button').click();
    // select resource
    cy.getByDataCy('select-starship-resource-button').click();
    // should be in the game url with selected resource in query param
    cy.url().should('contain', '/game?resource=starships');
    // should follow the cart loading logic
    testGameLogic();
    // should allow to play another round
    cy.getByDataCy('next-turn-btn').click();
    // should again follow the cart loading logic
    testGameLogic();
    // should allow to quit the game
    cy.getByDataCy('finish-game-btn').click();
    // should navigate back to the initial page
    cy.getByDataCy('to-resource-selection-button').should('exist');
  });
});

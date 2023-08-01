import { Given, When,  Then } from "@badeball/cypress-cucumber-preprocessor";

  When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.get('[name="q"]').should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});
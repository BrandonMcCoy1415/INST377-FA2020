describe('Lab 1', () => {
  it('Successfully loads', () => {
    cy.fixture('test_values').then((json) => {
      cy.visit(`https://brandonmccoy1415.github.io/public/lab_1/`); // change URL to match your dev URL
      cy.htmlvalidate();
    });
  });

  it('Contains a page title with your name in it', () => {
    cy.fixture('test_values').then((json) => {
      cy.get('head title')
        .contains(json.name);
    });
  });

  it('Contains a header element with your name in it', () => {
    cy.fixture('test_values').then((json) => {
      cy.get('body h1')
        .contains(json.name);
    });
  });

  it('Contains an unordered list with three elements', () => {
    cy.get('ul')
      .find('li')
      .should('have.length', 3);
  });

  it('Contains an adorable picture, with alt text', () => {
    cy.get('img').each(($el) => {
      cy.wrap($el)
        .should('have.attr', 'alt');
    });
  });

  it('Should have an image that fits on the page - no bigger than 480px', () => {
    cy.get('img')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
        expect($img[0].naturalWidth).to.be.lessThan(481);
      });
  });
});

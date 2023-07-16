import { InitialPageComponent } from './initial-page.component';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('InitialPageComponent', () => {
  const createComponent = createComponentFactory({
    component: InitialPageComponent,
    imports: [InitialPageComponent, RouterTestingModule],
  });

  const testSetup = () => {
    return createComponent();
  };

  describe('on to resource selection button clicked', () => {
    it('should navigate to resource selection', () => {
      // Arrange
      const spectator = testSetup();
      const navigationSpy = jest.spyOn(spectator.inject(Router), 'navigate');

      // Act
      spectator.click('[data-cy="to-resource-selection-button"]');

      // Assert
      expect(navigationSpy).toHaveBeenCalledWith(['/select-resource']);
    });
  });
});

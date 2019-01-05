import { RouterExercisesModule } from './router-exercises.module';

describe('RouterExercisesModule', () => {
  let routerExercisesModule: RouterExercisesModule;

  beforeEach(() => {
    routerExercisesModule = new RouterExercisesModule();
  });

  it('should create an instance', () => {
    expect(routerExercisesModule).toBeTruthy();
  });
});

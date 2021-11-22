import { Store } from './store';

class AuthState {
  user!: any;
  error!: any;
}

class TestStore extends Store<AuthState>{
  constructor() {
    super({
      user: undefined,
      error: undefined,
    });
  }
}

describe('Store', () => {
  it('should create an instance', () => {
    expect(new TestStore()).toBeTruthy();
  });
});
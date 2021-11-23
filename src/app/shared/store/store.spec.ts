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

  testState(text: string): void {
    this.setState({
      ...this.state,
      user: text,
    });
  }
}

describe('Store', () => {
  it('should create an instance', () => {
    expect(new TestStore()).toBeTruthy();
  });

  it('should test get and test status', done => {
    const store = new TestStore();
    store.testState('test');
    store.state$.subscribe(res => {
      expect(res.user).toEqual('test');
      done();
    });
  });
});
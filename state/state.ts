interface State {
  getStatus(): void;
}

export class OnlineState implements State {
  getStatus(): void {
    console.log("status is online!");
  }
}

export class OfflineState implements State {
  getStatus(): void {
    console.log("status is ofline");
  }
}

export class Context {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  set State(state: State) {
    this.state = state;
  }

  public logState(): void {
    this.state.getStatus();
  }
}

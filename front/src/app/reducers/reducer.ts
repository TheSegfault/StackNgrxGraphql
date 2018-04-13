import { Action } from '@ngrx/store';
import { Log } from '../services/logging.service';

interface IState {
  readonly message: string;
}

export function reducer(
  state: IState = { message: 'Hi there' },
  action: Action,
): IState {
  Log.info(action.type, state);

  switch (action.type) {
    case 'TEST_ACTION':
      return { message: 'Test Action' } as IState;

    case 'TEST_ACTION2':
      return { message: 'Test Action2' } as IState;

    case 'TEST_ACTIO3':
      return { message: 'Test Action3' } as IState;

    default:
      Log.info(`Action ${action.type} not found.`);
  }
}

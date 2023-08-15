import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ShowLoading, UpdateEmail } from './app.actions';

export interface AppStateModel {
  loading: boolean;
  email: string;
  token?: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    loading: false,
    email: 'niro@gmail.com',
  },
})
@Injectable({ providedIn: 'root' })
export class AppState {
  @Selector() static loading(state: AppStateModel) {
    return state.loading;
  }

  @Selector() static email(state: AppStateModel) {
    return state.email;
  }

  @Action(ShowLoading)
  showLoading(
    { patchState }: StateContext<AppStateModel>,
    { loading }: ShowLoading
  ) {
    return patchState({ loading });
  }

  @Action(UpdateEmail)
  updateEmail(
    { patchState }: StateContext<AppStateModel>,
    { email }: UpdateEmail
  ) {
    return patchState({ email });
  }

  // @Action(ShowLoading)
  // showLoading(
  //     ctx: StateContext<AppStateModel>,
  //     action: ShowLoading){
  //         ctx.patchState({
  //             loading: action.loading
  //         });
  //     }
}

interface Person {
  name: string;
}

type ImmutablePerson = Readonly<Person>;

// ##########

interface UiState {
  isLoading: boolean;
  hasError: boolean;
  isDarkMode: boolean;
}

type ImmutableState<Type> = Readonly<Type>;

let uiState: ImmutableState<UiState> = {
  hasError: false,
  isDarkMode: true,
  isLoading: true,
};

uiState = {
  ...uiState,
  isDarkMode: true,
};

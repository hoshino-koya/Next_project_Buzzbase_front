interface SignUpData {
  email: string;
  password: string;
  passwordConfirmation: string;
  confirm_success_url: string | undefined;
}

interface SignInData {
  email: string;
  password: string;
}

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  isInvalid: boolean;
  color?:
    | "danger"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  errorMessage?: string;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
}

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  label?: string;
  placeholder: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  isInvalid: boolean;
  color?:
    | "danger"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  errorMessage?: string;
  togglePasswordVisibility: () => void;
  isPasswordVisible: boolean;
  type: string;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
}

interface PasswordConfirmationInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  label?: string;
  placeholder: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  toggleConfirmVisibility: () => void;
  isConfirmVisible: boolean;
  type: string;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
}

interface ErrorMessagesProps {
  errors: string[];
}

interface SendButtonProps {
  className: string;
  type?: "submit" | "button" | "reset" | undefined;
  text: string;
  disabled: boolean;
}

interface ToastSuccessProps {
  text: string;
}

interface UserNameInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  isInvalid: boolean;
  color?:
    | "danger"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  errorMessage?: string;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
  isRequired: boolean;
}

interface UserIdInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  labelPlacement?: "outside" | "outside-left" | "inside";
  isInvalid: boolean;
  color?:
    | "danger"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  errorMessage?: string;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
  isRequired: boolean;
}

interface updateUser {
  name: string;
  user_id: string;
}

interface ResultsSelectBoxProps {
  radius?: "none" | "sm" | "md" | "lg" | "full" | undefined;
  className?: string;
  data: { label: string }[];
  defaultSelectedKeys: string[];
  color?:
    | "danger"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  ariaLabel: string;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
  labelPlacement?: "outside" | "outside-left" | "inside";
  size?: "sm" | "md" | "lg" | undefined;
}

interface HeaderSaveProps {
  onProfileUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
interface HeaderMatchResultsProps {
  onMatchResultNext: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

interface HeaderNextProps {
  onMatchResultSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface HeaderSummaryResultProps {
  onSummaryResult: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

interface updateUserPositions {
  userId: number;
  positionIds: number[];
}

interface getUserPositions {
  userId: string;
}

interface teamData {
  team: {
    name: string;
    category_id: number | undefined;
    prefecture_id: number | undefined;
  };
}

interface PlusButtonProps {
  className: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick: any;
}

interface AwardData {
  award: {
    title: string;
    userId: string;
  };
}

interface UserAwards {
  id: number;
  title: string;
}

interface TournamentData {
  id: number;
  name: string;
}

interface GameResultData {
  game_result: {
    user_id: number;
    match_result_id: number | null;
    batting_average_id: number | null;
    pitching_result_id: number | null;
  };
}

interface MatchResultsData {
  match_result: {
    game_result_id: number | null;
    user_id: number;
    date_and_time: string;
    match_type: string;
    my_team_id: number;
    opponent_team_id: number;
    my_team_score: number;
    opponent_team_score: number;
    batting_order: string;
    defensive_position: string;
    tournament_id: number | null;
    memo: string | null;
  };
}

interface BattingAverageData {
  batting_average: {
    runs_batted_in: number;
    run: number;
    error: number;
    stealing_base: number;
    caught_stealing: number;
  };
}

interface PlateAppearance {
  plate_appearance: {
    game_result_id: number;
    user_id: number;
    batter_box_number: number | null;
    batting_result: string | null;
  };
}

interface PitchingResultData {
  pitching_result: {
    game_result_id: number | null;
    user_id: number | null;
    win: number;
    loss: number;
    hold: number;
    saves: number;
    innings_pitched: number;
    number_of_pitches: number;
    got_to_the_distance: boolean;
    run_allowed: number;
    earned_run: number;
    hits_allowed: number;
    home_runs_hit: number;
    strikeouts: number;
    base_on_balls: number;
    hit_by_pitch: number;
  };
}

interface MatchResult {
  tournament_id: number | null;
  my_team_id: number;
  opponent_team_id: number;
  defensive_position: string;
}
